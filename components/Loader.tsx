import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logo" fill src="/lab.png" />
      </div>
      <p className="text-sm text-muted-foreground">
        Survey Science is thinking...
      </p>
    </div>
  );
};
