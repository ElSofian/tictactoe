
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model games
 * 
 */
export type games = $Result.DefaultSelection<Prisma.$gamesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.games`: Exposes CRUD operations for the **games** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.games.findMany()
    * ```
    */
  get games(): Prisma.gamesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Session: 'Session',
    games: 'games'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "games"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      games: {
        payload: Prisma.$gamesPayload<ExtArgs>
        fields: Prisma.gamesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gamesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gamesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>
          }
          findFirst: {
            args: Prisma.gamesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gamesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>
          }
          findMany: {
            args: Prisma.gamesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>[]
          }
          create: {
            args: Prisma.gamesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>
          }
          createMany: {
            args: Prisma.gamesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.gamesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>
          }
          update: {
            args: Prisma.gamesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>
          }
          deleteMany: {
            args: Prisma.gamesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gamesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gamesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gamesPayload>
          }
          aggregate: {
            args: Prisma.GamesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGames>
          }
          groupBy: {
            args: Prisma.gamesGroupByArgs<ExtArgs>
            result: $Utils.Optional<GamesGroupByOutputType>[]
          }
          count: {
            args: Prisma.gamesCountArgs<ExtArgs>
            result: $Utils.Optional<GamesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    games?: gamesOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    games_games_player_1ToUser: number
    games_games_player_2ToUser: number
    games_games_winnerToUser: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    games_games_player_1ToUser?: boolean | UserCountOutputTypeCountGames_games_player_1ToUserArgs
    games_games_player_2ToUser?: boolean | UserCountOutputTypeCountGames_games_player_2ToUserArgs
    games_games_winnerToUser?: boolean | UserCountOutputTypeCountGames_games_winnerToUserArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGames_games_player_1ToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gamesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGames_games_player_2ToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gamesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGames_games_winnerToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gamesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    hashedPassword: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    hashedPassword: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    hashedPassword: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    hashedPassword?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    hashedPassword?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    hashedPassword?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    hashedPassword: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    hashedPassword?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    games_games_player_1ToUser?: boolean | User$games_games_player_1ToUserArgs<ExtArgs>
    games_games_player_2ToUser?: boolean | User$games_games_player_2ToUserArgs<ExtArgs>
    games_games_winnerToUser?: boolean | User$games_games_winnerToUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    hashedPassword?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "hashedPassword", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    games_games_player_1ToUser?: boolean | User$games_games_player_1ToUserArgs<ExtArgs>
    games_games_player_2ToUser?: boolean | User$games_games_player_2ToUserArgs<ExtArgs>
    games_games_winnerToUser?: boolean | User$games_games_winnerToUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      games_games_player_1ToUser: Prisma.$gamesPayload<ExtArgs>[]
      games_games_player_2ToUser: Prisma.$gamesPayload<ExtArgs>[]
      games_games_winnerToUser: Prisma.$gamesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      hashedPassword: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    games_games_player_1ToUser<T extends User$games_games_player_1ToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$games_games_player_1ToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    games_games_player_2ToUser<T extends User$games_games_player_2ToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$games_games_player_2ToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    games_games_winnerToUser<T extends User$games_games_winnerToUserArgs<ExtArgs> = {}>(args?: Subset<T, User$games_games_winnerToUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.games_games_player_1ToUser
   */
  export type User$games_games_player_1ToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    where?: gamesWhereInput
    orderBy?: gamesOrderByWithRelationInput | gamesOrderByWithRelationInput[]
    cursor?: gamesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * User.games_games_player_2ToUser
   */
  export type User$games_games_player_2ToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    where?: gamesWhereInput
    orderBy?: gamesOrderByWithRelationInput | gamesOrderByWithRelationInput[]
    cursor?: gamesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * User.games_games_winnerToUser
   */
  export type User$games_games_winnerToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    where?: gamesWhereInput
    orderBy?: gamesOrderByWithRelationInput | gamesOrderByWithRelationInput[]
    cursor?: gamesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model games
   */

  export type AggregateGames = {
    _count: GamesCountAggregateOutputType | null
    _avg: GamesAvgAggregateOutputType | null
    _sum: GamesSumAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  export type GamesAvgAggregateOutputType = {
    id: number | null
  }

  export type GamesSumAggregateOutputType = {
    id: number | null
  }

  export type GamesMinAggregateOutputType = {
    id: number | null
    player_1: string | null
    player_2: string | null
    winner: string | null
    draw: boolean | null
    date: Date | null
  }

  export type GamesMaxAggregateOutputType = {
    id: number | null
    player_1: string | null
    player_2: string | null
    winner: string | null
    draw: boolean | null
    date: Date | null
  }

  export type GamesCountAggregateOutputType = {
    id: number
    player_1: number
    player_2: number
    winner: number
    draw: number
    date: number
    _all: number
  }


  export type GamesAvgAggregateInputType = {
    id?: true
  }

  export type GamesSumAggregateInputType = {
    id?: true
  }

  export type GamesMinAggregateInputType = {
    id?: true
    player_1?: true
    player_2?: true
    winner?: true
    draw?: true
    date?: true
  }

  export type GamesMaxAggregateInputType = {
    id?: true
    player_1?: true
    player_2?: true
    winner?: true
    draw?: true
    date?: true
  }

  export type GamesCountAggregateInputType = {
    id?: true
    player_1?: true
    player_2?: true
    winner?: true
    draw?: true
    date?: true
    _all?: true
  }

  export type GamesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which games to aggregate.
     */
    where?: gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gamesOrderByWithRelationInput | gamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned games
    **/
    _count?: true | GamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GamesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GamesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GamesMaxAggregateInputType
  }

  export type GetGamesAggregateType<T extends GamesAggregateArgs> = {
        [P in keyof T & keyof AggregateGames]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGames[P]>
      : GetScalarType<T[P], AggregateGames[P]>
  }




  export type gamesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gamesWhereInput
    orderBy?: gamesOrderByWithAggregationInput | gamesOrderByWithAggregationInput[]
    by: GamesScalarFieldEnum[] | GamesScalarFieldEnum
    having?: gamesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GamesCountAggregateInputType | true
    _avg?: GamesAvgAggregateInputType
    _sum?: GamesSumAggregateInputType
    _min?: GamesMinAggregateInputType
    _max?: GamesMaxAggregateInputType
  }

  export type GamesGroupByOutputType = {
    id: number
    player_1: string | null
    player_2: string | null
    winner: string | null
    draw: boolean
    date: Date
    _count: GamesCountAggregateOutputType | null
    _avg: GamesAvgAggregateOutputType | null
    _sum: GamesSumAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  type GetGamesGroupByPayload<T extends gamesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GamesGroupByOutputType[P]>
            : GetScalarType<T[P], GamesGroupByOutputType[P]>
        }
      >
    >


  export type gamesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player_1?: boolean
    player_2?: boolean
    winner?: boolean
    draw?: boolean
    date?: boolean
    User_games_player_1ToUser?: boolean | games$User_games_player_1ToUserArgs<ExtArgs>
    User_games_player_2ToUser?: boolean | games$User_games_player_2ToUserArgs<ExtArgs>
    User_games_winnerToUser?: boolean | games$User_games_winnerToUserArgs<ExtArgs>
  }, ExtArgs["result"]["games"]>



  export type gamesSelectScalar = {
    id?: boolean
    player_1?: boolean
    player_2?: boolean
    winner?: boolean
    draw?: boolean
    date?: boolean
  }

  export type gamesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player_1" | "player_2" | "winner" | "draw" | "date", ExtArgs["result"]["games"]>
  export type gamesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User_games_player_1ToUser?: boolean | games$User_games_player_1ToUserArgs<ExtArgs>
    User_games_player_2ToUser?: boolean | games$User_games_player_2ToUserArgs<ExtArgs>
    User_games_winnerToUser?: boolean | games$User_games_winnerToUserArgs<ExtArgs>
  }

  export type $gamesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "games"
    objects: {
      User_games_player_1ToUser: Prisma.$UserPayload<ExtArgs> | null
      User_games_player_2ToUser: Prisma.$UserPayload<ExtArgs> | null
      User_games_winnerToUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      player_1: string | null
      player_2: string | null
      winner: string | null
      draw: boolean
      date: Date
    }, ExtArgs["result"]["games"]>
    composites: {}
  }

  type gamesGetPayload<S extends boolean | null | undefined | gamesDefaultArgs> = $Result.GetResult<Prisma.$gamesPayload, S>

  type gamesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gamesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GamesCountAggregateInputType | true
    }

  export interface gamesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['games'], meta: { name: 'games' } }
    /**
     * Find zero or one Games that matches the filter.
     * @param {gamesFindUniqueArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gamesFindUniqueArgs>(args: SelectSubset<T, gamesFindUniqueArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Games that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gamesFindUniqueOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gamesFindUniqueOrThrowArgs>(args: SelectSubset<T, gamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesFindFirstArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gamesFindFirstArgs>(args?: SelectSubset<T, gamesFindFirstArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Games that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesFindFirstOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gamesFindFirstOrThrowArgs>(args?: SelectSubset<T, gamesFindFirstOrThrowArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.games.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.games.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gamesWithIdOnly = await prisma.games.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gamesFindManyArgs>(args?: SelectSubset<T, gamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Games.
     * @param {gamesCreateArgs} args - Arguments to create a Games.
     * @example
     * // Create one Games
     * const Games = await prisma.games.create({
     *   data: {
     *     // ... data to create a Games
     *   }
     * })
     * 
     */
    create<T extends gamesCreateArgs>(args: SelectSubset<T, gamesCreateArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {gamesCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const games = await prisma.games.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gamesCreateManyArgs>(args?: SelectSubset<T, gamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Games.
     * @param {gamesDeleteArgs} args - Arguments to delete one Games.
     * @example
     * // Delete one Games
     * const Games = await prisma.games.delete({
     *   where: {
     *     // ... filter to delete one Games
     *   }
     * })
     * 
     */
    delete<T extends gamesDeleteArgs>(args: SelectSubset<T, gamesDeleteArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Games.
     * @param {gamesUpdateArgs} args - Arguments to update one Games.
     * @example
     * // Update one Games
     * const games = await prisma.games.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gamesUpdateArgs>(args: SelectSubset<T, gamesUpdateArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {gamesDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.games.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gamesDeleteManyArgs>(args?: SelectSubset<T, gamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gamesUpdateManyArgs>(args: SelectSubset<T, gamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Games.
     * @param {gamesUpsertArgs} args - Arguments to update or create a Games.
     * @example
     * // Update or create a Games
     * const games = await prisma.games.upsert({
     *   create: {
     *     // ... data to create a Games
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Games we want to update
     *   }
     * })
     */
    upsert<T extends gamesUpsertArgs>(args: SelectSubset<T, gamesUpsertArgs<ExtArgs>>): Prisma__gamesClient<$Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.games.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends gamesCountArgs>(
      args?: Subset<T, gamesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GamesAggregateArgs>(args: Subset<T, GamesAggregateArgs>): Prisma.PrismaPromise<GetGamesAggregateType<T>>

    /**
     * Group by Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gamesGroupByArgs} args - Group by arguments.
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
      T extends gamesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gamesGroupByArgs['orderBy'] }
        : { orderBy?: gamesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the games model
   */
  readonly fields: gamesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for games.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gamesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User_games_player_1ToUser<T extends games$User_games_player_1ToUserArgs<ExtArgs> = {}>(args?: Subset<T, games$User_games_player_1ToUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User_games_player_2ToUser<T extends games$User_games_player_2ToUserArgs<ExtArgs> = {}>(args?: Subset<T, games$User_games_player_2ToUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User_games_winnerToUser<T extends games$User_games_winnerToUserArgs<ExtArgs> = {}>(args?: Subset<T, games$User_games_winnerToUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the games model
   */
  interface gamesFieldRefs {
    readonly id: FieldRef<"games", 'Int'>
    readonly player_1: FieldRef<"games", 'String'>
    readonly player_2: FieldRef<"games", 'String'>
    readonly winner: FieldRef<"games", 'String'>
    readonly draw: FieldRef<"games", 'Boolean'>
    readonly date: FieldRef<"games", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * games findUnique
   */
  export type gamesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where: gamesWhereUniqueInput
  }

  /**
   * games findUniqueOrThrow
   */
  export type gamesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where: gamesWhereUniqueInput
  }

  /**
   * games findFirst
   */
  export type gamesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where?: gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gamesOrderByWithRelationInput | gamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for games.
     */
    cursor?: gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * games findFirstOrThrow
   */
  export type gamesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where?: gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gamesOrderByWithRelationInput | gamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for games.
     */
    cursor?: gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * games findMany
   */
  export type gamesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * Filter, which games to fetch.
     */
    where?: gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of games to fetch.
     */
    orderBy?: gamesOrderByWithRelationInput | gamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing games.
     */
    cursor?: gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` games.
     */
    skip?: number
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * games create
   */
  export type gamesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * The data needed to create a games.
     */
    data?: XOR<gamesCreateInput, gamesUncheckedCreateInput>
  }

  /**
   * games createMany
   */
  export type gamesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many games.
     */
    data: gamesCreateManyInput | gamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * games update
   */
  export type gamesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * The data needed to update a games.
     */
    data: XOR<gamesUpdateInput, gamesUncheckedUpdateInput>
    /**
     * Choose, which games to update.
     */
    where: gamesWhereUniqueInput
  }

  /**
   * games updateMany
   */
  export type gamesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update games.
     */
    data: XOR<gamesUpdateManyMutationInput, gamesUncheckedUpdateManyInput>
    /**
     * Filter which games to update
     */
    where?: gamesWhereInput
    /**
     * Limit how many games to update.
     */
    limit?: number
  }

  /**
   * games upsert
   */
  export type gamesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * The filter to search for the games to update in case it exists.
     */
    where: gamesWhereUniqueInput
    /**
     * In case the games found by the `where` argument doesn't exist, create a new games with this data.
     */
    create: XOR<gamesCreateInput, gamesUncheckedCreateInput>
    /**
     * In case the games was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gamesUpdateInput, gamesUncheckedUpdateInput>
  }

  /**
   * games delete
   */
  export type gamesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
    /**
     * Filter which games to delete.
     */
    where: gamesWhereUniqueInput
  }

  /**
   * games deleteMany
   */
  export type gamesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which games to delete
     */
    where?: gamesWhereInput
    /**
     * Limit how many games to delete.
     */
    limit?: number
  }

  /**
   * games.User_games_player_1ToUser
   */
  export type games$User_games_player_1ToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * games.User_games_player_2ToUser
   */
  export type games$User_games_player_2ToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * games.User_games_winnerToUser
   */
  export type games$User_games_winnerToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * games without action
   */
  export type gamesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the games
     */
    select?: gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the games
     */
    omit?: gamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gamesInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    hashedPassword: 'hashedPassword'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const GamesScalarFieldEnum: {
    id: 'id',
    player_1: 'player_1',
    player_2: 'player_2',
    winner: 'winner',
    draw: 'draw',
    date: 'date'
  };

  export type GamesScalarFieldEnum = (typeof GamesScalarFieldEnum)[keyof typeof GamesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    hashedPassword: 'hashedPassword'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const gamesOrderByRelevanceFieldEnum: {
    player_1: 'player_1',
    player_2: 'player_2',
    winner: 'winner'
  };

  export type gamesOrderByRelevanceFieldEnum = (typeof gamesOrderByRelevanceFieldEnum)[keyof typeof gamesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    sessions?: SessionListRelationFilter
    games_games_player_1ToUser?: GamesListRelationFilter
    games_games_player_2ToUser?: GamesListRelationFilter
    games_games_winnerToUser?: GamesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    games_games_player_1ToUser?: gamesOrderByRelationAggregateInput
    games_games_player_2ToUser?: gamesOrderByRelationAggregateInput
    games_games_winnerToUser?: gamesOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hashedPassword?: StringFilter<"User"> | string
    sessions?: SessionListRelationFilter
    games_games_player_1ToUser?: GamesListRelationFilter
    games_games_player_2ToUser?: GamesListRelationFilter
    games_games_winnerToUser?: GamesListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type gamesWhereInput = {
    AND?: gamesWhereInput | gamesWhereInput[]
    OR?: gamesWhereInput[]
    NOT?: gamesWhereInput | gamesWhereInput[]
    id?: IntFilter<"games"> | number
    player_1?: StringNullableFilter<"games"> | string | null
    player_2?: StringNullableFilter<"games"> | string | null
    winner?: StringNullableFilter<"games"> | string | null
    draw?: BoolFilter<"games"> | boolean
    date?: DateTimeFilter<"games"> | Date | string
    User_games_player_1ToUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    User_games_player_2ToUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    User_games_winnerToUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type gamesOrderByWithRelationInput = {
    id?: SortOrder
    player_1?: SortOrderInput | SortOrder
    player_2?: SortOrderInput | SortOrder
    winner?: SortOrderInput | SortOrder
    draw?: SortOrder
    date?: SortOrder
    User_games_player_1ToUser?: UserOrderByWithRelationInput
    User_games_player_2ToUser?: UserOrderByWithRelationInput
    User_games_winnerToUser?: UserOrderByWithRelationInput
    _relevance?: gamesOrderByRelevanceInput
  }

  export type gamesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: gamesWhereInput | gamesWhereInput[]
    OR?: gamesWhereInput[]
    NOT?: gamesWhereInput | gamesWhereInput[]
    player_1?: StringNullableFilter<"games"> | string | null
    player_2?: StringNullableFilter<"games"> | string | null
    winner?: StringNullableFilter<"games"> | string | null
    draw?: BoolFilter<"games"> | boolean
    date?: DateTimeFilter<"games"> | Date | string
    User_games_player_1ToUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    User_games_player_2ToUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    User_games_winnerToUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type gamesOrderByWithAggregationInput = {
    id?: SortOrder
    player_1?: SortOrderInput | SortOrder
    player_2?: SortOrderInput | SortOrder
    winner?: SortOrderInput | SortOrder
    draw?: SortOrder
    date?: SortOrder
    _count?: gamesCountOrderByAggregateInput
    _avg?: gamesAvgOrderByAggregateInput
    _max?: gamesMaxOrderByAggregateInput
    _min?: gamesMinOrderByAggregateInput
    _sum?: gamesSumOrderByAggregateInput
  }

  export type gamesScalarWhereWithAggregatesInput = {
    AND?: gamesScalarWhereWithAggregatesInput | gamesScalarWhereWithAggregatesInput[]
    OR?: gamesScalarWhereWithAggregatesInput[]
    NOT?: gamesScalarWhereWithAggregatesInput | gamesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"games"> | number
    player_1?: StringNullableWithAggregatesFilter<"games"> | string | null
    player_2?: StringNullableWithAggregatesFilter<"games"> | string | null
    winner?: StringNullableWithAggregatesFilter<"games"> | string | null
    draw?: BoolWithAggregatesFilter<"games"> | boolean
    date?: DateTimeWithAggregatesFilter<"games"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    hashedPassword: string
    sessions?: SessionCreateNestedManyWithoutUserInput
    games_games_player_1ToUser?: gamesCreateNestedManyWithoutUser_games_player_1ToUserInput
    games_games_player_2ToUser?: gamesCreateNestedManyWithoutUser_games_player_2ToUserInput
    games_games_winnerToUser?: gamesCreateNestedManyWithoutUser_games_winnerToUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    hashedPassword: string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    games_games_player_1ToUser?: gamesUncheckedCreateNestedManyWithoutUser_games_player_1ToUserInput
    games_games_player_2ToUser?: gamesUncheckedCreateNestedManyWithoutUser_games_player_2ToUserInput
    games_games_winnerToUser?: gamesUncheckedCreateNestedManyWithoutUser_games_winnerToUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    games_games_player_1ToUser?: gamesUpdateManyWithoutUser_games_player_1ToUserNestedInput
    games_games_player_2ToUser?: gamesUpdateManyWithoutUser_games_player_2ToUserNestedInput
    games_games_winnerToUser?: gamesUpdateManyWithoutUser_games_winnerToUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    games_games_player_1ToUser?: gamesUncheckedUpdateManyWithoutUser_games_player_1ToUserNestedInput
    games_games_player_2ToUser?: gamesUncheckedUpdateManyWithoutUser_games_player_2ToUserNestedInput
    games_games_winnerToUser?: gamesUncheckedUpdateManyWithoutUser_games_winnerToUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    hashedPassword: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gamesCreateInput = {
    draw?: boolean
    date?: Date | string
    User_games_player_1ToUser?: UserCreateNestedOneWithoutGames_games_player_1ToUserInput
    User_games_player_2ToUser?: UserCreateNestedOneWithoutGames_games_player_2ToUserInput
    User_games_winnerToUser?: UserCreateNestedOneWithoutGames_games_winnerToUserInput
  }

  export type gamesUncheckedCreateInput = {
    id?: number
    player_1?: string | null
    player_2?: string | null
    winner?: string | null
    draw?: boolean
    date?: Date | string
  }

  export type gamesUpdateInput = {
    draw?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    User_games_player_1ToUser?: UserUpdateOneWithoutGames_games_player_1ToUserNestedInput
    User_games_player_2ToUser?: UserUpdateOneWithoutGames_games_player_2ToUserNestedInput
    User_games_winnerToUser?: UserUpdateOneWithoutGames_games_winnerToUserNestedInput
  }

  export type gamesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_1?: NullableStringFieldUpdateOperationsInput | string | null
    player_2?: NullableStringFieldUpdateOperationsInput | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    draw?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gamesCreateManyInput = {
    id?: number
    player_1?: string | null
    player_2?: string | null
    winner?: string | null
    draw?: boolean
    date?: Date | string
  }

  export type gamesUpdateManyMutationInput = {
    draw?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gamesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_1?: NullableStringFieldUpdateOperationsInput | string | null
    player_2?: NullableStringFieldUpdateOperationsInput | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    draw?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type GamesListRelationFilter = {
    every?: gamesWhereInput
    some?: gamesWhereInput
    none?: gamesWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gamesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type gamesOrderByRelevanceInput = {
    fields: gamesOrderByRelevanceFieldEnum | gamesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type gamesCountOrderByAggregateInput = {
    id?: SortOrder
    player_1?: SortOrder
    player_2?: SortOrder
    winner?: SortOrder
    draw?: SortOrder
    date?: SortOrder
  }

  export type gamesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type gamesMaxOrderByAggregateInput = {
    id?: SortOrder
    player_1?: SortOrder
    player_2?: SortOrder
    winner?: SortOrder
    draw?: SortOrder
    date?: SortOrder
  }

  export type gamesMinOrderByAggregateInput = {
    id?: SortOrder
    player_1?: SortOrder
    player_2?: SortOrder
    winner?: SortOrder
    draw?: SortOrder
    date?: SortOrder
  }

  export type gamesSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type gamesCreateNestedManyWithoutUser_games_player_1ToUserInput = {
    create?: XOR<gamesCreateWithoutUser_games_player_1ToUserInput, gamesUncheckedCreateWithoutUser_games_player_1ToUserInput> | gamesCreateWithoutUser_games_player_1ToUserInput[] | gamesUncheckedCreateWithoutUser_games_player_1ToUserInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutUser_games_player_1ToUserInput | gamesCreateOrConnectWithoutUser_games_player_1ToUserInput[]
    createMany?: gamesCreateManyUser_games_player_1ToUserInputEnvelope
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
  }

  export type gamesCreateNestedManyWithoutUser_games_player_2ToUserInput = {
    create?: XOR<gamesCreateWithoutUser_games_player_2ToUserInput, gamesUncheckedCreateWithoutUser_games_player_2ToUserInput> | gamesCreateWithoutUser_games_player_2ToUserInput[] | gamesUncheckedCreateWithoutUser_games_player_2ToUserInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutUser_games_player_2ToUserInput | gamesCreateOrConnectWithoutUser_games_player_2ToUserInput[]
    createMany?: gamesCreateManyUser_games_player_2ToUserInputEnvelope
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
  }

  export type gamesCreateNestedManyWithoutUser_games_winnerToUserInput = {
    create?: XOR<gamesCreateWithoutUser_games_winnerToUserInput, gamesUncheckedCreateWithoutUser_games_winnerToUserInput> | gamesCreateWithoutUser_games_winnerToUserInput[] | gamesUncheckedCreateWithoutUser_games_winnerToUserInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutUser_games_winnerToUserInput | gamesCreateOrConnectWithoutUser_games_winnerToUserInput[]
    createMany?: gamesCreateManyUser_games_winnerToUserInputEnvelope
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type gamesUncheckedCreateNestedManyWithoutUser_games_player_1ToUserInput = {
    create?: XOR<gamesCreateWithoutUser_games_player_1ToUserInput, gamesUncheckedCreateWithoutUser_games_player_1ToUserInput> | gamesCreateWithoutUser_games_player_1ToUserInput[] | gamesUncheckedCreateWithoutUser_games_player_1ToUserInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutUser_games_player_1ToUserInput | gamesCreateOrConnectWithoutUser_games_player_1ToUserInput[]
    createMany?: gamesCreateManyUser_games_player_1ToUserInputEnvelope
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
  }

  export type gamesUncheckedCreateNestedManyWithoutUser_games_player_2ToUserInput = {
    create?: XOR<gamesCreateWithoutUser_games_player_2ToUserInput, gamesUncheckedCreateWithoutUser_games_player_2ToUserInput> | gamesCreateWithoutUser_games_player_2ToUserInput[] | gamesUncheckedCreateWithoutUser_games_player_2ToUserInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutUser_games_player_2ToUserInput | gamesCreateOrConnectWithoutUser_games_player_2ToUserInput[]
    createMany?: gamesCreateManyUser_games_player_2ToUserInputEnvelope
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
  }

  export type gamesUncheckedCreateNestedManyWithoutUser_games_winnerToUserInput = {
    create?: XOR<gamesCreateWithoutUser_games_winnerToUserInput, gamesUncheckedCreateWithoutUser_games_winnerToUserInput> | gamesCreateWithoutUser_games_winnerToUserInput[] | gamesUncheckedCreateWithoutUser_games_winnerToUserInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutUser_games_winnerToUserInput | gamesCreateOrConnectWithoutUser_games_winnerToUserInput[]
    createMany?: gamesCreateManyUser_games_winnerToUserInputEnvelope
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type gamesUpdateManyWithoutUser_games_player_1ToUserNestedInput = {
    create?: XOR<gamesCreateWithoutUser_games_player_1ToUserInput, gamesUncheckedCreateWithoutUser_games_player_1ToUserInput> | gamesCreateWithoutUser_games_player_1ToUserInput[] | gamesUncheckedCreateWithoutUser_games_player_1ToUserInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutUser_games_player_1ToUserInput | gamesCreateOrConnectWithoutUser_games_player_1ToUserInput[]
    upsert?: gamesUpsertWithWhereUniqueWithoutUser_games_player_1ToUserInput | gamesUpsertWithWhereUniqueWithoutUser_games_player_1ToUserInput[]
    createMany?: gamesCreateManyUser_games_player_1ToUserInputEnvelope
    set?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    disconnect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    delete?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    update?: gamesUpdateWithWhereUniqueWithoutUser_games_player_1ToUserInput | gamesUpdateWithWhereUniqueWithoutUser_games_player_1ToUserInput[]
    updateMany?: gamesUpdateManyWithWhereWithoutUser_games_player_1ToUserInput | gamesUpdateManyWithWhereWithoutUser_games_player_1ToUserInput[]
    deleteMany?: gamesScalarWhereInput | gamesScalarWhereInput[]
  }

  export type gamesUpdateManyWithoutUser_games_player_2ToUserNestedInput = {
    create?: XOR<gamesCreateWithoutUser_games_player_2ToUserInput, gamesUncheckedCreateWithoutUser_games_player_2ToUserInput> | gamesCreateWithoutUser_games_player_2ToUserInput[] | gamesUncheckedCreateWithoutUser_games_player_2ToUserInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutUser_games_player_2ToUserInput | gamesCreateOrConnectWithoutUser_games_player_2ToUserInput[]
    upsert?: gamesUpsertWithWhereUniqueWithoutUser_games_player_2ToUserInput | gamesUpsertWithWhereUniqueWithoutUser_games_player_2ToUserInput[]
    createMany?: gamesCreateManyUser_games_player_2ToUserInputEnvelope
    set?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    disconnect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    delete?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    update?: gamesUpdateWithWhereUniqueWithoutUser_games_player_2ToUserInput | gamesUpdateWithWhereUniqueWithoutUser_games_player_2ToUserInput[]
    updateMany?: gamesUpdateManyWithWhereWithoutUser_games_player_2ToUserInput | gamesUpdateManyWithWhereWithoutUser_games_player_2ToUserInput[]
    deleteMany?: gamesScalarWhereInput | gamesScalarWhereInput[]
  }

  export type gamesUpdateManyWithoutUser_games_winnerToUserNestedInput = {
    create?: XOR<gamesCreateWithoutUser_games_winnerToUserInput, gamesUncheckedCreateWithoutUser_games_winnerToUserInput> | gamesCreateWithoutUser_games_winnerToUserInput[] | gamesUncheckedCreateWithoutUser_games_winnerToUserInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutUser_games_winnerToUserInput | gamesCreateOrConnectWithoutUser_games_winnerToUserInput[]
    upsert?: gamesUpsertWithWhereUniqueWithoutUser_games_winnerToUserInput | gamesUpsertWithWhereUniqueWithoutUser_games_winnerToUserInput[]
    createMany?: gamesCreateManyUser_games_winnerToUserInputEnvelope
    set?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    disconnect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    delete?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    update?: gamesUpdateWithWhereUniqueWithoutUser_games_winnerToUserInput | gamesUpdateWithWhereUniqueWithoutUser_games_winnerToUserInput[]
    updateMany?: gamesUpdateManyWithWhereWithoutUser_games_winnerToUserInput | gamesUpdateManyWithWhereWithoutUser_games_winnerToUserInput[]
    deleteMany?: gamesScalarWhereInput | gamesScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type gamesUncheckedUpdateManyWithoutUser_games_player_1ToUserNestedInput = {
    create?: XOR<gamesCreateWithoutUser_games_player_1ToUserInput, gamesUncheckedCreateWithoutUser_games_player_1ToUserInput> | gamesCreateWithoutUser_games_player_1ToUserInput[] | gamesUncheckedCreateWithoutUser_games_player_1ToUserInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutUser_games_player_1ToUserInput | gamesCreateOrConnectWithoutUser_games_player_1ToUserInput[]
    upsert?: gamesUpsertWithWhereUniqueWithoutUser_games_player_1ToUserInput | gamesUpsertWithWhereUniqueWithoutUser_games_player_1ToUserInput[]
    createMany?: gamesCreateManyUser_games_player_1ToUserInputEnvelope
    set?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    disconnect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    delete?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    update?: gamesUpdateWithWhereUniqueWithoutUser_games_player_1ToUserInput | gamesUpdateWithWhereUniqueWithoutUser_games_player_1ToUserInput[]
    updateMany?: gamesUpdateManyWithWhereWithoutUser_games_player_1ToUserInput | gamesUpdateManyWithWhereWithoutUser_games_player_1ToUserInput[]
    deleteMany?: gamesScalarWhereInput | gamesScalarWhereInput[]
  }

  export type gamesUncheckedUpdateManyWithoutUser_games_player_2ToUserNestedInput = {
    create?: XOR<gamesCreateWithoutUser_games_player_2ToUserInput, gamesUncheckedCreateWithoutUser_games_player_2ToUserInput> | gamesCreateWithoutUser_games_player_2ToUserInput[] | gamesUncheckedCreateWithoutUser_games_player_2ToUserInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutUser_games_player_2ToUserInput | gamesCreateOrConnectWithoutUser_games_player_2ToUserInput[]
    upsert?: gamesUpsertWithWhereUniqueWithoutUser_games_player_2ToUserInput | gamesUpsertWithWhereUniqueWithoutUser_games_player_2ToUserInput[]
    createMany?: gamesCreateManyUser_games_player_2ToUserInputEnvelope
    set?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    disconnect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    delete?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    update?: gamesUpdateWithWhereUniqueWithoutUser_games_player_2ToUserInput | gamesUpdateWithWhereUniqueWithoutUser_games_player_2ToUserInput[]
    updateMany?: gamesUpdateManyWithWhereWithoutUser_games_player_2ToUserInput | gamesUpdateManyWithWhereWithoutUser_games_player_2ToUserInput[]
    deleteMany?: gamesScalarWhereInput | gamesScalarWhereInput[]
  }

  export type gamesUncheckedUpdateManyWithoutUser_games_winnerToUserNestedInput = {
    create?: XOR<gamesCreateWithoutUser_games_winnerToUserInput, gamesUncheckedCreateWithoutUser_games_winnerToUserInput> | gamesCreateWithoutUser_games_winnerToUserInput[] | gamesUncheckedCreateWithoutUser_games_winnerToUserInput[]
    connectOrCreate?: gamesCreateOrConnectWithoutUser_games_winnerToUserInput | gamesCreateOrConnectWithoutUser_games_winnerToUserInput[]
    upsert?: gamesUpsertWithWhereUniqueWithoutUser_games_winnerToUserInput | gamesUpsertWithWhereUniqueWithoutUser_games_winnerToUserInput[]
    createMany?: gamesCreateManyUser_games_winnerToUserInputEnvelope
    set?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    disconnect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    delete?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    connect?: gamesWhereUniqueInput | gamesWhereUniqueInput[]
    update?: gamesUpdateWithWhereUniqueWithoutUser_games_winnerToUserInput | gamesUpdateWithWhereUniqueWithoutUser_games_winnerToUserInput[]
    updateMany?: gamesUpdateManyWithWhereWithoutUser_games_winnerToUserInput | gamesUpdateManyWithWhereWithoutUser_games_winnerToUserInput[]
    deleteMany?: gamesScalarWhereInput | gamesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutGames_games_player_1ToUserInput = {
    create?: XOR<UserCreateWithoutGames_games_player_1ToUserInput, UserUncheckedCreateWithoutGames_games_player_1ToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutGames_games_player_1ToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGames_games_player_2ToUserInput = {
    create?: XOR<UserCreateWithoutGames_games_player_2ToUserInput, UserUncheckedCreateWithoutGames_games_player_2ToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutGames_games_player_2ToUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGames_games_winnerToUserInput = {
    create?: XOR<UserCreateWithoutGames_games_winnerToUserInput, UserUncheckedCreateWithoutGames_games_winnerToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutGames_games_winnerToUserInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutGames_games_player_1ToUserNestedInput = {
    create?: XOR<UserCreateWithoutGames_games_player_1ToUserInput, UserUncheckedCreateWithoutGames_games_player_1ToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutGames_games_player_1ToUserInput
    upsert?: UserUpsertWithoutGames_games_player_1ToUserInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGames_games_player_1ToUserInput, UserUpdateWithoutGames_games_player_1ToUserInput>, UserUncheckedUpdateWithoutGames_games_player_1ToUserInput>
  }

  export type UserUpdateOneWithoutGames_games_player_2ToUserNestedInput = {
    create?: XOR<UserCreateWithoutGames_games_player_2ToUserInput, UserUncheckedCreateWithoutGames_games_player_2ToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutGames_games_player_2ToUserInput
    upsert?: UserUpsertWithoutGames_games_player_2ToUserInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGames_games_player_2ToUserInput, UserUpdateWithoutGames_games_player_2ToUserInput>, UserUncheckedUpdateWithoutGames_games_player_2ToUserInput>
  }

  export type UserUpdateOneWithoutGames_games_winnerToUserNestedInput = {
    create?: XOR<UserCreateWithoutGames_games_winnerToUserInput, UserUncheckedCreateWithoutGames_games_winnerToUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutGames_games_winnerToUserInput
    upsert?: UserUpsertWithoutGames_games_winnerToUserInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGames_games_winnerToUserInput, UserUpdateWithoutGames_games_winnerToUserInput>, UserUncheckedUpdateWithoutGames_games_winnerToUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type gamesCreateWithoutUser_games_player_1ToUserInput = {
    draw?: boolean
    date?: Date | string
    User_games_player_2ToUser?: UserCreateNestedOneWithoutGames_games_player_2ToUserInput
    User_games_winnerToUser?: UserCreateNestedOneWithoutGames_games_winnerToUserInput
  }

  export type gamesUncheckedCreateWithoutUser_games_player_1ToUserInput = {
    id?: number
    player_2?: string | null
    winner?: string | null
    draw?: boolean
    date?: Date | string
  }

  export type gamesCreateOrConnectWithoutUser_games_player_1ToUserInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutUser_games_player_1ToUserInput, gamesUncheckedCreateWithoutUser_games_player_1ToUserInput>
  }

  export type gamesCreateManyUser_games_player_1ToUserInputEnvelope = {
    data: gamesCreateManyUser_games_player_1ToUserInput | gamesCreateManyUser_games_player_1ToUserInput[]
    skipDuplicates?: boolean
  }

  export type gamesCreateWithoutUser_games_player_2ToUserInput = {
    draw?: boolean
    date?: Date | string
    User_games_player_1ToUser?: UserCreateNestedOneWithoutGames_games_player_1ToUserInput
    User_games_winnerToUser?: UserCreateNestedOneWithoutGames_games_winnerToUserInput
  }

  export type gamesUncheckedCreateWithoutUser_games_player_2ToUserInput = {
    id?: number
    player_1?: string | null
    winner?: string | null
    draw?: boolean
    date?: Date | string
  }

  export type gamesCreateOrConnectWithoutUser_games_player_2ToUserInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutUser_games_player_2ToUserInput, gamesUncheckedCreateWithoutUser_games_player_2ToUserInput>
  }

  export type gamesCreateManyUser_games_player_2ToUserInputEnvelope = {
    data: gamesCreateManyUser_games_player_2ToUserInput | gamesCreateManyUser_games_player_2ToUserInput[]
    skipDuplicates?: boolean
  }

  export type gamesCreateWithoutUser_games_winnerToUserInput = {
    draw?: boolean
    date?: Date | string
    User_games_player_1ToUser?: UserCreateNestedOneWithoutGames_games_player_1ToUserInput
    User_games_player_2ToUser?: UserCreateNestedOneWithoutGames_games_player_2ToUserInput
  }

  export type gamesUncheckedCreateWithoutUser_games_winnerToUserInput = {
    id?: number
    player_1?: string | null
    player_2?: string | null
    draw?: boolean
    date?: Date | string
  }

  export type gamesCreateOrConnectWithoutUser_games_winnerToUserInput = {
    where: gamesWhereUniqueInput
    create: XOR<gamesCreateWithoutUser_games_winnerToUserInput, gamesUncheckedCreateWithoutUser_games_winnerToUserInput>
  }

  export type gamesCreateManyUser_games_winnerToUserInputEnvelope = {
    data: gamesCreateManyUser_games_winnerToUserInput | gamesCreateManyUser_games_winnerToUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type gamesUpsertWithWhereUniqueWithoutUser_games_player_1ToUserInput = {
    where: gamesWhereUniqueInput
    update: XOR<gamesUpdateWithoutUser_games_player_1ToUserInput, gamesUncheckedUpdateWithoutUser_games_player_1ToUserInput>
    create: XOR<gamesCreateWithoutUser_games_player_1ToUserInput, gamesUncheckedCreateWithoutUser_games_player_1ToUserInput>
  }

  export type gamesUpdateWithWhereUniqueWithoutUser_games_player_1ToUserInput = {
    where: gamesWhereUniqueInput
    data: XOR<gamesUpdateWithoutUser_games_player_1ToUserInput, gamesUncheckedUpdateWithoutUser_games_player_1ToUserInput>
  }

  export type gamesUpdateManyWithWhereWithoutUser_games_player_1ToUserInput = {
    where: gamesScalarWhereInput
    data: XOR<gamesUpdateManyMutationInput, gamesUncheckedUpdateManyWithoutUser_games_player_1ToUserInput>
  }

  export type gamesScalarWhereInput = {
    AND?: gamesScalarWhereInput | gamesScalarWhereInput[]
    OR?: gamesScalarWhereInput[]
    NOT?: gamesScalarWhereInput | gamesScalarWhereInput[]
    id?: IntFilter<"games"> | number
    player_1?: StringNullableFilter<"games"> | string | null
    player_2?: StringNullableFilter<"games"> | string | null
    winner?: StringNullableFilter<"games"> | string | null
    draw?: BoolFilter<"games"> | boolean
    date?: DateTimeFilter<"games"> | Date | string
  }

  export type gamesUpsertWithWhereUniqueWithoutUser_games_player_2ToUserInput = {
    where: gamesWhereUniqueInput
    update: XOR<gamesUpdateWithoutUser_games_player_2ToUserInput, gamesUncheckedUpdateWithoutUser_games_player_2ToUserInput>
    create: XOR<gamesCreateWithoutUser_games_player_2ToUserInput, gamesUncheckedCreateWithoutUser_games_player_2ToUserInput>
  }

  export type gamesUpdateWithWhereUniqueWithoutUser_games_player_2ToUserInput = {
    where: gamesWhereUniqueInput
    data: XOR<gamesUpdateWithoutUser_games_player_2ToUserInput, gamesUncheckedUpdateWithoutUser_games_player_2ToUserInput>
  }

  export type gamesUpdateManyWithWhereWithoutUser_games_player_2ToUserInput = {
    where: gamesScalarWhereInput
    data: XOR<gamesUpdateManyMutationInput, gamesUncheckedUpdateManyWithoutUser_games_player_2ToUserInput>
  }

  export type gamesUpsertWithWhereUniqueWithoutUser_games_winnerToUserInput = {
    where: gamesWhereUniqueInput
    update: XOR<gamesUpdateWithoutUser_games_winnerToUserInput, gamesUncheckedUpdateWithoutUser_games_winnerToUserInput>
    create: XOR<gamesCreateWithoutUser_games_winnerToUserInput, gamesUncheckedCreateWithoutUser_games_winnerToUserInput>
  }

  export type gamesUpdateWithWhereUniqueWithoutUser_games_winnerToUserInput = {
    where: gamesWhereUniqueInput
    data: XOR<gamesUpdateWithoutUser_games_winnerToUserInput, gamesUncheckedUpdateWithoutUser_games_winnerToUserInput>
  }

  export type gamesUpdateManyWithWhereWithoutUser_games_winnerToUserInput = {
    where: gamesScalarWhereInput
    data: XOR<gamesUpdateManyMutationInput, gamesUncheckedUpdateManyWithoutUser_games_winnerToUserInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    username: string
    hashedPassword: string
    games_games_player_1ToUser?: gamesCreateNestedManyWithoutUser_games_player_1ToUserInput
    games_games_player_2ToUser?: gamesCreateNestedManyWithoutUser_games_player_2ToUserInput
    games_games_winnerToUser?: gamesCreateNestedManyWithoutUser_games_winnerToUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    username: string
    hashedPassword: string
    games_games_player_1ToUser?: gamesUncheckedCreateNestedManyWithoutUser_games_player_1ToUserInput
    games_games_player_2ToUser?: gamesUncheckedCreateNestedManyWithoutUser_games_player_2ToUserInput
    games_games_winnerToUser?: gamesUncheckedCreateNestedManyWithoutUser_games_winnerToUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    games_games_player_1ToUser?: gamesUpdateManyWithoutUser_games_player_1ToUserNestedInput
    games_games_player_2ToUser?: gamesUpdateManyWithoutUser_games_player_2ToUserNestedInput
    games_games_winnerToUser?: gamesUpdateManyWithoutUser_games_winnerToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    games_games_player_1ToUser?: gamesUncheckedUpdateManyWithoutUser_games_player_1ToUserNestedInput
    games_games_player_2ToUser?: gamesUncheckedUpdateManyWithoutUser_games_player_2ToUserNestedInput
    games_games_winnerToUser?: gamesUncheckedUpdateManyWithoutUser_games_winnerToUserNestedInput
  }

  export type UserCreateWithoutGames_games_player_1ToUserInput = {
    id?: string
    username: string
    hashedPassword: string
    sessions?: SessionCreateNestedManyWithoutUserInput
    games_games_player_2ToUser?: gamesCreateNestedManyWithoutUser_games_player_2ToUserInput
    games_games_winnerToUser?: gamesCreateNestedManyWithoutUser_games_winnerToUserInput
  }

  export type UserUncheckedCreateWithoutGames_games_player_1ToUserInput = {
    id?: string
    username: string
    hashedPassword: string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    games_games_player_2ToUser?: gamesUncheckedCreateNestedManyWithoutUser_games_player_2ToUserInput
    games_games_winnerToUser?: gamesUncheckedCreateNestedManyWithoutUser_games_winnerToUserInput
  }

  export type UserCreateOrConnectWithoutGames_games_player_1ToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGames_games_player_1ToUserInput, UserUncheckedCreateWithoutGames_games_player_1ToUserInput>
  }

  export type UserCreateWithoutGames_games_player_2ToUserInput = {
    id?: string
    username: string
    hashedPassword: string
    sessions?: SessionCreateNestedManyWithoutUserInput
    games_games_player_1ToUser?: gamesCreateNestedManyWithoutUser_games_player_1ToUserInput
    games_games_winnerToUser?: gamesCreateNestedManyWithoutUser_games_winnerToUserInput
  }

  export type UserUncheckedCreateWithoutGames_games_player_2ToUserInput = {
    id?: string
    username: string
    hashedPassword: string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    games_games_player_1ToUser?: gamesUncheckedCreateNestedManyWithoutUser_games_player_1ToUserInput
    games_games_winnerToUser?: gamesUncheckedCreateNestedManyWithoutUser_games_winnerToUserInput
  }

  export type UserCreateOrConnectWithoutGames_games_player_2ToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGames_games_player_2ToUserInput, UserUncheckedCreateWithoutGames_games_player_2ToUserInput>
  }

  export type UserCreateWithoutGames_games_winnerToUserInput = {
    id?: string
    username: string
    hashedPassword: string
    sessions?: SessionCreateNestedManyWithoutUserInput
    games_games_player_1ToUser?: gamesCreateNestedManyWithoutUser_games_player_1ToUserInput
    games_games_player_2ToUser?: gamesCreateNestedManyWithoutUser_games_player_2ToUserInput
  }

  export type UserUncheckedCreateWithoutGames_games_winnerToUserInput = {
    id?: string
    username: string
    hashedPassword: string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    games_games_player_1ToUser?: gamesUncheckedCreateNestedManyWithoutUser_games_player_1ToUserInput
    games_games_player_2ToUser?: gamesUncheckedCreateNestedManyWithoutUser_games_player_2ToUserInput
  }

  export type UserCreateOrConnectWithoutGames_games_winnerToUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGames_games_winnerToUserInput, UserUncheckedCreateWithoutGames_games_winnerToUserInput>
  }

  export type UserUpsertWithoutGames_games_player_1ToUserInput = {
    update: XOR<UserUpdateWithoutGames_games_player_1ToUserInput, UserUncheckedUpdateWithoutGames_games_player_1ToUserInput>
    create: XOR<UserCreateWithoutGames_games_player_1ToUserInput, UserUncheckedCreateWithoutGames_games_player_1ToUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGames_games_player_1ToUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGames_games_player_1ToUserInput, UserUncheckedUpdateWithoutGames_games_player_1ToUserInput>
  }

  export type UserUpdateWithoutGames_games_player_1ToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    games_games_player_2ToUser?: gamesUpdateManyWithoutUser_games_player_2ToUserNestedInput
    games_games_winnerToUser?: gamesUpdateManyWithoutUser_games_winnerToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGames_games_player_1ToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    games_games_player_2ToUser?: gamesUncheckedUpdateManyWithoutUser_games_player_2ToUserNestedInput
    games_games_winnerToUser?: gamesUncheckedUpdateManyWithoutUser_games_winnerToUserNestedInput
  }

  export type UserUpsertWithoutGames_games_player_2ToUserInput = {
    update: XOR<UserUpdateWithoutGames_games_player_2ToUserInput, UserUncheckedUpdateWithoutGames_games_player_2ToUserInput>
    create: XOR<UserCreateWithoutGames_games_player_2ToUserInput, UserUncheckedCreateWithoutGames_games_player_2ToUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGames_games_player_2ToUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGames_games_player_2ToUserInput, UserUncheckedUpdateWithoutGames_games_player_2ToUserInput>
  }

  export type UserUpdateWithoutGames_games_player_2ToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    games_games_player_1ToUser?: gamesUpdateManyWithoutUser_games_player_1ToUserNestedInput
    games_games_winnerToUser?: gamesUpdateManyWithoutUser_games_winnerToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGames_games_player_2ToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    games_games_player_1ToUser?: gamesUncheckedUpdateManyWithoutUser_games_player_1ToUserNestedInput
    games_games_winnerToUser?: gamesUncheckedUpdateManyWithoutUser_games_winnerToUserNestedInput
  }

  export type UserUpsertWithoutGames_games_winnerToUserInput = {
    update: XOR<UserUpdateWithoutGames_games_winnerToUserInput, UserUncheckedUpdateWithoutGames_games_winnerToUserInput>
    create: XOR<UserCreateWithoutGames_games_winnerToUserInput, UserUncheckedCreateWithoutGames_games_winnerToUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGames_games_winnerToUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGames_games_winnerToUserInput, UserUncheckedUpdateWithoutGames_games_winnerToUserInput>
  }

  export type UserUpdateWithoutGames_games_winnerToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    games_games_player_1ToUser?: gamesUpdateManyWithoutUser_games_player_1ToUserNestedInput
    games_games_player_2ToUser?: gamesUpdateManyWithoutUser_games_player_2ToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGames_games_winnerToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    games_games_player_1ToUser?: gamesUncheckedUpdateManyWithoutUser_games_player_1ToUserNestedInput
    games_games_player_2ToUser?: gamesUncheckedUpdateManyWithoutUser_games_player_2ToUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
  }

  export type gamesCreateManyUser_games_player_1ToUserInput = {
    id?: number
    player_2?: string | null
    winner?: string | null
    draw?: boolean
    date?: Date | string
  }

  export type gamesCreateManyUser_games_player_2ToUserInput = {
    id?: number
    player_1?: string | null
    winner?: string | null
    draw?: boolean
    date?: Date | string
  }

  export type gamesCreateManyUser_games_winnerToUserInput = {
    id?: number
    player_1?: string | null
    player_2?: string | null
    draw?: boolean
    date?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gamesUpdateWithoutUser_games_player_1ToUserInput = {
    draw?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    User_games_player_2ToUser?: UserUpdateOneWithoutGames_games_player_2ToUserNestedInput
    User_games_winnerToUser?: UserUpdateOneWithoutGames_games_winnerToUserNestedInput
  }

  export type gamesUncheckedUpdateWithoutUser_games_player_1ToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_2?: NullableStringFieldUpdateOperationsInput | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    draw?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gamesUncheckedUpdateManyWithoutUser_games_player_1ToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_2?: NullableStringFieldUpdateOperationsInput | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    draw?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gamesUpdateWithoutUser_games_player_2ToUserInput = {
    draw?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    User_games_player_1ToUser?: UserUpdateOneWithoutGames_games_player_1ToUserNestedInput
    User_games_winnerToUser?: UserUpdateOneWithoutGames_games_winnerToUserNestedInput
  }

  export type gamesUncheckedUpdateWithoutUser_games_player_2ToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_1?: NullableStringFieldUpdateOperationsInput | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    draw?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gamesUncheckedUpdateManyWithoutUser_games_player_2ToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_1?: NullableStringFieldUpdateOperationsInput | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    draw?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gamesUpdateWithoutUser_games_winnerToUserInput = {
    draw?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    User_games_player_1ToUser?: UserUpdateOneWithoutGames_games_player_1ToUserNestedInput
    User_games_player_2ToUser?: UserUpdateOneWithoutGames_games_player_2ToUserNestedInput
  }

  export type gamesUncheckedUpdateWithoutUser_games_winnerToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_1?: NullableStringFieldUpdateOperationsInput | string | null
    player_2?: NullableStringFieldUpdateOperationsInput | string | null
    draw?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gamesUncheckedUpdateManyWithoutUser_games_winnerToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    player_1?: NullableStringFieldUpdateOperationsInput | string | null
    player_2?: NullableStringFieldUpdateOperationsInput | string | null
    draw?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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