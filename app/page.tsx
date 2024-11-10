import { Button } from "@/components/ui/button";
import { getCurrent } from "@/features/auth/actions";
import { UserButton } from "@/features/auth/components/user-button";
import { redirect } from "next/navigation";
 

export default async function Home() {
 const user = await getCurrent();
 if(!user){
  redirect("/sign-in")
 }
  return (
  <div className="p-5">
    <UserButton/> 
  </div>
  );
}
