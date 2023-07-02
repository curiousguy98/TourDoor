
import React,{useState,useEffect} from "react";
import BigNavbar from "./BigNav"
import { Menu, MenuList } from "@fluentui/react-components";

export default function Navbar() {
    const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true)
  }, [])


    return(
      <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900">
        <nav className="flex items-center container mx-auto h-full justify-between">

          <div className="header">
            <Menu open={open}>

              <MenuList className="mt-2 relative transition duration-700" style={{border: 'none'}}>
                  <BigNavbar  />
              </MenuList>

            </Menu>
          </div>
        </nav>
      </div>
    )
}
