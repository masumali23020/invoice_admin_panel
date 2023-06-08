import React from 'react';
import { AiOutlineAreaChart, AiOutlineBarChart, AiOutlineCalendar, AiOutlinePlus, AiOutlineShoppingCart, AiOutlineStock } from 'react-icons/ai';
import { BiColorFill } from 'react-icons/bi';
import { BsBarChart, BsBoxSeam, BsKanban } from 'react-icons/bs';
import { FiBarChart, FiEdit, FiPieChart, FiShoppingBag } from 'react-icons/fi';
import { GiLouvrePyramid } from 'react-icons/gi';
import { HiOutlineRefresh } from 'react-icons/hi';
import { IoMdContacts } from 'react-icons/io';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';




export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Catalog',
    links: [
      {
        name: 'Products_List',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'Product',
        icon: <AiOutlinePlus />,
      },
      {
        name: 'Catagoris_List',
        icon: <IoMdContacts />,
      },
      {
        name: 'Catagoris',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
      {
        name: 'editor',
        icon: <FiEdit />,
      },
      {
        name: 'color-picker',
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },

      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
      {
        name: 'financial',
        icon: <RiStockLine />,
      },
      {
        name: 'color-mapping',
        icon: <BsBarChart />,
      },
      {
        name: 'pyramid',
        icon: <GiLouvrePyramid />,
      },
      {
        name: 'stacked',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];




export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
    // bgColor: 'bg-amber-200'
    
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
    // bgColor: 'bg-lime-300'
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
    // bgColor: 'bg-amber-200'
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
    // bgColor: 'bg-stone-600'
  },
];


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];
