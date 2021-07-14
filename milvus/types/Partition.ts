interface PartitionParent {
  collection_name: string;
  partition_name: string;
}
export interface CreatePartitionReq extends PartitionParent {}

export interface HasPartitionReq extends PartitionParent {}

export interface DropPartitionReq extends PartitionParent {}

export interface GetPartitionStatisticsReq extends PartitionParent {}

export interface ShowPartitionsReq {
  collection_name: string;
}

export interface LoadPartitionsReq {
  collection_name: string;
  partition_names: string[];
}

export interface ReleasePartitionsReq {
  collection_name: string;
  partition_names: string[];
}
