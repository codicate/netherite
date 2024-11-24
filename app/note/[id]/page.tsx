import Breadcrumb from "@/components/note/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { notes, getPageById } from "@/lib/note-manager";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { SearchDialog } from "@/components/search-dialog/search-dialog";

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
    <Dialog>
      <div className="flex flex-1 flex-col items-start gap-5 p-10">
        <div className="flex items-center gap-3">
          <SidebarTrigger />
          <Breadcrumb path={page.path} />
        </div>
        <div className="w-full rounded-xl border border-border bg-card">
          <h1 className="p-5 text-2xl font-bold">{page.name}</h1>
          <Separator />
          <p className="p-5">{page.content}</p>
        </div>
        <DialogTrigger asChild>
          <Button>Open Semantic Search</Button>
        </DialogTrigger>
        <SearchDialog />
      </div>
    </Dialog>
  );
}
