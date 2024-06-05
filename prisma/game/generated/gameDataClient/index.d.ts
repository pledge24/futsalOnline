
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
 * Model player
 * 
 */
export type player = $Result.DefaultSelection<Prisma.$playerPayload>
/**
 * Model enhanced_player
 * 
 */
export type enhanced_player = $Result.DefaultSelection<Prisma.$enhanced_playerPayload>
/**
 * Model enhanced_value
 * 
 */
export type enhanced_value = $Result.DefaultSelection<Prisma.$enhanced_valuePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Players
 * const players = await prisma.player.findMany()
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
   * // Fetch zero or more Players
   * const players = await prisma.player.findMany()
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
   * `prisma.player`: Exposes CRUD operations for the **player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.playerDelegate<ExtArgs>;

  /**
   * `prisma.enhanced_player`: Exposes CRUD operations for the **enhanced_player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enhanced_players
    * const enhanced_players = await prisma.enhanced_player.findMany()
    * ```
    */
  get enhanced_player(): Prisma.enhanced_playerDelegate<ExtArgs>;

  /**
   * `prisma.enhanced_value`: Exposes CRUD operations for the **enhanced_value** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enhanced_values
    * const enhanced_values = await prisma.enhanced_value.findMany()
    * ```
    */
  get enhanced_value(): Prisma.enhanced_valueDelegate<ExtArgs>;
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
    player: 'player',
    enhanced_player: 'enhanced_player',
    enhanced_value: 'enhanced_value'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    gamedb?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'player' | 'enhanced_player' | 'enhanced_value'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      player: {
        payload: Prisma.$playerPayload<ExtArgs>
        fields: Prisma.playerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          findFirst: {
            args: Prisma.playerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          findMany: {
            args: Prisma.playerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playerPayload>[]
          }
          create: {
            args: Prisma.playerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          createMany: {
            args: Prisma.playerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.playerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          update: {
            args: Prisma.playerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          deleteMany: {
            args: Prisma.playerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.playerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.playerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$playerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.playerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.playerCountArgs<ExtArgs>,
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      enhanced_player: {
        payload: Prisma.$enhanced_playerPayload<ExtArgs>
        fields: Prisma.enhanced_playerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enhanced_playerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_playerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enhanced_playerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_playerPayload>
          }
          findFirst: {
            args: Prisma.enhanced_playerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_playerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enhanced_playerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_playerPayload>
          }
          findMany: {
            args: Prisma.enhanced_playerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_playerPayload>[]
          }
          create: {
            args: Prisma.enhanced_playerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_playerPayload>
          }
          createMany: {
            args: Prisma.enhanced_playerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.enhanced_playerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_playerPayload>
          }
          update: {
            args: Prisma.enhanced_playerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_playerPayload>
          }
          deleteMany: {
            args: Prisma.enhanced_playerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.enhanced_playerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.enhanced_playerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_playerPayload>
          }
          aggregate: {
            args: Prisma.Enhanced_playerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEnhanced_player>
          }
          groupBy: {
            args: Prisma.enhanced_playerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Enhanced_playerGroupByOutputType>[]
          }
          count: {
            args: Prisma.enhanced_playerCountArgs<ExtArgs>,
            result: $Utils.Optional<Enhanced_playerCountAggregateOutputType> | number
          }
        }
      }
      enhanced_value: {
        payload: Prisma.$enhanced_valuePayload<ExtArgs>
        fields: Prisma.enhanced_valueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enhanced_valueFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_valuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enhanced_valueFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_valuePayload>
          }
          findFirst: {
            args: Prisma.enhanced_valueFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_valuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enhanced_valueFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_valuePayload>
          }
          findMany: {
            args: Prisma.enhanced_valueFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_valuePayload>[]
          }
          create: {
            args: Prisma.enhanced_valueCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_valuePayload>
          }
          createMany: {
            args: Prisma.enhanced_valueCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.enhanced_valueDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_valuePayload>
          }
          update: {
            args: Prisma.enhanced_valueUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_valuePayload>
          }
          deleteMany: {
            args: Prisma.enhanced_valueDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.enhanced_valueUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.enhanced_valueUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$enhanced_valuePayload>
          }
          aggregate: {
            args: Prisma.Enhanced_valueAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEnhanced_value>
          }
          groupBy: {
            args: Prisma.enhanced_valueGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Enhanced_valueGroupByOutputType>[]
          }
          count: {
            args: Prisma.enhanced_valueCountArgs<ExtArgs>,
            result: $Utils.Optional<Enhanced_valueCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    player_id: number | null
    speed: number | null
    goal_desicion: number | null
    shoot_power: number | null
    defense: number | null
    stamina: number | null
  }

  export type PlayerSumAggregateOutputType = {
    player_id: number | null
    speed: number | null
    goal_desicion: number | null
    shoot_power: number | null
    defense: number | null
    stamina: number | null
  }

  export type PlayerMinAggregateOutputType = {
    player_id: number | null
    name: string | null
    speed: number | null
    goal_desicion: number | null
    shoot_power: number | null
    defense: number | null
    stamina: number | null
    rarity: string | null
  }

  export type PlayerMaxAggregateOutputType = {
    player_id: number | null
    name: string | null
    speed: number | null
    goal_desicion: number | null
    shoot_power: number | null
    defense: number | null
    stamina: number | null
    rarity: string | null
  }

  export type PlayerCountAggregateOutputType = {
    player_id: number
    name: number
    speed: number
    goal_desicion: number
    shoot_power: number
    defense: number
    stamina: number
    rarity: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    player_id?: true
    speed?: true
    goal_desicion?: true
    shoot_power?: true
    defense?: true
    stamina?: true
  }

  export type PlayerSumAggregateInputType = {
    player_id?: true
    speed?: true
    goal_desicion?: true
    shoot_power?: true
    defense?: true
    stamina?: true
  }

  export type PlayerMinAggregateInputType = {
    player_id?: true
    name?: true
    speed?: true
    goal_desicion?: true
    shoot_power?: true
    defense?: true
    stamina?: true
    rarity?: true
  }

  export type PlayerMaxAggregateInputType = {
    player_id?: true
    name?: true
    speed?: true
    goal_desicion?: true
    shoot_power?: true
    defense?: true
    stamina?: true
    rarity?: true
  }

  export type PlayerCountAggregateInputType = {
    player_id?: true
    name?: true
    speed?: true
    goal_desicion?: true
    shoot_power?: true
    defense?: true
    stamina?: true
    rarity?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which player to aggregate.
     */
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type playerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playerWhereInput
    orderBy?: playerOrderByWithAggregationInput | playerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: playerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    player_id: number
    name: string
    speed: number
    goal_desicion: number
    shoot_power: number
    defense: number
    stamina: number
    rarity: string
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends playerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type playerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    player_id?: boolean
    name?: boolean
    speed?: boolean
    goal_desicion?: boolean
    shoot_power?: boolean
    defense?: boolean
    stamina?: boolean
    rarity?: boolean
  }, ExtArgs["result"]["player"]>

  export type playerSelectScalar = {
    player_id?: boolean
    name?: boolean
    speed?: boolean
    goal_desicion?: boolean
    shoot_power?: boolean
    defense?: boolean
    stamina?: boolean
    rarity?: boolean
  }



  export type $playerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "player"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      player_id: number
      name: string
      speed: number
      goal_desicion: number
      shoot_power: number
      defense: number
      stamina: number
      rarity: string
    }, ExtArgs["result"]["player"]>
    composites: {}
  }


  type playerGetPayload<S extends boolean | null | undefined | playerDefaultArgs> = $Result.GetResult<Prisma.$playerPayload, S>

  type playerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<playerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface playerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['player'], meta: { name: 'player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {playerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends playerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, playerFindUniqueArgs<ExtArgs>>
    ): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {playerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends playerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, playerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends playerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, playerFindFirstArgs<ExtArgs>>
    ): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends playerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, playerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `player_id`
     * const playerWithPlayer_idOnly = await prisma.player.findMany({ select: { player_id: true } })
     * 
    **/
    findMany<T extends playerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, playerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Player.
     * @param {playerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
    **/
    create<T extends playerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, playerCreateArgs<ExtArgs>>
    ): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Players.
     * @param {playerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends playerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, playerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Player.
     * @param {playerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
    **/
    delete<T extends playerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, playerDeleteArgs<ExtArgs>>
    ): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Player.
     * @param {playerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends playerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, playerUpdateArgs<ExtArgs>>
    ): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Players.
     * @param {playerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends playerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, playerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends playerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, playerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {playerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
    **/
    upsert<T extends playerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, playerUpsertArgs<ExtArgs>>
    ): Prisma__playerClient<$Result.GetResult<Prisma.$playerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends playerCountArgs>(
      args?: Subset<T, playerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playerGroupByArgs} args - Group by arguments.
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
      T extends playerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playerGroupByArgs['orderBy'] }
        : { orderBy?: playerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, playerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the player model
   */
  readonly fields: playerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the player model
   */ 
  interface playerFieldRefs {
    readonly player_id: FieldRef<"player", 'Int'>
    readonly name: FieldRef<"player", 'String'>
    readonly speed: FieldRef<"player", 'Int'>
    readonly goal_desicion: FieldRef<"player", 'Int'>
    readonly shoot_power: FieldRef<"player", 'Int'>
    readonly defense: FieldRef<"player", 'Int'>
    readonly stamina: FieldRef<"player", 'Int'>
    readonly rarity: FieldRef<"player", 'String'>
  }
    

  // Custom InputTypes
  /**
   * player findUnique
   */
  export type playerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Filter, which player to fetch.
     */
    where: playerWhereUniqueInput
  }

  /**
   * player findUniqueOrThrow
   */
  export type playerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Filter, which player to fetch.
     */
    where: playerWhereUniqueInput
  }

  /**
   * player findFirst
   */
  export type playerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Filter, which player to fetch.
     */
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     */
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * player findFirstOrThrow
   */
  export type playerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Filter, which player to fetch.
     */
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for players.
     */
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * player findMany
   */
  export type playerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Filter, which players to fetch.
     */
    where?: playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of players to fetch.
     */
    orderBy?: playerOrderByWithRelationInput | playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing players.
     */
    cursor?: playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * player create
   */
  export type playerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * The data needed to create a player.
     */
    data: XOR<playerCreateInput, playerUncheckedCreateInput>
  }

  /**
   * player createMany
   */
  export type playerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many players.
     */
    data: playerCreateManyInput | playerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * player update
   */
  export type playerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * The data needed to update a player.
     */
    data: XOR<playerUpdateInput, playerUncheckedUpdateInput>
    /**
     * Choose, which player to update.
     */
    where: playerWhereUniqueInput
  }

  /**
   * player updateMany
   */
  export type playerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update players.
     */
    data: XOR<playerUpdateManyMutationInput, playerUncheckedUpdateManyInput>
    /**
     * Filter which players to update
     */
    where?: playerWhereInput
  }

  /**
   * player upsert
   */
  export type playerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * The filter to search for the player to update in case it exists.
     */
    where: playerWhereUniqueInput
    /**
     * In case the player found by the `where` argument doesn't exist, create a new player with this data.
     */
    create: XOR<playerCreateInput, playerUncheckedCreateInput>
    /**
     * In case the player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playerUpdateInput, playerUncheckedUpdateInput>
  }

  /**
   * player delete
   */
  export type playerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
    /**
     * Filter which player to delete.
     */
    where: playerWhereUniqueInput
  }

  /**
   * player deleteMany
   */
  export type playerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which players to delete
     */
    where?: playerWhereInput
  }

  /**
   * player without action
   */
  export type playerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the player
     */
    select?: playerSelect<ExtArgs> | null
  }


  /**
   * Model enhanced_player
   */

  export type AggregateEnhanced_player = {
    _count: Enhanced_playerCountAggregateOutputType | null
    _avg: Enhanced_playerAvgAggregateOutputType | null
    _sum: Enhanced_playerSumAggregateOutputType | null
    _min: Enhanced_playerMinAggregateOutputType | null
    _max: Enhanced_playerMaxAggregateOutputType | null
  }

  export type Enhanced_playerAvgAggregateOutputType = {
    enhanced_player_id: number | null
    player_id: number | null
    account_id: number | null
    enhancement_level: number | null
    speed: number | null
    goal_desicion: number | null
    shoot_power: number | null
    defense: number | null
    stamina: number | null
    count: number | null
  }

  export type Enhanced_playerSumAggregateOutputType = {
    enhanced_player_id: number | null
    player_id: number | null
    account_id: number | null
    enhancement_level: number | null
    speed: number | null
    goal_desicion: number | null
    shoot_power: number | null
    defense: number | null
    stamina: number | null
    count: number | null
  }

  export type Enhanced_playerMinAggregateOutputType = {
    enhanced_player_id: number | null
    player_id: number | null
    account_id: number | null
    enhancement_level: number | null
    speed: number | null
    goal_desicion: number | null
    shoot_power: number | null
    defense: number | null
    stamina: number | null
    count: number | null
  }

  export type Enhanced_playerMaxAggregateOutputType = {
    enhanced_player_id: number | null
    player_id: number | null
    account_id: number | null
    enhancement_level: number | null
    speed: number | null
    goal_desicion: number | null
    shoot_power: number | null
    defense: number | null
    stamina: number | null
    count: number | null
  }

  export type Enhanced_playerCountAggregateOutputType = {
    enhanced_player_id: number
    player_id: number
    account_id: number
    enhancement_level: number
    speed: number
    goal_desicion: number
    shoot_power: number
    defense: number
    stamina: number
    count: number
    _all: number
  }


  export type Enhanced_playerAvgAggregateInputType = {
    enhanced_player_id?: true
    player_id?: true
    account_id?: true
    enhancement_level?: true
    speed?: true
    goal_desicion?: true
    shoot_power?: true
    defense?: true
    stamina?: true
    count?: true
  }

  export type Enhanced_playerSumAggregateInputType = {
    enhanced_player_id?: true
    player_id?: true
    account_id?: true
    enhancement_level?: true
    speed?: true
    goal_desicion?: true
    shoot_power?: true
    defense?: true
    stamina?: true
    count?: true
  }

  export type Enhanced_playerMinAggregateInputType = {
    enhanced_player_id?: true
    player_id?: true
    account_id?: true
    enhancement_level?: true
    speed?: true
    goal_desicion?: true
    shoot_power?: true
    defense?: true
    stamina?: true
    count?: true
  }

  export type Enhanced_playerMaxAggregateInputType = {
    enhanced_player_id?: true
    player_id?: true
    account_id?: true
    enhancement_level?: true
    speed?: true
    goal_desicion?: true
    shoot_power?: true
    defense?: true
    stamina?: true
    count?: true
  }

  export type Enhanced_playerCountAggregateInputType = {
    enhanced_player_id?: true
    player_id?: true
    account_id?: true
    enhancement_level?: true
    speed?: true
    goal_desicion?: true
    shoot_power?: true
    defense?: true
    stamina?: true
    count?: true
    _all?: true
  }

  export type Enhanced_playerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enhanced_player to aggregate.
     */
    where?: enhanced_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enhanced_players to fetch.
     */
    orderBy?: enhanced_playerOrderByWithRelationInput | enhanced_playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enhanced_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enhanced_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enhanced_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enhanced_players
    **/
    _count?: true | Enhanced_playerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Enhanced_playerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Enhanced_playerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Enhanced_playerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Enhanced_playerMaxAggregateInputType
  }

  export type GetEnhanced_playerAggregateType<T extends Enhanced_playerAggregateArgs> = {
        [P in keyof T & keyof AggregateEnhanced_player]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnhanced_player[P]>
      : GetScalarType<T[P], AggregateEnhanced_player[P]>
  }




  export type enhanced_playerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enhanced_playerWhereInput
    orderBy?: enhanced_playerOrderByWithAggregationInput | enhanced_playerOrderByWithAggregationInput[]
    by: Enhanced_playerScalarFieldEnum[] | Enhanced_playerScalarFieldEnum
    having?: enhanced_playerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Enhanced_playerCountAggregateInputType | true
    _avg?: Enhanced_playerAvgAggregateInputType
    _sum?: Enhanced_playerSumAggregateInputType
    _min?: Enhanced_playerMinAggregateInputType
    _max?: Enhanced_playerMaxAggregateInputType
  }

  export type Enhanced_playerGroupByOutputType = {
    enhanced_player_id: number
    player_id: number
    account_id: number
    enhancement_level: number
    speed: number
    goal_desicion: number
    shoot_power: number
    defense: number
    stamina: number
    count: number
    _count: Enhanced_playerCountAggregateOutputType | null
    _avg: Enhanced_playerAvgAggregateOutputType | null
    _sum: Enhanced_playerSumAggregateOutputType | null
    _min: Enhanced_playerMinAggregateOutputType | null
    _max: Enhanced_playerMaxAggregateOutputType | null
  }

  type GetEnhanced_playerGroupByPayload<T extends enhanced_playerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Enhanced_playerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Enhanced_playerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Enhanced_playerGroupByOutputType[P]>
            : GetScalarType<T[P], Enhanced_playerGroupByOutputType[P]>
        }
      >
    >


  export type enhanced_playerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    enhanced_player_id?: boolean
    player_id?: boolean
    account_id?: boolean
    enhancement_level?: boolean
    speed?: boolean
    goal_desicion?: boolean
    shoot_power?: boolean
    defense?: boolean
    stamina?: boolean
    count?: boolean
  }, ExtArgs["result"]["enhanced_player"]>

  export type enhanced_playerSelectScalar = {
    enhanced_player_id?: boolean
    player_id?: boolean
    account_id?: boolean
    enhancement_level?: boolean
    speed?: boolean
    goal_desicion?: boolean
    shoot_power?: boolean
    defense?: boolean
    stamina?: boolean
    count?: boolean
  }



  export type $enhanced_playerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enhanced_player"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      enhanced_player_id: number
      player_id: number
      account_id: number
      enhancement_level: number
      speed: number
      goal_desicion: number
      shoot_power: number
      defense: number
      stamina: number
      count: number
    }, ExtArgs["result"]["enhanced_player"]>
    composites: {}
  }


  type enhanced_playerGetPayload<S extends boolean | null | undefined | enhanced_playerDefaultArgs> = $Result.GetResult<Prisma.$enhanced_playerPayload, S>

  type enhanced_playerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<enhanced_playerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Enhanced_playerCountAggregateInputType | true
    }

  export interface enhanced_playerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enhanced_player'], meta: { name: 'enhanced_player' } }
    /**
     * Find zero or one Enhanced_player that matches the filter.
     * @param {enhanced_playerFindUniqueArgs} args - Arguments to find a Enhanced_player
     * @example
     * // Get one Enhanced_player
     * const enhanced_player = await prisma.enhanced_player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends enhanced_playerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, enhanced_playerFindUniqueArgs<ExtArgs>>
    ): Prisma__enhanced_playerClient<$Result.GetResult<Prisma.$enhanced_playerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Enhanced_player that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {enhanced_playerFindUniqueOrThrowArgs} args - Arguments to find a Enhanced_player
     * @example
     * // Get one Enhanced_player
     * const enhanced_player = await prisma.enhanced_player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends enhanced_playerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, enhanced_playerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__enhanced_playerClient<$Result.GetResult<Prisma.$enhanced_playerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Enhanced_player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enhanced_playerFindFirstArgs} args - Arguments to find a Enhanced_player
     * @example
     * // Get one Enhanced_player
     * const enhanced_player = await prisma.enhanced_player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends enhanced_playerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, enhanced_playerFindFirstArgs<ExtArgs>>
    ): Prisma__enhanced_playerClient<$Result.GetResult<Prisma.$enhanced_playerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Enhanced_player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enhanced_playerFindFirstOrThrowArgs} args - Arguments to find a Enhanced_player
     * @example
     * // Get one Enhanced_player
     * const enhanced_player = await prisma.enhanced_player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends enhanced_playerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, enhanced_playerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__enhanced_playerClient<$Result.GetResult<Prisma.$enhanced_playerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Enhanced_players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enhanced_playerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enhanced_players
     * const enhanced_players = await prisma.enhanced_player.findMany()
     * 
     * // Get first 10 Enhanced_players
     * const enhanced_players = await prisma.enhanced_player.findMany({ take: 10 })
     * 
     * // Only select the `enhanced_player_id`
     * const enhanced_playerWithEnhanced_player_idOnly = await prisma.enhanced_player.findMany({ select: { enhanced_player_id: true } })
     * 
    **/
    findMany<T extends enhanced_playerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enhanced_playerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enhanced_playerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Enhanced_player.
     * @param {enhanced_playerCreateArgs} args - Arguments to create a Enhanced_player.
     * @example
     * // Create one Enhanced_player
     * const Enhanced_player = await prisma.enhanced_player.create({
     *   data: {
     *     // ... data to create a Enhanced_player
     *   }
     * })
     * 
    **/
    create<T extends enhanced_playerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, enhanced_playerCreateArgs<ExtArgs>>
    ): Prisma__enhanced_playerClient<$Result.GetResult<Prisma.$enhanced_playerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Enhanced_players.
     * @param {enhanced_playerCreateManyArgs} args - Arguments to create many Enhanced_players.
     * @example
     * // Create many Enhanced_players
     * const enhanced_player = await prisma.enhanced_player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends enhanced_playerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enhanced_playerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enhanced_player.
     * @param {enhanced_playerDeleteArgs} args - Arguments to delete one Enhanced_player.
     * @example
     * // Delete one Enhanced_player
     * const Enhanced_player = await prisma.enhanced_player.delete({
     *   where: {
     *     // ... filter to delete one Enhanced_player
     *   }
     * })
     * 
    **/
    delete<T extends enhanced_playerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, enhanced_playerDeleteArgs<ExtArgs>>
    ): Prisma__enhanced_playerClient<$Result.GetResult<Prisma.$enhanced_playerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Enhanced_player.
     * @param {enhanced_playerUpdateArgs} args - Arguments to update one Enhanced_player.
     * @example
     * // Update one Enhanced_player
     * const enhanced_player = await prisma.enhanced_player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends enhanced_playerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, enhanced_playerUpdateArgs<ExtArgs>>
    ): Prisma__enhanced_playerClient<$Result.GetResult<Prisma.$enhanced_playerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Enhanced_players.
     * @param {enhanced_playerDeleteManyArgs} args - Arguments to filter Enhanced_players to delete.
     * @example
     * // Delete a few Enhanced_players
     * const { count } = await prisma.enhanced_player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends enhanced_playerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enhanced_playerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enhanced_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enhanced_playerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enhanced_players
     * const enhanced_player = await prisma.enhanced_player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends enhanced_playerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, enhanced_playerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enhanced_player.
     * @param {enhanced_playerUpsertArgs} args - Arguments to update or create a Enhanced_player.
     * @example
     * // Update or create a Enhanced_player
     * const enhanced_player = await prisma.enhanced_player.upsert({
     *   create: {
     *     // ... data to create a Enhanced_player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enhanced_player we want to update
     *   }
     * })
    **/
    upsert<T extends enhanced_playerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, enhanced_playerUpsertArgs<ExtArgs>>
    ): Prisma__enhanced_playerClient<$Result.GetResult<Prisma.$enhanced_playerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Enhanced_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enhanced_playerCountArgs} args - Arguments to filter Enhanced_players to count.
     * @example
     * // Count the number of Enhanced_players
     * const count = await prisma.enhanced_player.count({
     *   where: {
     *     // ... the filter for the Enhanced_players we want to count
     *   }
     * })
    **/
    count<T extends enhanced_playerCountArgs>(
      args?: Subset<T, enhanced_playerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Enhanced_playerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enhanced_player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Enhanced_playerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Enhanced_playerAggregateArgs>(args: Subset<T, Enhanced_playerAggregateArgs>): Prisma.PrismaPromise<GetEnhanced_playerAggregateType<T>>

    /**
     * Group by Enhanced_player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enhanced_playerGroupByArgs} args - Group by arguments.
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
      T extends enhanced_playerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enhanced_playerGroupByArgs['orderBy'] }
        : { orderBy?: enhanced_playerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, enhanced_playerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnhanced_playerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enhanced_player model
   */
  readonly fields: enhanced_playerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enhanced_player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enhanced_playerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the enhanced_player model
   */ 
  interface enhanced_playerFieldRefs {
    readonly enhanced_player_id: FieldRef<"enhanced_player", 'Int'>
    readonly player_id: FieldRef<"enhanced_player", 'Int'>
    readonly account_id: FieldRef<"enhanced_player", 'Int'>
    readonly enhancement_level: FieldRef<"enhanced_player", 'Int'>
    readonly speed: FieldRef<"enhanced_player", 'Int'>
    readonly goal_desicion: FieldRef<"enhanced_player", 'Int'>
    readonly shoot_power: FieldRef<"enhanced_player", 'Int'>
    readonly defense: FieldRef<"enhanced_player", 'Int'>
    readonly stamina: FieldRef<"enhanced_player", 'Int'>
    readonly count: FieldRef<"enhanced_player", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * enhanced_player findUnique
   */
  export type enhanced_playerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_player
     */
    select?: enhanced_playerSelect<ExtArgs> | null
    /**
     * Filter, which enhanced_player to fetch.
     */
    where: enhanced_playerWhereUniqueInput
  }

  /**
   * enhanced_player findUniqueOrThrow
   */
  export type enhanced_playerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_player
     */
    select?: enhanced_playerSelect<ExtArgs> | null
    /**
     * Filter, which enhanced_player to fetch.
     */
    where: enhanced_playerWhereUniqueInput
  }

  /**
   * enhanced_player findFirst
   */
  export type enhanced_playerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_player
     */
    select?: enhanced_playerSelect<ExtArgs> | null
    /**
     * Filter, which enhanced_player to fetch.
     */
    where?: enhanced_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enhanced_players to fetch.
     */
    orderBy?: enhanced_playerOrderByWithRelationInput | enhanced_playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enhanced_players.
     */
    cursor?: enhanced_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enhanced_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enhanced_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enhanced_players.
     */
    distinct?: Enhanced_playerScalarFieldEnum | Enhanced_playerScalarFieldEnum[]
  }

  /**
   * enhanced_player findFirstOrThrow
   */
  export type enhanced_playerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_player
     */
    select?: enhanced_playerSelect<ExtArgs> | null
    /**
     * Filter, which enhanced_player to fetch.
     */
    where?: enhanced_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enhanced_players to fetch.
     */
    orderBy?: enhanced_playerOrderByWithRelationInput | enhanced_playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enhanced_players.
     */
    cursor?: enhanced_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enhanced_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enhanced_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enhanced_players.
     */
    distinct?: Enhanced_playerScalarFieldEnum | Enhanced_playerScalarFieldEnum[]
  }

  /**
   * enhanced_player findMany
   */
  export type enhanced_playerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_player
     */
    select?: enhanced_playerSelect<ExtArgs> | null
    /**
     * Filter, which enhanced_players to fetch.
     */
    where?: enhanced_playerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enhanced_players to fetch.
     */
    orderBy?: enhanced_playerOrderByWithRelationInput | enhanced_playerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enhanced_players.
     */
    cursor?: enhanced_playerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enhanced_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enhanced_players.
     */
    skip?: number
    distinct?: Enhanced_playerScalarFieldEnum | Enhanced_playerScalarFieldEnum[]
  }

  /**
   * enhanced_player create
   */
  export type enhanced_playerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_player
     */
    select?: enhanced_playerSelect<ExtArgs> | null
    /**
     * The data needed to create a enhanced_player.
     */
    data: XOR<enhanced_playerCreateInput, enhanced_playerUncheckedCreateInput>
  }

  /**
   * enhanced_player createMany
   */
  export type enhanced_playerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enhanced_players.
     */
    data: enhanced_playerCreateManyInput | enhanced_playerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enhanced_player update
   */
  export type enhanced_playerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_player
     */
    select?: enhanced_playerSelect<ExtArgs> | null
    /**
     * The data needed to update a enhanced_player.
     */
    data: XOR<enhanced_playerUpdateInput, enhanced_playerUncheckedUpdateInput>
    /**
     * Choose, which enhanced_player to update.
     */
    where: enhanced_playerWhereUniqueInput
  }

  /**
   * enhanced_player updateMany
   */
  export type enhanced_playerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enhanced_players.
     */
    data: XOR<enhanced_playerUpdateManyMutationInput, enhanced_playerUncheckedUpdateManyInput>
    /**
     * Filter which enhanced_players to update
     */
    where?: enhanced_playerWhereInput
  }

  /**
   * enhanced_player upsert
   */
  export type enhanced_playerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_player
     */
    select?: enhanced_playerSelect<ExtArgs> | null
    /**
     * The filter to search for the enhanced_player to update in case it exists.
     */
    where: enhanced_playerWhereUniqueInput
    /**
     * In case the enhanced_player found by the `where` argument doesn't exist, create a new enhanced_player with this data.
     */
    create: XOR<enhanced_playerCreateInput, enhanced_playerUncheckedCreateInput>
    /**
     * In case the enhanced_player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enhanced_playerUpdateInput, enhanced_playerUncheckedUpdateInput>
  }

  /**
   * enhanced_player delete
   */
  export type enhanced_playerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_player
     */
    select?: enhanced_playerSelect<ExtArgs> | null
    /**
     * Filter which enhanced_player to delete.
     */
    where: enhanced_playerWhereUniqueInput
  }

  /**
   * enhanced_player deleteMany
   */
  export type enhanced_playerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enhanced_players to delete
     */
    where?: enhanced_playerWhereInput
  }

  /**
   * enhanced_player without action
   */
  export type enhanced_playerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_player
     */
    select?: enhanced_playerSelect<ExtArgs> | null
  }


  /**
   * Model enhanced_value
   */

  export type AggregateEnhanced_value = {
    _count: Enhanced_valueCountAggregateOutputType | null
    _avg: Enhanced_valueAvgAggregateOutputType | null
    _sum: Enhanced_valueSumAggregateOutputType | null
    _min: Enhanced_valueMinAggregateOutputType | null
    _max: Enhanced_valueMaxAggregateOutputType | null
  }

  export type Enhanced_valueAvgAggregateOutputType = {
    enhanced_value_id: number | null
    enhancement_level: number | null
    increment: number | null
  }

  export type Enhanced_valueSumAggregateOutputType = {
    enhanced_value_id: number | null
    enhancement_level: number | null
    increment: number | null
  }

  export type Enhanced_valueMinAggregateOutputType = {
    enhanced_value_id: number | null
    rarity: string | null
    enhancement_level: number | null
    increment: number | null
  }

  export type Enhanced_valueMaxAggregateOutputType = {
    enhanced_value_id: number | null
    rarity: string | null
    enhancement_level: number | null
    increment: number | null
  }

  export type Enhanced_valueCountAggregateOutputType = {
    enhanced_value_id: number
    rarity: number
    enhancement_level: number
    increment: number
    _all: number
  }


  export type Enhanced_valueAvgAggregateInputType = {
    enhanced_value_id?: true
    enhancement_level?: true
    increment?: true
  }

  export type Enhanced_valueSumAggregateInputType = {
    enhanced_value_id?: true
    enhancement_level?: true
    increment?: true
  }

  export type Enhanced_valueMinAggregateInputType = {
    enhanced_value_id?: true
    rarity?: true
    enhancement_level?: true
    increment?: true
  }

  export type Enhanced_valueMaxAggregateInputType = {
    enhanced_value_id?: true
    rarity?: true
    enhancement_level?: true
    increment?: true
  }

  export type Enhanced_valueCountAggregateInputType = {
    enhanced_value_id?: true
    rarity?: true
    enhancement_level?: true
    increment?: true
    _all?: true
  }

  export type Enhanced_valueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enhanced_value to aggregate.
     */
    where?: enhanced_valueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enhanced_values to fetch.
     */
    orderBy?: enhanced_valueOrderByWithRelationInput | enhanced_valueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enhanced_valueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enhanced_values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enhanced_values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enhanced_values
    **/
    _count?: true | Enhanced_valueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Enhanced_valueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Enhanced_valueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Enhanced_valueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Enhanced_valueMaxAggregateInputType
  }

  export type GetEnhanced_valueAggregateType<T extends Enhanced_valueAggregateArgs> = {
        [P in keyof T & keyof AggregateEnhanced_value]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnhanced_value[P]>
      : GetScalarType<T[P], AggregateEnhanced_value[P]>
  }




  export type enhanced_valueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enhanced_valueWhereInput
    orderBy?: enhanced_valueOrderByWithAggregationInput | enhanced_valueOrderByWithAggregationInput[]
    by: Enhanced_valueScalarFieldEnum[] | Enhanced_valueScalarFieldEnum
    having?: enhanced_valueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Enhanced_valueCountAggregateInputType | true
    _avg?: Enhanced_valueAvgAggregateInputType
    _sum?: Enhanced_valueSumAggregateInputType
    _min?: Enhanced_valueMinAggregateInputType
    _max?: Enhanced_valueMaxAggregateInputType
  }

  export type Enhanced_valueGroupByOutputType = {
    enhanced_value_id: number
    rarity: string
    enhancement_level: number
    increment: number
    _count: Enhanced_valueCountAggregateOutputType | null
    _avg: Enhanced_valueAvgAggregateOutputType | null
    _sum: Enhanced_valueSumAggregateOutputType | null
    _min: Enhanced_valueMinAggregateOutputType | null
    _max: Enhanced_valueMaxAggregateOutputType | null
  }

  type GetEnhanced_valueGroupByPayload<T extends enhanced_valueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Enhanced_valueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Enhanced_valueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Enhanced_valueGroupByOutputType[P]>
            : GetScalarType<T[P], Enhanced_valueGroupByOutputType[P]>
        }
      >
    >


  export type enhanced_valueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    enhanced_value_id?: boolean
    rarity?: boolean
    enhancement_level?: boolean
    increment?: boolean
  }, ExtArgs["result"]["enhanced_value"]>

  export type enhanced_valueSelectScalar = {
    enhanced_value_id?: boolean
    rarity?: boolean
    enhancement_level?: boolean
    increment?: boolean
  }



  export type $enhanced_valuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enhanced_value"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      enhanced_value_id: number
      rarity: string
      enhancement_level: number
      increment: number
    }, ExtArgs["result"]["enhanced_value"]>
    composites: {}
  }


  type enhanced_valueGetPayload<S extends boolean | null | undefined | enhanced_valueDefaultArgs> = $Result.GetResult<Prisma.$enhanced_valuePayload, S>

  type enhanced_valueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<enhanced_valueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Enhanced_valueCountAggregateInputType | true
    }

  export interface enhanced_valueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enhanced_value'], meta: { name: 'enhanced_value' } }
    /**
     * Find zero or one Enhanced_value that matches the filter.
     * @param {enhanced_valueFindUniqueArgs} args - Arguments to find a Enhanced_value
     * @example
     * // Get one Enhanced_value
     * const enhanced_value = await prisma.enhanced_value.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends enhanced_valueFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, enhanced_valueFindUniqueArgs<ExtArgs>>
    ): Prisma__enhanced_valueClient<$Result.GetResult<Prisma.$enhanced_valuePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Enhanced_value that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {enhanced_valueFindUniqueOrThrowArgs} args - Arguments to find a Enhanced_value
     * @example
     * // Get one Enhanced_value
     * const enhanced_value = await prisma.enhanced_value.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends enhanced_valueFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, enhanced_valueFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__enhanced_valueClient<$Result.GetResult<Prisma.$enhanced_valuePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Enhanced_value that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enhanced_valueFindFirstArgs} args - Arguments to find a Enhanced_value
     * @example
     * // Get one Enhanced_value
     * const enhanced_value = await prisma.enhanced_value.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends enhanced_valueFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, enhanced_valueFindFirstArgs<ExtArgs>>
    ): Prisma__enhanced_valueClient<$Result.GetResult<Prisma.$enhanced_valuePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Enhanced_value that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enhanced_valueFindFirstOrThrowArgs} args - Arguments to find a Enhanced_value
     * @example
     * // Get one Enhanced_value
     * const enhanced_value = await prisma.enhanced_value.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends enhanced_valueFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, enhanced_valueFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__enhanced_valueClient<$Result.GetResult<Prisma.$enhanced_valuePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Enhanced_values that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enhanced_valueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enhanced_values
     * const enhanced_values = await prisma.enhanced_value.findMany()
     * 
     * // Get first 10 Enhanced_values
     * const enhanced_values = await prisma.enhanced_value.findMany({ take: 10 })
     * 
     * // Only select the `enhanced_value_id`
     * const enhanced_valueWithEnhanced_value_idOnly = await prisma.enhanced_value.findMany({ select: { enhanced_value_id: true } })
     * 
    **/
    findMany<T extends enhanced_valueFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enhanced_valueFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enhanced_valuePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Enhanced_value.
     * @param {enhanced_valueCreateArgs} args - Arguments to create a Enhanced_value.
     * @example
     * // Create one Enhanced_value
     * const Enhanced_value = await prisma.enhanced_value.create({
     *   data: {
     *     // ... data to create a Enhanced_value
     *   }
     * })
     * 
    **/
    create<T extends enhanced_valueCreateArgs<ExtArgs>>(
      args: SelectSubset<T, enhanced_valueCreateArgs<ExtArgs>>
    ): Prisma__enhanced_valueClient<$Result.GetResult<Prisma.$enhanced_valuePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Enhanced_values.
     * @param {enhanced_valueCreateManyArgs} args - Arguments to create many Enhanced_values.
     * @example
     * // Create many Enhanced_values
     * const enhanced_value = await prisma.enhanced_value.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends enhanced_valueCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enhanced_valueCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enhanced_value.
     * @param {enhanced_valueDeleteArgs} args - Arguments to delete one Enhanced_value.
     * @example
     * // Delete one Enhanced_value
     * const Enhanced_value = await prisma.enhanced_value.delete({
     *   where: {
     *     // ... filter to delete one Enhanced_value
     *   }
     * })
     * 
    **/
    delete<T extends enhanced_valueDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, enhanced_valueDeleteArgs<ExtArgs>>
    ): Prisma__enhanced_valueClient<$Result.GetResult<Prisma.$enhanced_valuePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Enhanced_value.
     * @param {enhanced_valueUpdateArgs} args - Arguments to update one Enhanced_value.
     * @example
     * // Update one Enhanced_value
     * const enhanced_value = await prisma.enhanced_value.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends enhanced_valueUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, enhanced_valueUpdateArgs<ExtArgs>>
    ): Prisma__enhanced_valueClient<$Result.GetResult<Prisma.$enhanced_valuePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Enhanced_values.
     * @param {enhanced_valueDeleteManyArgs} args - Arguments to filter Enhanced_values to delete.
     * @example
     * // Delete a few Enhanced_values
     * const { count } = await prisma.enhanced_value.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends enhanced_valueDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, enhanced_valueDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enhanced_values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enhanced_valueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enhanced_values
     * const enhanced_value = await prisma.enhanced_value.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends enhanced_valueUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, enhanced_valueUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enhanced_value.
     * @param {enhanced_valueUpsertArgs} args - Arguments to update or create a Enhanced_value.
     * @example
     * // Update or create a Enhanced_value
     * const enhanced_value = await prisma.enhanced_value.upsert({
     *   create: {
     *     // ... data to create a Enhanced_value
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enhanced_value we want to update
     *   }
     * })
    **/
    upsert<T extends enhanced_valueUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, enhanced_valueUpsertArgs<ExtArgs>>
    ): Prisma__enhanced_valueClient<$Result.GetResult<Prisma.$enhanced_valuePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Enhanced_values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enhanced_valueCountArgs} args - Arguments to filter Enhanced_values to count.
     * @example
     * // Count the number of Enhanced_values
     * const count = await prisma.enhanced_value.count({
     *   where: {
     *     // ... the filter for the Enhanced_values we want to count
     *   }
     * })
    **/
    count<T extends enhanced_valueCountArgs>(
      args?: Subset<T, enhanced_valueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Enhanced_valueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enhanced_value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Enhanced_valueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Enhanced_valueAggregateArgs>(args: Subset<T, Enhanced_valueAggregateArgs>): Prisma.PrismaPromise<GetEnhanced_valueAggregateType<T>>

    /**
     * Group by Enhanced_value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enhanced_valueGroupByArgs} args - Group by arguments.
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
      T extends enhanced_valueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enhanced_valueGroupByArgs['orderBy'] }
        : { orderBy?: enhanced_valueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, enhanced_valueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnhanced_valueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enhanced_value model
   */
  readonly fields: enhanced_valueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enhanced_value.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enhanced_valueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the enhanced_value model
   */ 
  interface enhanced_valueFieldRefs {
    readonly enhanced_value_id: FieldRef<"enhanced_value", 'Int'>
    readonly rarity: FieldRef<"enhanced_value", 'String'>
    readonly enhancement_level: FieldRef<"enhanced_value", 'Int'>
    readonly increment: FieldRef<"enhanced_value", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * enhanced_value findUnique
   */
  export type enhanced_valueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_value
     */
    select?: enhanced_valueSelect<ExtArgs> | null
    /**
     * Filter, which enhanced_value to fetch.
     */
    where: enhanced_valueWhereUniqueInput
  }

  /**
   * enhanced_value findUniqueOrThrow
   */
  export type enhanced_valueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_value
     */
    select?: enhanced_valueSelect<ExtArgs> | null
    /**
     * Filter, which enhanced_value to fetch.
     */
    where: enhanced_valueWhereUniqueInput
  }

  /**
   * enhanced_value findFirst
   */
  export type enhanced_valueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_value
     */
    select?: enhanced_valueSelect<ExtArgs> | null
    /**
     * Filter, which enhanced_value to fetch.
     */
    where?: enhanced_valueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enhanced_values to fetch.
     */
    orderBy?: enhanced_valueOrderByWithRelationInput | enhanced_valueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enhanced_values.
     */
    cursor?: enhanced_valueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enhanced_values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enhanced_values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enhanced_values.
     */
    distinct?: Enhanced_valueScalarFieldEnum | Enhanced_valueScalarFieldEnum[]
  }

  /**
   * enhanced_value findFirstOrThrow
   */
  export type enhanced_valueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_value
     */
    select?: enhanced_valueSelect<ExtArgs> | null
    /**
     * Filter, which enhanced_value to fetch.
     */
    where?: enhanced_valueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enhanced_values to fetch.
     */
    orderBy?: enhanced_valueOrderByWithRelationInput | enhanced_valueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enhanced_values.
     */
    cursor?: enhanced_valueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enhanced_values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enhanced_values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enhanced_values.
     */
    distinct?: Enhanced_valueScalarFieldEnum | Enhanced_valueScalarFieldEnum[]
  }

  /**
   * enhanced_value findMany
   */
  export type enhanced_valueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_value
     */
    select?: enhanced_valueSelect<ExtArgs> | null
    /**
     * Filter, which enhanced_values to fetch.
     */
    where?: enhanced_valueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enhanced_values to fetch.
     */
    orderBy?: enhanced_valueOrderByWithRelationInput | enhanced_valueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enhanced_values.
     */
    cursor?: enhanced_valueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enhanced_values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enhanced_values.
     */
    skip?: number
    distinct?: Enhanced_valueScalarFieldEnum | Enhanced_valueScalarFieldEnum[]
  }

  /**
   * enhanced_value create
   */
  export type enhanced_valueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_value
     */
    select?: enhanced_valueSelect<ExtArgs> | null
    /**
     * The data needed to create a enhanced_value.
     */
    data: XOR<enhanced_valueCreateInput, enhanced_valueUncheckedCreateInput>
  }

  /**
   * enhanced_value createMany
   */
  export type enhanced_valueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enhanced_values.
     */
    data: enhanced_valueCreateManyInput | enhanced_valueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enhanced_value update
   */
  export type enhanced_valueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_value
     */
    select?: enhanced_valueSelect<ExtArgs> | null
    /**
     * The data needed to update a enhanced_value.
     */
    data: XOR<enhanced_valueUpdateInput, enhanced_valueUncheckedUpdateInput>
    /**
     * Choose, which enhanced_value to update.
     */
    where: enhanced_valueWhereUniqueInput
  }

  /**
   * enhanced_value updateMany
   */
  export type enhanced_valueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enhanced_values.
     */
    data: XOR<enhanced_valueUpdateManyMutationInput, enhanced_valueUncheckedUpdateManyInput>
    /**
     * Filter which enhanced_values to update
     */
    where?: enhanced_valueWhereInput
  }

  /**
   * enhanced_value upsert
   */
  export type enhanced_valueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_value
     */
    select?: enhanced_valueSelect<ExtArgs> | null
    /**
     * The filter to search for the enhanced_value to update in case it exists.
     */
    where: enhanced_valueWhereUniqueInput
    /**
     * In case the enhanced_value found by the `where` argument doesn't exist, create a new enhanced_value with this data.
     */
    create: XOR<enhanced_valueCreateInput, enhanced_valueUncheckedCreateInput>
    /**
     * In case the enhanced_value was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enhanced_valueUpdateInput, enhanced_valueUncheckedUpdateInput>
  }

  /**
   * enhanced_value delete
   */
  export type enhanced_valueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_value
     */
    select?: enhanced_valueSelect<ExtArgs> | null
    /**
     * Filter which enhanced_value to delete.
     */
    where: enhanced_valueWhereUniqueInput
  }

  /**
   * enhanced_value deleteMany
   */
  export type enhanced_valueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enhanced_values to delete
     */
    where?: enhanced_valueWhereInput
  }

  /**
   * enhanced_value without action
   */
  export type enhanced_valueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enhanced_value
     */
    select?: enhanced_valueSelect<ExtArgs> | null
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


  export const PlayerScalarFieldEnum: {
    player_id: 'player_id',
    name: 'name',
    speed: 'speed',
    goal_desicion: 'goal_desicion',
    shoot_power: 'shoot_power',
    defense: 'defense',
    stamina: 'stamina',
    rarity: 'rarity'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const Enhanced_playerScalarFieldEnum: {
    enhanced_player_id: 'enhanced_player_id',
    player_id: 'player_id',
    account_id: 'account_id',
    enhancement_level: 'enhancement_level',
    speed: 'speed',
    goal_desicion: 'goal_desicion',
    shoot_power: 'shoot_power',
    defense: 'defense',
    stamina: 'stamina',
    count: 'count'
  };

  export type Enhanced_playerScalarFieldEnum = (typeof Enhanced_playerScalarFieldEnum)[keyof typeof Enhanced_playerScalarFieldEnum]


  export const Enhanced_valueScalarFieldEnum: {
    enhanced_value_id: 'enhanced_value_id',
    rarity: 'rarity',
    enhancement_level: 'enhancement_level',
    increment: 'increment'
  };

  export type Enhanced_valueScalarFieldEnum = (typeof Enhanced_valueScalarFieldEnum)[keyof typeof Enhanced_valueScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type playerWhereInput = {
    AND?: playerWhereInput | playerWhereInput[]
    OR?: playerWhereInput[]
    NOT?: playerWhereInput | playerWhereInput[]
    player_id?: IntFilter<"player"> | number
    name?: StringFilter<"player"> | string
    speed?: IntFilter<"player"> | number
    goal_desicion?: IntFilter<"player"> | number
    shoot_power?: IntFilter<"player"> | number
    defense?: IntFilter<"player"> | number
    stamina?: IntFilter<"player"> | number
    rarity?: StringFilter<"player"> | string
  }

  export type playerOrderByWithRelationInput = {
    player_id?: SortOrder
    name?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    rarity?: SortOrder
  }

  export type playerWhereUniqueInput = Prisma.AtLeast<{
    player_id?: number
    AND?: playerWhereInput | playerWhereInput[]
    OR?: playerWhereInput[]
    NOT?: playerWhereInput | playerWhereInput[]
    name?: StringFilter<"player"> | string
    speed?: IntFilter<"player"> | number
    goal_desicion?: IntFilter<"player"> | number
    shoot_power?: IntFilter<"player"> | number
    defense?: IntFilter<"player"> | number
    stamina?: IntFilter<"player"> | number
    rarity?: StringFilter<"player"> | string
  }, "player_id">

  export type playerOrderByWithAggregationInput = {
    player_id?: SortOrder
    name?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    rarity?: SortOrder
    _count?: playerCountOrderByAggregateInput
    _avg?: playerAvgOrderByAggregateInput
    _max?: playerMaxOrderByAggregateInput
    _min?: playerMinOrderByAggregateInput
    _sum?: playerSumOrderByAggregateInput
  }

  export type playerScalarWhereWithAggregatesInput = {
    AND?: playerScalarWhereWithAggregatesInput | playerScalarWhereWithAggregatesInput[]
    OR?: playerScalarWhereWithAggregatesInput[]
    NOT?: playerScalarWhereWithAggregatesInput | playerScalarWhereWithAggregatesInput[]
    player_id?: IntWithAggregatesFilter<"player"> | number
    name?: StringWithAggregatesFilter<"player"> | string
    speed?: IntWithAggregatesFilter<"player"> | number
    goal_desicion?: IntWithAggregatesFilter<"player"> | number
    shoot_power?: IntWithAggregatesFilter<"player"> | number
    defense?: IntWithAggregatesFilter<"player"> | number
    stamina?: IntWithAggregatesFilter<"player"> | number
    rarity?: StringWithAggregatesFilter<"player"> | string
  }

  export type enhanced_playerWhereInput = {
    AND?: enhanced_playerWhereInput | enhanced_playerWhereInput[]
    OR?: enhanced_playerWhereInput[]
    NOT?: enhanced_playerWhereInput | enhanced_playerWhereInput[]
    enhanced_player_id?: IntFilter<"enhanced_player"> | number
    player_id?: IntFilter<"enhanced_player"> | number
    account_id?: IntFilter<"enhanced_player"> | number
    enhancement_level?: IntFilter<"enhanced_player"> | number
    speed?: IntFilter<"enhanced_player"> | number
    goal_desicion?: IntFilter<"enhanced_player"> | number
    shoot_power?: IntFilter<"enhanced_player"> | number
    defense?: IntFilter<"enhanced_player"> | number
    stamina?: IntFilter<"enhanced_player"> | number
    count?: IntFilter<"enhanced_player"> | number
  }

  export type enhanced_playerOrderByWithRelationInput = {
    enhanced_player_id?: SortOrder
    player_id?: SortOrder
    account_id?: SortOrder
    enhancement_level?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    count?: SortOrder
  }

  export type enhanced_playerWhereUniqueInput = Prisma.AtLeast<{
    enhanced_player_id?: number
    AND?: enhanced_playerWhereInput | enhanced_playerWhereInput[]
    OR?: enhanced_playerWhereInput[]
    NOT?: enhanced_playerWhereInput | enhanced_playerWhereInput[]
    player_id?: IntFilter<"enhanced_player"> | number
    account_id?: IntFilter<"enhanced_player"> | number
    enhancement_level?: IntFilter<"enhanced_player"> | number
    speed?: IntFilter<"enhanced_player"> | number
    goal_desicion?: IntFilter<"enhanced_player"> | number
    shoot_power?: IntFilter<"enhanced_player"> | number
    defense?: IntFilter<"enhanced_player"> | number
    stamina?: IntFilter<"enhanced_player"> | number
    count?: IntFilter<"enhanced_player"> | number
  }, "enhanced_player_id">

  export type enhanced_playerOrderByWithAggregationInput = {
    enhanced_player_id?: SortOrder
    player_id?: SortOrder
    account_id?: SortOrder
    enhancement_level?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    count?: SortOrder
    _count?: enhanced_playerCountOrderByAggregateInput
    _avg?: enhanced_playerAvgOrderByAggregateInput
    _max?: enhanced_playerMaxOrderByAggregateInput
    _min?: enhanced_playerMinOrderByAggregateInput
    _sum?: enhanced_playerSumOrderByAggregateInput
  }

  export type enhanced_playerScalarWhereWithAggregatesInput = {
    AND?: enhanced_playerScalarWhereWithAggregatesInput | enhanced_playerScalarWhereWithAggregatesInput[]
    OR?: enhanced_playerScalarWhereWithAggregatesInput[]
    NOT?: enhanced_playerScalarWhereWithAggregatesInput | enhanced_playerScalarWhereWithAggregatesInput[]
    enhanced_player_id?: IntWithAggregatesFilter<"enhanced_player"> | number
    player_id?: IntWithAggregatesFilter<"enhanced_player"> | number
    account_id?: IntWithAggregatesFilter<"enhanced_player"> | number
    enhancement_level?: IntWithAggregatesFilter<"enhanced_player"> | number
    speed?: IntWithAggregatesFilter<"enhanced_player"> | number
    goal_desicion?: IntWithAggregatesFilter<"enhanced_player"> | number
    shoot_power?: IntWithAggregatesFilter<"enhanced_player"> | number
    defense?: IntWithAggregatesFilter<"enhanced_player"> | number
    stamina?: IntWithAggregatesFilter<"enhanced_player"> | number
    count?: IntWithAggregatesFilter<"enhanced_player"> | number
  }

  export type enhanced_valueWhereInput = {
    AND?: enhanced_valueWhereInput | enhanced_valueWhereInput[]
    OR?: enhanced_valueWhereInput[]
    NOT?: enhanced_valueWhereInput | enhanced_valueWhereInput[]
    enhanced_value_id?: IntFilter<"enhanced_value"> | number
    rarity?: StringFilter<"enhanced_value"> | string
    enhancement_level?: IntFilter<"enhanced_value"> | number
    increment?: IntFilter<"enhanced_value"> | number
  }

  export type enhanced_valueOrderByWithRelationInput = {
    enhanced_value_id?: SortOrder
    rarity?: SortOrder
    enhancement_level?: SortOrder
    increment?: SortOrder
  }

  export type enhanced_valueWhereUniqueInput = Prisma.AtLeast<{
    enhanced_value_id?: number
    AND?: enhanced_valueWhereInput | enhanced_valueWhereInput[]
    OR?: enhanced_valueWhereInput[]
    NOT?: enhanced_valueWhereInput | enhanced_valueWhereInput[]
    rarity?: StringFilter<"enhanced_value"> | string
    enhancement_level?: IntFilter<"enhanced_value"> | number
    increment?: IntFilter<"enhanced_value"> | number
  }, "enhanced_value_id">

  export type enhanced_valueOrderByWithAggregationInput = {
    enhanced_value_id?: SortOrder
    rarity?: SortOrder
    enhancement_level?: SortOrder
    increment?: SortOrder
    _count?: enhanced_valueCountOrderByAggregateInput
    _avg?: enhanced_valueAvgOrderByAggregateInput
    _max?: enhanced_valueMaxOrderByAggregateInput
    _min?: enhanced_valueMinOrderByAggregateInput
    _sum?: enhanced_valueSumOrderByAggregateInput
  }

  export type enhanced_valueScalarWhereWithAggregatesInput = {
    AND?: enhanced_valueScalarWhereWithAggregatesInput | enhanced_valueScalarWhereWithAggregatesInput[]
    OR?: enhanced_valueScalarWhereWithAggregatesInput[]
    NOT?: enhanced_valueScalarWhereWithAggregatesInput | enhanced_valueScalarWhereWithAggregatesInput[]
    enhanced_value_id?: IntWithAggregatesFilter<"enhanced_value"> | number
    rarity?: StringWithAggregatesFilter<"enhanced_value"> | string
    enhancement_level?: IntWithAggregatesFilter<"enhanced_value"> | number
    increment?: IntWithAggregatesFilter<"enhanced_value"> | number
  }

  export type playerCreateInput = {
    player_id: number
    name: string
    speed: number
    goal_desicion: number
    shoot_power: number
    defense: number
    stamina: number
    rarity: string
  }

  export type playerUncheckedCreateInput = {
    player_id: number
    name: string
    speed: number
    goal_desicion: number
    shoot_power: number
    defense: number
    stamina: number
    rarity: string
  }

  export type playerUpdateInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    goal_desicion?: IntFieldUpdateOperationsInput | number
    shoot_power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    rarity?: StringFieldUpdateOperationsInput | string
  }

  export type playerUncheckedUpdateInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    goal_desicion?: IntFieldUpdateOperationsInput | number
    shoot_power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    rarity?: StringFieldUpdateOperationsInput | string
  }

  export type playerCreateManyInput = {
    player_id: number
    name: string
    speed: number
    goal_desicion: number
    shoot_power: number
    defense: number
    stamina: number
    rarity: string
  }

  export type playerUpdateManyMutationInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    goal_desicion?: IntFieldUpdateOperationsInput | number
    shoot_power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    rarity?: StringFieldUpdateOperationsInput | string
  }

  export type playerUncheckedUpdateManyInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    goal_desicion?: IntFieldUpdateOperationsInput | number
    shoot_power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    rarity?: StringFieldUpdateOperationsInput | string
  }

  export type enhanced_playerCreateInput = {
    player_id: number
    account_id: number
    enhancement_level: number
    speed: number
    goal_desicion: number
    shoot_power: number
    defense: number
    stamina: number
    count: number
  }

  export type enhanced_playerUncheckedCreateInput = {
    enhanced_player_id?: number
    player_id: number
    account_id: number
    enhancement_level: number
    speed: number
    goal_desicion: number
    shoot_power: number
    defense: number
    stamina: number
    count: number
  }

  export type enhanced_playerUpdateInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    goal_desicion?: IntFieldUpdateOperationsInput | number
    shoot_power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type enhanced_playerUncheckedUpdateInput = {
    enhanced_player_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    goal_desicion?: IntFieldUpdateOperationsInput | number
    shoot_power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type enhanced_playerCreateManyInput = {
    enhanced_player_id?: number
    player_id: number
    account_id: number
    enhancement_level: number
    speed: number
    goal_desicion: number
    shoot_power: number
    defense: number
    stamina: number
    count: number
  }

  export type enhanced_playerUpdateManyMutationInput = {
    player_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    goal_desicion?: IntFieldUpdateOperationsInput | number
    shoot_power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type enhanced_playerUncheckedUpdateManyInput = {
    enhanced_player_id?: IntFieldUpdateOperationsInput | number
    player_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    enhancement_level?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    goal_desicion?: IntFieldUpdateOperationsInput | number
    shoot_power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type enhanced_valueCreateInput = {
    rarity: string
    enhancement_level: number
    increment: number
  }

  export type enhanced_valueUncheckedCreateInput = {
    enhanced_value_id?: number
    rarity: string
    enhancement_level: number
    increment: number
  }

  export type enhanced_valueUpdateInput = {
    rarity?: StringFieldUpdateOperationsInput | string
    enhancement_level?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
  }

  export type enhanced_valueUncheckedUpdateInput = {
    enhanced_value_id?: IntFieldUpdateOperationsInput | number
    rarity?: StringFieldUpdateOperationsInput | string
    enhancement_level?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
  }

  export type enhanced_valueCreateManyInput = {
    enhanced_value_id?: number
    rarity: string
    enhancement_level: number
    increment: number
  }

  export type enhanced_valueUpdateManyMutationInput = {
    rarity?: StringFieldUpdateOperationsInput | string
    enhancement_level?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
  }

  export type enhanced_valueUncheckedUpdateManyInput = {
    enhanced_value_id?: IntFieldUpdateOperationsInput | number
    rarity?: StringFieldUpdateOperationsInput | string
    enhancement_level?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
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

  export type playerCountOrderByAggregateInput = {
    player_id?: SortOrder
    name?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    rarity?: SortOrder
  }

  export type playerAvgOrderByAggregateInput = {
    player_id?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
  }

  export type playerMaxOrderByAggregateInput = {
    player_id?: SortOrder
    name?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    rarity?: SortOrder
  }

  export type playerMinOrderByAggregateInput = {
    player_id?: SortOrder
    name?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    rarity?: SortOrder
  }

  export type playerSumOrderByAggregateInput = {
    player_id?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
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

  export type enhanced_playerCountOrderByAggregateInput = {
    enhanced_player_id?: SortOrder
    player_id?: SortOrder
    account_id?: SortOrder
    enhancement_level?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    count?: SortOrder
  }

  export type enhanced_playerAvgOrderByAggregateInput = {
    enhanced_player_id?: SortOrder
    player_id?: SortOrder
    account_id?: SortOrder
    enhancement_level?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    count?: SortOrder
  }

  export type enhanced_playerMaxOrderByAggregateInput = {
    enhanced_player_id?: SortOrder
    player_id?: SortOrder
    account_id?: SortOrder
    enhancement_level?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    count?: SortOrder
  }

  export type enhanced_playerMinOrderByAggregateInput = {
    enhanced_player_id?: SortOrder
    player_id?: SortOrder
    account_id?: SortOrder
    enhancement_level?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    count?: SortOrder
  }

  export type enhanced_playerSumOrderByAggregateInput = {
    enhanced_player_id?: SortOrder
    player_id?: SortOrder
    account_id?: SortOrder
    enhancement_level?: SortOrder
    speed?: SortOrder
    goal_desicion?: SortOrder
    shoot_power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    count?: SortOrder
  }

  export type enhanced_valueCountOrderByAggregateInput = {
    enhanced_value_id?: SortOrder
    rarity?: SortOrder
    enhancement_level?: SortOrder
    increment?: SortOrder
  }

  export type enhanced_valueAvgOrderByAggregateInput = {
    enhanced_value_id?: SortOrder
    enhancement_level?: SortOrder
    increment?: SortOrder
  }

  export type enhanced_valueMaxOrderByAggregateInput = {
    enhanced_value_id?: SortOrder
    rarity?: SortOrder
    enhancement_level?: SortOrder
    increment?: SortOrder
  }

  export type enhanced_valueMinOrderByAggregateInput = {
    enhanced_value_id?: SortOrder
    rarity?: SortOrder
    enhancement_level?: SortOrder
    increment?: SortOrder
  }

  export type enhanced_valueSumOrderByAggregateInput = {
    enhanced_value_id?: SortOrder
    enhancement_level?: SortOrder
    increment?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use playerDefaultArgs instead
     */
    export type playerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = playerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use enhanced_playerDefaultArgs instead
     */
    export type enhanced_playerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = enhanced_playerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use enhanced_valueDefaultArgs instead
     */
    export type enhanced_valueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = enhanced_valueDefaultArgs<ExtArgs>

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