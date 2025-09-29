import { MenuIcon } from "lucide-react"
import NewDocumentButton from "./NewDocumentButton"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Sidebar() {
  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
        <Sheet>
        <SheetTrigger><MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={20}/></SheetTrigger>
        <SheetContent side="left">
            <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <div>
                {/* option */}
            </div>
            </SheetHeader>
        </SheetContent>
        </Sheet>
        <div className= "hidden md:inline">         
        <NewDocumentButton />
        </div>
    </div>
  )
}

export default Sidebar