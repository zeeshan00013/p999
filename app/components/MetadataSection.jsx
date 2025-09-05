import MetadataCard from "./MetadataCard";

const MetadataSection = () => {
  const metadata = [
    { icon: "id-card", label: "Name", value: "lucky 101" },
    { icon: "code", label: "Version", value: "V1.2" },
    { icon: "expand", label: "Size", value: "56 MB" },
    { icon: "folder", label: "Category", value: "Casino/Cards" },
    { icon: "user-tie", label: "Developer", value: "luckygame.com.pk" },
  ];

  return (
    <div className=" ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {metadata.map((item, index) => (
          <MetadataCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MetadataSection;
