export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Admin = {
  __typename?: 'Admin';
  /** created time */
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  /** id of object */
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  /** rank index */
  rank: Scalars['String'];
  /** shortUID */
  shortUID: Scalars['String'];
  /** update time */
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
  username: Scalars['String'];
  /** UUID */
  uuid: Scalars['String'];
};

export type AdminPaginated = {
  __typename?: 'AdminPaginated';
  items: Array<Admin>;
  pageInfo: PageInfo;
};

export enum AdminRole {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN'
}

export type ArrayPairInput = {
  convertType?: InputMaybe<ConvertType>;
  key: Scalars['String'];
  value: Array<Scalars['String']>;
};

export type Auth = {
  __typename?: 'Auth';
  accessToken?: Maybe<Scalars['String']>;
  /** created time */
  createdAt: Scalars['DateTime'];
  /** id of object */
  id: Scalars['ID'];
  /** rank index */
  rank: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  /** shortUID */
  shortUID: Scalars['String'];
  /** update time */
  updatedAt: Scalars['DateTime'];
  /** UUID */
  uuid: Scalars['String'];
};

export type ChangePasswordChildInput = {
  childId: Scalars['Int'];
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type Child = {
  __typename?: 'Child';
  balance: Scalars['Float'];
  /** created time */
  createdAt: Scalars['DateTime'];
  dateOfBirth: Scalars['DateTime'];
  gender: Gender;
  /** id of object */
  id: Scalars['ID'];
  nickName: Scalars['String'];
  parent: Parents;
  parentId: Scalars['Int'];
  password: Scalars['String'];
  percentTasksSuccess: Scalars['Float'];
  /** rank index */
  rank: Scalars['String'];
  requests: Array<Requests>;
  /** shortUID */
  shortUID: Scalars['String'];
  tasks: Array<Task>;
  totalAssetValues: Scalars['Float'];
  totalCurrencyValues: Scalars['Float'];
  totalStockValues: Scalars['Float'];
  totalTasks: Scalars['Float'];
  totalTasksSuccess: Scalars['Float'];
  /** update time */
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
  /** UUID */
  uuid: Scalars['String'];
};


export type ChildRequestsArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type ChildTasksArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type ChildCurrency = {
  __typename?: 'ChildCurrency';
  childId: Scalars['Float'];
  /** created time */
  createdAt: Scalars['DateTime'];
  currencyId: Scalars['Float'];
  /** id of object */
  id: Scalars['ID'];
  /** rank index */
  rank: Scalars['String'];
  /** shortUID */
  shortUID: Scalars['String'];
  /** update time */
  updatedAt: Scalars['DateTime'];
  /** UUID */
  uuid: Scalars['String'];
};

export type ChildPaginated = {
  __typename?: 'ChildPaginated';
  items: Array<Child>;
  pageInfo: PageInfo;
};

export type ChildStock = {
  __typename?: 'ChildStock';
  childId: Scalars['Int'];
  /** created time */
  createdAt: Scalars['DateTime'];
  /** id of object */
  id: Scalars['ID'];
  quantity: Scalars['Float'];
  /** rank index */
  rank: Scalars['String'];
  /** shortUID */
  shortUID: Scalars['String'];
  stockId: Scalars['Int'];
  /** update time */
  updatedAt: Scalars['DateTime'];
  /** UUID */
  uuid: Scalars['String'];
};

export type CompareInput = {
  between?: InputMaybe<RangePairInput>;
  equal?: InputMaybe<SimplePairInput>;
  in?: InputMaybe<ArrayPairInput>;
  lessThan?: InputMaybe<SimplePairInput>;
  lessThanOrEqual?: InputMaybe<SimplePairInput>;
  like?: InputMaybe<SimplePairInput>;
  likeIgnoreCase?: InputMaybe<SimplePairInput>;
  moreThan?: InputMaybe<SimplePairInput>;
  moreThanOrEqual?: InputMaybe<SimplePairInput>;
  not?: InputMaybe<SimplePairInput>;
};

export enum ConvertType {
  Any = 'ANY',
  Date = 'DATE'
}

export type CreateAdminAuthInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreateAdminInput = {
  createUserInput: CreateUserInput;
  email: Scalars['String'];
  role: AdminRole;
  username: Scalars['String'];
};

export type CreateAuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateChildAuthInput = {
  childUUID: Scalars['String'];
  password: Scalars['String'];
};

export type CreateChildCurrencyInput = {
  childId: Scalars['Float'];
  currencyId: Scalars['Float'];
  quantity: Scalars['Float'];
};

export type CreateChildInput = {
  balance: Scalars['Float'];
  createUserInput: CreateUserInput;
  dateOfBirth: Scalars['DateTime'];
  gender: Gender;
  nickName: Scalars['String'];
  parentId: Scalars['Int'];
  password: Scalars['String'];
};

export type CreateCurrencyInput = {
  baseCurrencyCode: Scalars['String'];
  name: Scalars['String'];
  quoteCurrencyCode: Scalars['String'];
  symbol: Scalars['String'];
};

export type CreateCurrencyRequestInput = {
  createRequestInput: CreateRequestInput;
  currencyId: Scalars['ID'];
  quantity?: InputMaybe<Scalars['Float']>;
  type: WalletRequestType;
};

export type CreateParentInput = {
  bankName?: InputMaybe<Scalars['String']>;
  createUserInput: CreateUserInput;
  email: Scalars['String'];
  fund?: InputMaybe<Scalars['Float']>;
  password: Scalars['String'];
};

export type CreatePriceInput = {
  close: Scalars['Float'];
  currencyId?: InputMaybe<Scalars['Int']>;
  open: Scalars['Float'];
  stockId?: InputMaybe<Scalars['Int']>;
};

export type CreateRequestInput = {
  type: RequestType;
};

export type CreateRootAdminInput = {
  createUserInput: CreateUserInput;
  email: Scalars['String'];
  key: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreateStockInput = {
  /** Stock Symbol */
  info: Scalars['String'];
  /** Stock name */
  name: Scalars['String'];
  /** Stock Symbol */
  symbol: Scalars['String'];
};

export type CreateStockRequestInput = {
  createRequestInput: CreateRequestInput;
  quantity?: InputMaybe<Scalars['Float']>;
  stockId: Scalars['ID'];
  type: WalletRequestType;
};

export type CreateTaskInput = {
  childId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  /** YYYY-MM-DD */
  dueDate: Scalars['String'];
  imageUrl?: InputMaybe<Scalars['String']>;
  isLoop?: InputMaybe<Scalars['Boolean']>;
  isRequired?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentId: Scalars['ID'];
  rewardValue: Scalars['Int'];
  taskCategory: Scalars['String'];
};

export type CreateUserInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  role?: InputMaybe<Role>;
};

export type CreateWalletRequestInput = {
  createRequestInput: CreateRequestInput;
  quantity?: InputMaybe<Scalars['Float']>;
  type: WalletRequestType;
};

export type CreateWalletTransactionInput = {
  childId: Scalars['ID'];
  quantity?: InputMaybe<Scalars['Float']>;
};

export type Currency = {
  __typename?: 'Currency';
  baseCurrencyCode: Scalars['String'];
  /** created time */
  createdAt: Scalars['DateTime'];
  /** id of object */
  id: Scalars['ID'];
  name: Scalars['String'];
  quoteCurrencyCode: Scalars['String'];
  /** rank index */
  rank: Scalars['String'];
  /** shortUID */
  shortUID: Scalars['String'];
  symbol: Scalars['String'];
  /** update time */
  updatedAt: Scalars['DateTime'];
  /** UUID */
  uuid: Scalars['String'];
};

export type CurrencyRequest = {
  __typename?: 'CurrencyRequest';
  /** created time */
  createdAt: Scalars['DateTime'];
  /** id of object */
  id: Scalars['ID'];
  price: Scalars['Float'];
  /** rank index */
  rank: Scalars['String'];
  /** shortUID */
  shortUID: Scalars['String'];
  type: CurrencyRequestType;
  /** update time */
  updatedAt: Scalars['DateTime'];
  /** UUID */
  uuid: Scalars['String'];
};

export type CurrencyRequestPaginated = {
  __typename?: 'CurrencyRequestPaginated';
  items: Array<CurrencyRequest>;
  pageInfo: PageInfo;
};

export enum CurrencyRequestType {
  Buy = 'BUY',
  Sell = 'SELL'
}

export type DataTokenOtp = {
  __typename?: 'DataTokenOtp';
  email: Scalars['String'];
  expriedDate: Scalars['DateTime'];
  token: Scalars['String'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type Mutation = {
  __typename?: 'Mutation';
  changePasswordAdmin: Scalars['Boolean'];
  changePasswordChilds: Scalars['Boolean'];
  changePasswordParent: Scalars['Boolean'];
  createAdmin: Admin;
  createChild: Child;
  createChildCurrency: ChildCurrency;
  createCurrency: Currency;
  createCurrencyRequest: CurrencyRequest;
  createParent: Parents;
  createPrice: Price;
  createRootAdmin: Admin;
  createStock: Stock;
  createStockRequest: StockRequest;
  createTask: Task;
  createWalletRequest: WalletRequest;
  deposit: Scalars['Boolean'];
  loginAdmin: Auth;
  loginChild: Auth;
  loginParent: Auth;
  removeChild: Scalars['Boolean'];
  removeChildCurrency: Scalars['Boolean'];
  removeChildStock: Scalars['Boolean'];
  removeCurrency: Scalars['Boolean'];
  removeParent: Parents;
  removePrice: Scalars['Boolean'];
  removeRequest: Scalars['Boolean'];
  removeStock: Scalars['Boolean'];
  removeTask: Scalars['Boolean'];
  requestOTP: DataTokenOtp;
  requestTaskFromChild: Task;
  resendActiveEmail: Scalars['Boolean'];
  resetPasswordAdmin: Scalars['Boolean'];
  resetPasswordParent: Scalars['Boolean'];
  tasksOfChild: Task;
  updateAdmin: Scalars['Boolean'];
  updateChild: Scalars['Boolean'];
  updateChildCurrency: Scalars['Boolean'];
  updateChildStock: Scalars['Boolean'];
  updateCurrency: Scalars['Boolean'];
  updateCurrencyRequest: Scalars['Boolean'];
  updateParent: Parents;
  updatePrice: Scalars['Boolean'];
  updateStock: Scalars['Boolean'];
  updateStockRequest: Scalars['Boolean'];
  updateTask: Task;
  updateTaskStatus: Scalars['Boolean'];
  updateWalletRequest: Scalars['Boolean'];
  withdraw: Scalars['Boolean'];
};


export type MutationChangePasswordAdminArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationChangePasswordChildsArgs = {
  changePasswordInput: ChangePasswordChildInput;
};


export type MutationChangePasswordParentArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput;
};


export type MutationCreateChildArgs = {
  createChildInput: CreateChildInput;
};


export type MutationCreateChildCurrencyArgs = {
  createChildCurrencyInput: CreateChildCurrencyInput;
};


export type MutationCreateCurrencyArgs = {
  createCurrencyInput: CreateCurrencyInput;
};


export type MutationCreateCurrencyRequestArgs = {
  createCurrencyRequestInput: CreateCurrencyRequestInput;
};


export type MutationCreateParentArgs = {
  createParentInput: CreateParentInput;
  expriedDate: Scalars['DateTime'];
  otp: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreatePriceArgs = {
  createPriceInput: CreatePriceInput;
};


export type MutationCreateRootAdminArgs = {
  createRootAdminInput: CreateRootAdminInput;
};


export type MutationCreateStockArgs = {
  createStockInput: CreateStockInput;
};


export type MutationCreateStockRequestArgs = {
  createStockRequestInput: CreateStockRequestInput;
};


export type MutationCreateTaskArgs = {
  createTaskInput: CreateTaskInput;
};


export type MutationCreateWalletRequestArgs = {
  createWalletRequestInput: CreateWalletRequestInput;
};


export type MutationDepositArgs = {
  createWalletTransactionInput: CreateWalletTransactionInput;
};


export type MutationLoginAdminArgs = {
  loginInput: CreateAdminAuthInput;
};


export type MutationLoginChildArgs = {
  loginInput: CreateChildAuthInput;
};


export type MutationLoginParentArgs = {
  loginInput: CreateAuthInput;
};


export type MutationRemoveChildArgs = {
  childId: Scalars['Int'];
};


export type MutationRemoveChildCurrencyArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveChildStockArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveCurrencyArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveParentArgs = {
  id: Scalars['Int'];
};


export type MutationRemovePriceArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveRequestArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveStockArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveTaskArgs = {
  id: Scalars['Int'];
};


export type MutationRequestOtpArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationRequestTaskFromChildArgs = {
  requestTaskInput: RequestTaskInput;
};


export type MutationResendActiveEmailArgs = {
  id: Scalars['Float'];
};


export type MutationResetPasswordAdminArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationResetPasswordParentArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationTasksOfChildArgs = {
  childId: Scalars['ID'];
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput;
};


export type MutationUpdateChildArgs = {
  updateChildInput: UpdateChildInput;
};


export type MutationUpdateChildCurrencyArgs = {
  updateChildCurrencyInput: UpdateChildCurrencyInput;
};


export type MutationUpdateChildStockArgs = {
  updateChildStockInput: UpdateChildStockInput;
};


export type MutationUpdateCurrencyArgs = {
  updateCurrencyInput: UpdateCurrencyInput;
};


export type MutationUpdateCurrencyRequestArgs = {
  updateCurrencyRequestInput: UpdateCurrencyRequestInput;
};


export type MutationUpdateParentArgs = {
  updateParentInput: UpdateParentInput;
};


export type MutationUpdatePriceArgs = {
  updatePriceInput: UpdatePriceInput;
};


export type MutationUpdateStockArgs = {
  updateStockInput: UpdateStockInput;
};


export type MutationUpdateStockRequestArgs = {
  updateStockRequestInput: UpdateStockRequestInput;
};


export type MutationUpdateTaskArgs = {
  updateTaskInput: UpdateTaskInput;
};


export type MutationUpdateTaskStatusArgs = {
  id: Scalars['Int'];
  status: TaskStatus;
};


export type MutationUpdateWalletRequestArgs = {
  updateWalletRequestInput: UpdateWalletRequestInput;
};


export type MutationWithdrawArgs = {
  createWalletTransactionInput: CreateWalletTransactionInput;
};

export type OptionsInput = {
  sort?: InputMaybe<Array<SortInput>>;
  where?: InputMaybe<WhereInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNext: Scalars['Boolean'];
  loaded: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationInput = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type Parents = {
  __typename?: 'Parents';
  bankName?: Maybe<Scalars['String']>;
  childs: ChildPaginated;
  /** created time */
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  fund: Scalars['Float'];
  /** id of object */
  id: Scalars['ID'];
  /** rank index */
  rank: Scalars['String'];
  requests: Array<Requests>;
  /** shortUID */
  shortUID: Scalars['String'];
  tasks: Array<Task>;
  /** update time */
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
  /** UUID */
  uuid: Scalars['String'];
};


export type ParentsChildsArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type ParentsRequestsArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type ParentsTasksArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type ParentsPaginated = {
  __typename?: 'ParentsPaginated';
  items: Array<Parents>;
  pageInfo: PageInfo;
};

export type Price = {
  __typename?: 'Price';
  close: Scalars['Float'];
  /** created time */
  createdAt: Scalars['DateTime'];
  currencyId?: Maybe<Scalars['Int']>;
  date: Scalars['String'];
  /** id of object */
  id: Scalars['ID'];
  open: Scalars['Float'];
  /** rank index */
  rank: Scalars['String'];
  /** shortUID */
  shortUID: Scalars['String'];
  stockId?: Maybe<Scalars['Int']>;
  /** update time */
  updatedAt: Scalars['DateTime'];
  /** UUID */
  uuid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  StockRequests: StockRequestPaginated;
  admin: Admin;
  admins: AdminPaginated;
  child: Child;
  childCurrencies: Array<ChildCurrency>;
  childCurrency: ChildCurrency;
  childStock: ChildStock;
  childStocks: Array<ChildStock>;
  childs: ChildPaginated;
  currencies: Array<Currency>;
  currency: Currency;
  currencyRequests: CurrencyRequestPaginated;
  parent: Parents;
  parents: ParentsPaginated;
  price: Price;
  prices: Array<Price>;
  publicKey: Scalars['String'];
  request: Requests;
  requests: Array<Requests>;
  stock: Stock;
  stocks: Array<Stock>;
  task: Task;
  tasks: TaskPaginated;
  tasksCountOfDay: TaskCount;
  tasksCountOfDayByRange: Array<TaskCount>;
  tasksOfDay: Array<Task>;
  user: User;
  walletRequests: WalletRequestPaginated;
};


export type QueryStockRequestsArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryAdminArgs = {
  id: Scalars['Int'];
};


export type QueryAdminsArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryChildArgs = {
  id: Scalars['Int'];
};


export type QueryChildCurrenciesArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryChildCurrencyArgs = {
  id: Scalars['Int'];
};


export type QueryChildStockArgs = {
  id: Scalars['Int'];
};


export type QueryChildStocksArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryChildsArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCurrenciesArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCurrencyArgs = {
  id: Scalars['Int'];
};


export type QueryCurrencyRequestsArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryParentArgs = {
  id: Scalars['Int'];
};


export type QueryParentsArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryPriceArgs = {
  id: Scalars['Int'];
};


export type QueryPricesArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryRequestArgs = {
  id: Scalars['Int'];
};


export type QueryRequestsArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryStockArgs = {
  id: Scalars['Int'];
};


export type QueryStocksArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryTaskArgs = {
  id: Scalars['ID'];
};


export type QueryTasksArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryTasksCountOfDayArgs = {
  targetDate: Scalars['String'];
};


export type QueryTasksCountOfDayByRangeArgs = {
  endDate: Scalars['String'];
  startDate: Scalars['String'];
};


export type QueryTasksOfDayArgs = {
  targetDate: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryWalletRequestsArgs = {
  options?: InputMaybe<OptionsInput>;
  pagination?: InputMaybe<PaginationInput>;
};

export type RangePairInput = {
  convertType?: InputMaybe<ConvertType>;
  from: Scalars['String'];
  key: Scalars['String'];
  to: Scalars['String'];
};

export enum RequestStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type RequestTaskInput = {
  childId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentId: Scalars['ID'];
  taskCategory: Scalars['String'];
};

export enum RequestType {
  BuyCurrency = 'BUY_CURRENCY',
  BuyStock = 'BUY_STOCK',
  Deposit = 'DEPOSIT',
  SellCurrentcy = 'SELL_CURRENTCY',
  SellStock = 'SELL_STOCK',
  Withdrow = 'WITHDROW'
}

export type Requests = {
  __typename?: 'Requests';
  child: Child;
  childId: Scalars['Float'];
  /** created time */
  createdAt: Scalars['DateTime'];
  /** id of object */
  id: Scalars['ID'];
  parentId: Scalars['Float'];
  /** rank index */
  rank: Scalars['String'];
  /** shortUID */
  shortUID: Scalars['String'];
  status: RequestStatus;
  /** update time */
  updatedAt: Scalars['DateTime'];
  /** UUID */
  uuid: Scalars['String'];
};

export type ResetPasswordInput = {
  email: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Child = 'CHILD',
  Customer = 'CUSTOMER',
  Parent = 'PARENT',
  RootAdmin = 'ROOT_ADMIN',
  SuperAdmin = 'SUPER_ADMIN'
}

export type SimplePairInput = {
  convertType?: InputMaybe<ConvertType>;
  key: Scalars['String'];
  value: Scalars['String'];
};

export type SortInput = {
  key: Scalars['String'];
  value?: InputMaybe<SortValue>;
};

export enum SortValue {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Stock = {
  __typename?: 'Stock';
  /** created time */
  createdAt: Scalars['DateTime'];
  /** id of object */
  id: Scalars['ID'];
  /** info of stock */
  info: Scalars['String'];
  /** name of stock */
  name: Scalars['String'];
  /** rank index */
  rank: Scalars['String'];
  /** shortUID */
  shortUID: Scalars['String'];
  /** Symbol of stock */
  symbol: Scalars['String'];
  /** update time */
  updatedAt: Scalars['DateTime'];
  /** UUID */
  uuid: Scalars['String'];
};

export type StockRequest = {
  __typename?: 'StockRequest';
  /** created time */
  createdAt: Scalars['DateTime'];
  /** id of object */
  id: Scalars['ID'];
  price: Scalars['Float'];
  /** rank index */
  rank: Scalars['String'];
  /** shortUID */
  shortUID: Scalars['String'];
  type: CurrencyRequestType;
  /** update time */
  updatedAt: Scalars['DateTime'];
  /** UUID */
  uuid: Scalars['String'];
};

export type StockRequestPaginated = {
  __typename?: 'StockRequestPaginated';
  items: Array<StockRequest>;
  pageInfo: PageInfo;
};

export type Task = {
  __typename?: 'Task';
  child: Child;
  childId?: Maybe<Scalars['ID']>;
  /** created time */
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  dueDate: Scalars['DateTime'];
  endDate?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  /** id of object */
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isLoop: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  name: Scalars['String'];
  parent: Parents;
  parentId: Scalars['ID'];
  /** rank index */
  rank: Scalars['String'];
  rejectReason?: Maybe<Scalars['String']>;
  rewardValue: Scalars['Int'];
  /** shortUID */
  shortUID: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  startTime?: Maybe<Scalars['DateTime']>;
  status: TaskStatus;
  taskCategory?: Maybe<Scalars['String']>;
  /** update time */
  updatedAt: Scalars['DateTime'];
  /** UUID */
  uuid: Scalars['String'];
};

export type TaskCount = {
  __typename?: 'TaskCount';
  completionRate?: Maybe<Scalars['Float']>;
  date: Scalars['String'];
  taskDone: Scalars['Int'];
  taskFail?: Maybe<Scalars['Int']>;
  taskInProgress?: Maybe<Scalars['Int']>;
};

export type TaskPaginated = {
  __typename?: 'TaskPaginated';
  items: Array<Task>;
  pageInfo: PageInfo;
};

export enum TaskStatus {
  Accepted = 'ACCEPTED',
  Done = 'DONE',
  Fail = 'FAIL',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type UpdateAdminInput = {
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<AdminRole>;
};

export type UpdateChildCurrencyInput = {
  childId?: InputMaybe<Scalars['Float']>;
  currencyId?: InputMaybe<Scalars['Float']>;
  id: Scalars['Int'];
  quantity?: InputMaybe<Scalars['Float']>;
};

export type UpdateChildInput = {
  age?: InputMaybe<Scalars['Int']>;
  balance?: InputMaybe<Scalars['Float']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  id: Scalars['Int'];
  lastName?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UpdateChildStockInput = {
  childId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  quantity?: InputMaybe<Scalars['Float']>;
  stockId?: InputMaybe<Scalars['Int']>;
};

export type UpdateCurrencyInput = {
  baseCurrencyCode?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  quoteCurrencyCode?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
};

export type UpdateCurrencyRequestInput = {
  id: Scalars['ID'];
  updateRequestInput: UpdateRequestInput;
};

export type UpdateParentInput = {
  bankName?: InputMaybe<Scalars['String']>;
  createUserInput?: InputMaybe<CreateUserInput>;
  email?: InputMaybe<Scalars['String']>;
  fund?: InputMaybe<Scalars['Float']>;
  id: Scalars['Int'];
};

export type UpdatePriceInput = {
  close?: InputMaybe<Scalars['Float']>;
  currencyId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  open?: InputMaybe<Scalars['Float']>;
  stockId?: InputMaybe<Scalars['Int']>;
};

export type UpdateRequestInput = {
  status: RequestStatus;
};

export type UpdateStockInput = {
  id: Scalars['Int'];
  /** Stock Symbol */
  info?: InputMaybe<Scalars['String']>;
  /** Stock name */
  name?: InputMaybe<Scalars['String']>;
  /** Stock Symbol */
  symbol?: InputMaybe<Scalars['String']>;
};

export type UpdateStockRequestInput = {
  id: Scalars['ID'];
  updateRequestInput: UpdateRequestInput;
};

export type UpdateTaskInput = {
  childId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  /** YYYY-MM-DD */
  dueDate?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  imageUrl?: InputMaybe<Scalars['String']>;
  isLoop?: InputMaybe<Scalars['Boolean']>;
  isRequired?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['ID']>;
  rejectReason?: InputMaybe<Scalars['String']>;
  rewardValue?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<TaskStatus>;
  taskCategory?: InputMaybe<Scalars['String']>;
};

export type UpdateWalletRequestInput = {
  id: Scalars['ID'];
  updateRequestInput: UpdateRequestInput;
};

export type User = {
  __typename?: 'User';
  admin?: Maybe<Admin>;
  avatarUrl?: Maybe<Scalars['String']>;
  child?: Maybe<Child>;
  /** created time */
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  /** id of object */
  id: Scalars['ID'];
  lastActivatedAt?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  parent?: Maybe<Parents>;
  /** rank index */
  rank: Scalars['String'];
  role: Role;
  /** shortUID */
  shortUID: Scalars['String'];
  status: UserStatus;
  /** update time */
  updatedAt: Scalars['DateTime'];
  /** UUID */
  uuid: Scalars['String'];
};

export enum UserStatus {
  Active = 'ACTIVE',
  Disable = 'DISABLE',
  InActive = 'IN_ACTIVE'
}

export type WalletRequest = {
  __typename?: 'WalletRequest';
  /** created time */
  createdAt: Scalars['DateTime'];
  /** id of object */
  id: Scalars['ID'];
  quantity: Scalars['Float'];
  /** rank index */
  rank: Scalars['String'];
  request?: Maybe<Requests>;
  /** shortUID */
  shortUID: Scalars['String'];
  type: WalletRequestType;
  /** update time */
  updatedAt: Scalars['DateTime'];
  /** UUID */
  uuid: Scalars['String'];
};

export type WalletRequestPaginated = {
  __typename?: 'WalletRequestPaginated';
  items: Array<WalletRequest>;
  pageInfo: PageInfo;
};

export enum WalletRequestType {
  Deposit = 'DEPOSIT',
  Withdrow = 'WITHDROW'
}

export type WhereInput = {
  and?: InputMaybe<Array<CompareInput>>;
  or?: InputMaybe<Array<CompareInput>>;
};
