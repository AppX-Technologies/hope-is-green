import React from 'react'
import { MdOutlinePendingActions } from 'react-icons/md'
import Tabs from '../../common/Tabs'
import { FaFileAlt, FaUsers } from 'react-icons/fa';

const tabs = [
    { title: "Documents", icon: <FaFileAlt />, content: "Documents" },
    { title: "Board Members", icon: <FaUsers />, content: "Board Members" },
  ];

const ClubPending = () => {
  return (
    <div>  <div className="border rounded-md flex gap-4 items-center p-8 bg-yellow-50 shadow-md">
    <MdOutlinePendingActions  className="text-secondary" size={70} />
    <div className="">
      <h6 className="text-4xl leading-9 font-medium text-">
        Hold on
      </h6>
      <h6 className="text-xl">
       Your club is being verified!{" "}
        <span className="font-light">This may take few days</span>
      </h6>
    </div>
  </div>
  <Tabs className='mt-4'  tabs={tabs} />

  </div>
  )
}

export default ClubPending