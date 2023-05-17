import { DataCardSkeletonStyle } from "./style/DataCard.style";

const DataCardSkeleton = () => {
  return (
    <DataCardSkeletonStyle>
      <h2 className="skeleton-box"></h2>
      <span className="skeleton-box"></span>
      <p className="skeleton-box"></p>
      <p className="skeleton-box"></p>
      <p className="skeleton-box"></p>
    </DataCardSkeletonStyle>
  );
};

export default DataCardSkeleton;
