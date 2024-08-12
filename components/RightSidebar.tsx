import React from 'react'

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    // Hides right side bar when on smaller devices but shows on larger devices
    <aside className="right-sidebar">
        <section className="flex flex-col pb-8">
            <div className="profile-banner"/>
        </section>
    </aside>
  )
}

export default RightSidebar