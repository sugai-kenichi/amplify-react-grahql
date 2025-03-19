import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
// import { API } from "aws-amplify";

import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { getTestTable, listNotes, listTestTables } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
  createTestTable as createTestTableMution,
  deleteTestTable as deleteTestTableMutation,
} from "./graphql/mutations";

import { Amplify } from "aws-amplify";
import { getUrl, uploadData, remove } from 'aws-amplify/storage';
import { generateClient } from "aws-amplify/api";
import awsconfig from "./amplifyconfiguration.json";

Amplify.configure(awsconfig);

const client = generateClient();

const App = ({ signOut }) => {
  const { user, route } = useAuthenticator((context) => [context.user]);
  const [notes, setNotes] = useState([]);
  const [testTables, setTestTables] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await client.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    const apiDateTest = await client.graphql({ query: listTestTables });
    const grahpqlTestTableData = apiDateTest.data.listTestTables.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await getUrl({
            path: note.image,
            options: {
              validateObjectExistence : false,
              expiresIn: 20,
            },
          } );
          note.imagepath = url.url.toString();
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
    setTestTables(grahpqlTestTableData);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name ,
    };
    if (!!data.image) {
      const operation = uploadData({path: data.image , data: image});
      await operation.result;
    }
    await client.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function createTestTable(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      firstName: form.get("fristname"),
    };
    await client.graphql({
      query: createTestTableMution,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id, name, image }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await remove({path: image});
    await client.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  
  async function deleteTestTable({ id }) {
    const newTestTables = testTables.filter((testTable) => testTable.id !== id);
    setTestTables(newTestTables);
    await client.graphql({
      query: deleteTestTableMutation ,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
      <Text>user.username====={user.username}</Text>
      <Text>user.useId====={user.userId}</Text>
      
      {/* <Text>route ====={route.}</Text> */}
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <View
            name="image"
            as="input"
            type="file"
            style={{ alignSelf: "end" }}
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <View as="form" margin="3rem 0" onSubmit={createTestTable}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="fristname"
            placeholder="First Name"
            label="First Name"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create TestTable
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            {note.image && (
              <Image
                src={note.imagepath}
                alt={`${note.image}`}
                style={{ width: 400 }}
              />
            )}
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
        {testTables.map((testTable) => (
          <Flex>
            <Text as="span">{testTable.id}</Text>
            <Text as="span">{testTable.firstName}</Text>
            <Button variation="link" onClick={() => deleteTestTable(testTable)}>
              Delete testTable
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);