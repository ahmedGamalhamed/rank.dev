import React from 'react'
import { CardWithAvatar } from '../../../components/profile/avatarcard'
import { CardWithAbout } from '../../../components/profile/aboutcard'
import { CardWithProgressbar } from '@/components/profile/progresscard'
import { CardWithTechnologies } from '@/components/profile/technologiescard'
import { CardWithSocials } from '@/components/profile/socialscard'
import { CardWithFollowers } from '@/components/profile/followers'
import { CardWithFollowing } from '@/components/profile/following'
export default function Profile() {
  return (
   <>
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-5 justify-center">
        <CardWithAvatar />
        <CardWithAbout />        
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-5 justify-center">
        <CardWithTechnologies/>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-5 justify-center">
        <CardWithProgressbar/>
        <CardWithSocials/>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-5 justify-center">
        <CardWithFollowers/>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8  flex flex-col sm:flex-row gap-5 justify-center">
        <CardWithFollowing/>
      </div>
      

   </>
  )
}
