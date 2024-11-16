import Breadcrumb from "@/components/note/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { notes, getPageById } from "@/lib/note-manager";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const page = getPageById(notes, id);

  if (!page) {
    return <></>;
  }

  return (
    <div className="flex flex-1 flex-col items-start gap-5 p-10">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <Breadcrumb path={page.path} />
      </div>
      <div className="w-full rounded-xl border border-slate-500 bg-gray-950">
        <h1 className="p-5 text-2xl font-bold">{page.name}</h1>
        <Separator />
        <p className="p-5">{page.content}</p>
      </div>
    </div>
  );
}