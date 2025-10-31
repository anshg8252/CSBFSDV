import React from 'react'
import Profile from './Profile'
import './gallery.css'

function Gallery() {
  const student=
  [{
    pic:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    myname:"Rahul",
    mybranch:"CS",
    mysection:"b",
    mycollege:"ABES Engineering College"
  },
  {
    pic:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    myname:"Rahul",
    mybranch:"CS",
    mysection:"b",
    mycollege:"ABES Engineering College"
  },
  {
    pic:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    myname:"Rahul",
    mybranch:"CS",
    mysection:"b",
    mycollege:"ABES Engineering College"
  }
]

  return (
    <div>
      {/* <div><Profile name="Ankit Yadav" branch="CS" section="b" college="ABES Engineering College"/></div>
      <div><Profile name="Ansh" branch="CS" section="b" college="ABES Engineering College"/></div>
      <div><Profile name="Ansh" branch="CS" section="b" college="ABES Engineering College"/></div> */}
      {/* <div><Profile/></div> */}

      {/* <Profile data={student}/>       */}

      {
        student.map((item,index)=>{
          return <Profile key={index} data={item}/>
        })
      }
    </div>
  )
}

export default Gallery