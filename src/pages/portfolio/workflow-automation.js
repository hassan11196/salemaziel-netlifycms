import React from 'react';

import Layout from '../../components/Layout';
import PageFooter from '../../components/PageFooter';
import SideBar from '../../components/Sidebar/index'
//import Shoptop from '../assets/images/sdcoast.jpg'

import AutomationPage from '../../components/PageComponents/Portfolio/Automation/Page'


const sections = [
    { id: 'shoptop', name: 'Featured', icon: 'fa-home' },
    { id: 'mygallery', name: 'Gallery', icon: 'fa-th' },
    { id: 'about', name: 'About Me', icon: 'fa-user' },
    { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
  ];

const Automation = () => (
    <Layout>
        <SideBar /*sections={sections}*/ />
        

            <AutomationPage />


    </Layout>
)

export default Automation