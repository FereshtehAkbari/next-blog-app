import Avatar from "@/ui/Avatar";

function Author({ name, avatarUrl }) {
  return (
    <div>
      <div className="flex items-center gap-x-1">
        <Avatar src={avatarUrl} />
        <span className="text-sm  text-[var(--color-secondary-500)]">
          {name}
        </span>
      </div>
    </div>
  );
}

export default Author;
