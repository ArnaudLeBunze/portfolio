import { redirect } from "next/navigation";

import { createClient } from "@/app/lib/supabase/server";
import { InfoIcon } from "lucide-react";
import { FetchDataSteps } from "@/app/components/tutorial/fetch-data-steps";
import { Suspense } from "react";

async function UserDetails() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  if (data.claims.email != "arnaud.lebunze@gmail.com") {
    redirect("/")
  }

  return JSON.stringify(data.claims, null, 2);
}

async function Messages() {
  const supabase = await createClient()
  const { data: messages } = await supabase.from('messages').select()
  return <table className="w-full">
    <tbody className="w-full">
    <tr>
      <th className="m-2 p-2">Id</th>
      <th className="m-2 p-2">Date de création</th>
      <th className="m-2 p-2">Email utilisateur</th>
      <th className="m-2 p-2">Message</th>
    </tr>
    {
      messages?.map(msg => {
        return <tr key={msg.id}>
          <td className="m-2 p-2">
            {msg.id}
          </td>
          <td className="m-2 p-2">
            {new Date(msg.created_at).toLocaleDateString()}
          </td>
          <td className="m-2 p-2">
            {msg.user_email}
          </td>
          <td className="m-2 p-2">
            {msg.content}
          </td>
        </tr>
      }) 
    }
    </tbody>
    </table>
  return JSON.stringify(messages, null, 2)
}

export default function ProtectedPage() {
  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <Suspense>
        <div className="hidden">
          <UserDetails />
        </div>
        <Messages />
      </Suspense>
    </div>
  );
}
