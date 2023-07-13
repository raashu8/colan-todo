import React from 'react'
import UserLayout from '../../../components/layout';

const Reminder = () => {
  return (
    <div>
      reminder page
    </div>
  )
}
Reminder.getLayout = (page) => <UserLayout>{page}</UserLayout>;

export default Reminder
