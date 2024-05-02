
import React from 'react'
import { CardWithAvatar } from '../../../../components/profile/avatarcard'
import { CardWithAbout } from '../../../../components/profile/aboutcard'
import { CardWithProgressbar } from '@/components/profile/progresscard'
import { CardWithTechnologies } from '@/components/profile/technologiescard'
import { CardWithSocials } from '@/components/profile/socialscard'
import { CardWithFollowers } from '@/components/profile/followers'
import { CardWithFollowing } from '@/components/profile/following'
import { UserModel } from '@/app/(db)/Schema'
import ErrorMsg from '@/components/ErrorMsg'
import { auth } from '@clerk/nextjs/server'

export default async function Profile({params}:{params:{id:string}}) {
  const userObj = await UserModel.findOne({ _id: params.id });
  const user = userObj ? JSON.parse(JSON.stringify(userObj.toObject())) : null
  if(!user){
    return <div className='grid place-content-center h-[80vh]'>
      <ErrorMsg msg="This User Doesn't Exist"/>
    </div>
  }
  const authUser = auth();

  const ownProfile = authUser.userId == user?.authId

  return (
   <>
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-5 justify-center">
        <CardWithAvatar ownProfile={ownProfile} dbUser={user} />
        <CardWithAbout ownProfile={ownProfile} dbUser={user}/>        
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-5 justify-center">
        <CardWithTechnologies ownProfile={ownProfile} dbUser={user}/>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-5 justify-center">
        <CardWithProgressbar/>
        <CardWithSocials ownProfile={ownProfile} dbUser={user}/>
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
