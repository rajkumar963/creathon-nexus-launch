import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
        <footer className="w-full  text-gray-400 py-4">
            <div className="container mx-auto text-center">
                {/* <p>&copy; 2023 Creathon. All rights reserved.</p> */}
                <div className="flex justify-center mt-2">
                    <a href="mailto:business@cadrage.co" className="flex items-center text-xl">
                        <MdOutlineEmail className="mr-2 " />
                        business@cadrage.co
                    </a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer