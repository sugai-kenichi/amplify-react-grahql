import { Home as HomeIcon, Info as InfoIcon, EditNote as EditDocumentIcon, Group as GroupIcon, Gavel as GavelIcon } from '@mui/icons-material';
import React from 'react';

const SidebarDataTopMenu = [
  { title: "ホーム", icon: <HomeIcon />, link: "/" , text: 'ホーム'},
  { title: "インフォメーション", icon: <InfoIcon />, link: "/Infomation", text: '各種周知事項はこちら' },
  { title: "各種申請", icon: <EditDocumentIcon />, link: "/login", text: '各種申請はこちら'  },
  { title: "社員情報", icon: <GroupIcon />, link: "/login", text: '社員情報はこちら'  },
  { title: "社内規定", icon: <GavelIcon />, link: "/login", text: '社内規定はこちら'  }
];

export default SidebarDataTopMenu;
