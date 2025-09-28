"use client";
import { useUser } from "@clerk/nextjs"

function header() {
    const {user} =useUser();

  return <div>
    {
        user && (
            <h1>
                {user?.firstName}
                {`'s`}Space
            </h1>
        )
    }
    {/* bread crumbs */}
  </div>
}

export default header