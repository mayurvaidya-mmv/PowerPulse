import {
  _InstanceType,
  AddressTransferStatus,
  AllocationType,
  ApplianceModeSupportValue,
  AsnAssociationState,
  AssociationStatusCode,
  AttachmentStatus,
  AutoPlacement,
  BatchState,
  BlockPublicAccessMode,
  BundleTaskState,
  ByoipCidrState,
  CancelBatchErrorCode,
  CancelSpotInstanceRequestState,
  CapacityReservationDeliveryPreference,
  CapacityReservationFleetState,
  CapacityReservationInstancePlatform,
  CapacityReservationState,
  CapacityReservationTenancy,
  CapacityReservationType,
  CarrierGatewayState,
  ClientVpnAuthenticationType,
  ClientVpnAuthorizationRuleStatusCode,
  ClientVpnEndpointStatusCode,
  ClientVpnRouteStatusCode,
  CurrencyCodeValues,
  DeviceTrustProviderType,
  DnsSupportValue,
  DomainType,
  DynamicRoutingValue,
  EndDateType,
  EndpointIpAddressType,
  FleetCapacityReservationTenancy,
  FleetInstanceMatchCriteria,
  GatewayType,
  HostMaintenance,
  HostnameType,
  HostRecovery,
  IamInstanceProfileAssociationState,
  InstanceEventWindowState,
  InstanceHealthStatus,
  InstanceMatchCriteria,
  InterfaceProtocolType,
  InterruptibleCapacityReservationAllocationStatus,
  InterruptionType,
  IpamAssociatedResourceDiscoveryStatus,
  IpamPoolAllocationResourceType,
  IpamResourceDiscoveryAssociationState,
  IpSource,
  Ipv6AddressAttribute,
  Ipv6SupportValue,
  ListingState,
  ListingStatus,
  MacModificationTaskState,
  MacModificationTaskType,
  MacSystemIntegrityProtectionSettingStatus,
  NatGatewayAddressStatus,
  OutputFormat,
  PrincipalType,
  Protocol,
  ResourceType,
  RouteServerAssociationState,
  RouteTableAssociationStateCode,
  Schedule,
  SecurityGroupReferencingSupportValue,
  SecurityGroupVpcAssociationState,
  SelfServicePortal,
  ServiceManaged,
  SSEType,
  SubnetCidrBlockStateCode,
  SubnetState,
  Tenancy,
  TrafficIpAddressType,
  TransitGatewayAssociationState,
  TransitGatewayAttachmentResourceType,
  TransitGatewayAttachmentState,
  TransitGatewayMulitcastDomainAssociationState,
  TransportProtocol,
  TrustProviderType,
  UserTrustProviderType,
  VolumeAttachmentState,
  VolumeState,
  VolumeType,
  VpcCidrBlockStateCode,
  VpcEncryptionControlExclusionState,
  VpcEncryptionControlMode,
  VpcEncryptionControlState,
  VpcPeeringConnectionStateReasonCode,
  VpcState,
  VpnTunnelProvisioningStatus,
  WeekDay,
} from "./enums";
export interface AcceleratorCount {
  Min?: number | undefined;
  Max?: number | undefined;
}
export interface AcceleratorCountRequest {
  Min?: number | undefined;
  Max?: number | undefined;
}
export interface AcceleratorTotalMemoryMiB {
  Min?: number | undefined;
  Max?: number | undefined;
}
export interface AcceleratorTotalMemoryMiBRequest {
  Min?: number | undefined;
  Max?: number | undefined;
}
export interface Tag {
  Key?: string | undefined;
  Value?: string | undefined;
}
export interface TagSpecification {
  ResourceType?: ResourceType | undefined;
  Tags?: Tag[] | undefined;
}
export interface AcceptAddressTransferRequest {
  Address: string | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  DryRun?: boolean | undefined;
}
export interface AddressTransfer {
  PublicIp?: string | undefined;
  AllocationId?: string | undefined;
  TransferAccountId?: string | undefined;
  TransferOfferExpirationTimestamp?: Date | undefined;
  TransferOfferAcceptedTimestamp?: Date | undefined;
  AddressTransferStatus?: AddressTransferStatus | undefined;
}
export interface AcceptAddressTransferResult {
  AddressTransfer?: AddressTransfer | undefined;
}
export interface AcceptCapacityReservationBillingOwnershipRequest {
  DryRun?: boolean | undefined;
  CapacityReservationId: string | undefined;
}
export interface AcceptCapacityReservationBillingOwnershipResult {
  Return?: boolean | undefined;
}
export interface TargetConfigurationRequest {
  InstanceCount?: number | undefined;
  OfferingId: string | undefined;
}
export interface AcceptReservedInstancesExchangeQuoteRequest {
  DryRun?: boolean | undefined;
  ReservedInstanceIds: string[] | undefined;
  TargetConfigurations?: TargetConfigurationRequest[] | undefined;
}
export interface AcceptReservedInstancesExchangeQuoteResult {
  ExchangeId?: string | undefined;
}
export interface AcceptTransitGatewayMulticastDomainAssociationsRequest {
  TransitGatewayMulticastDomainId?: string | undefined;
  TransitGatewayAttachmentId?: string | undefined;
  SubnetIds?: string[] | undefined;
  DryRun?: boolean | undefined;
}
export interface SubnetAssociation {
  SubnetId?: string | undefined;
  State?: TransitGatewayMulitcastDomainAssociationState | undefined;
}
export interface TransitGatewayMulticastDomainAssociations {
  TransitGatewayMulticastDomainId?: string | undefined;
  TransitGatewayAttachmentId?: string | undefined;
  ResourceId?: string | undefined;
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;
  ResourceOwnerId?: string | undefined;
  Subnets?: SubnetAssociation[] | undefined;
}
export interface AcceptTransitGatewayMulticastDomainAssociationsResult {
  Associations?: TransitGatewayMulticastDomainAssociations | undefined;
}
export interface AcceptTransitGatewayPeeringAttachmentRequest {
  TransitGatewayAttachmentId: string | undefined;
  DryRun?: boolean | undefined;
}
export interface PeeringTgwInfo {
  TransitGatewayId?: string | undefined;
  CoreNetworkId?: string | undefined;
  OwnerId?: string | undefined;
  Region?: string | undefined;
}
export interface TransitGatewayPeeringAttachmentOptions {
  DynamicRouting?: DynamicRoutingValue | undefined;
}
export interface PeeringAttachmentStatus {
  Code?: string | undefined;
  Message?: string | undefined;
}
export interface TransitGatewayPeeringAttachment {
  TransitGatewayAttachmentId?: string | undefined;
  AccepterTransitGatewayAttachmentId?: string | undefined;
  RequesterTgwInfo?: PeeringTgwInfo | undefined;
  AccepterTgwInfo?: PeeringTgwInfo | undefined;
  Options?: TransitGatewayPeeringAttachmentOptions | undefined;
  Status?: PeeringAttachmentStatus | undefined;
  State?: TransitGatewayAttachmentState | undefined;
  CreationTime?: Date | undefined;
  Tags?: Tag[] | undefined;
}
export interface AcceptTransitGatewayPeeringAttachmentResult {
  TransitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment | undefined;
}
export interface AcceptTransitGatewayVpcAttachmentRequest {
  TransitGatewayAttachmentId: string | undefined;
  DryRun?: boolean | undefined;
}
export interface TransitGatewayVpcAttachmentOptions {
  DnsSupport?: DnsSupportValue | undefined;
  SecurityGroupReferencingSupport?:
    | SecurityGroupReferencingSupportValue
    | undefined;
  Ipv6Support?: Ipv6SupportValue | undefined;
  ApplianceModeSupport?: ApplianceModeSupportValue | undefined;
}
export interface TransitGatewayVpcAttachment {
  TransitGatewayAttachmentId?: string | undefined;
  TransitGatewayId?: string | undefined;
  VpcId?: string | undefined;
  VpcOwnerId?: string | undefined;
  State?: TransitGatewayAttachmentState | undefined;
  SubnetIds?: string[] | undefined;
  CreationTime?: Date | undefined;
  Options?: TransitGatewayVpcAttachmentOptions | undefined;
  Tags?: Tag[] | undefined;
}
export interface AcceptTransitGatewayVpcAttachmentResult {
  TransitGatewayVpcAttachment?: TransitGatewayVpcAttachment | undefined;
}
export interface AcceptVpcEndpointConnectionsRequest {
  DryRun?: boolean | undefined;
  ServiceId: string | undefined;
  VpcEndpointIds: string[] | undefined;
}
export interface UnsuccessfulItemError {
  Code?: string | undefined;
  Message?: string | undefined;
}
export interface UnsuccessfulItem {
  Error?: UnsuccessfulItemError | undefined;
  ResourceId?: string | undefined;
}
export interface AcceptVpcEndpointConnectionsResult {
  Unsuccessful?: UnsuccessfulItem[] | undefined;
}
export interface AcceptVpcPeeringConnectionRequest {
  DryRun?: boolean | undefined;
  VpcPeeringConnectionId: string | undefined;
}
export interface CidrBlock {
  CidrBlock?: string | undefined;
}
export interface Ipv6CidrBlock {
  Ipv6CidrBlock?: string | undefined;
}
export interface VpcPeeringConnectionOptionsDescription {
  AllowDnsResolutionFromRemoteVpc?: boolean | undefined;
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean | undefined;
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean | undefined;
}
export interface VpcPeeringConnectionVpcInfo {
  CidrBlock?: string | undefined;
  Ipv6CidrBlockSet?: Ipv6CidrBlock[] | undefined;
  CidrBlockSet?: CidrBlock[] | undefined;
  OwnerId?: string | undefined;
  PeeringOptions?: VpcPeeringConnectionOptionsDescription | undefined;
  VpcId?: string | undefined;
  Region?: string | undefined;
}
export interface VpcPeeringConnectionStateReason {
  Code?: VpcPeeringConnectionStateReasonCode | undefined;
  Message?: string | undefined;
}
export interface VpcPeeringConnection {
  AccepterVpcInfo?: VpcPeeringConnectionVpcInfo | undefined;
  ExpirationTime?: Date | undefined;
  RequesterVpcInfo?: VpcPeeringConnectionVpcInfo | undefined;
  Status?: VpcPeeringConnectionStateReason | undefined;
  Tags?: Tag[] | undefined;
  VpcPeeringConnectionId?: string | undefined;
}
export interface AcceptVpcPeeringConnectionResult {
  VpcPeeringConnection?: VpcPeeringConnection | undefined;
}
export interface PortRange {
  From?: number | undefined;
  To?: number | undefined;
}
export interface AnalysisAclRule {
  Cidr?: string | undefined;
  Egress?: boolean | undefined;
  PortRange?: PortRange | undefined;
  Protocol?: string | undefined;
  RuleAction?: string | undefined;
  RuleNumber?: number | undefined;
}
export interface AnalysisComponent {
  Id?: string | undefined;
  Arn?: string | undefined;
  Name?: string | undefined;
}
export interface RuleOption {
  Keyword?: string | undefined;
  Settings?: string[] | undefined;
}
export interface RuleGroupRuleOptionsPair {
  RuleGroupArn?: string | undefined;
  RuleOptions?: RuleOption[] | undefined;
}
export interface RuleGroupTypePair {
  RuleGroupArn?: string | undefined;
  RuleGroupType?: string | undefined;
}
export interface AdditionalDetail {
  AdditionalDetailType?: string | undefined;
  Component?: AnalysisComponent | undefined;
  VpcEndpointService?: AnalysisComponent | undefined;
  RuleOptions?: RuleOption[] | undefined;
  RuleGroupTypePairs?: RuleGroupTypePair[] | undefined;
  RuleGroupRuleOptionsPairs?: RuleGroupRuleOptionsPair[] | undefined;
  ServiceName?: string | undefined;
  LoadBalancers?: AnalysisComponent[] | undefined;
}
export interface AnalysisLoadBalancerListener {
  LoadBalancerPort?: number | undefined;
  InstancePort?: number | undefined;
}
export interface FirewallStatefulRule {
  RuleGroupArn?: string | undefined;
  Sources?: string[] | undefined;
  Destinations?: string[] | undefined;
  SourcePorts?: PortRange[] | undefined;
  DestinationPorts?: PortRange[] | undefined;
  Protocol?: string | undefined;
  RuleAction?: string | undefined;
  Direction?: string | undefined;
}
export interface FirewallStatelessRule {
  RuleGroupArn?: string | undefined;
  Sources?: string[] | undefined;
  Destinations?: string[] | undefined;
  SourcePorts?: PortRange[] | undefined;
  DestinationPorts?: PortRange[] | undefined;
  Protocols?: number[] | undefined;
  RuleAction?: string | undefined;
  Priority?: number | undefined;
}
export interface AnalysisLoadBalancerTarget {
  Address?: string | undefined;
  AvailabilityZone?: string | undefined;
  AvailabilityZoneId?: string | undefined;
  Instance?: AnalysisComponent | undefined;
  Port?: number | undefined;
}
export interface AnalysisRouteTableRoute {
  DestinationCidr?: string | undefined;
  DestinationPrefixListId?: string | undefined;
  EgressOnlyInternetGatewayId?: string | undefined;
  GatewayId?: string | undefined;
  InstanceId?: string | undefined;
  NatGatewayId?: string | undefined;
  NetworkInterfaceId?: string | undefined;
  Origin?: string | undefined;
  TransitGatewayId?: string | undefined;
  VpcPeeringConnectionId?: string | undefined;
  State?: string | undefined;
  CarrierGatewayId?: string | undefined;
  CoreNetworkArn?: string | undefined;
  LocalGatewayId?: string | undefined;
}
export interface AnalysisSecurityGroupRule {
  Cidr?: string | undefined;
  Direction?: string | undefined;
  SecurityGroupId?: string | undefined;
  PortRange?: PortRange | undefined;
  PrefixListId?: string | undefined;
  Protocol?: string | undefined;
}
export interface TransitGatewayRouteTableRoute {
  DestinationCidr?: string | undefined;
  State?: string | undefined;
  RouteOrigin?: string | undefined;
  PrefixListId?: string | undefined;
  AttachmentId?: string | undefined;
  ResourceId?: string | undefined;
  ResourceType?: string | undefined;
}
export interface Explanation {
  Acl?: AnalysisComponent | undefined;
  AclRule?: AnalysisAclRule | undefined;
  Address?: string | undefined;
  Addresses?: string[] | undefined;
  AttachedTo?: AnalysisComponent | undefined;
  AvailabilityZones?: string[] | undefined;
  AvailabilityZoneIds?: string[] | undefined;
  Cidrs?: string[] | undefined;
  Component?: AnalysisComponent | undefined;
  CustomerGateway?: AnalysisComponent | undefined;
  Destination?: AnalysisComponent | undefined;
  DestinationVpc?: AnalysisComponent | undefined;
  Direction?: string | undefined;
  ExplanationCode?: string | undefined;
  IngressRouteTable?: AnalysisComponent | undefined;
  InternetGateway?: AnalysisComponent | undefined;
  LoadBalancerArn?: string | undefined;
  ClassicLoadBalancerListener?: AnalysisLoadBalancerListener | undefined;
  LoadBalancerListenerPort?: number | undefined;
  LoadBalancerTarget?: AnalysisLoadBalancerTarget | undefined;
  LoadBalancerTargetGroup?: AnalysisComponent | undefined;
  LoadBalancerTargetGroups?: AnalysisComponent[] | undefined;
  LoadBalancerTargetPort?: number | undefined;
  ElasticLoadBalancerListener?: AnalysisComponent | undefined;
  MissingComponent?: string | undefined;
  NatGateway?: AnalysisComponent | undefined;
  NetworkInterface?: AnalysisComponent | undefined;
  PacketField?: string | undefined;
  VpcPeeringConnection?: AnalysisComponent | undefined;
  Port?: number | undefined;
  PortRanges?: PortRange[] | undefined;
  PrefixList?: AnalysisComponent | undefined;
  Protocols?: string[] | undefined;
  RouteTableRoute?: AnalysisRouteTableRoute | undefined;
  RouteTable?: AnalysisComponent | undefined;
  SecurityGroup?: AnalysisComponent | undefined;
  SecurityGroupRule?: AnalysisSecurityGroupRule | undefined;
  SecurityGroups?: AnalysisComponent[] | undefined;
  SourceVpc?: AnalysisComponent | undefined;
  State?: string | undefined;
  Subnet?: AnalysisComponent | undefined;
  SubnetRouteTable?: AnalysisComponent | undefined;
  Vpc?: AnalysisComponent | undefined;
  VpcEndpoint?: AnalysisComponent | undefined;
  VpnConnection?: AnalysisComponent | undefined;
  VpnGateway?: AnalysisComponent | undefined;
  TransitGateway?: AnalysisComponent | undefined;
  TransitGatewayRouteTable?: AnalysisComponent | undefined;
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute | undefined;
  TransitGatewayAttachment?: AnalysisComponent | undefined;
  ComponentAccount?: string | undefined;
  ComponentRegion?: string | undefined;
  FirewallStatelessRule?: FirewallStatelessRule | undefined;
  FirewallStatefulRule?: FirewallStatefulRule | undefined;
}
export interface AnalysisPacketHeader {
  DestinationAddresses?: string[] | undefined;
  DestinationPortRanges?: PortRange[] | undefined;
  Protocol?: string | undefined;
  SourceAddresses?: string[] | undefined;
  SourcePortRanges?: PortRange[] | undefined;
}
export interface PathComponent {
  SequenceNumber?: number | undefined;
  AclRule?: AnalysisAclRule | undefined;
  AttachedTo?: AnalysisComponent | undefined;
  Component?: AnalysisComponent | undefined;
  DestinationVpc?: AnalysisComponent | undefined;
  OutboundHeader?: AnalysisPacketHeader | undefined;
  InboundHeader?: AnalysisPacketHeader | undefined;
  RouteTableRoute?: AnalysisRouteTableRoute | undefined;
  SecurityGroupRule?: AnalysisSecurityGroupRule | undefined;
  SourceVpc?: AnalysisComponent | undefined;
  Subnet?: AnalysisComponent | undefined;
  Vpc?: AnalysisComponent | undefined;
  AdditionalDetails?: AdditionalDetail[] | undefined;
  TransitGateway?: AnalysisComponent | undefined;
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute | undefined;
  Explanations?: Explanation[] | undefined;
  ElasticLoadBalancerListener?: AnalysisComponent | undefined;
  FirewallStatelessRule?: FirewallStatelessRule | undefined;
  FirewallStatefulRule?: FirewallStatefulRule | undefined;
  ServiceName?: string | undefined;
}
export interface AccessScopeAnalysisFinding {
  NetworkInsightsAccessScopeAnalysisId?: string | undefined;
  NetworkInsightsAccessScopeId?: string | undefined;
  FindingId?: string | undefined;
  FindingComponents?: PathComponent[] | undefined;
}
export interface PacketHeaderStatement {
  SourceAddresses?: string[] | undefined;
  DestinationAddresses?: string[] | undefined;
  SourcePorts?: string[] | undefined;
  DestinationPorts?: string[] | undefined;
  SourcePrefixLists?: string[] | undefined;
  DestinationPrefixLists?: string[] | undefined;
  Protocols?: Protocol[] | undefined;
}
export interface ResourceStatement {
  Resources?: string[] | undefined;
  ResourceTypes?: string[] | undefined;
}
export interface PathStatement {
  PacketHeaderStatement?: PacketHeaderStatement | undefined;
  ResourceStatement?: ResourceStatement | undefined;
}
export interface ThroughResourcesStatement {
  ResourceStatement?: ResourceStatement | undefined;
}
export interface AccessScopePath {
  Source?: PathStatement | undefined;
  Destination?: PathStatement | undefined;
  ThroughResources?: ThroughResourcesStatement[] | undefined;
}
export interface PacketHeaderStatementRequest {
  SourceAddresses?: string[] | undefined;
  DestinationAddresses?: string[] | undefined;
  SourcePorts?: string[] | undefined;
  DestinationPorts?: string[] | undefined;
  SourcePrefixLists?: string[] | undefined;
  DestinationPrefixLists?: string[] | undefined;
  Protocols?: Protocol[] | undefined;
}
export interface ResourceStatementRequest {
  Resources?: string[] | undefined;
  ResourceTypes?: string[] | undefined;
}
export interface PathStatementRequest {
  PacketHeaderStatement?: PacketHeaderStatementRequest | undefined;
  ResourceStatement?: ResourceStatementRequest | undefined;
}
export interface ThroughResourcesStatementRequest {
  ResourceStatement?: ResourceStatementRequest | undefined;
}
export interface AccessScopePathRequest {
  Source?: PathStatementRequest | undefined;
  Destination?: PathStatementRequest | undefined;
  ThroughResources?: ThroughResourcesStatementRequest[] | undefined;
}
export interface AccountAttributeValue {
  AttributeValue?: string | undefined;
}
export interface AccountAttribute {
  AttributeName?: string | undefined;
  AttributeValues?: AccountAttributeValue[] | undefined;
}
export interface ActiveInstance {
  InstanceId?: string | undefined;
  InstanceType?: string | undefined;
  SpotInstanceRequestId?: string | undefined;
  InstanceHealth?: InstanceHealthStatus | undefined;
}
export interface ActiveVpnTunnelStatus {
  Phase1EncryptionAlgorithm?: string | undefined;
  Phase2EncryptionAlgorithm?: string | undefined;
  Phase1IntegrityAlgorithm?: string | undefined;
  Phase2IntegrityAlgorithm?: string | undefined;
  Phase1DHGroup?: number | undefined;
  Phase2DHGroup?: number | undefined;
  IkeVersion?: string | undefined;
  ProvisioningStatus?: VpnTunnelProvisioningStatus | undefined;
  ProvisioningStatusReason?: string | undefined;
}
export interface AddedPrincipal {
  PrincipalType?: PrincipalType | undefined;
  Principal?: string | undefined;
  ServicePermissionId?: string | undefined;
  ServiceId?: string | undefined;
}
export interface AddIpamOperatingRegion {
  RegionName?: string | undefined;
}
export interface AddIpamOrganizationalUnitExclusion {
  OrganizationsEntityPath?: string | undefined;
}
export interface AddPrefixListEntry {
  Cidr: string | undefined;
  Description?: string | undefined;
}
export interface Address {
  AllocationId?: string | undefined;
  AssociationId?: string | undefined;
  Domain?: DomainType | undefined;
  NetworkInterfaceId?: string | undefined;
  NetworkInterfaceOwnerId?: string | undefined;
  PrivateIpAddress?: string | undefined;
  Tags?: Tag[] | undefined;
  PublicIpv4Pool?: string | undefined;
  NetworkBorderGroup?: string | undefined;
  CustomerOwnedIp?: string | undefined;
  CustomerOwnedIpv4Pool?: string | undefined;
  CarrierIp?: string | undefined;
  SubnetId?: string | undefined;
  ServiceManaged?: ServiceManaged | undefined;
  InstanceId?: string | undefined;
  PublicIp?: string | undefined;
}
export interface PtrUpdateStatus {
  Value?: string | undefined;
  Status?: string | undefined;
  Reason?: string | undefined;
}
export interface AddressAttribute {
  PublicIp?: string | undefined;
  AllocationId?: string | undefined;
  PtrRecord?: string | undefined;
  PtrRecordUpdate?: PtrUpdateStatus | undefined;
}
export interface AdvertiseByoipCidrRequest {
  Cidr: string | undefined;
  Asn?: string | undefined;
  DryRun?: boolean | undefined;
  NetworkBorderGroup?: string | undefined;
}
export interface AsnAssociation {
  Asn?: string | undefined;
  Cidr?: string | undefined;
  StatusMessage?: string | undefined;
  State?: AsnAssociationState | undefined;
}
export interface ByoipCidr {
  Cidr?: string | undefined;
  Description?: string | undefined;
  AsnAssociations?: AsnAssociation[] | undefined;
  StatusMessage?: string | undefined;
  State?: ByoipCidrState | undefined;
  NetworkBorderGroup?: string | undefined;
  AdvertisementType?: string | undefined;
}
export interface AdvertiseByoipCidrResult {
  ByoipCidr?: ByoipCidr | undefined;
}
export interface AllocateAddressRequest {
  Domain?: DomainType | undefined;
  Address?: string | undefined;
  PublicIpv4Pool?: string | undefined;
  NetworkBorderGroup?: string | undefined;
  CustomerOwnedIpv4Pool?: string | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  IpamPoolId?: string | undefined;
  DryRun?: boolean | undefined;
}
export interface AllocateAddressResult {
  AllocationId?: string | undefined;
  PublicIpv4Pool?: string | undefined;
  NetworkBorderGroup?: string | undefined;
  Domain?: DomainType | undefined;
  CustomerOwnedIp?: string | undefined;
  CustomerOwnedIpv4Pool?: string | undefined;
  CarrierIp?: string | undefined;
  PublicIp?: string | undefined;
}
export interface AllocateHostsRequest {
  InstanceFamily?: string | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  HostRecovery?: HostRecovery | undefined;
  OutpostArn?: string | undefined;
  HostMaintenance?: HostMaintenance | undefined;
  AssetIds?: string[] | undefined;
  AvailabilityZoneId?: string | undefined;
  AutoPlacement?: AutoPlacement | undefined;
  ClientToken?: string | undefined;
  InstanceType?: string | undefined;
  Quantity?: number | undefined;
  AvailabilityZone?: string | undefined;
}
export interface AllocateHostsResult {
  HostIds?: string[] | undefined;
}
export interface AllocateIpamPoolCidrRequest {
  DryRun?: boolean | undefined;
  IpamPoolId: string | undefined;
  Cidr?: string | undefined;
  NetmaskLength?: number | undefined;
  ClientToken?: string | undefined;
  Description?: string | undefined;
  PreviewNextCidr?: boolean | undefined;
  AllowedCidrs?: string[] | undefined;
  DisallowedCidrs?: string[] | undefined;
}
export interface IpamPoolAllocation {
  Cidr?: string | undefined;
  IpamPoolAllocationId?: string | undefined;
  Description?: string | undefined;
  ResourceId?: string | undefined;
  ResourceType?: IpamPoolAllocationResourceType | undefined;
  ResourceRegion?: string | undefined;
  ResourceOwner?: string | undefined;
}
export interface AllocateIpamPoolCidrResult {
  IpamPoolAllocation?: IpamPoolAllocation | undefined;
}
export interface AllowedPrincipal {
  PrincipalType?: PrincipalType | undefined;
  Principal?: string | undefined;
  ServicePermissionId?: string | undefined;
  Tags?: Tag[] | undefined;
  ServiceId?: string | undefined;
}
export interface AlternatePathHint {
  ComponentId?: string | undefined;
  ComponentArn?: string | undefined;
}
export interface ApplySecurityGroupsToClientVpnTargetNetworkRequest {
  ClientVpnEndpointId: string | undefined;
  VpcId: string | undefined;
  SecurityGroupIds: string[] | undefined;
  DryRun?: boolean | undefined;
}
export interface ApplySecurityGroupsToClientVpnTargetNetworkResult {
  SecurityGroupIds?: string[] | undefined;
}
export interface AssignIpv6AddressesRequest {
  Ipv6PrefixCount?: number | undefined;
  Ipv6Prefixes?: string[] | undefined;
  NetworkInterfaceId: string | undefined;
  Ipv6Addresses?: string[] | undefined;
  Ipv6AddressCount?: number | undefined;
}
export interface AssignIpv6AddressesResult {
  AssignedIpv6Addresses?: string[] | undefined;
  AssignedIpv6Prefixes?: string[] | undefined;
  NetworkInterfaceId?: string | undefined;
}
export interface AssignPrivateIpAddressesRequest {
  Ipv4Prefixes?: string[] | undefined;
  Ipv4PrefixCount?: number | undefined;
  NetworkInterfaceId: string | undefined;
  PrivateIpAddresses?: string[] | undefined;
  SecondaryPrivateIpAddressCount?: number | undefined;
  AllowReassignment?: boolean | undefined;
}
export interface Ipv4PrefixSpecification {
  Ipv4Prefix?: string | undefined;
}
export interface AssignedPrivateIpAddress {
  PrivateIpAddress?: string | undefined;
}
export interface AssignPrivateIpAddressesResult {
  NetworkInterfaceId?: string | undefined;
  AssignedPrivateIpAddresses?: AssignedPrivateIpAddress[] | undefined;
  AssignedIpv4Prefixes?: Ipv4PrefixSpecification[] | undefined;
}
export interface AssignPrivateNatGatewayAddressRequest {
  NatGatewayId: string | undefined;
  PrivateIpAddresses?: string[] | undefined;
  PrivateIpAddressCount?: number | undefined;
  DryRun?: boolean | undefined;
}
export interface NatGatewayAddress {
  AllocationId?: string | undefined;
  NetworkInterfaceId?: string | undefined;
  PrivateIp?: string | undefined;
  PublicIp?: string | undefined;
  AssociationId?: string | undefined;
  IsPrimary?: boolean | undefined;
  FailureMessage?: string | undefined;
  Status?: NatGatewayAddressStatus | undefined;
  AvailabilityZone?: string | undefined;
  AvailabilityZoneId?: string | undefined;
}
export interface AssignPrivateNatGatewayAddressResult {
  NatGatewayId?: string | undefined;
  NatGatewayAddresses?: NatGatewayAddress[] | undefined;
}
export interface AssociateAddressRequest {
  AllocationId?: string | undefined;
  InstanceId?: string | undefined;
  PublicIp?: string | undefined;
  DryRun?: boolean | undefined;
  NetworkInterfaceId?: string | undefined;
  PrivateIpAddress?: string | undefined;
  AllowReassociation?: boolean | undefined;
}
export interface AssociateAddressResult {
  AssociationId?: string | undefined;
}
export interface AssociateCapacityReservationBillingOwnerRequest {
  DryRun?: boolean | undefined;
  CapacityReservationId: string | undefined;
  UnusedReservationBillingOwnerId: string | undefined;
}
export interface AssociateCapacityReservationBillingOwnerResult {
  Return?: boolean | undefined;
}
export interface AssociateClientVpnTargetNetworkRequest {
  ClientVpnEndpointId: string | undefined;
  SubnetId: string | undefined;
  ClientToken?: string | undefined;
  DryRun?: boolean | undefined;
}
export interface AssociationStatus {
  Code?: AssociationStatusCode | undefined;
  Message?: string | undefined;
}
export interface AssociateClientVpnTargetNetworkResult {
  AssociationId?: string | undefined;
  Status?: AssociationStatus | undefined;
}
export interface AssociateDhcpOptionsRequest {
  DhcpOptionsId: string | undefined;
  VpcId: string | undefined;
  DryRun?: boolean | undefined;
}
export interface AssociateEnclaveCertificateIamRoleRequest {
  CertificateArn: string | undefined;
  RoleArn: string | undefined;
  DryRun?: boolean | undefined;
}
export interface AssociateEnclaveCertificateIamRoleResult {
  CertificateS3BucketName?: string | undefined;
  CertificateS3ObjectKey?: string | undefined;
  EncryptionKmsKeyId?: string | undefined;
}
export interface IamInstanceProfileSpecification {
  Arn?: string | undefined;
  Name?: string | undefined;
}
export interface AssociateIamInstanceProfileRequest {
  IamInstanceProfile: IamInstanceProfileSpecification | undefined;
  InstanceId: string | undefined;
}
export interface IamInstanceProfile {
  Arn?: string | undefined;
  Id?: string | undefined;
}
export interface IamInstanceProfileAssociation {
  AssociationId?: string | undefined;
  InstanceId?: string | undefined;
  IamInstanceProfile?: IamInstanceProfile | undefined;
  State?: IamInstanceProfileAssociationState | undefined;
  Timestamp?: Date | undefined;
}
export interface AssociateIamInstanceProfileResult {
  IamInstanceProfileAssociation?: IamInstanceProfileAssociation | undefined;
}
export interface InstanceEventWindowAssociationRequest {
  InstanceIds?: string[] | undefined;
  InstanceTags?: Tag[] | undefined;
  DedicatedHostIds?: string[] | undefined;
}
export interface AssociateInstanceEventWindowRequest {
  DryRun?: boolean | undefined;
  InstanceEventWindowId: string | undefined;
  AssociationTarget: InstanceEventWindowAssociationRequest | undefined;
}
export interface InstanceEventWindowAssociationTarget {
  InstanceIds?: string[] | undefined;
  Tags?: Tag[] | undefined;
  DedicatedHostIds?: string[] | undefined;
}
export interface InstanceEventWindowTimeRange {
  StartWeekDay?: WeekDay | undefined;
  StartHour?: number | undefined;
  EndWeekDay?: WeekDay | undefined;
  EndHour?: number | undefined;
}
export interface InstanceEventWindow {
  InstanceEventWindowId?: string | undefined;
  TimeRanges?: InstanceEventWindowTimeRange[] | undefined;
  Name?: string | undefined;
  CronExpression?: string | undefined;
  AssociationTarget?: InstanceEventWindowAssociationTarget | undefined;
  State?: InstanceEventWindowState | undefined;
  Tags?: Tag[] | undefined;
}
export interface AssociateInstanceEventWindowResult {
  InstanceEventWindow?: InstanceEventWindow | undefined;
}
export interface AssociateIpamByoasnRequest {
  DryRun?: boolean | undefined;
  Asn: string | undefined;
  Cidr: string | undefined;
}
export interface AssociateIpamByoasnResult {
  AsnAssociation?: AsnAssociation | undefined;
}
export interface AssociateIpamResourceDiscoveryRequest {
  DryRun?: boolean | undefined;
  IpamId: string | undefined;
  IpamResourceDiscoveryId: string | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  ClientToken?: string | undefined;
}
export interface IpamResourceDiscoveryAssociation {
  OwnerId?: string | undefined;
  IpamResourceDiscoveryAssociationId?: string | undefined;
  IpamResourceDiscoveryAssociationArn?: string | undefined;
  IpamResourceDiscoveryId?: string | undefined;
  IpamId?: string | undefined;
  IpamArn?: string | undefined;
  IpamRegion?: string | undefined;
  IsDefault?: boolean | undefined;
  ResourceDiscoveryStatus?: IpamAssociatedResourceDiscoveryStatus | undefined;
  State?: IpamResourceDiscoveryAssociationState | undefined;
  Tags?: Tag[] | undefined;
}
export interface AssociateIpamResourceDiscoveryResult {
  IpamResourceDiscoveryAssociation?:
    | IpamResourceDiscoveryAssociation
    | undefined;
}
export interface AssociateNatGatewayAddressRequest {
  NatGatewayId: string | undefined;
  AllocationIds: string[] | undefined;
  PrivateIpAddresses?: string[] | undefined;
  DryRun?: boolean | undefined;
  AvailabilityZone?: string | undefined;
  AvailabilityZoneId?: string | undefined;
}
export interface AssociateNatGatewayAddressResult {
  NatGatewayId?: string | undefined;
  NatGatewayAddresses?: NatGatewayAddress[] | undefined;
}
export interface AssociateRouteServerRequest {
  RouteServerId: string | undefined;
  VpcId: string | undefined;
  DryRun?: boolean | undefined;
}
export interface RouteServerAssociation {
  RouteServerId?: string | undefined;
  VpcId?: string | undefined;
  State?: RouteServerAssociationState | undefined;
}
export interface AssociateRouteServerResult {
  RouteServerAssociation?: RouteServerAssociation | undefined;
}
export interface AssociateRouteTableRequest {
  GatewayId?: string | undefined;
  PublicIpv4Pool?: string | undefined;
  DryRun?: boolean | undefined;
  SubnetId?: string | undefined;
  RouteTableId: string | undefined;
}
export interface RouteTableAssociationState {
  State?: RouteTableAssociationStateCode | undefined;
  StatusMessage?: string | undefined;
}
export interface AssociateRouteTableResult {
  AssociationId?: string | undefined;
  AssociationState?: RouteTableAssociationState | undefined;
}
export interface AssociateSecurityGroupVpcRequest {
  GroupId: string | undefined;
  VpcId: string | undefined;
  DryRun?: boolean | undefined;
}
export interface AssociateSecurityGroupVpcResult {
  State?: SecurityGroupVpcAssociationState | undefined;
}
export interface AssociateSubnetCidrBlockRequest {
  Ipv6IpamPoolId?: string | undefined;
  Ipv6NetmaskLength?: number | undefined;
  SubnetId: string | undefined;
  Ipv6CidrBlock?: string | undefined;
}
export interface SubnetCidrBlockState {
  State?: SubnetCidrBlockStateCode | undefined;
  StatusMessage?: string | undefined;
}
export interface SubnetIpv6CidrBlockAssociation {
  AssociationId?: string | undefined;
  Ipv6CidrBlock?: string | undefined;
  Ipv6CidrBlockState?: SubnetCidrBlockState | undefined;
  Ipv6AddressAttribute?: Ipv6AddressAttribute | undefined;
  IpSource?: IpSource | undefined;
}
export interface AssociateSubnetCidrBlockResult {
  Ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation | undefined;
  SubnetId?: string | undefined;
}
export interface AssociateTransitGatewayMulticastDomainRequest {
  TransitGatewayMulticastDomainId: string | undefined;
  TransitGatewayAttachmentId: string | undefined;
  SubnetIds: string[] | undefined;
  DryRun?: boolean | undefined;
}
export interface AssociateTransitGatewayMulticastDomainResult {
  Associations?: TransitGatewayMulticastDomainAssociations | undefined;
}
export interface AssociateTransitGatewayPolicyTableRequest {
  TransitGatewayPolicyTableId: string | undefined;
  TransitGatewayAttachmentId: string | undefined;
  DryRun?: boolean | undefined;
}
export interface TransitGatewayPolicyTableAssociation {
  TransitGatewayPolicyTableId?: string | undefined;
  TransitGatewayAttachmentId?: string | undefined;
  ResourceId?: string | undefined;
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;
  State?: TransitGatewayAssociationState | undefined;
}
export interface AssociateTransitGatewayPolicyTableResult {
  Association?: TransitGatewayPolicyTableAssociation | undefined;
}
export interface AssociateTransitGatewayRouteTableRequest {
  TransitGatewayRouteTableId: string | undefined;
  TransitGatewayAttachmentId: string | undefined;
  DryRun?: boolean | undefined;
}
export interface TransitGatewayAssociation {
  TransitGatewayRouteTableId?: string | undefined;
  TransitGatewayAttachmentId?: string | undefined;
  ResourceId?: string | undefined;
  ResourceType?: TransitGatewayAttachmentResourceType | undefined;
  State?: TransitGatewayAssociationState | undefined;
}
export interface AssociateTransitGatewayRouteTableResult {
  Association?: TransitGatewayAssociation | undefined;
}
export interface AssociateTrunkInterfaceRequest {
  BranchInterfaceId: string | undefined;
  TrunkInterfaceId: string | undefined;
  VlanId?: number | undefined;
  GreKey?: number | undefined;
  ClientToken?: string | undefined;
  DryRun?: boolean | undefined;
}
export interface TrunkInterfaceAssociation {
  AssociationId?: string | undefined;
  BranchInterfaceId?: string | undefined;
  TrunkInterfaceId?: string | undefined;
  InterfaceProtocol?: InterfaceProtocolType | undefined;
  VlanId?: number | undefined;
  GreKey?: number | undefined;
  Tags?: Tag[] | undefined;
}
export interface AssociateTrunkInterfaceResult {
  InterfaceAssociation?: TrunkInterfaceAssociation | undefined;
  ClientToken?: string | undefined;
}
export interface AssociateVpcCidrBlockRequest {
  CidrBlock?: string | undefined;
  Ipv6CidrBlockNetworkBorderGroup?: string | undefined;
  Ipv6Pool?: string | undefined;
  Ipv6CidrBlock?: string | undefined;
  Ipv4IpamPoolId?: string | undefined;
  Ipv4NetmaskLength?: number | undefined;
  Ipv6IpamPoolId?: string | undefined;
  Ipv6NetmaskLength?: number | undefined;
  VpcId: string | undefined;
  AmazonProvidedIpv6CidrBlock?: boolean | undefined;
}
export interface VpcCidrBlockState {
  State?: VpcCidrBlockStateCode | undefined;
  StatusMessage?: string | undefined;
}
export interface VpcCidrBlockAssociation {
  AssociationId?: string | undefined;
  CidrBlock?: string | undefined;
  CidrBlockState?: VpcCidrBlockState | undefined;
}
export interface VpcIpv6CidrBlockAssociation {
  AssociationId?: string | undefined;
  Ipv6CidrBlock?: string | undefined;
  Ipv6CidrBlockState?: VpcCidrBlockState | undefined;
  NetworkBorderGroup?: string | undefined;
  Ipv6Pool?: string | undefined;
  Ipv6AddressAttribute?: Ipv6AddressAttribute | undefined;
  IpSource?: IpSource | undefined;
}
export interface AssociateVpcCidrBlockResult {
  Ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation | undefined;
  CidrBlockAssociation?: VpcCidrBlockAssociation | undefined;
  VpcId?: string | undefined;
}
export interface AttachClassicLinkVpcRequest {
  DryRun?: boolean | undefined;
  InstanceId: string | undefined;
  VpcId: string | undefined;
  Groups: string[] | undefined;
}
export interface AttachClassicLinkVpcResult {
  Return?: boolean | undefined;
}
export interface AttachInternetGatewayRequest {
  DryRun?: boolean | undefined;
  InternetGatewayId: string | undefined;
  VpcId: string | undefined;
}
export interface EnaSrdUdpSpecification {
  EnaSrdUdpEnabled?: boolean | undefined;
}
export interface EnaSrdSpecification {
  EnaSrdEnabled?: boolean | undefined;
  EnaSrdUdpSpecification?: EnaSrdUdpSpecification | undefined;
}
export interface AttachNetworkInterfaceRequest {
  NetworkCardIndex?: number | undefined;
  EnaSrdSpecification?: EnaSrdSpecification | undefined;
  EnaQueueCount?: number | undefined;
  DryRun?: boolean | undefined;
  NetworkInterfaceId: string | undefined;
  InstanceId: string | undefined;
  DeviceIndex: number | undefined;
}
export interface AttachNetworkInterfaceResult {
  AttachmentId?: string | undefined;
  NetworkCardIndex?: number | undefined;
}
export interface AttachVerifiedAccessTrustProviderRequest {
  VerifiedAccessInstanceId: string | undefined;
  VerifiedAccessTrustProviderId: string | undefined;
  ClientToken?: string | undefined;
  DryRun?: boolean | undefined;
}
export interface VerifiedAccessInstanceCustomSubDomain {
  SubDomain?: string | undefined;
  Nameservers?: string[] | undefined;
}
export interface VerifiedAccessTrustProviderCondensed {
  VerifiedAccessTrustProviderId?: string | undefined;
  Description?: string | undefined;
  TrustProviderType?: TrustProviderType | undefined;
  UserTrustProviderType?: UserTrustProviderType | undefined;
  DeviceTrustProviderType?: DeviceTrustProviderType | undefined;
}
export interface VerifiedAccessInstance {
  VerifiedAccessInstanceId?: string | undefined;
  Description?: string | undefined;
  VerifiedAccessTrustProviders?:
    | VerifiedAccessTrustProviderCondensed[]
    | undefined;
  CreationTime?: string | undefined;
  LastUpdatedTime?: string | undefined;
  Tags?: Tag[] | undefined;
  FipsEnabled?: boolean | undefined;
  CidrEndpointsCustomSubDomain?:
    | VerifiedAccessInstanceCustomSubDomain
    | undefined;
}
export interface DeviceOptions {
  TenantId?: string | undefined;
  PublicSigningKeyUrl?: string | undefined;
}
export interface NativeApplicationOidcOptions {
  PublicSigningKeyEndpoint?: string | undefined;
  Issuer?: string | undefined;
  AuthorizationEndpoint?: string | undefined;
  TokenEndpoint?: string | undefined;
  UserInfoEndpoint?: string | undefined;
  ClientId?: string | undefined;
  Scope?: string | undefined;
}
export interface OidcOptions {
  Issuer?: string | undefined;
  AuthorizationEndpoint?: string | undefined;
  TokenEndpoint?: string | undefined;
  UserInfoEndpoint?: string | undefined;
  ClientId?: string | undefined;
  ClientSecret?: string | undefined;
  Scope?: string | undefined;
}
export interface VerifiedAccessSseSpecificationResponse {
  CustomerManagedKeyEnabled?: boolean | undefined;
  KmsKeyArn?: string | undefined;
}
export interface VerifiedAccessTrustProvider {
  VerifiedAccessTrustProviderId?: string | undefined;
  Description?: string | undefined;
  TrustProviderType?: TrustProviderType | undefined;
  UserTrustProviderType?: UserTrustProviderType | undefined;
  DeviceTrustProviderType?: DeviceTrustProviderType | undefined;
  OidcOptions?: OidcOptions | undefined;
  DeviceOptions?: DeviceOptions | undefined;
  PolicyReferenceName?: string | undefined;
  CreationTime?: string | undefined;
  LastUpdatedTime?: string | undefined;
  Tags?: Tag[] | undefined;
  SseSpecification?: VerifiedAccessSseSpecificationResponse | undefined;
  NativeApplicationOidcOptions?: NativeApplicationOidcOptions | undefined;
}
export interface AttachVerifiedAccessTrustProviderResult {
  VerifiedAccessTrustProvider?: VerifiedAccessTrustProvider | undefined;
  VerifiedAccessInstance?: VerifiedAccessInstance | undefined;
}
export interface AttachVolumeRequest {
  Device: string | undefined;
  InstanceId: string | undefined;
  VolumeId: string | undefined;
  EbsCardIndex?: number | undefined;
  DryRun?: boolean | undefined;
}
export interface VolumeAttachment {
  DeleteOnTermination?: boolean | undefined;
  AssociatedResource?: string | undefined;
  InstanceOwningService?: string | undefined;
  EbsCardIndex?: number | undefined;
  VolumeId?: string | undefined;
  InstanceId?: string | undefined;
  Device?: string | undefined;
  State?: VolumeAttachmentState | undefined;
  AttachTime?: Date | undefined;
}
export interface AttachVpnGatewayRequest {
  VpcId: string | undefined;
  VpnGatewayId: string | undefined;
  DryRun?: boolean | undefined;
}
export interface VpcAttachment {
  VpcId?: string | undefined;
  State?: AttachmentStatus | undefined;
}
export interface AttachVpnGatewayResult {
  VpcAttachment?: VpcAttachment | undefined;
}
export interface AuthorizeClientVpnIngressRequest {
  ClientVpnEndpointId: string | undefined;
  TargetNetworkCidr: string | undefined;
  AccessGroupId?: string | undefined;
  AuthorizeAllGroups?: boolean | undefined;
  Description?: string | undefined;
  ClientToken?: string | undefined;
  DryRun?: boolean | undefined;
}
export interface ClientVpnAuthorizationRuleStatus {
  Code?: ClientVpnAuthorizationRuleStatusCode | undefined;
  Message?: string | undefined;
}
export interface AuthorizeClientVpnIngressResult {
  Status?: ClientVpnAuthorizationRuleStatus | undefined;
}
export interface IpRange {
  Description?: string | undefined;
  CidrIp?: string | undefined;
}
export interface Ipv6Range {
  Description?: string | undefined;
  CidrIpv6?: string | undefined;
}
export interface PrefixListId {
  Description?: string | undefined;
  PrefixListId?: string | undefined;
}
export interface UserIdGroupPair {
  Description?: string | undefined;
  UserId?: string | undefined;
  GroupName?: string | undefined;
  GroupId?: string | undefined;
  VpcId?: string | undefined;
  VpcPeeringConnectionId?: string | undefined;
  PeeringStatus?: string | undefined;
}
export interface IpPermission {
  IpProtocol?: string | undefined;
  FromPort?: number | undefined;
  ToPort?: number | undefined;
  UserIdGroupPairs?: UserIdGroupPair[] | undefined;
  IpRanges?: IpRange[] | undefined;
  Ipv6Ranges?: Ipv6Range[] | undefined;
  PrefixListIds?: PrefixListId[] | undefined;
}
export interface AuthorizeSecurityGroupEgressRequest {
  TagSpecifications?: TagSpecification[] | undefined;
  DryRun?: boolean | undefined;
  GroupId: string | undefined;
  SourceSecurityGroupName?: string | undefined;
  SourceSecurityGroupOwnerId?: string | undefined;
  IpProtocol?: string | undefined;
  FromPort?: number | undefined;
  ToPort?: number | undefined;
  CidrIp?: string | undefined;
  IpPermissions?: IpPermission[] | undefined;
}
export interface ReferencedSecurityGroup {
  GroupId?: string | undefined;
  PeeringStatus?: string | undefined;
  UserId?: string | undefined;
  VpcId?: string | undefined;
  VpcPeeringConnectionId?: string | undefined;
}
export interface SecurityGroupRule {
  SecurityGroupRuleId?: string | undefined;
  GroupId?: string | undefined;
  GroupOwnerId?: string | undefined;
  IsEgress?: boolean | undefined;
  IpProtocol?: string | undefined;
  FromPort?: number | undefined;
  ToPort?: number | undefined;
  CidrIpv4?: string | undefined;
  CidrIpv6?: string | undefined;
  PrefixListId?: string | undefined;
  ReferencedGroupInfo?: ReferencedSecurityGroup | undefined;
  Description?: string | undefined;
  Tags?: Tag[] | undefined;
  SecurityGroupRuleArn?: string | undefined;
}
export interface AuthorizeSecurityGroupEgressResult {
  Return?: boolean | undefined;
  SecurityGroupRules?: SecurityGroupRule[] | undefined;
}
export interface AuthorizeSecurityGroupIngressRequest {
  CidrIp?: string | undefined;
  FromPort?: number | undefined;
  GroupId?: string | undefined;
  GroupName?: string | undefined;
  IpPermissions?: IpPermission[] | undefined;
  IpProtocol?: string | undefined;
  SourceSecurityGroupName?: string | undefined;
  SourceSecurityGroupOwnerId?: string | undefined;
  ToPort?: number | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  DryRun?: boolean | undefined;
}
export interface AuthorizeSecurityGroupIngressResult {
  Return?: boolean | undefined;
  SecurityGroupRules?: SecurityGroupRule[] | undefined;
}
export interface S3Storage {
  AWSAccessKeyId?: string | undefined;
  Bucket?: string | undefined;
  Prefix?: string | undefined;
  UploadPolicy?: Uint8Array | undefined;
  UploadPolicySignature?: string | undefined;
}
export interface Storage {
  S3?: S3Storage | undefined;
}
export interface BundleInstanceRequest {
  InstanceId: string | undefined;
  Storage: Storage | undefined;
  DryRun?: boolean | undefined;
}
export interface BundleTaskError {
  Code?: string | undefined;
  Message?: string | undefined;
}
export interface BundleTask {
  InstanceId?: string | undefined;
  BundleId?: string | undefined;
  State?: BundleTaskState | undefined;
  StartTime?: Date | undefined;
  UpdateTime?: Date | undefined;
  Storage?: Storage | undefined;
  Progress?: string | undefined;
  BundleTaskError?: BundleTaskError | undefined;
}
export interface BundleInstanceResult {
  BundleTask?: BundleTask | undefined;
}
export interface CancelBundleTaskRequest {
  BundleId: string | undefined;
  DryRun?: boolean | undefined;
}
export interface CancelBundleTaskResult {
  BundleTask?: BundleTask | undefined;
}
export interface CancelCapacityReservationRequest {
  CapacityReservationId: string | undefined;
  DryRun?: boolean | undefined;
}
export interface CancelCapacityReservationResult {
  Return?: boolean | undefined;
}
export interface CancelCapacityReservationFleetsRequest {
  DryRun?: boolean | undefined;
  CapacityReservationFleetIds: string[] | undefined;
}
export interface CancelCapacityReservationFleetError {
  Code?: string | undefined;
  Message?: string | undefined;
}
export interface FailedCapacityReservationFleetCancellationResult {
  CapacityReservationFleetId?: string | undefined;
  CancelCapacityReservationFleetError?:
    | CancelCapacityReservationFleetError
    | undefined;
}
export interface CapacityReservationFleetCancellationState {
  CurrentFleetState?: CapacityReservationFleetState | undefined;
  PreviousFleetState?: CapacityReservationFleetState | undefined;
  CapacityReservationFleetId?: string | undefined;
}
export interface CancelCapacityReservationFleetsResult {
  SuccessfulFleetCancellations?:
    | CapacityReservationFleetCancellationState[]
    | undefined;
  FailedFleetCancellations?:
    | FailedCapacityReservationFleetCancellationResult[]
    | undefined;
}
export interface CancelConversionRequest {
  DryRun?: boolean | undefined;
  ConversionTaskId: string | undefined;
  ReasonMessage?: string | undefined;
}
export interface CancelDeclarativePoliciesReportRequest {
  DryRun?: boolean | undefined;
  ReportId: string | undefined;
}
export interface CancelDeclarativePoliciesReportResult {
  Return?: boolean | undefined;
}
export interface CancelExportTaskRequest {
  ExportTaskId: string | undefined;
}
export interface CancelImageLaunchPermissionRequest {
  ImageId: string | undefined;
  DryRun?: boolean | undefined;
}
export interface CancelImageLaunchPermissionResult {
  Return?: boolean | undefined;
}
export interface CancelImportTaskRequest {
  CancelReason?: string | undefined;
  DryRun?: boolean | undefined;
  ImportTaskId?: string | undefined;
}
export interface CancelImportTaskResult {
  ImportTaskId?: string | undefined;
  PreviousState?: string | undefined;
  State?: string | undefined;
}
export interface CancelReservedInstancesListingRequest {
  ReservedInstancesListingId: string | undefined;
}
export interface InstanceCount {
  InstanceCount?: number | undefined;
  State?: ListingState | undefined;
}
export interface PriceSchedule {
  Active?: boolean | undefined;
  CurrencyCode?: CurrencyCodeValues | undefined;
  Price?: number | undefined;
  Term?: number | undefined;
}
export interface ReservedInstancesListing {
  ClientToken?: string | undefined;
  CreateDate?: Date | undefined;
  InstanceCounts?: InstanceCount[] | undefined;
  PriceSchedules?: PriceSchedule[] | undefined;
  ReservedInstancesId?: string | undefined;
  ReservedInstancesListingId?: string | undefined;
  Status?: ListingStatus | undefined;
  StatusMessage?: string | undefined;
  Tags?: Tag[] | undefined;
  UpdateDate?: Date | undefined;
}
export interface CancelReservedInstancesListingResult {
  ReservedInstancesListings?: ReservedInstancesListing[] | undefined;
}
export interface CancelSpotFleetRequestsRequest {
  DryRun?: boolean | undefined;
  SpotFleetRequestIds: string[] | undefined;
  TerminateInstances: boolean | undefined;
}
export interface CancelSpotFleetRequestsSuccessItem {
  CurrentSpotFleetRequestState?: BatchState | undefined;
  PreviousSpotFleetRequestState?: BatchState | undefined;
  SpotFleetRequestId?: string | undefined;
}
export interface CancelSpotFleetRequestsError {
  Code?: CancelBatchErrorCode | undefined;
  Message?: string | undefined;
}
export interface CancelSpotFleetRequestsErrorItem {
  Error?: CancelSpotFleetRequestsError | undefined;
  SpotFleetRequestId?: string | undefined;
}
export interface CancelSpotFleetRequestsResponse {
  SuccessfulFleetRequests?: CancelSpotFleetRequestsSuccessItem[] | undefined;
  UnsuccessfulFleetRequests?: CancelSpotFleetRequestsErrorItem[] | undefined;
}
export interface CancelSpotInstanceRequestsRequest {
  DryRun?: boolean | undefined;
  SpotInstanceRequestIds: string[] | undefined;
}
export interface CancelledSpotInstanceRequest {
  SpotInstanceRequestId?: string | undefined;
  State?: CancelSpotInstanceRequestState | undefined;
}
export interface CancelSpotInstanceRequestsResult {
  CancelledSpotInstanceRequests?: CancelledSpotInstanceRequest[] | undefined;
}
export interface ConfirmProductInstanceRequest {
  InstanceId: string | undefined;
  ProductCode: string | undefined;
  DryRun?: boolean | undefined;
}
export interface ConfirmProductInstanceResult {
  Return?: boolean | undefined;
  OwnerId?: string | undefined;
}
export interface CopyFpgaImageRequest {
  DryRun?: boolean | undefined;
  SourceFpgaImageId: string | undefined;
  Description?: string | undefined;
  Name?: string | undefined;
  SourceRegion: string | undefined;
  ClientToken?: string | undefined;
}
export interface CopyFpgaImageResult {
  FpgaImageId?: string | undefined;
}
export interface CopyImageRequest {
  ClientToken?: string | undefined;
  Description?: string | undefined;
  Encrypted?: boolean | undefined;
  KmsKeyId?: string | undefined;
  Name: string | undefined;
  SourceImageId: string | undefined;
  SourceRegion: string | undefined;
  DestinationOutpostArn?: string | undefined;
  CopyImageTags?: boolean | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  SnapshotCopyCompletionDurationMinutes?: number | undefined;
  DestinationAvailabilityZone?: string | undefined;
  DestinationAvailabilityZoneId?: string | undefined;
  DryRun?: boolean | undefined;
}
export interface CopyImageResult {
  ImageId?: string | undefined;
}
export interface CopySnapshotRequest {
  Description?: string | undefined;
  DestinationOutpostArn?: string | undefined;
  DestinationRegion?: string | undefined;
  Encrypted?: boolean | undefined;
  KmsKeyId?: string | undefined;
  PresignedUrl?: string | undefined;
  SourceRegion: string | undefined;
  SourceSnapshotId: string | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  CompletionDurationMinutes?: number | undefined;
  DestinationAvailabilityZone?: string | undefined;
  DryRun?: boolean | undefined;
}
export interface CopySnapshotResult {
  Tags?: Tag[] | undefined;
  SnapshotId?: string | undefined;
}
export interface CopyVolumesRequest {
  SourceVolumeId: string | undefined;
  Iops?: number | undefined;
  Size?: number | undefined;
  VolumeType?: VolumeType | undefined;
  DryRun?: boolean | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  MultiAttachEnabled?: boolean | undefined;
  Throughput?: number | undefined;
  ClientToken?: string | undefined;
}
export interface OperatorResponse {
  Managed?: boolean | undefined;
  Principal?: string | undefined;
}
export interface Volume {
  AvailabilityZoneId?: string | undefined;
  OutpostArn?: string | undefined;
  SourceVolumeId?: string | undefined;
  Iops?: number | undefined;
  Tags?: Tag[] | undefined;
  VolumeType?: VolumeType | undefined;
  FastRestored?: boolean | undefined;
  MultiAttachEnabled?: boolean | undefined;
  Throughput?: number | undefined;
  SseType?: SSEType | undefined;
  Operator?: OperatorResponse | undefined;
  VolumeInitializationRate?: number | undefined;
  VolumeId?: string | undefined;
  Size?: number | undefined;
  SnapshotId?: string | undefined;
  AvailabilityZone?: string | undefined;
  State?: VolumeState | undefined;
  CreateTime?: Date | undefined;
  Attachments?: VolumeAttachment[] | undefined;
  Encrypted?: boolean | undefined;
  KmsKeyId?: string | undefined;
}
export interface CopyVolumesResult {
  Volumes?: Volume[] | undefined;
}
export interface CreateCapacityManagerDataExportRequest {
  S3BucketName: string | undefined;
  S3BucketPrefix?: string | undefined;
  Schedule: Schedule | undefined;
  OutputFormat: OutputFormat | undefined;
  ClientToken?: string | undefined;
  DryRun?: boolean | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
}
export interface CreateCapacityManagerDataExportResult {
  CapacityManagerDataExportId?: string | undefined;
}
export interface CreateCapacityReservationRequest {
  ClientToken?: string | undefined;
  InstanceType: string | undefined;
  InstancePlatform: CapacityReservationInstancePlatform | undefined;
  AvailabilityZone?: string | undefined;
  AvailabilityZoneId?: string | undefined;
  Tenancy?: CapacityReservationTenancy | undefined;
  InstanceCount: number | undefined;
  EbsOptimized?: boolean | undefined;
  EphemeralStorage?: boolean | undefined;
  EndDate?: Date | undefined;
  EndDateType?: EndDateType | undefined;
  InstanceMatchCriteria?: InstanceMatchCriteria | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  DryRun?: boolean | undefined;
  OutpostArn?: string | undefined;
  PlacementGroupArn?: string | undefined;
  StartDate?: Date | undefined;
  CommitmentDuration?: number | undefined;
  DeliveryPreference?: CapacityReservationDeliveryPreference | undefined;
}
export interface CapacityAllocationMetadataEntry {
  Key?: string | undefined;
  Value?: string | undefined;
}
export interface CapacityAllocation {
  AllocationType?: AllocationType | undefined;
  Count?: number | undefined;
  AllocationMetadata?: CapacityAllocationMetadataEntry[] | undefined;
}
export interface CapacityReservationCommitmentInfo {
  CommittedInstanceCount?: number | undefined;
  CommitmentEndDate?: Date | undefined;
}
export interface InterruptibleCapacityAllocation {
  InstanceCount?: number | undefined;
  TargetInstanceCount?: number | undefined;
  Status?: InterruptibleCapacityReservationAllocationStatus | undefined;
  InterruptibleCapacityReservationId?: string | undefined;
  InterruptionType?: InterruptionType | undefined;
}
export interface InterruptionInfo {
  SourceCapacityReservationId?: string | undefined;
  InterruptionType?: InterruptionType | undefined;
}
export interface CapacityReservation {
  CapacityReservationId?: string | undefined;
  OwnerId?: string | undefined;
  CapacityReservationArn?: string | undefined;
  AvailabilityZoneId?: string | undefined;
  InstanceType?: string | undefined;
  InstancePlatform?: CapacityReservationInstancePlatform | undefined;
  AvailabilityZone?: string | undefined;
  Tenancy?: CapacityReservationTenancy | undefined;
  TotalInstanceCount?: number | undefined;
  AvailableInstanceCount?: number | undefined;
  EbsOptimized?: boolean | undefined;
  EphemeralStorage?: boolean | undefined;
  State?: CapacityReservationState | undefined;
  StartDate?: Date | undefined;
  EndDate?: Date | undefined;
  EndDateType?: EndDateType | undefined;
  InstanceMatchCriteria?: InstanceMatchCriteria | undefined;
  CreateDate?: Date | undefined;
  Tags?: Tag[] | undefined;
  OutpostArn?: string | undefined;
  CapacityReservationFleetId?: string | undefined;
  PlacementGroupArn?: string | undefined;
  CapacityAllocations?: CapacityAllocation[] | undefined;
  ReservationType?: CapacityReservationType | undefined;
  UnusedReservationBillingOwnerId?: string | undefined;
  CommitmentInfo?: CapacityReservationCommitmentInfo | undefined;
  DeliveryPreference?: CapacityReservationDeliveryPreference | undefined;
  CapacityBlockId?: string | undefined;
  Interruptible?: boolean | undefined;
  InterruptibleCapacityAllocation?: InterruptibleCapacityAllocation | undefined;
  InterruptionInfo?: InterruptionInfo | undefined;
}
export interface CreateCapacityReservationResult {
  CapacityReservation?: CapacityReservation | undefined;
}
export interface CreateCapacityReservationBySplittingRequest {
  DryRun?: boolean | undefined;
  ClientToken?: string | undefined;
  SourceCapacityReservationId: string | undefined;
  InstanceCount: number | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
}
export interface CreateCapacityReservationBySplittingResult {
  SourceCapacityReservation?: CapacityReservation | undefined;
  DestinationCapacityReservation?: CapacityReservation | undefined;
  InstanceCount?: number | undefined;
}
export interface ReservationFleetInstanceSpecification {
  InstanceType?: _InstanceType | undefined;
  InstancePlatform?: CapacityReservationInstancePlatform | undefined;
  Weight?: number | undefined;
  AvailabilityZone?: string | undefined;
  AvailabilityZoneId?: string | undefined;
  EbsOptimized?: boolean | undefined;
  Priority?: number | undefined;
}
export interface CreateCapacityReservationFleetRequest {
  AllocationStrategy?: string | undefined;
  ClientToken?: string | undefined;
  InstanceTypeSpecifications:
    | ReservationFleetInstanceSpecification[]
    | undefined;
  Tenancy?: FleetCapacityReservationTenancy | undefined;
  TotalTargetCapacity: number | undefined;
  EndDate?: Date | undefined;
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  DryRun?: boolean | undefined;
}
export interface FleetCapacityReservation {
  CapacityReservationId?: string | undefined;
  AvailabilityZoneId?: string | undefined;
  InstanceType?: _InstanceType | undefined;
  InstancePlatform?: CapacityReservationInstancePlatform | undefined;
  AvailabilityZone?: string | undefined;
  TotalInstanceCount?: number | undefined;
  FulfilledCapacity?: number | undefined;
  EbsOptimized?: boolean | undefined;
  CreateDate?: Date | undefined;
  Weight?: number | undefined;
  Priority?: number | undefined;
}
export interface CreateCapacityReservationFleetResult {
  CapacityReservationFleetId?: string | undefined;
  State?: CapacityReservationFleetState | undefined;
  TotalTargetCapacity?: number | undefined;
  TotalFulfilledCapacity?: number | undefined;
  InstanceMatchCriteria?: FleetInstanceMatchCriteria | undefined;
  AllocationStrategy?: string | undefined;
  CreateTime?: Date | undefined;
  EndDate?: Date | undefined;
  Tenancy?: FleetCapacityReservationTenancy | undefined;
  FleetCapacityReservations?: FleetCapacityReservation[] | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreateCarrierGatewayRequest {
  VpcId: string | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  DryRun?: boolean | undefined;
  ClientToken?: string | undefined;
}
export interface CarrierGateway {
  CarrierGatewayId?: string | undefined;
  VpcId?: string | undefined;
  State?: CarrierGatewayState | undefined;
  OwnerId?: string | undefined;
  Tags?: Tag[] | undefined;
}
export interface CreateCarrierGatewayResult {
  CarrierGateway?: CarrierGateway | undefined;
}
export interface DirectoryServiceAuthenticationRequest {
  DirectoryId?: string | undefined;
}
export interface FederatedAuthenticationRequest {
  SAMLProviderArn?: string | undefined;
  SelfServiceSAMLProviderArn?: string | undefined;
}
export interface CertificateAuthenticationRequest {
  ClientRootCertificateChainArn?: string | undefined;
}
export interface ClientVpnAuthenticationRequest {
  Type?: ClientVpnAuthenticationType | undefined;
  ActiveDirectory?: DirectoryServiceAuthenticationRequest | undefined;
  MutualAuthentication?: CertificateAuthenticationRequest | undefined;
  FederatedAuthentication?: FederatedAuthenticationRequest | undefined;
}
export interface ClientConnectOptions {
  Enabled?: boolean | undefined;
  LambdaFunctionArn?: string | undefined;
}
export interface ClientLoginBannerOptions {
  Enabled?: boolean | undefined;
  BannerText?: string | undefined;
}
export interface ClientRouteEnforcementOptions {
  Enforced?: boolean | undefined;
}
export interface ConnectionLogOptions {
  Enabled?: boolean | undefined;
  CloudwatchLogGroup?: string | undefined;
  CloudwatchLogStream?: string | undefined;
}
export interface CreateClientVpnEndpointRequest {
  ClientCidrBlock?: string | undefined;
  ServerCertificateArn: string | undefined;
  AuthenticationOptions: ClientVpnAuthenticationRequest[] | undefined;
  ConnectionLogOptions: ConnectionLogOptions | undefined;
  DnsServers?: string[] | undefined;
  TransportProtocol?: TransportProtocol | undefined;
  VpnPort?: number | undefined;
  Description?: string | undefined;
  SplitTunnel?: boolean | undefined;
  DryRun?: boolean | undefined;
  ClientToken?: string | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  SecurityGroupIds?: string[] | undefined;
  VpcId?: string | undefined;
  SelfServicePortal?: SelfServicePortal | undefined;
  ClientConnectOptions?: ClientConnectOptions | undefined;
  SessionTimeoutHours?: number | undefined;
  ClientLoginBannerOptions?: ClientLoginBannerOptions | undefined;
  ClientRouteEnforcementOptions?: ClientRouteEnforcementOptions | undefined;
  DisconnectOnSessionTimeout?: boolean | undefined;
  EndpointIpAddressType?: EndpointIpAddressType | undefined;
  TrafficIpAddressType?: TrafficIpAddressType | undefined;
}
export interface ClientVpnEndpointStatus {
  Code?: ClientVpnEndpointStatusCode | undefined;
  Message?: string | undefined;
}
export interface CreateClientVpnEndpointResult {
  ClientVpnEndpointId?: string | undefined;
  Status?: ClientVpnEndpointStatus | undefined;
  DnsName?: string | undefined;
}
export interface CreateClientVpnRouteRequest {
  ClientVpnEndpointId: string | undefined;
  DestinationCidrBlock: string | undefined;
  TargetVpcSubnetId: string | undefined;
  Description?: string | undefined;
  ClientToken?: string | undefined;
  DryRun?: boolean | undefined;
}
export interface ClientVpnRouteStatus {
  Code?: ClientVpnRouteStatusCode | undefined;
  Message?: string | undefined;
}
export interface CreateClientVpnRouteResult {
  Status?: ClientVpnRouteStatus | undefined;
}
export interface CreateCoipCidrRequest {
  Cidr: string | undefined;
  CoipPoolId: string | undefined;
  DryRun?: boolean | undefined;
}
export interface CoipCidr {
  Cidr?: string | undefined;
  CoipPoolId?: string | undefined;
  LocalGatewayRouteTableId?: string | undefined;
}
export interface CreateCoipCidrResult {
  CoipCidr?: CoipCidr | undefined;
}
export interface CreateCoipPoolRequest {
  LocalGatewayRouteTableId: string | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  DryRun?: boolean | undefined;
}
export interface CoipPool {
  PoolId?: string | undefined;
  PoolCidrs?: string[] | undefined;
  LocalGatewayRouteTableId?: string | undefined;
  Tags?: Tag[] | undefined;
  PoolArn?: string | undefined;
}
export interface CreateCoipPoolResult {
  CoipPool?: CoipPool | undefined;
}
export interface CreateCustomerGatewayRequest {
  BgpAsn?: number | undefined;
  PublicIp?: string | undefined;
  CertificateArn?: string | undefined;
  Type: GatewayType | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
  DeviceName?: string | undefined;
  IpAddress?: string | undefined;
  BgpAsnExtended?: number | undefined;
  DryRun?: boolean | undefined;
}
export interface CustomerGateway {
  CertificateArn?: string | undefined;
  DeviceName?: string | undefined;
  Tags?: Tag[] | undefined;
  BgpAsnExtended?: string | undefined;
  CustomerGatewayId?: string | undefined;
  State?: string | undefined;
  Type?: string | undefined;
  IpAddress?: string | undefined;
  BgpAsn?: string | undefined;
}
export interface CreateCustomerGatewayResult {
  CustomerGateway?: CustomerGateway | undefined;
}
export interface CreateDefaultSubnetRequest {
  AvailabilityZone?: string | undefined;
  DryRun?: boolean | undefined;
  Ipv6Native?: boolean | undefined;
  AvailabilityZoneId?: string | undefined;
}
export interface BlockPublicAccessStates {
  InternetGatewayBlockMode?: BlockPublicAccessMode | undefined;
}
export interface PrivateDnsNameOptionsOnLaunch {
  HostnameType?: HostnameType | undefined;
  EnableResourceNameDnsARecord?: boolean | undefined;
  EnableResourceNameDnsAAAARecord?: boolean | undefined;
}
export interface Subnet {
  AvailabilityZoneId?: string | undefined;
  EnableLniAtDeviceIndex?: number | undefined;
  MapCustomerOwnedIpOnLaunch?: boolean | undefined;
  CustomerOwnedIpv4Pool?: string | undefined;
  OwnerId?: string | undefined;
  AssignIpv6AddressOnCreation?: boolean | undefined;
  Ipv6CidrBlockAssociationSet?: SubnetIpv6CidrBlockAssociation[] | undefined;
  Tags?: Tag[] | undefined;
  SubnetArn?: string | undefined;
  OutpostArn?: string | undefined;
  EnableDns64?: boolean | undefined;
  Ipv6Native?: boolean | undefined;
  PrivateDnsNameOptionsOnLaunch?: PrivateDnsNameOptionsOnLaunch | undefined;
  BlockPublicAccessStates?: BlockPublicAccessStates | undefined;
  Type?: string | undefined;
  SubnetId?: string | undefined;
  State?: SubnetState | undefined;
  VpcId?: string | undefined;
  CidrBlock?: string | undefined;
  AvailableIpAddressCount?: number | undefined;
  AvailabilityZone?: string | undefined;
  DefaultForAz?: boolean | undefined;
  MapPublicIpOnLaunch?: boolean | undefined;
}
export interface CreateDefaultSubnetResult {
  Subnet?: Subnet | undefined;
}
export interface CreateDefaultVpcRequest {
  DryRun?: boolean | undefined;
}
export interface VpcEncryptionControlExclusion {
  State?: VpcEncryptionControlExclusionState | undefined;
  StateMessage?: string | undefined;
}
export interface VpcEncryptionControlExclusions {
  InternetGateway?: VpcEncryptionControlExclusion | undefined;
  EgressOnlyInternetGateway?: VpcEncryptionControlExclusion | undefined;
  NatGateway?: VpcEncryptionControlExclusion | undefined;
  VirtualPrivateGateway?: VpcEncryptionControlExclusion | undefined;
  VpcPeering?: VpcEncryptionControlExclusion | undefined;
  Lambda?: VpcEncryptionControlExclusion | undefined;
  VpcLattice?: VpcEncryptionControlExclusion | undefined;
  ElasticFileSystem?: VpcEncryptionControlExclusion | undefined;
}
export interface VpcEncryptionControl {
  VpcId?: string | undefined;
  VpcEncryptionControlId?: string | undefined;
  Mode?: VpcEncryptionControlMode | undefined;
  State?: VpcEncryptionControlState | undefined;
  StateMessage?: string | undefined;
  ResourceExclusions?: VpcEncryptionControlExclusions | undefined;
  Tags?: Tag[] | undefined;
}
export interface Vpc {
  OwnerId?: string | undefined;
  InstanceTenancy?: Tenancy | undefined;
  Ipv6CidrBlockAssociationSet?: VpcIpv6CidrBlockAssociation[] | undefined;
  CidrBlockAssociationSet?: VpcCidrBlockAssociation[] | undefined;
  IsDefault?: boolean | undefined;
  EncryptionControl?: VpcEncryptionControl | undefined;
  Tags?: Tag[] | undefined;
  BlockPublicAccessStates?: BlockPublicAccessStates | undefined;
  VpcId?: string | undefined;
  State?: VpcState | undefined;
  CidrBlock?: string | undefined;
  DhcpOptionsId?: string | undefined;
}
export interface CreateDefaultVpcResult {
  Vpc?: Vpc | undefined;
}
export interface CreateDelegateMacVolumeOwnershipTaskRequest {
  ClientToken?: string | undefined;
  DryRun?: boolean | undefined;
  InstanceId: string | undefined;
  MacCredentials: string | undefined;
  TagSpecifications?: TagSpecification[] | undefined;
}
export interface MacSystemIntegrityProtectionConfiguration {
  AppleInternal?: MacSystemIntegrityProtectionSettingStatus | undefined;
  BaseSystem?: MacSystemIntegrityProtectionSettingStatus | undefined;
  DebuggingRestrictions?: MacSystemIntegrityProtectionSettingStatus | undefined;
  DTraceRestrictions?: MacSystemIntegrityProtectionSettingStatus | undefined;
  FilesystemProtections?: MacSystemIntegrityProtectionSettingStatus | undefined;
  KextSigning?: MacSystemIntegrityProtectionSettingStatus | undefined;
  NvramProtections?: MacSystemIntegrityProtectionSettingStatus | undefined;
  Status?: MacSystemIntegrityProtectionSettingStatus | undefined;
}
export interface MacModificationTask {
  InstanceId?: string | undefined;
  MacModificationTaskId?: string | undefined;
  MacSystemIntegrityProtectionConfig?:
    | MacSystemIntegrityProtectionConfiguration
    | undefined;
  StartTime?: Date | undefined;
  Tags?: Tag[] | undefined;
  TaskState?: MacModificationTaskState | undefined;
  TaskType?: MacModificationTaskType | undefined;
}
export interface CreateDelegateMacVolumeOwnershipTaskResult {
  MacModificationTask?: MacModificationTask | undefined;
}
