import React from 'react'
import { LandingHeader, LandingIntro, LandingProjects, LandingSkills, LandingWork } from '../components/Landing';

export default function Landing() {
  return (
    <div>
      <LandingHeader/>
      <LandingIntro/>
      <LandingSkills/>
    </div>
  )
}
