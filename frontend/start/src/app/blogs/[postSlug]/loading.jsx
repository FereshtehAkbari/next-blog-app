import Spinner from "@/ui/Spinner";

function loading() {
  return (
    <div className="grid items-center justify-center gap-x-4">
      <span className="text-lg text-[var(--color-secondary-900)]">
        درحال بارگذاری پست
      </span>
      <Spinner />
    </div>
  );
}

export default loading;
