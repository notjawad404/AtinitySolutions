import React from 'react';
import Div2Props from './Div2Props';
import android from '../images/home/android.jpg'
import web from '../images/home/web.jpg'
import uiux from '../images/home/uiux.jpg'
import solution from '../images/home/solution.jpg'
import crossplatform from '../images/home/crossplatform.jpg'
import cloud from '../images/home/cloud.jpg'

const rows = [
  {
    columns: [
      {
        image: android,
        title: 'App Development',
        description: 'Comprehensive app development services to streamline information access and improve productivity through innovative and synchronized solutions'
      },
      {
        image: web,
        title: 'Web Development',
        description: 'Custom, efficient, and user-friendly solutions for businesses to enhance their online presence and reach their goals seamlessly'
      },
      {
        image: uiux,
        title: 'UI/UX',
        description: 'Focused on creating user-centered digital experiences to enhance overall usability and engagement with clients\' products'
      }
    ]
  },
  {
    columns: [
      {
        image: crossplatform,
        title: 'Cross Platform Development',
        description: 'Seamless cross-platform development services to help businesses effectively reach their audiences on multiple devices and platforms'
      },
      {
        image: solution,
        title: 'Solution Designing',
        description: 'Providing clients with customized and innovative solutions to meet their specific business needs and challenges'
      },
      {
        image: cloud,
        title: 'Cloud Computing',
        description: 'Delivering scalable, secure, and cost-effective cloud-based solutions to help clients optimize their IT infrastructure and operations'
      }
    ]
  }
];

function Div2() {
  return (
    <div>
      <Div2Props rows={rows} />
    </div>
  );
}

export default Div2;
