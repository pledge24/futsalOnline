
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model account
 * 
 */
export type account = $Result.DefaultSelection<Prisma.$accountPayload>
/**
 * Model user_player
 * 
 */
export type user_player = $Result.DefaultSelection<Prisma.$user_playerPayload>
/**
 * Model user_club
 * 
 */
export type user_club = $Result.DefaultSelection<Prisma.$user_clubPayload>
/**
 * Model user_info
 * 
 */
export type user_info = $Result.DefaultSelection<Prisma.$user_infoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.accountDelegate<ExtArgs>;

  /**
   * `prisma.user_player`: Exposes CRUD operations for the **user_player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_players
    * const user_players = await prisma.user_player.findMany()
    * ```
    */
  get user_player(): Prisma.user_playerDelegate<ExtArgs>;

  /**
   * `prisma.user_club`: Exposes CRUD operations for the **user_club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_clubs
    * const user_clubs = await prisma.user_club.findMany()
    * ```
    */
  get user_club(): Prisma.user_clubDelegate<ExtArgs>;

  /**
   * `prisma.user_info`: Exposes CRUD operations for the **user_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_infos
    * const user_infos = await prisma.user_info.findMany()
    * ```
    */
  get user_info(): Prisma.user_infoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    account: 'account',
    user_player: 'user_player',
    user_club: 'user_club',
    user_info: 'user_info'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    userdb?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'user_player' | 'user_club' | 'user_info'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      account: {
        payload: Prisma.$accountPayload<ExtArgs>
        fields: Prisma.accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findFirst: {
            args: Prisma.accountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findMany: {
            args: Prisma.accountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          create: {
            args: Prisma.accountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          createMany: {
            args: Prisma.accountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.accountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          update: {
            args: Prisma.accountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          deleteMany: {
            args: Prisma.accountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.accountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.accountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.accountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      user_player: {
        payload: Prisma.$user_playerPayload<ExtArgs>
        fields: Prisma.user_playerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_playerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_playerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_playerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_playerPayload>
          }
          findFirst: {
            args: Prisma.user_playerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_playerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_playerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_playerPayload>
          }
          findMany: {
            args: Prisma.user_playerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_playerPayload>[]
          }
          create: {
            args: Prisma.user_playerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_playerPayload>
          }
          createMany: {
            args: Prisma.user_playerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.user_playerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_playerPayload>
          }
          update: {
            args: Prisma.user_playerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_playerPayload>
          }
          deleteMany: {
            args: Prisma.user_playerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.user_playerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.user_playerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_playerPayload>
          }
          aggregate: {
            args: Prisma.User_playerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_player>
          }
          groupBy: {
            args: Prisma.user_playerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_playerGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_playerCountArgs<ExtArgs>,
            result: $Utils.Optional<User_playerCountAggregateOutputType> | number
          }
        }
      }
      user_club: {
        payload: Prisma.$user_clubPayload<ExtArgs>
        fields: Prisma.user_clubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_clubFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_clubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_clubFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_clubPayload>
          }
          findFirst: {
            args: Prisma.user_clubFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_clubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_clubFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_clubPayload>
          }
          findMany: {
            args: Prisma.user_clubFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_clubPayload>[]
          }
          create: {
            args: Prisma.user_clubCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_clubPayload>
          }
          createMany: {
            args: Prisma.user_clubCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.user_clubDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_clubPayload>
          }
          update: {
            args: Prisma.user_clubUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_clubPayload>
          }
          deleteMany: {
            args: Prisma.user_clubDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.user_clubUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.user_clubUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_clubPayload>
          }
          aggregate: {
            args: Prisma.User_clubAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_club>
          }
          groupBy: {
            args: Prisma.user_clubGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_clubGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_clubCountArgs<ExtArgs>,
            result: $Utils.Optional<User_clubCountAggregateOutputType> | number
          }
        }
      }
      user_info: {
        payload: Prisma.$user_infoPayload<ExtArgs>
        fields: Prisma.user_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_infoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_infoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_infoPayload>
          }
          findFirst: {
            args: Prisma.user_infoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_infoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_infoPayload>
          }
          findMany: {
            args: Prisma.user_infoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_infoPayload>[]
          }
          create: {
            args: Prisma.user_infoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_infoPayload>
          }
          createMany: {
            args: Prisma.user_infoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.user_infoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_infoPayload>
          }
          update: {
            args: Prisma.user_infoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_infoPayload>
          }
          deleteMany: {
            args: Prisma.user_infoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.user_infoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.user_infoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$user_infoPayload>
          }
          aggregate: {
            args: Prisma.User_infoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_info>
          }
          groupBy: {
            args: Prisma.user_infoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_infoCountArgs<ExtArgs>,
            result: $Utils.Optional<User_infoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    user_players: number
    user_clubs: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_players?: boolean | AccountCountOutputTypeCountUser_playersArgs
    user_clubs?: boolean | AccountCountOutputTypeCountUser_clubsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountUser_playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_playerWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountUser_clubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_clubWhereInput
  }


  /**
   * Models
   */

  /**
   * Model account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    account_id: number | null
  }

  export type AccountSumAggregateOutputType = {
    account_id: number | null
  }

  export type AccountMinAggregateOutputType = {
    account_id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    account_id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    account_id: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    account_id?: true
  }

  export type AccountSumAggregateInputType = {
    account_id?: true
  }

  export type AccountMinAggregateInputType = {
    account_id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    account_id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    account_id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account to aggregate.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountWhereInput
    orderBy?: accountOrderByWithAggregationInput | accountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    account_id: number
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user_players?: boolean | account$user_playersArgs<ExtArgs>
    user_clubs?: boolean | account$user_clubsArgs<ExtArgs>
    user_info?: boolean | account$user_infoArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectScalar = {
    account_id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_players?: boolean | account$user_playersArgs<ExtArgs>
    user_clubs?: boolean | account$user_clubsArgs<ExtArgs>
    user_info?: boolean | account$user_infoArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "account"
    objects: {
      user_players: Prisma.$user_playerPayload<ExtArgs>[]
      user_clubs: Prisma.$user_clubPayload<ExtArgs>[]
      user_info: Prisma.$user_infoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      account_id: number
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type accountGetPayload<S extends boolean | null | undefined | accountDefaultArgs> = $Result.GetResult<Prisma.$accountPayload, S>

  type accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<accountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['account'], meta: { name: 'account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {accountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends accountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, accountFindUniqueArgs<ExtArgs>>
    ): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {accountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends accountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, accountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends accountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, accountFindFirstArgs<ExtArgs>>
    ): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends accountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, accountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `account_id`
     * const accountWithAccount_idOnly = await prisma.account.findMany({ select: { account_id: true } })
     * 
    **/
    findMany<T extends accountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, accountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {accountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends accountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, accountCreateArgs<ExtArgs>>
    ): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {accountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends accountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, accountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {accountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends accountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, accountDeleteArgs<ExtArgs>>
    ): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {accountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends accountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, accountUpdateArgs<ExtArgs>>
    ): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {accountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends accountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, accountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends accountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, accountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {accountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends accountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, accountUpsertArgs<ExtArgs>>
    ): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountCountArgs>(
      args?: Subset<T, accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountGroupByArgs['orderBy'] }
        : { orderBy?: accountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the account model
   */
  readonly fields: accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user_players<T extends account$user_playersArgs<ExtArgs> = {}>(args?: Subset<T, account$user_playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_playerPayload<ExtArgs>, T, 'findMany'> | Null>;

    user_clubs<T extends account$user_clubsArgs<ExtArgs> = {}>(args?: Subset<T, account$user_clubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_clubPayload<ExtArgs>, T, 'findMany'> | Null>;

    user_info<T extends account$user_infoArgs<ExtArgs> = {}>(args?: Subset<T, account$user_infoArgs<ExtArgs>>): Prisma__user_infoClient<$Result.GetResult<Prisma.$user_infoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the account model
   */ 
  interface accountFieldRefs {
    readonly account_id: FieldRef<"account", 'Int'>
    readonly username: FieldRef<"account", 'String'>
    readonly password: FieldRef<"account", 'String'>
    readonly createdAt: FieldRef<"account", 'DateTime'>
    readonly updatedAt: FieldRef<"account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * account findUnique
   */
  export type accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findUniqueOrThrow
   */
  export type accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findFirst
   */
  export type accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findFirstOrThrow
   */
  export type accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findMany
   */
  export type accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account create
   */
  export type accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to create a account.
     */
    data: XOR<accountCreateInput, accountUncheckedCreateInput>
  }

  /**
   * account createMany
   */
  export type accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountCreateManyInput | accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * account update
   */
  export type accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to update a account.
     */
    data: XOR<accountUpdateInput, accountUncheckedUpdateInput>
    /**
     * Choose, which account to update.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account updateMany
   */
  export type accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
  }

  /**
   * account upsert
   */
  export type accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The filter to search for the account to update in case it exists.
     */
    where: accountWhereUniqueInput
    /**
     * In case the account found by the `where` argument doesn't exist, create a new account with this data.
     */
    create: XOR<accountCreateInput, accountUncheckedCreateInput>
    /**
     * In case the account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountUpdateInput, accountUncheckedUpdateInput>
  }

  /**
   * account delete
   */
  export type accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter which account to delete.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account deleteMany
   */
  export type accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountWhereInput
  }

  /**
   * account.user_players
   */
  export type account$user_playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_player
     */
    select?: user_playerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_playerInclude<ExtArgs> | null
    where?: user_playerWhereInput
    orderBy?: user_playerOrderByWithRelationInput | user_playerOrderByWithRelationInput[]
    cursor?: user_playerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_playerScalarFieldEnum | User_playerScalarFieldEnum[]
  }

  /**
   * account.user_clubs
   */
  export type account$user_clubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_club
     */
    select?: user_clubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_clubInclude<ExtArgs> | null
    where?: user_clubWhereInput
    orderBy?: user_clubOrderByWithRelationInput | user_clubOrderByWithRelationInput[]
    cursor?: user_clubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_clubScalarFieldEnum | User_clubScalarFieldEnum[]
  }

  /**
   * account.user_info
   */
  export type account$user_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_info
     */
    select?: user_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_infoInclude<ExtArgs> | null
    where?: user_infoWhereInput
  }

  /**
   * account without action
   */
  export type accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
  }


  /**
   * Model user_player
   */

  export type AggregateUser_player = {
    _count: User_playerCountAggregateOutputType | null
    _avg: User_playerAvgAggregateOutputType | null
    _sum: User_playerSumAggregateOutputType | null
    _min: User_playerMinAggregateOutputType | null
    _max: User_playerMaxAggregateOutputType | null
  }

  export type User_playerAvgAggregateOutputType = {
    account_id: number | null
    player_id: number | null
    count: number | null
    enhancement_level: number | null
  }

  export type User_playerSumAggregateOutputType = {
    account_id: number | null
    player_id: number | null
    count: number | null
    enhancement_level: number | null
  }

  export type User_playerMinAggregateOutputType = {
    account_id: number | null
    player_id: number | null
    count: number | null
    enhancement_level: number | null
  }

  export type User_playerMaxAggregateOutputType = {
    account_id: number | null
    player_id: number | null
    count: number | null
    enhancement_level: number | null
  }

  export type User_playerCountAggregateOutputType = {
    account_id: number
    player_id: number
    count: number
    enhancement_level: number
    _all: number
  }


  export type User_playerAvgAggregateInputType = {
    account_id?: true
    player_id?: true
    count?: true
    enhancement_level?: true
  }

  export type User_playerSumAggregateInputType = {
    account_id?: true
    player_id?: true
    count?: true
    enhancement_level?: true
  }

  export type User_playerMinAggregateInputType = {
    account_id?: true
    player_id?: true
    count?: true
    enhancement_level?: true
  }

  export type User_playerMaxAggregateInputType = {
    account_id?: true
    player_id?: true
    count?: true
    enhancement_level?: true
  }

  export type User_playerCountAggregateInputType = {
    account_id?: true
    player_id?: true
    count?: true
    enhancement_level?: true
    _all?: true
  }

  export type User_playerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_player to aggregate.
     */
    where?: user_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_players to fetch.
     */
    orderBy?: user_playerOrderByWithRelationInput | user_playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_players
    **/
    _count?: true | User_playerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_playerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_playerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_playerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_playerMaxAggregateInputType
  }

  export type GetUser_playerAggregateType<T extends User_playerAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_player]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_player[P]>
      : GetScalarType<T[P], AggregateUser_player[P]>
  }




  export type user_playerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_playerWhereInput
    orderBy?: user_playerOrderByWithAggregationInput | user_playerOrderByWithAggregationInput[]
    by: User_playerScalarFieldEnum[] | User_playerScalarFieldEnum
    having?: user_playerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_playerCountAggregateInputType | true
    _avg?: User_playerAvgAggregateInputType
    _sum?: User_playerSumAggregateInputType
    _min?: User_playerMinAggregateInputType
    _max?: User_playerMaxAggregateInputType
  }

  export type User_playerGroupByOutputType = {
    account_id: number
    player_id: number
    count: number
    enhancement_level: number
    _count: User_playerCountAggregateOutputType | null
    _avg: User_playerAvgAggregateOutputType | null
    _sum: User_playerSumAggregateOutputType | null
    _min: User_playerMinAggregateOutputType | null
    _max: User_playerMaxAggregateOutputType | null
  }

  type GetUser_playerGroupByPayload<T extends user_playerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_playerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_playerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_playerGroupByOutputType[P]>
            : GetScalarType<T[P], User_playerGroupByOutputType[P]>
        }
      >
    >


  export type user_playerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    player_id?: boolean
    count?: boolean
    enhancement_level?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_player"]>

  export type user_playerSelectScalar = {
    account_id?: boolean
    player_id?: boolean
    count?: boolean
    enhancement_level?: boolean
  }


  export type user_playerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
  }


  export type $user_playerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_player"
    objects: {
      account: Prisma.$accountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      account_id: number
      player_id: number
      count: number
      enhancement_level: number
    }, ExtArgs["result"]["user_player"]>
    composites: {}
  }


  type user_playerGetPayload<S extends boolean | null | undefined | user_playerDefaultArgs> = $Result.GetResult<Prisma.$user_playerPayload, S>

  type user_playerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_playerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_playerCountAggregateInputType | true
    }

  export interface user_playerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_player'], meta: { name: 'user_player' } }
    /**
     * Find zero or one User_player that matches the filter.
     * @param {user_playerFindUniqueArgs} args - Arguments to find a User_player
     * @example
     * // Get one User_player
     * const user_player = await prisma.user_player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_playerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_playerFindUniqueArgs<ExtArgs>>
    ): Prisma__user_playerClient<$Result.GetResult<Prisma.$user_playerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_player that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {user_playerFindUniqueOrThrowArgs} args - Arguments to find a User_player
     * @example
     * // Get one User_player
     * const user_player = await prisma.user_player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_playerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_playerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_playerClient<$Result.GetResult<Prisma.$user_playerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_playerFindFirstArgs} args - Arguments to find a User_player
     * @example
     * // Get one User_player
     * const user_player = await prisma.user_player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_playerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_playerFindFirstArgs<ExtArgs>>
    ): Prisma__user_playerClient<$Result.GetResult<Prisma.$user_playerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_playerFindFirstOrThrowArgs} args - Arguments to find a User_player
     * @example
     * // Get one User_player
     * const user_player = await prisma.user_player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_playerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_playerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_playerClient<$Result.GetResult<Prisma.$user_playerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_playerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_players
     * const user_players = await prisma.user_player.findMany()
     * 
     * // Get first 10 User_players
     * const user_players = await prisma.user_player.findMany({ take: 10 })
     * 
     * // Only select the `account_id`
     * const user_playerWithAccount_idOnly = await prisma.user_player.findMany({ select: { account_id: true } })
     * 
    **/
    findMany<T extends user_playerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_playerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_playerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_player.
     * @param {user_playerCreateArgs} args - Arguments to create a User_player.
     * @example
     * // Create one User_player
     * const User_player = await prisma.user_player.create({
     *   data: {
     *     // ... data to create a User_player
     *   }
     * })
     * 
    **/
    create<T extends user_playerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_playerCreateArgs<ExtArgs>>
    ): Prisma__user_playerClient<$Result.GetResult<Prisma.$user_playerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_players.
     * @param {user_playerCreateManyArgs} args - Arguments to create many User_players.
     * @example
     * // Create many User_players
     * const user_player = await prisma.user_player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends user_playerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_playerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_player.
     * @param {user_playerDeleteArgs} args - Arguments to delete one User_player.
     * @example
     * // Delete one User_player
     * const User_player = await prisma.user_player.delete({
     *   where: {
     *     // ... filter to delete one User_player
     *   }
     * })
     * 
    **/
    delete<T extends user_playerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_playerDeleteArgs<ExtArgs>>
    ): Prisma__user_playerClient<$Result.GetResult<Prisma.$user_playerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_player.
     * @param {user_playerUpdateArgs} args - Arguments to update one User_player.
     * @example
     * // Update one User_player
     * const user_player = await prisma.user_player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_playerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_playerUpdateArgs<ExtArgs>>
    ): Prisma__user_playerClient<$Result.GetResult<Prisma.$user_playerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_players.
     * @param {user_playerDeleteManyArgs} args - Arguments to filter User_players to delete.
     * @example
     * // Delete a few User_players
     * const { count } = await prisma.user_player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_playerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_playerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_playerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_players
     * const user_player = await prisma.user_player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_playerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_playerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_player.
     * @param {user_playerUpsertArgs} args - Arguments to update or create a User_player.
     * @example
     * // Update or create a User_player
     * const user_player = await prisma.user_player.upsert({
     *   create: {
     *     // ... data to create a User_player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_player we want to update
     *   }
     * })
    **/
    upsert<T extends user_playerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_playerUpsertArgs<ExtArgs>>
    ): Prisma__user_playerClient<$Result.GetResult<Prisma.$user_playerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_playerCountArgs} args - Arguments to filter User_players to count.
     * @example
     * // Count the number of User_players
     * const count = await prisma.user_player.count({
     *   where: {
     *     // ... the filter for the User_players we want to count
     *   }
     * })
    **/
    count<T extends user_playerCountArgs>(
      args?: Subset<T, user_playerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_playerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_playerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_playerAggregateArgs>(args: Subset<T, User_playerAggregateArgs>): Prisma.PrismaPromise<GetUser_playerAggregateType<T>>

    /**
     * Group by User_player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_playerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_playerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_playerGroupByArgs['orderBy'] }
        : { orderBy?: user_playerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_playerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_playerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_player model
   */
  readonly fields: user_playerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_playerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user_player model
   */ 
  interface user_playerFieldRefs {
    readonly account_id: FieldRef<"user_player", 'Int'>
    readonly player_id: FieldRef<"user_player", 'Int'>
    readonly count: FieldRef<"user_player", 'Int'>
    readonly enhancement_level: FieldRef<"user_player", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_player findUnique
   */
  export type user_playerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_player
     */
    select?: user_playerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_playerInclude<ExtArgs> | null
    /**
     * Filter, which user_player to fetch.
     */
    where: user_playerWhereUniqueInput
  }

  /**
   * user_player findUniqueOrThrow
   */
  export type user_playerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_player
     */
    select?: user_playerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_playerInclude<ExtArgs> | null
    /**
     * Filter, which user_player to fetch.
     */
    where: user_playerWhereUniqueInput
  }

  /**
   * user_player findFirst
   */
  export type user_playerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_player
     */
    select?: user_playerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_playerInclude<ExtArgs> | null
    /**
     * Filter, which user_player to fetch.
     */
    where?: user_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_players to fetch.
     */
    orderBy?: user_playerOrderByWithRelationInput | user_playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_players.
     */
    cursor?: user_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_players.
     */
    distinct?: User_playerScalarFieldEnum | User_playerScalarFieldEnum[]
  }

  /**
   * user_player findFirstOrThrow
   */
  export type user_playerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_player
     */
    select?: user_playerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_playerInclude<ExtArgs> | null
    /**
     * Filter, which user_player to fetch.
     */
    where?: user_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_players to fetch.
     */
    orderBy?: user_playerOrderByWithRelationInput | user_playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_players.
     */
    cursor?: user_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_players.
     */
    distinct?: User_playerScalarFieldEnum | User_playerScalarFieldEnum[]
  }

  /**
   * user_player findMany
   */
  export type user_playerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_player
     */
    select?: user_playerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_playerInclude<ExtArgs> | null
    /**
     * Filter, which user_players to fetch.
     */
    where?: user_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_players to fetch.
     */
    orderBy?: user_playerOrderByWithRelationInput | user_playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_players.
     */
    cursor?: user_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_players.
     */
    skip?: number
    distinct?: User_playerScalarFieldEnum | User_playerScalarFieldEnum[]
  }

  /**
   * user_player create
   */
  export type user_playerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_player
     */
    select?: user_playerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_playerInclude<ExtArgs> | null
    /**
     * The data needed to create a user_player.
     */
    data: XOR<user_playerCreateInput, user_playerUncheckedCreateInput>
  }

  /**
   * user_player createMany
   */
  export type user_playerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_players.
     */
    data: user_playerCreateManyInput | user_playerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_player update
   */
  export type user_playerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_player
     */
    select?: user_playerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_playerInclude<ExtArgs> | null
    /**
     * The data needed to update a user_player.
     */
    data: XOR<user_playerUpdateInput, user_playerUncheckedUpdateInput>
    /**
     * Choose, which user_player to update.
     */
    where: user_playerWhereUniqueInput
  }

  /**
   * user_player updateMany
   */
  export type user_playerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_players.
     */
    data: XOR<user_playerUpdateManyMutationInput, user_playerUncheckedUpdateManyInput>
    /**
     * Filter which user_players to update
     */
    where?: user_playerWhereInput
  }

  /**
   * user_player upsert
   */
  export type user_playerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_player
     */
    select?: user_playerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_playerInclude<ExtArgs> | null
    /**
     * The filter to search for the user_player to update in case it exists.
     */
    where: user_playerWhereUniqueInput
    /**
     * In case the user_player found by the `where` argument doesn't exist, create a new user_player with this data.
     */
    create: XOR<user_playerCreateInput, user_playerUncheckedCreateInput>
    /**
     * In case the user_player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_playerUpdateInput, user_playerUncheckedUpdateInput>
  }

  /**
   * user_player delete
   */
  export type user_playerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_player
     */
    select?: user_playerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_playerInclude<ExtArgs> | null
    /**
     * Filter which user_player to delete.
     */
    where: user_playerWhereUniqueInput
  }

  /**
   * user_player deleteMany
   */
  export type user_playerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_players to delete
     */
    where?: user_playerWhereInput
  }

  /**
   * user_player without action
   */
  export type user_playerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_player
     */
    select?: user_playerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_playerInclude<ExtArgs> | null
  }


  /**
   * Model user_club
   */

  export type AggregateUser_club = {
    _count: User_clubCountAggregateOutputType | null
    _avg: User_clubAvgAggregateOutputType | null
    _sum: User_clubSumAggregateOutputType | null
    _min: User_clubMinAggregateOutputType | null
    _max: User_clubMaxAggregateOutputType | null
  }

  export type User_clubAvgAggregateOutputType = {
    account_id: number | null
    player_id: number | null
    enhancement_level: number | null
  }

  export type User_clubSumAggregateOutputType = {
    account_id: number | null
    player_id: number | null
    enhancement_level: number | null
  }

  export type User_clubMinAggregateOutputType = {
    account_id: number | null
    player_id: number | null
    enhancement_level: number | null
  }

  export type User_clubMaxAggregateOutputType = {
    account_id: number | null
    player_id: number | null
    enhancement_level: number | null
  }

  export type User_clubCountAggregateOutputType = {
    account_id: number
    player_id: number
    enhancement_level: number
    _all: number
  }


  export type User_clubAvgAggregateInputType = {
    account_id?: true
    player_id?: true
    enhancement_level?: true
  }

  export type User_clubSumAggregateInputType = {
    account_id?: true
    player_id?: true
    enhancement_level?: true
  }

  export type User_clubMinAggregateInputType = {
    account_id?: true
    player_id?: true
    enhancement_level?: true
  }

  export type User_clubMaxAggregateInputType = {
    account_id?: true
    player_id?: true
    enhancement_level?: true
  }

  export type User_clubCountAggregateInputType = {
    account_id?: true
    player_id?: true
    enhancement_level?: true
    _all?: true
  }

  export type User_clubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_club to aggregate.
     */
    where?: user_clubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_clubs to fetch.
     */
    orderBy?: user_clubOrderByWithRelationInput | user_clubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_clubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_clubs
    **/
    _count?: true | User_clubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_clubAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_clubSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_clubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_clubMaxAggregateInputType
  }

  export type GetUser_clubAggregateType<T extends User_clubAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_club]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_club[P]>
      : GetScalarType<T[P], AggregateUser_club[P]>
  }




  export type user_clubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_clubWhereInput
    orderBy?: user_clubOrderByWithAggregationInput | user_clubOrderByWithAggregationInput[]
    by: User_clubScalarFieldEnum[] | User_clubScalarFieldEnum
    having?: user_clubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_clubCountAggregateInputType | true
    _avg?: User_clubAvgAggregateInputType
    _sum?: User_clubSumAggregateInputType
    _min?: User_clubMinAggregateInputType
    _max?: User_clubMaxAggregateInputType
  }

  export type User_clubGroupByOutputType = {
    account_id: number
    player_id: number
    enhancement_level: number
    _count: User_clubCountAggregateOutputType | null
    _avg: User_clubAvgAggregateOutputType | null
    _sum: User_clubSumAggregateOutputType | null
    _min: User_clubMinAggregateOutputType | null
    _max: User_clubMaxAggregateOutputType | null
  }

  type GetUser_clubGroupByPayload<T extends user_clubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_clubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_clubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_clubGroupByOutputType[P]>
            : GetScalarType<T[P], User_clubGroupByOutputType[P]>
        }
      >
    >


  export type user_clubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    player_id?: boolean
    enhancement_level?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_club"]>

  export type user_clubSelectScalar = {
    account_id?: boolean
    player_id?: boolean
    enhancement_level?: boolean
  }


  export type user_clubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
  }


  export type $user_clubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_club"
    objects: {
      account: Prisma.$accountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      account_id: number
      player_id: number
      enhancement_level: number
    }, ExtArgs["result"]["user_club"]>
    composites: {}
  }


  type user_clubGetPayload<S extends boolean | null | undefined | user_clubDefaultArgs> = $Result.GetResult<Prisma.$user_clubPayload, S>

  type user_clubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_clubFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_clubCountAggregateInputType | true
    }

  export interface user_clubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_club'], meta: { name: 'user_club' } }
    /**
     * Find zero or one User_club that matches the filter.
     * @param {user_clubFindUniqueArgs} args - Arguments to find a User_club
     * @example
     * // Get one User_club
     * const user_club = await prisma.user_club.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_clubFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_clubFindUniqueArgs<ExtArgs>>
    ): Prisma__user_clubClient<$Result.GetResult<Prisma.$user_clubPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_club that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {user_clubFindUniqueOrThrowArgs} args - Arguments to find a User_club
     * @example
     * // Get one User_club
     * const user_club = await prisma.user_club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_clubFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_clubFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_clubClient<$Result.GetResult<Prisma.$user_clubPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_club that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_clubFindFirstArgs} args - Arguments to find a User_club
     * @example
     * // Get one User_club
     * const user_club = await prisma.user_club.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_clubFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_clubFindFirstArgs<ExtArgs>>
    ): Prisma__user_clubClient<$Result.GetResult<Prisma.$user_clubPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_club that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_clubFindFirstOrThrowArgs} args - Arguments to find a User_club
     * @example
     * // Get one User_club
     * const user_club = await prisma.user_club.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_clubFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_clubFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_clubClient<$Result.GetResult<Prisma.$user_clubPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_clubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_clubs
     * const user_clubs = await prisma.user_club.findMany()
     * 
     * // Get first 10 User_clubs
     * const user_clubs = await prisma.user_club.findMany({ take: 10 })
     * 
     * // Only select the `account_id`
     * const user_clubWithAccount_idOnly = await prisma.user_club.findMany({ select: { account_id: true } })
     * 
    **/
    findMany<T extends user_clubFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_clubFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_clubPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_club.
     * @param {user_clubCreateArgs} args - Arguments to create a User_club.
     * @example
     * // Create one User_club
     * const User_club = await prisma.user_club.create({
     *   data: {
     *     // ... data to create a User_club
     *   }
     * })
     * 
    **/
    create<T extends user_clubCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_clubCreateArgs<ExtArgs>>
    ): Prisma__user_clubClient<$Result.GetResult<Prisma.$user_clubPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_clubs.
     * @param {user_clubCreateManyArgs} args - Arguments to create many User_clubs.
     * @example
     * // Create many User_clubs
     * const user_club = await prisma.user_club.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends user_clubCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_clubCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_club.
     * @param {user_clubDeleteArgs} args - Arguments to delete one User_club.
     * @example
     * // Delete one User_club
     * const User_club = await prisma.user_club.delete({
     *   where: {
     *     // ... filter to delete one User_club
     *   }
     * })
     * 
    **/
    delete<T extends user_clubDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_clubDeleteArgs<ExtArgs>>
    ): Prisma__user_clubClient<$Result.GetResult<Prisma.$user_clubPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_club.
     * @param {user_clubUpdateArgs} args - Arguments to update one User_club.
     * @example
     * // Update one User_club
     * const user_club = await prisma.user_club.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_clubUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_clubUpdateArgs<ExtArgs>>
    ): Prisma__user_clubClient<$Result.GetResult<Prisma.$user_clubPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_clubs.
     * @param {user_clubDeleteManyArgs} args - Arguments to filter User_clubs to delete.
     * @example
     * // Delete a few User_clubs
     * const { count } = await prisma.user_club.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_clubDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_clubDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_clubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_clubs
     * const user_club = await prisma.user_club.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_clubUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_clubUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_club.
     * @param {user_clubUpsertArgs} args - Arguments to update or create a User_club.
     * @example
     * // Update or create a User_club
     * const user_club = await prisma.user_club.upsert({
     *   create: {
     *     // ... data to create a User_club
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_club we want to update
     *   }
     * })
    **/
    upsert<T extends user_clubUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_clubUpsertArgs<ExtArgs>>
    ): Prisma__user_clubClient<$Result.GetResult<Prisma.$user_clubPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_clubCountArgs} args - Arguments to filter User_clubs to count.
     * @example
     * // Count the number of User_clubs
     * const count = await prisma.user_club.count({
     *   where: {
     *     // ... the filter for the User_clubs we want to count
     *   }
     * })
    **/
    count<T extends user_clubCountArgs>(
      args?: Subset<T, user_clubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_clubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_clubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_clubAggregateArgs>(args: Subset<T, User_clubAggregateArgs>): Prisma.PrismaPromise<GetUser_clubAggregateType<T>>

    /**
     * Group by User_club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_clubGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_clubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_clubGroupByArgs['orderBy'] }
        : { orderBy?: user_clubGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_clubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_clubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_club model
   */
  readonly fields: user_clubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_club.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_clubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user_club model
   */ 
  interface user_clubFieldRefs {
    readonly account_id: FieldRef<"user_club", 'Int'>
    readonly player_id: FieldRef<"user_club", 'Int'>
    readonly enhancement_level: FieldRef<"user_club", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_club findUnique
   */
  export type user_clubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_club
     */
    select?: user_clubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_clubInclude<ExtArgs> | null
    /**
     * Filter, which user_club to fetch.
     */
    where: user_clubWhereUniqueInput
  }

  /**
   * user_club findUniqueOrThrow
   */
  export type user_clubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_club
     */
    select?: user_clubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_clubInclude<ExtArgs> | null
    /**
     * Filter, which user_club to fetch.
     */
    where: user_clubWhereUniqueInput
  }

  /**
   * user_club findFirst
   */
  export type user_clubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_club
     */
    select?: user_clubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_clubInclude<ExtArgs> | null
    /**
     * Filter, which user_club to fetch.
     */
    where?: user_clubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_clubs to fetch.
     */
    orderBy?: user_clubOrderByWithRelationInput | user_clubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_clubs.
     */
    cursor?: user_clubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_clubs.
     */
    distinct?: User_clubScalarFieldEnum | User_clubScalarFieldEnum[]
  }

  /**
   * user_club findFirstOrThrow
   */
  export type user_clubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_club
     */
    select?: user_clubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_clubInclude<ExtArgs> | null
    /**
     * Filter, which user_club to fetch.
     */
    where?: user_clubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_clubs to fetch.
     */
    orderBy?: user_clubOrderByWithRelationInput | user_clubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_clubs.
     */
    cursor?: user_clubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_clubs.
     */
    distinct?: User_clubScalarFieldEnum | User_clubScalarFieldEnum[]
  }

  /**
   * user_club findMany
   */
  export type user_clubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_club
     */
    select?: user_clubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_clubInclude<ExtArgs> | null
    /**
     * Filter, which user_clubs to fetch.
     */
    where?: user_clubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_clubs to fetch.
     */
    orderBy?: user_clubOrderByWithRelationInput | user_clubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_clubs.
     */
    cursor?: user_clubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_clubs.
     */
    skip?: number
    distinct?: User_clubScalarFieldEnum | User_clubScalarFieldEnum[]
  }

  /**
   * user_club create
   */
  export type user_clubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_club
     */
    select?: user_clubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_clubInclude<ExtArgs> | null
    /**
     * The data needed to create a user_club.
     */
    data: XOR<user_clubCreateInput, user_clubUncheckedCreateInput>
  }

  /**
   * user_club createMany
   */
  export type user_clubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_clubs.
     */
    data: user_clubCreateManyInput | user_clubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_club update
   */
  export type user_clubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_club
     */
    select?: user_clubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_clubInclude<ExtArgs> | null
    /**
     * The data needed to update a user_club.
     */
    data: XOR<user_clubUpdateInput, user_clubUncheckedUpdateInput>
    /**
     * Choose, which user_club to update.
     */
    where: user_clubWhereUniqueInput
  }

  /**
   * user_club updateMany
   */
  export type user_clubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_clubs.
     */
    data: XOR<user_clubUpdateManyMutationInput, user_clubUncheckedUpdateManyInput>
    /**
     * Filter which user_clubs to update
     */
    where?: user_clubWhereInput
  }

  /**
   * user_club upsert
   */
  export type user_clubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_club
     */
    select?: user_clubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_clubInclude<ExtArgs> | null
    /**
     * The filter to search for the user_club to update in case it exists.
     */
    where: user_clubWhereUniqueInput
    /**
     * In case the user_club found by the `where` argument doesn't exist, create a new user_club with this data.
     */
    create: XOR<user_clubCreateInput, user_clubUncheckedCreateInput>
    /**
     * In case the user_club was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_clubUpdateInput, user_clubUncheckedUpdateInput>
  }

  /**
   * user_club delete
   */
  export type user_clubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_club
     */
    select?: user_clubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_clubInclude<ExtArgs> | null
    /**
     * Filter which user_club to delete.
     */
    where: user_clubWhereUniqueInput
  }

  /**
   * user_club deleteMany
   */
  export type user_clubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_clubs to delete
     */
    where?: user_clubWhereInput
  }

  /**
   * user_club without action
   */
  export type user_clubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_club
     */
    select?: user_clubSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_clubInclude<ExtArgs> | null
  }


  /**
   * Model user_info
   */

  export type AggregateUser_info = {
    _count: User_infoCountAggregateOutputType | null
    _avg: User_infoAvgAggregateOutputType | null
    _sum: User_infoSumAggregateOutputType | null
    _min: User_infoMinAggregateOutputType | null
    _max: User_infoMaxAggregateOutputType | null
  }

  export type User_infoAvgAggregateOutputType = {
    account_id: number | null
    rank_score: number | null
    wins: number | null
    loses: number | null
    draws: number | null
    money: number | null
  }

  export type User_infoSumAggregateOutputType = {
    account_id: number | null
    rank_score: number | null
    wins: number | null
    loses: number | null
    draws: number | null
    money: number | null
  }

  export type User_infoMinAggregateOutputType = {
    account_id: number | null
    rank_score: number | null
    wins: number | null
    loses: number | null
    draws: number | null
    money: number | null
    have_club: boolean | null
  }

  export type User_infoMaxAggregateOutputType = {
    account_id: number | null
    rank_score: number | null
    wins: number | null
    loses: number | null
    draws: number | null
    money: number | null
    have_club: boolean | null
  }

  export type User_infoCountAggregateOutputType = {
    account_id: number
    rank_score: number
    wins: number
    loses: number
    draws: number
    money: number
    have_club: number
    _all: number
  }


  export type User_infoAvgAggregateInputType = {
    account_id?: true
    rank_score?: true
    wins?: true
    loses?: true
    draws?: true
    money?: true
  }

  export type User_infoSumAggregateInputType = {
    account_id?: true
    rank_score?: true
    wins?: true
    loses?: true
    draws?: true
    money?: true
  }

  export type User_infoMinAggregateInputType = {
    account_id?: true
    rank_score?: true
    wins?: true
    loses?: true
    draws?: true
    money?: true
    have_club?: true
  }

  export type User_infoMaxAggregateInputType = {
    account_id?: true
    rank_score?: true
    wins?: true
    loses?: true
    draws?: true
    money?: true
    have_club?: true
  }

  export type User_infoCountAggregateInputType = {
    account_id?: true
    rank_score?: true
    wins?: true
    loses?: true
    draws?: true
    money?: true
    have_club?: true
    _all?: true
  }

  export type User_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_info to aggregate.
     */
    where?: user_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_infos to fetch.
     */
    orderBy?: user_infoOrderByWithRelationInput | user_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_infos
    **/
    _count?: true | User_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_infoMaxAggregateInputType
  }

  export type GetUser_infoAggregateType<T extends User_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_info[P]>
      : GetScalarType<T[P], AggregateUser_info[P]>
  }




  export type user_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_infoWhereInput
    orderBy?: user_infoOrderByWithAggregationInput | user_infoOrderByWithAggregationInput[]
    by: User_infoScalarFieldEnum[] | User_infoScalarFieldEnum
    having?: user_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_infoCountAggregateInputType | true
    _avg?: User_infoAvgAggregateInputType
    _sum?: User_infoSumAggregateInputType
    _min?: User_infoMinAggregateInputType
    _max?: User_infoMaxAggregateInputType
  }

  export type User_infoGroupByOutputType = {
    account_id: number
    rank_score: number
    wins: number
    loses: number
    draws: number
    money: number
    have_club: boolean
    _count: User_infoCountAggregateOutputType | null
    _avg: User_infoAvgAggregateOutputType | null
    _sum: User_infoSumAggregateOutputType | null
    _min: User_infoMinAggregateOutputType | null
    _max: User_infoMaxAggregateOutputType | null
  }

  type GetUser_infoGroupByPayload<T extends user_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_infoGroupByOutputType[P]>
            : GetScalarType<T[P], User_infoGroupByOutputType[P]>
        }
      >
    >


  export type user_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    rank_score?: boolean
    wins?: boolean
    loses?: boolean
    draws?: boolean
    money?: boolean
    have_club?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_info"]>

  export type user_infoSelectScalar = {
    account_id?: boolean
    rank_score?: boolean
    wins?: boolean
    loses?: boolean
    draws?: boolean
    money?: boolean
    have_club?: boolean
  }


  export type user_infoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
  }


  export type $user_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_info"
    objects: {
      account: Prisma.$accountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      account_id: number
      rank_score: number
      wins: number
      loses: number
      draws: number
      money: number
      have_club: boolean
    }, ExtArgs["result"]["user_info"]>
    composites: {}
  }


  type user_infoGetPayload<S extends boolean | null | undefined | user_infoDefaultArgs> = $Result.GetResult<Prisma.$user_infoPayload, S>

  type user_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_infoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_infoCountAggregateInputType | true
    }

  export interface user_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_info'], meta: { name: 'user_info' } }
    /**
     * Find zero or one User_info that matches the filter.
     * @param {user_infoFindUniqueArgs} args - Arguments to find a User_info
     * @example
     * // Get one User_info
     * const user_info = await prisma.user_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_infoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_infoFindUniqueArgs<ExtArgs>>
    ): Prisma__user_infoClient<$Result.GetResult<Prisma.$user_infoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_info that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {user_infoFindUniqueOrThrowArgs} args - Arguments to find a User_info
     * @example
     * // Get one User_info
     * const user_info = await prisma.user_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_infoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_infoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__user_infoClient<$Result.GetResult<Prisma.$user_infoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_infoFindFirstArgs} args - Arguments to find a User_info
     * @example
     * // Get one User_info
     * const user_info = await prisma.user_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_infoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_infoFindFirstArgs<ExtArgs>>
    ): Prisma__user_infoClient<$Result.GetResult<Prisma.$user_infoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_infoFindFirstOrThrowArgs} args - Arguments to find a User_info
     * @example
     * // Get one User_info
     * const user_info = await prisma.user_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_infoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_infoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__user_infoClient<$Result.GetResult<Prisma.$user_infoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_infos
     * const user_infos = await prisma.user_info.findMany()
     * 
     * // Get first 10 User_infos
     * const user_infos = await prisma.user_info.findMany({ take: 10 })
     * 
     * // Only select the `account_id`
     * const user_infoWithAccount_idOnly = await prisma.user_info.findMany({ select: { account_id: true } })
     * 
    **/
    findMany<T extends user_infoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_infoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_infoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_info.
     * @param {user_infoCreateArgs} args - Arguments to create a User_info.
     * @example
     * // Create one User_info
     * const User_info = await prisma.user_info.create({
     *   data: {
     *     // ... data to create a User_info
     *   }
     * })
     * 
    **/
    create<T extends user_infoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_infoCreateArgs<ExtArgs>>
    ): Prisma__user_infoClient<$Result.GetResult<Prisma.$user_infoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_infos.
     * @param {user_infoCreateManyArgs} args - Arguments to create many User_infos.
     * @example
     * // Create many User_infos
     * const user_info = await prisma.user_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends user_infoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_infoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_info.
     * @param {user_infoDeleteArgs} args - Arguments to delete one User_info.
     * @example
     * // Delete one User_info
     * const User_info = await prisma.user_info.delete({
     *   where: {
     *     // ... filter to delete one User_info
     *   }
     * })
     * 
    **/
    delete<T extends user_infoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_infoDeleteArgs<ExtArgs>>
    ): Prisma__user_infoClient<$Result.GetResult<Prisma.$user_infoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_info.
     * @param {user_infoUpdateArgs} args - Arguments to update one User_info.
     * @example
     * // Update one User_info
     * const user_info = await prisma.user_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_infoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_infoUpdateArgs<ExtArgs>>
    ): Prisma__user_infoClient<$Result.GetResult<Prisma.$user_infoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_infos.
     * @param {user_infoDeleteManyArgs} args - Arguments to filter User_infos to delete.
     * @example
     * // Delete a few User_infos
     * const { count } = await prisma.user_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_infoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_infoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_infos
     * const user_info = await prisma.user_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_infoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_infoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_info.
     * @param {user_infoUpsertArgs} args - Arguments to update or create a User_info.
     * @example
     * // Update or create a User_info
     * const user_info = await prisma.user_info.upsert({
     *   create: {
     *     // ... data to create a User_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_info we want to update
     *   }
     * })
    **/
    upsert<T extends user_infoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_infoUpsertArgs<ExtArgs>>
    ): Prisma__user_infoClient<$Result.GetResult<Prisma.$user_infoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_infoCountArgs} args - Arguments to filter User_infos to count.
     * @example
     * // Count the number of User_infos
     * const count = await prisma.user_info.count({
     *   where: {
     *     // ... the filter for the User_infos we want to count
     *   }
     * })
    **/
    count<T extends user_infoCountArgs>(
      args?: Subset<T, user_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_infoAggregateArgs>(args: Subset<T, User_infoAggregateArgs>): Prisma.PrismaPromise<GetUser_infoAggregateType<T>>

    /**
     * Group by User_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_infoGroupByArgs['orderBy'] }
        : { orderBy?: user_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_info model
   */
  readonly fields: user_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user_info model
   */ 
  interface user_infoFieldRefs {
    readonly account_id: FieldRef<"user_info", 'Int'>
    readonly rank_score: FieldRef<"user_info", 'Int'>
    readonly wins: FieldRef<"user_info", 'Int'>
    readonly loses: FieldRef<"user_info", 'Int'>
    readonly draws: FieldRef<"user_info", 'Int'>
    readonly money: FieldRef<"user_info", 'Int'>
    readonly have_club: FieldRef<"user_info", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * user_info findUnique
   */
  export type user_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_info
     */
    select?: user_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_infoInclude<ExtArgs> | null
    /**
     * Filter, which user_info to fetch.
     */
    where: user_infoWhereUniqueInput
  }

  /**
   * user_info findUniqueOrThrow
   */
  export type user_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_info
     */
    select?: user_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_infoInclude<ExtArgs> | null
    /**
     * Filter, which user_info to fetch.
     */
    where: user_infoWhereUniqueInput
  }

  /**
   * user_info findFirst
   */
  export type user_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_info
     */
    select?: user_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_infoInclude<ExtArgs> | null
    /**
     * Filter, which user_info to fetch.
     */
    where?: user_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_infos to fetch.
     */
    orderBy?: user_infoOrderByWithRelationInput | user_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_infos.
     */
    cursor?: user_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_infos.
     */
    distinct?: User_infoScalarFieldEnum | User_infoScalarFieldEnum[]
  }

  /**
   * user_info findFirstOrThrow
   */
  export type user_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_info
     */
    select?: user_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_infoInclude<ExtArgs> | null
    /**
     * Filter, which user_info to fetch.
     */
    where?: user_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_infos to fetch.
     */
    orderBy?: user_infoOrderByWithRelationInput | user_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_infos.
     */
    cursor?: user_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_infos.
     */
    distinct?: User_infoScalarFieldEnum | User_infoScalarFieldEnum[]
  }

  /**
   * user_info findMany
   */
  export type user_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_info
     */
    select?: user_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_infoInclude<ExtArgs> | null
    /**
     * Filter, which user_infos to fetch.
     */
    where?: user_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_infos to fetch.
     */
    orderBy?: user_infoOrderByWithRelationInput | user_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_infos.
     */
    cursor?: user_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_infos.
     */
    skip?: number
    distinct?: User_infoScalarFieldEnum | User_infoScalarFieldEnum[]
  }

  /**
   * user_info create
   */
  export type user_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_info
     */
    select?: user_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_infoInclude<ExtArgs> | null
    /**
     * The data needed to create a user_info.
     */
    data: XOR<user_infoCreateInput, user_infoUncheckedCreateInput>
  }

  /**
   * user_info createMany
   */
  export type user_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_infos.
     */
    data: user_infoCreateManyInput | user_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_info update
   */
  export type user_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_info
     */
    select?: user_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_infoInclude<ExtArgs> | null
    /**
     * The data needed to update a user_info.
     */
    data: XOR<user_infoUpdateInput, user_infoUncheckedUpdateInput>
    /**
     * Choose, which user_info to update.
     */
    where: user_infoWhereUniqueInput
  }

  /**
   * user_info updateMany
   */
  export type user_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_infos.
     */
    data: XOR<user_infoUpdateManyMutationInput, user_infoUncheckedUpdateManyInput>
    /**
     * Filter which user_infos to update
     */
    where?: user_infoWhereInput
  }

  /**
   * user_info upsert
   */
  export type user_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_info
     */
    select?: user_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_infoInclude<ExtArgs> | null
    /**
     * The filter to search for the user_info to update in case it exists.
     */
    where: user_infoWhereUniqueInput
    /**
     * In case the user_info found by the `where` argument doesn't exist, create a new user_info with this data.
     */
    create: XOR<user_infoCreateInput, user_infoUncheckedCreateInput>
    /**
     * In case the user_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_infoUpdateInput, user_infoUncheckedUpdateInput>
  }

  /**
   * user_info delete
   */
  export type user_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_info
     */
    select?: user_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_infoInclude<ExtArgs> | null
    /**
     * Filter which user_info to delete.
     */
    where: user_infoWhereUniqueInput
  }

  /**
   * user_info deleteMany
   */
  export type user_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_infos to delete
     */
    where?: user_infoWhereInput
  }

  /**
   * user_info without action
   */
  export type user_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_info
     */
    select?: user_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_infoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    account_id: 'account_id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const User_playerScalarFieldEnum: {
    account_id: 'account_id',
    player_id: 'player_id',
    count: 'count',
    enhancement_level: 'enhancement_level'
  };

  export type User_playerScalarFieldEnum = (typeof User_playerScalarFieldEnum)[keyof typeof User_playerScalarFieldEnum]


  export const User_clubScalarFieldEnum: {
    account_id: 'account_id',
    player_id: 'player_id',
    enhancement_level: 'enhancement_level'
  };

  export type User_clubScalarFieldEnum = (typeof User_clubScalarFieldEnum)[keyof typeof User_clubScalarFieldEnum]


  export const User_infoScalarFieldEnum: {
    account_id: 'account_id',
    rank_score: 'rank_score',
    wins: 'wins',
    loses: 'loses',
    draws: 'draws',
    money: 'money',
    have_club: 'have_club'
  };

  export type User_infoScalarFieldEnum = (typeof User_infoScalarFieldEnum)[keyof typeof User_infoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type accountWhereInput = {
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    account_id?: IntFilter<"account"> | number
    username?: StringFilter<"account"> | string
    password?: StringFilter<"account"> | string
    createdAt?: DateTimeFilter<"account"> | Date | string
    updatedAt?: DateTimeFilter<"account"> | Date | string
    user_players?: User_playerListRelationFilter
    user_clubs?: User_clubListRelationFilter
    user_info?: XOR<User_infoNullableRelationFilter, user_infoWhereInput> | null
  }

  export type accountOrderByWithRelationInput = {
    account_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_players?: user_playerOrderByRelationAggregateInput
    user_clubs?: user_clubOrderByRelationAggregateInput
    user_info?: user_infoOrderByWithRelationInput
  }

  export type accountWhereUniqueInput = Prisma.AtLeast<{
    account_id?: number
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    username?: StringFilter<"account"> | string
    password?: StringFilter<"account"> | string
    createdAt?: DateTimeFilter<"account"> | Date | string
    updatedAt?: DateTimeFilter<"account"> | Date | string
    user_players?: User_playerListRelationFilter
    user_clubs?: User_clubListRelationFilter
    user_info?: XOR<User_infoNullableRelationFilter, user_infoWhereInput> | null
  }, "account_id">

  export type accountOrderByWithAggregationInput = {
    account_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: accountCountOrderByAggregateInput
    _avg?: accountAvgOrderByAggregateInput
    _max?: accountMaxOrderByAggregateInput
    _min?: accountMinOrderByAggregateInput
    _sum?: accountSumOrderByAggregateInput
  }

  export type accountScalarWhereWithAggregatesInput = {
    AND?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    OR?: accountScalarWhereWithAggregatesInput[]
    NOT?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    account_id?: IntWithAggregatesFilter<"account"> | number
    username?: StringWithAggregatesFilter<"account"> | string
    password?: StringWithAggregatesFilter<"account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"account"> | Date | string
  }

  export type user_playerWhereInput = {
    AND?: user_playerWhereInput | user_playerWhereInput[]
    OR?: user_playerWhereInput[]
    NOT?: user_playerWhereInput | user_playerWhereInput[]
    account_id?: IntFilter<"user_player"> | number
    player_id?: IntFilter<"user_player"> | number
    count?: IntFilter<"user_player"> | number
    enhancement_level?: IntFilter<"user_player"> | number
    account?: XOR<AccountRelationFilter, accountWhereInput>
  }

  export type user_playerOrderByWithRelationInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
    enhancement_level?: SortOrder
    account?: accountOrderByWithRelationInput
  }

  export type user_playerWhereUniqueInput = Prisma.AtLeast<{
    account_id_player_id_enhancement_level?: user_playerAccount_idPlayer_idEnhancement_levelCompoundUniqueInput
    AND?: user_playerWhereInput | user_playerWhereInput[]
    OR?: user_playerWhereInput[]
    NOT?: user_playerWhereInput | user_playerWhereInput[]
    account_id?: IntFilter<"user_player"> | number
    player_id?: IntFilter<"user_player"> | number
    count?: IntFilter<"user_player"> | number
    enhancement_level?: IntFilter<"user_player"> | number
    account?: XOR<AccountRelationFilter, accountWhereInput>
  }, "account_id_player_id_enhancement_level">

  export type user_playerOrderByWithAggregationInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
    enhancement_level?: SortOrder
    _count?: user_playerCountOrderByAggregateInput
    _avg?: user_playerAvgOrderByAggregateInput
    _max?: user_playerMaxOrderByAggregateInput
    _min?: user_playerMinOrderByAggregateInput
    _sum?: user_playerSumOrderByAggregateInput
  }

  export type user_playerScalarWhereWithAggregatesInput = {
    AND?: user_playerScalarWhereWithAggregatesInput | user_playerScalarWhereWithAggregatesInput[]
    OR?: user_playerScalarWhereWithAggregatesInput[]
    NOT?: user_playerScalarWhereWithAggregatesInput | user_playerScalarWhereWithAggregatesInput[]
    account_id?: IntWithAggregatesFilter<"user_player"> | number
    player_id?: IntWithAggregatesFilter<"user_player"> | number
    count?: IntWithAggregatesFilter<"user_player"> | number
    enhancement_level?: IntWithAggregatesFilter<"user_player"> | number
  }

  export type user_clubWhereInput = {
    AND?: user_clubWhereInput | user_clubWhereInput[]
    OR?: user_clubWhereInput[]
    NOT?: user_clubWhereInput | user_clubWhereInput[]
    account_id?: IntFilter<"user_club"> | number
    player_id?: IntFilter<"user_club"> | number
    enhancement_level?: IntFilter<"user_club"> | number
    account?: XOR<AccountRelationFilter, accountWhereInput>
  }

  export type user_clubOrderByWithRelationInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    enhancement_level?: SortOrder
    account?: accountOrderByWithRelationInput
  }

  export type user_clubWhereUniqueInput = Prisma.AtLeast<{
    account_id_player_id?: user_clubAccount_idPlayer_idCompoundUniqueInput
    AND?: user_clubWhereInput | user_clubWhereInput[]
    OR?: user_clubWhereInput[]
    NOT?: user_clubWhereInput | user_clubWhereInput[]
    account_id?: IntFilter<"user_club"> | number
    player_id?: IntFilter<"user_club"> | number
    enhancement_level?: IntFilter<"user_club"> | number
    account?: XOR<AccountRelationFilter, accountWhereInput>
  }, "account_id_player_id">

  export type user_clubOrderByWithAggregationInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    enhancement_level?: SortOrder
    _count?: user_clubCountOrderByAggregateInput
    _avg?: user_clubAvgOrderByAggregateInput
    _max?: user_clubMaxOrderByAggregateInput
    _min?: user_clubMinOrderByAggregateInput
    _sum?: user_clubSumOrderByAggregateInput
  }

  export type user_clubScalarWhereWithAggregatesInput = {
    AND?: user_clubScalarWhereWithAggregatesInput | user_clubScalarWhereWithAggregatesInput[]
    OR?: user_clubScalarWhereWithAggregatesInput[]
    NOT?: user_clubScalarWhereWithAggregatesInput | user_clubScalarWhereWithAggregatesInput[]
    account_id?: IntWithAggregatesFilter<"user_club"> | number
    player_id?: IntWithAggregatesFilter<"user_club"> | number
    enhancement_level?: IntWithAggregatesFilter<"user_club"> | number
  }

  export type user_infoWhereInput = {
    AND?: user_infoWhereInput | user_infoWhereInput[]
    OR?: user_infoWhereInput[]
    NOT?: user_infoWhereInput | user_infoWhereInput[]
    account_id?: IntFilter<"user_info"> | number
    rank_score?: IntFilter<"user_info"> | number
    wins?: IntFilter<"user_info"> | number
    loses?: IntFilter<"user_info"> | number
    draws?: IntFilter<"user_info"> | number
    money?: IntFilter<"user_info"> | number
    have_club?: BoolFilter<"user_info"> | boolean
    account?: XOR<AccountRelationFilter, accountWhereInput>
  }

  export type user_infoOrderByWithRelationInput = {
    account_id?: SortOrder
    rank_score?: SortOrder
    wins?: SortOrder
    loses?: SortOrder
    draws?: SortOrder
    money?: SortOrder
    have_club?: SortOrder
    account?: accountOrderByWithRelationInput
  }

  export type user_infoWhereUniqueInput = Prisma.AtLeast<{
    account_id?: number
    AND?: user_infoWhereInput | user_infoWhereInput[]
    OR?: user_infoWhereInput[]
    NOT?: user_infoWhereInput | user_infoWhereInput[]
    rank_score?: IntFilter<"user_info"> | number
    wins?: IntFilter<"user_info"> | number
    loses?: IntFilter<"user_info"> | number
    draws?: IntFilter<"user_info"> | number
    money?: IntFilter<"user_info"> | number
    have_club?: BoolFilter<"user_info"> | boolean
    account?: XOR<AccountRelationFilter, accountWhereInput>
  }, "account_id">

  export type user_infoOrderByWithAggregationInput = {
    account_id?: SortOrder
    rank_score?: SortOrder
    wins?: SortOrder
    loses?: SortOrder
    draws?: SortOrder
    money?: SortOrder
    have_club?: SortOrder
    _count?: user_infoCountOrderByAggregateInput
    _avg?: user_infoAvgOrderByAggregateInput
    _max?: user_infoMaxOrderByAggregateInput
    _min?: user_infoMinOrderByAggregateInput
    _sum?: user_infoSumOrderByAggregateInput
  }

  export type user_infoScalarWhereWithAggregatesInput = {
    AND?: user_infoScalarWhereWithAggregatesInput | user_infoScalarWhereWithAggregatesInput[]
    OR?: user_infoScalarWhereWithAggregatesInput[]
    NOT?: user_infoScalarWhereWithAggregatesInput | user_infoScalarWhereWithAggregatesInput[]
    account_id?: IntWithAggregatesFilter<"user_info"> | number
    rank_score?: IntWithAggregatesFilter<"user_info"> | number
    wins?: IntWithAggregatesFilter<"user_info"> | number
    loses?: IntWithAggregatesFilter<"user_info"> | number
    draws?: IntWithAggregatesFilter<"user_info"> | number
    money?: IntWithAggregatesFilter<"user_info"> | number
    have_club?: BoolWithAggregatesFilter<"user_info"> | boolean
  }

  export type accountCreateInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_players?: user_playerCreateNestedManyWithoutAccountInput
    user_clubs?: user_clubCreateNestedManyWithoutAccountInput
    user_info?: user_infoCreateNestedOneWithoutAccountInput
  }

  export type accountUncheckedCreateInput = {
    account_id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_players?: user_playerUncheckedCreateNestedManyWithoutAccountInput
    user_clubs?: user_clubUncheckedCreateNestedManyWithoutAccountInput
    user_info?: user_infoUncheckedCreateNestedOneWithoutAccountInput
  }

  export type accountUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_players?: user_playerUpdateManyWithoutAccountNestedInput
    user_clubs?: user_clubUpdateManyWithoutAccountNestedInput
    user_info?: user_infoUpdateOneWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_players?: user_playerUncheckedUpdateManyWithoutAccountNestedInput
    user_clubs?: user_clubUncheckedUpdateManyWithoutAccountNestedInput
    user_info?: user_infoUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type accountCreateManyInput = {
    account_id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountUncheckedUpdateManyInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_playerCreateInput = {
    player_id: number
    count: number
    enhancement_level?: number
    account: accountCreateNestedOneWithoutUser_playersInput
  }

  export type user_playerUncheckedCreateInput = {
    account_id: number
    player_id: number
    count: number
    enhancement_level?: number
  }

  export type user_playerUpdateInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
    account?: accountUpdateOneRequiredWithoutUser_playersNestedInput
  }

  export type user_playerUncheckedUpdateInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
  }

  export type user_playerCreateManyInput = {
    account_id: number
    player_id: number
    count: number
    enhancement_level?: number
  }

  export type user_playerUpdateManyMutationInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
  }

  export type user_playerUncheckedUpdateManyInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
  }

  export type user_clubCreateInput = {
    player_id: number
    enhancement_level?: number
    account: accountCreateNestedOneWithoutUser_clubsInput
  }

  export type user_clubUncheckedCreateInput = {
    account_id: number
    player_id: number
    enhancement_level?: number
  }

  export type user_clubUpdateInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
    account?: accountUpdateOneRequiredWithoutUser_clubsNestedInput
  }

  export type user_clubUncheckedUpdateInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
  }

  export type user_clubCreateManyInput = {
    account_id: number
    player_id: number
    enhancement_level?: number
  }

  export type user_clubUpdateManyMutationInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
  }

  export type user_clubUncheckedUpdateManyInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
  }

  export type user_infoCreateInput = {
    rank_score?: number
    wins?: number
    loses?: number
    draws?: number
    money?: number
    have_club?: boolean
    account: accountCreateNestedOneWithoutUser_infoInput
  }

  export type user_infoUncheckedCreateInput = {
    account_id: number
    rank_score?: number
    wins?: number
    loses?: number
    draws?: number
    money?: number
    have_club?: boolean
  }

  export type user_infoUpdateInput = {
    rank_score?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    loses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    have_club?: BoolFieldUpdateOperationsInput | boolean
    account?: accountUpdateOneRequiredWithoutUser_infoNestedInput
  }

  export type user_infoUncheckedUpdateInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    rank_score?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    loses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    have_club?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_infoCreateManyInput = {
    account_id: number
    rank_score?: number
    wins?: number
    loses?: number
    draws?: number
    money?: number
    have_club?: boolean
  }

  export type user_infoUpdateManyMutationInput = {
    rank_score?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    loses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    have_club?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_infoUncheckedUpdateManyInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    rank_score?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    loses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    have_club?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type User_playerListRelationFilter = {
    every?: user_playerWhereInput
    some?: user_playerWhereInput
    none?: user_playerWhereInput
  }

  export type User_clubListRelationFilter = {
    every?: user_clubWhereInput
    some?: user_clubWhereInput
    none?: user_clubWhereInput
  }

  export type User_infoNullableRelationFilter = {
    is?: user_infoWhereInput | null
    isNot?: user_infoWhereInput | null
  }

  export type user_playerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_clubOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accountCountOrderByAggregateInput = {
    account_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountAvgOrderByAggregateInput = {
    account_id?: SortOrder
  }

  export type accountMaxOrderByAggregateInput = {
    account_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountMinOrderByAggregateInput = {
    account_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountSumOrderByAggregateInput = {
    account_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AccountRelationFilter = {
    is?: accountWhereInput
    isNot?: accountWhereInput
  }

  export type user_playerAccount_idPlayer_idEnhancement_levelCompoundUniqueInput = {
    account_id: number
    player_id: number
    enhancement_level: number
  }

  export type user_playerCountOrderByAggregateInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
    enhancement_level?: SortOrder
  }

  export type user_playerAvgOrderByAggregateInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
    enhancement_level?: SortOrder
  }

  export type user_playerMaxOrderByAggregateInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
    enhancement_level?: SortOrder
  }

  export type user_playerMinOrderByAggregateInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
    enhancement_level?: SortOrder
  }

  export type user_playerSumOrderByAggregateInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    count?: SortOrder
    enhancement_level?: SortOrder
  }

  export type user_clubAccount_idPlayer_idCompoundUniqueInput = {
    account_id: number
    player_id: number
  }

  export type user_clubCountOrderByAggregateInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    enhancement_level?: SortOrder
  }

  export type user_clubAvgOrderByAggregateInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    enhancement_level?: SortOrder
  }

  export type user_clubMaxOrderByAggregateInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    enhancement_level?: SortOrder
  }

  export type user_clubMinOrderByAggregateInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    enhancement_level?: SortOrder
  }

  export type user_clubSumOrderByAggregateInput = {
    account_id?: SortOrder
    player_id?: SortOrder
    enhancement_level?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type user_infoCountOrderByAggregateInput = {
    account_id?: SortOrder
    rank_score?: SortOrder
    wins?: SortOrder
    loses?: SortOrder
    draws?: SortOrder
    money?: SortOrder
    have_club?: SortOrder
  }

  export type user_infoAvgOrderByAggregateInput = {
    account_id?: SortOrder
    rank_score?: SortOrder
    wins?: SortOrder
    loses?: SortOrder
    draws?: SortOrder
    money?: SortOrder
  }

  export type user_infoMaxOrderByAggregateInput = {
    account_id?: SortOrder
    rank_score?: SortOrder
    wins?: SortOrder
    loses?: SortOrder
    draws?: SortOrder
    money?: SortOrder
    have_club?: SortOrder
  }

  export type user_infoMinOrderByAggregateInput = {
    account_id?: SortOrder
    rank_score?: SortOrder
    wins?: SortOrder
    loses?: SortOrder
    draws?: SortOrder
    money?: SortOrder
    have_club?: SortOrder
  }

  export type user_infoSumOrderByAggregateInput = {
    account_id?: SortOrder
    rank_score?: SortOrder
    wins?: SortOrder
    loses?: SortOrder
    draws?: SortOrder
    money?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type user_playerCreateNestedManyWithoutAccountInput = {
    create?: XOR<user_playerCreateWithoutAccountInput, user_playerUncheckedCreateWithoutAccountInput> | user_playerCreateWithoutAccountInput[] | user_playerUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: user_playerCreateOrConnectWithoutAccountInput | user_playerCreateOrConnectWithoutAccountInput[]
    createMany?: user_playerCreateManyAccountInputEnvelope
    connect?: user_playerWhereUniqueInput | user_playerWhereUniqueInput[]
  }

  export type user_clubCreateNestedManyWithoutAccountInput = {
    create?: XOR<user_clubCreateWithoutAccountInput, user_clubUncheckedCreateWithoutAccountInput> | user_clubCreateWithoutAccountInput[] | user_clubUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: user_clubCreateOrConnectWithoutAccountInput | user_clubCreateOrConnectWithoutAccountInput[]
    createMany?: user_clubCreateManyAccountInputEnvelope
    connect?: user_clubWhereUniqueInput | user_clubWhereUniqueInput[]
  }

  export type user_infoCreateNestedOneWithoutAccountInput = {
    create?: XOR<user_infoCreateWithoutAccountInput, user_infoUncheckedCreateWithoutAccountInput>
    connectOrCreate?: user_infoCreateOrConnectWithoutAccountInput
    connect?: user_infoWhereUniqueInput
  }

  export type user_playerUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<user_playerCreateWithoutAccountInput, user_playerUncheckedCreateWithoutAccountInput> | user_playerCreateWithoutAccountInput[] | user_playerUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: user_playerCreateOrConnectWithoutAccountInput | user_playerCreateOrConnectWithoutAccountInput[]
    createMany?: user_playerCreateManyAccountInputEnvelope
    connect?: user_playerWhereUniqueInput | user_playerWhereUniqueInput[]
  }

  export type user_clubUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<user_clubCreateWithoutAccountInput, user_clubUncheckedCreateWithoutAccountInput> | user_clubCreateWithoutAccountInput[] | user_clubUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: user_clubCreateOrConnectWithoutAccountInput | user_clubCreateOrConnectWithoutAccountInput[]
    createMany?: user_clubCreateManyAccountInputEnvelope
    connect?: user_clubWhereUniqueInput | user_clubWhereUniqueInput[]
  }

  export type user_infoUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<user_infoCreateWithoutAccountInput, user_infoUncheckedCreateWithoutAccountInput>
    connectOrCreate?: user_infoCreateOrConnectWithoutAccountInput
    connect?: user_infoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type user_playerUpdateManyWithoutAccountNestedInput = {
    create?: XOR<user_playerCreateWithoutAccountInput, user_playerUncheckedCreateWithoutAccountInput> | user_playerCreateWithoutAccountInput[] | user_playerUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: user_playerCreateOrConnectWithoutAccountInput | user_playerCreateOrConnectWithoutAccountInput[]
    upsert?: user_playerUpsertWithWhereUniqueWithoutAccountInput | user_playerUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: user_playerCreateManyAccountInputEnvelope
    set?: user_playerWhereUniqueInput | user_playerWhereUniqueInput[]
    disconnect?: user_playerWhereUniqueInput | user_playerWhereUniqueInput[]
    delete?: user_playerWhereUniqueInput | user_playerWhereUniqueInput[]
    connect?: user_playerWhereUniqueInput | user_playerWhereUniqueInput[]
    update?: user_playerUpdateWithWhereUniqueWithoutAccountInput | user_playerUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: user_playerUpdateManyWithWhereWithoutAccountInput | user_playerUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: user_playerScalarWhereInput | user_playerScalarWhereInput[]
  }

  export type user_clubUpdateManyWithoutAccountNestedInput = {
    create?: XOR<user_clubCreateWithoutAccountInput, user_clubUncheckedCreateWithoutAccountInput> | user_clubCreateWithoutAccountInput[] | user_clubUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: user_clubCreateOrConnectWithoutAccountInput | user_clubCreateOrConnectWithoutAccountInput[]
    upsert?: user_clubUpsertWithWhereUniqueWithoutAccountInput | user_clubUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: user_clubCreateManyAccountInputEnvelope
    set?: user_clubWhereUniqueInput | user_clubWhereUniqueInput[]
    disconnect?: user_clubWhereUniqueInput | user_clubWhereUniqueInput[]
    delete?: user_clubWhereUniqueInput | user_clubWhereUniqueInput[]
    connect?: user_clubWhereUniqueInput | user_clubWhereUniqueInput[]
    update?: user_clubUpdateWithWhereUniqueWithoutAccountInput | user_clubUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: user_clubUpdateManyWithWhereWithoutAccountInput | user_clubUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: user_clubScalarWhereInput | user_clubScalarWhereInput[]
  }

  export type user_infoUpdateOneWithoutAccountNestedInput = {
    create?: XOR<user_infoCreateWithoutAccountInput, user_infoUncheckedCreateWithoutAccountInput>
    connectOrCreate?: user_infoCreateOrConnectWithoutAccountInput
    upsert?: user_infoUpsertWithoutAccountInput
    disconnect?: user_infoWhereInput | boolean
    delete?: user_infoWhereInput | boolean
    connect?: user_infoWhereUniqueInput
    update?: XOR<XOR<user_infoUpdateToOneWithWhereWithoutAccountInput, user_infoUpdateWithoutAccountInput>, user_infoUncheckedUpdateWithoutAccountInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_playerUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<user_playerCreateWithoutAccountInput, user_playerUncheckedCreateWithoutAccountInput> | user_playerCreateWithoutAccountInput[] | user_playerUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: user_playerCreateOrConnectWithoutAccountInput | user_playerCreateOrConnectWithoutAccountInput[]
    upsert?: user_playerUpsertWithWhereUniqueWithoutAccountInput | user_playerUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: user_playerCreateManyAccountInputEnvelope
    set?: user_playerWhereUniqueInput | user_playerWhereUniqueInput[]
    disconnect?: user_playerWhereUniqueInput | user_playerWhereUniqueInput[]
    delete?: user_playerWhereUniqueInput | user_playerWhereUniqueInput[]
    connect?: user_playerWhereUniqueInput | user_playerWhereUniqueInput[]
    update?: user_playerUpdateWithWhereUniqueWithoutAccountInput | user_playerUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: user_playerUpdateManyWithWhereWithoutAccountInput | user_playerUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: user_playerScalarWhereInput | user_playerScalarWhereInput[]
  }

  export type user_clubUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<user_clubCreateWithoutAccountInput, user_clubUncheckedCreateWithoutAccountInput> | user_clubCreateWithoutAccountInput[] | user_clubUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: user_clubCreateOrConnectWithoutAccountInput | user_clubCreateOrConnectWithoutAccountInput[]
    upsert?: user_clubUpsertWithWhereUniqueWithoutAccountInput | user_clubUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: user_clubCreateManyAccountInputEnvelope
    set?: user_clubWhereUniqueInput | user_clubWhereUniqueInput[]
    disconnect?: user_clubWhereUniqueInput | user_clubWhereUniqueInput[]
    delete?: user_clubWhereUniqueInput | user_clubWhereUniqueInput[]
    connect?: user_clubWhereUniqueInput | user_clubWhereUniqueInput[]
    update?: user_clubUpdateWithWhereUniqueWithoutAccountInput | user_clubUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: user_clubUpdateManyWithWhereWithoutAccountInput | user_clubUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: user_clubScalarWhereInput | user_clubScalarWhereInput[]
  }

  export type user_infoUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<user_infoCreateWithoutAccountInput, user_infoUncheckedCreateWithoutAccountInput>
    connectOrCreate?: user_infoCreateOrConnectWithoutAccountInput
    upsert?: user_infoUpsertWithoutAccountInput
    disconnect?: user_infoWhereInput | boolean
    delete?: user_infoWhereInput | boolean
    connect?: user_infoWhereUniqueInput
    update?: XOR<XOR<user_infoUpdateToOneWithWhereWithoutAccountInput, user_infoUpdateWithoutAccountInput>, user_infoUncheckedUpdateWithoutAccountInput>
  }

  export type accountCreateNestedOneWithoutUser_playersInput = {
    create?: XOR<accountCreateWithoutUser_playersInput, accountUncheckedCreateWithoutUser_playersInput>
    connectOrCreate?: accountCreateOrConnectWithoutUser_playersInput
    connect?: accountWhereUniqueInput
  }

  export type accountUpdateOneRequiredWithoutUser_playersNestedInput = {
    create?: XOR<accountCreateWithoutUser_playersInput, accountUncheckedCreateWithoutUser_playersInput>
    connectOrCreate?: accountCreateOrConnectWithoutUser_playersInput
    upsert?: accountUpsertWithoutUser_playersInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutUser_playersInput, accountUpdateWithoutUser_playersInput>, accountUncheckedUpdateWithoutUser_playersInput>
  }

  export type accountCreateNestedOneWithoutUser_clubsInput = {
    create?: XOR<accountCreateWithoutUser_clubsInput, accountUncheckedCreateWithoutUser_clubsInput>
    connectOrCreate?: accountCreateOrConnectWithoutUser_clubsInput
    connect?: accountWhereUniqueInput
  }

  export type accountUpdateOneRequiredWithoutUser_clubsNestedInput = {
    create?: XOR<accountCreateWithoutUser_clubsInput, accountUncheckedCreateWithoutUser_clubsInput>
    connectOrCreate?: accountCreateOrConnectWithoutUser_clubsInput
    upsert?: accountUpsertWithoutUser_clubsInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutUser_clubsInput, accountUpdateWithoutUser_clubsInput>, accountUncheckedUpdateWithoutUser_clubsInput>
  }

  export type accountCreateNestedOneWithoutUser_infoInput = {
    create?: XOR<accountCreateWithoutUser_infoInput, accountUncheckedCreateWithoutUser_infoInput>
    connectOrCreate?: accountCreateOrConnectWithoutUser_infoInput
    connect?: accountWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type accountUpdateOneRequiredWithoutUser_infoNestedInput = {
    create?: XOR<accountCreateWithoutUser_infoInput, accountUncheckedCreateWithoutUser_infoInput>
    connectOrCreate?: accountCreateOrConnectWithoutUser_infoInput
    upsert?: accountUpsertWithoutUser_infoInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutUser_infoInput, accountUpdateWithoutUser_infoInput>, accountUncheckedUpdateWithoutUser_infoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type user_playerCreateWithoutAccountInput = {
    player_id: number
    count: number
    enhancement_level?: number
  }

  export type user_playerUncheckedCreateWithoutAccountInput = {
    player_id: number
    count: number
    enhancement_level?: number
  }

  export type user_playerCreateOrConnectWithoutAccountInput = {
    where: user_playerWhereUniqueInput
    create: XOR<user_playerCreateWithoutAccountInput, user_playerUncheckedCreateWithoutAccountInput>
  }

  export type user_playerCreateManyAccountInputEnvelope = {
    data: user_playerCreateManyAccountInput | user_playerCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type user_clubCreateWithoutAccountInput = {
    player_id: number
    enhancement_level?: number
  }

  export type user_clubUncheckedCreateWithoutAccountInput = {
    player_id: number
    enhancement_level?: number
  }

  export type user_clubCreateOrConnectWithoutAccountInput = {
    where: user_clubWhereUniqueInput
    create: XOR<user_clubCreateWithoutAccountInput, user_clubUncheckedCreateWithoutAccountInput>
  }

  export type user_clubCreateManyAccountInputEnvelope = {
    data: user_clubCreateManyAccountInput | user_clubCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type user_infoCreateWithoutAccountInput = {
    rank_score?: number
    wins?: number
    loses?: number
    draws?: number
    money?: number
    have_club?: boolean
  }

  export type user_infoUncheckedCreateWithoutAccountInput = {
    rank_score?: number
    wins?: number
    loses?: number
    draws?: number
    money?: number
    have_club?: boolean
  }

  export type user_infoCreateOrConnectWithoutAccountInput = {
    where: user_infoWhereUniqueInput
    create: XOR<user_infoCreateWithoutAccountInput, user_infoUncheckedCreateWithoutAccountInput>
  }

  export type user_playerUpsertWithWhereUniqueWithoutAccountInput = {
    where: user_playerWhereUniqueInput
    update: XOR<user_playerUpdateWithoutAccountInput, user_playerUncheckedUpdateWithoutAccountInput>
    create: XOR<user_playerCreateWithoutAccountInput, user_playerUncheckedCreateWithoutAccountInput>
  }

  export type user_playerUpdateWithWhereUniqueWithoutAccountInput = {
    where: user_playerWhereUniqueInput
    data: XOR<user_playerUpdateWithoutAccountInput, user_playerUncheckedUpdateWithoutAccountInput>
  }

  export type user_playerUpdateManyWithWhereWithoutAccountInput = {
    where: user_playerScalarWhereInput
    data: XOR<user_playerUpdateManyMutationInput, user_playerUncheckedUpdateManyWithoutAccountInput>
  }

  export type user_playerScalarWhereInput = {
    AND?: user_playerScalarWhereInput | user_playerScalarWhereInput[]
    OR?: user_playerScalarWhereInput[]
    NOT?: user_playerScalarWhereInput | user_playerScalarWhereInput[]
    account_id?: IntFilter<"user_player"> | number
    player_id?: IntFilter<"user_player"> | number
    count?: IntFilter<"user_player"> | number
    enhancement_level?: IntFilter<"user_player"> | number
  }

  export type user_clubUpsertWithWhereUniqueWithoutAccountInput = {
    where: user_clubWhereUniqueInput
    update: XOR<user_clubUpdateWithoutAccountInput, user_clubUncheckedUpdateWithoutAccountInput>
    create: XOR<user_clubCreateWithoutAccountInput, user_clubUncheckedCreateWithoutAccountInput>
  }

  export type user_clubUpdateWithWhereUniqueWithoutAccountInput = {
    where: user_clubWhereUniqueInput
    data: XOR<user_clubUpdateWithoutAccountInput, user_clubUncheckedUpdateWithoutAccountInput>
  }

  export type user_clubUpdateManyWithWhereWithoutAccountInput = {
    where: user_clubScalarWhereInput
    data: XOR<user_clubUpdateManyMutationInput, user_clubUncheckedUpdateManyWithoutAccountInput>
  }

  export type user_clubScalarWhereInput = {
    AND?: user_clubScalarWhereInput | user_clubScalarWhereInput[]
    OR?: user_clubScalarWhereInput[]
    NOT?: user_clubScalarWhereInput | user_clubScalarWhereInput[]
    account_id?: IntFilter<"user_club"> | number
    player_id?: IntFilter<"user_club"> | number
    enhancement_level?: IntFilter<"user_club"> | number
  }

  export type user_infoUpsertWithoutAccountInput = {
    update: XOR<user_infoUpdateWithoutAccountInput, user_infoUncheckedUpdateWithoutAccountInput>
    create: XOR<user_infoCreateWithoutAccountInput, user_infoUncheckedCreateWithoutAccountInput>
    where?: user_infoWhereInput
  }

  export type user_infoUpdateToOneWithWhereWithoutAccountInput = {
    where?: user_infoWhereInput
    data: XOR<user_infoUpdateWithoutAccountInput, user_infoUncheckedUpdateWithoutAccountInput>
  }

  export type user_infoUpdateWithoutAccountInput = {
    rank_score?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    loses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    have_club?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_infoUncheckedUpdateWithoutAccountInput = {
    rank_score?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    loses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    have_club?: BoolFieldUpdateOperationsInput | boolean
  }

  export type accountCreateWithoutUser_playersInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_clubs?: user_clubCreateNestedManyWithoutAccountInput
    user_info?: user_infoCreateNestedOneWithoutAccountInput
  }

  export type accountUncheckedCreateWithoutUser_playersInput = {
    account_id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_clubs?: user_clubUncheckedCreateNestedManyWithoutAccountInput
    user_info?: user_infoUncheckedCreateNestedOneWithoutAccountInput
  }

  export type accountCreateOrConnectWithoutUser_playersInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutUser_playersInput, accountUncheckedCreateWithoutUser_playersInput>
  }

  export type accountUpsertWithoutUser_playersInput = {
    update: XOR<accountUpdateWithoutUser_playersInput, accountUncheckedUpdateWithoutUser_playersInput>
    create: XOR<accountCreateWithoutUser_playersInput, accountUncheckedCreateWithoutUser_playersInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutUser_playersInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutUser_playersInput, accountUncheckedUpdateWithoutUser_playersInput>
  }

  export type accountUpdateWithoutUser_playersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_clubs?: user_clubUpdateManyWithoutAccountNestedInput
    user_info?: user_infoUpdateOneWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateWithoutUser_playersInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_clubs?: user_clubUncheckedUpdateManyWithoutAccountNestedInput
    user_info?: user_infoUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type accountCreateWithoutUser_clubsInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_players?: user_playerCreateNestedManyWithoutAccountInput
    user_info?: user_infoCreateNestedOneWithoutAccountInput
  }

  export type accountUncheckedCreateWithoutUser_clubsInput = {
    account_id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_players?: user_playerUncheckedCreateNestedManyWithoutAccountInput
    user_info?: user_infoUncheckedCreateNestedOneWithoutAccountInput
  }

  export type accountCreateOrConnectWithoutUser_clubsInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutUser_clubsInput, accountUncheckedCreateWithoutUser_clubsInput>
  }

  export type accountUpsertWithoutUser_clubsInput = {
    update: XOR<accountUpdateWithoutUser_clubsInput, accountUncheckedUpdateWithoutUser_clubsInput>
    create: XOR<accountCreateWithoutUser_clubsInput, accountUncheckedCreateWithoutUser_clubsInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutUser_clubsInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutUser_clubsInput, accountUncheckedUpdateWithoutUser_clubsInput>
  }

  export type accountUpdateWithoutUser_clubsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_players?: user_playerUpdateManyWithoutAccountNestedInput
    user_info?: user_infoUpdateOneWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateWithoutUser_clubsInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_players?: user_playerUncheckedUpdateManyWithoutAccountNestedInput
    user_info?: user_infoUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type accountCreateWithoutUser_infoInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_players?: user_playerCreateNestedManyWithoutAccountInput
    user_clubs?: user_clubCreateNestedManyWithoutAccountInput
  }

  export type accountUncheckedCreateWithoutUser_infoInput = {
    account_id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user_players?: user_playerUncheckedCreateNestedManyWithoutAccountInput
    user_clubs?: user_clubUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountCreateOrConnectWithoutUser_infoInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutUser_infoInput, accountUncheckedCreateWithoutUser_infoInput>
  }

  export type accountUpsertWithoutUser_infoInput = {
    update: XOR<accountUpdateWithoutUser_infoInput, accountUncheckedUpdateWithoutUser_infoInput>
    create: XOR<accountCreateWithoutUser_infoInput, accountUncheckedCreateWithoutUser_infoInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutUser_infoInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutUser_infoInput, accountUncheckedUpdateWithoutUser_infoInput>
  }

  export type accountUpdateWithoutUser_infoInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_players?: user_playerUpdateManyWithoutAccountNestedInput
    user_clubs?: user_clubUpdateManyWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateWithoutUser_infoInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_players?: user_playerUncheckedUpdateManyWithoutAccountNestedInput
    user_clubs?: user_clubUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type user_playerCreateManyAccountInput = {
    player_id: number
    count: number
    enhancement_level?: number
  }

  export type user_clubCreateManyAccountInput = {
    player_id: number
    enhancement_level?: number
  }

  export type user_playerUpdateWithoutAccountInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
  }

  export type user_playerUncheckedUpdateWithoutAccountInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
  }

  export type user_playerUncheckedUpdateManyWithoutAccountInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
  }

  export type user_clubUpdateWithoutAccountInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
  }

  export type user_clubUncheckedUpdateWithoutAccountInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
  }

  export type user_clubUncheckedUpdateManyWithoutAccountInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AccountCountOutputTypeDefaultArgs instead
     */
    export type AccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use accountDefaultArgs instead
     */
    export type accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = accountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_playerDefaultArgs instead
     */
    export type user_playerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_playerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_clubDefaultArgs instead
     */
    export type user_clubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_clubDefaultArgs<ExtArgs>
    /**
     * @deprecated Use user_infoDefaultArgs instead
     */
    export type user_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = user_infoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}