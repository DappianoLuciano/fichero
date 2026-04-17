
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
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Receta
 * 
 */
export type Receta = $Result.DefaultSelection<Prisma.$RecetaPayload>
/**
 * Model FotoReceta
 * 
 */
export type FotoReceta = $Result.DefaultSelection<Prisma.$FotoRecetaPayload>
/**
 * Model PacienteLente
 * 
 */
export type PacienteLente = $Result.DefaultSelection<Prisma.$PacienteLentePayload>
/**
 * Model RecetaLente
 * 
 */
export type RecetaLente = $Result.DefaultSelection<Prisma.$RecetaLentePayload>
/**
 * Model FotoRecetaLente
 * 
 */
export type FotoRecetaLente = $Result.DefaultSelection<Prisma.$FotoRecetaLentePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pacientes
 * const pacientes = await prisma.paciente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Pacientes
   * const pacientes = await prisma.paciente.findMany()
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
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receta`: Exposes CRUD operations for the **Receta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recetas
    * const recetas = await prisma.receta.findMany()
    * ```
    */
  get receta(): Prisma.RecetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fotoReceta`: Exposes CRUD operations for the **FotoReceta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FotoRecetas
    * const fotoRecetas = await prisma.fotoReceta.findMany()
    * ```
    */
  get fotoReceta(): Prisma.FotoRecetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pacienteLente`: Exposes CRUD operations for the **PacienteLente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PacienteLentes
    * const pacienteLentes = await prisma.pacienteLente.findMany()
    * ```
    */
  get pacienteLente(): Prisma.PacienteLenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recetaLente`: Exposes CRUD operations for the **RecetaLente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecetaLentes
    * const recetaLentes = await prisma.recetaLente.findMany()
    * ```
    */
  get recetaLente(): Prisma.RecetaLenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fotoRecetaLente`: Exposes CRUD operations for the **FotoRecetaLente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FotoRecetaLentes
    * const fotoRecetaLentes = await prisma.fotoRecetaLente.findMany()
    * ```
    */
  get fotoRecetaLente(): Prisma.FotoRecetaLenteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Paciente: 'Paciente',
    Receta: 'Receta',
    FotoReceta: 'FotoReceta',
    PacienteLente: 'PacienteLente',
    RecetaLente: 'RecetaLente',
    FotoRecetaLente: 'FotoRecetaLente'
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
      modelProps: "paciente" | "receta" | "fotoReceta" | "pacienteLente" | "recetaLente" | "fotoRecetaLente"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Receta: {
        payload: Prisma.$RecetaPayload<ExtArgs>
        fields: Prisma.RecetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>
          }
          findFirst: {
            args: Prisma.RecetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>
          }
          findMany: {
            args: Prisma.RecetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>[]
          }
          create: {
            args: Prisma.RecetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>
          }
          createMany: {
            args: Prisma.RecetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>[]
          }
          delete: {
            args: Prisma.RecetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>
          }
          update: {
            args: Prisma.RecetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>
          }
          deleteMany: {
            args: Prisma.RecetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>[]
          }
          upsert: {
            args: Prisma.RecetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaPayload>
          }
          aggregate: {
            args: Prisma.RecetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceta>
          }
          groupBy: {
            args: Prisma.RecetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecetaCountArgs<ExtArgs>
            result: $Utils.Optional<RecetaCountAggregateOutputType> | number
          }
        }
      }
      FotoReceta: {
        payload: Prisma.$FotoRecetaPayload<ExtArgs>
        fields: Prisma.FotoRecetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotoRecetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotoRecetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaPayload>
          }
          findFirst: {
            args: Prisma.FotoRecetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotoRecetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaPayload>
          }
          findMany: {
            args: Prisma.FotoRecetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaPayload>[]
          }
          create: {
            args: Prisma.FotoRecetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaPayload>
          }
          createMany: {
            args: Prisma.FotoRecetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FotoRecetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaPayload>[]
          }
          delete: {
            args: Prisma.FotoRecetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaPayload>
          }
          update: {
            args: Prisma.FotoRecetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaPayload>
          }
          deleteMany: {
            args: Prisma.FotoRecetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotoRecetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FotoRecetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaPayload>[]
          }
          upsert: {
            args: Prisma.FotoRecetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaPayload>
          }
          aggregate: {
            args: Prisma.FotoRecetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFotoReceta>
          }
          groupBy: {
            args: Prisma.FotoRecetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotoRecetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotoRecetaCountArgs<ExtArgs>
            result: $Utils.Optional<FotoRecetaCountAggregateOutputType> | number
          }
        }
      }
      PacienteLente: {
        payload: Prisma.$PacienteLentePayload<ExtArgs>
        fields: Prisma.PacienteLenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteLenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteLentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteLenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteLentePayload>
          }
          findFirst: {
            args: Prisma.PacienteLenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteLentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteLenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteLentePayload>
          }
          findMany: {
            args: Prisma.PacienteLenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteLentePayload>[]
          }
          create: {
            args: Prisma.PacienteLenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteLentePayload>
          }
          createMany: {
            args: Prisma.PacienteLenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteLenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteLentePayload>[]
          }
          delete: {
            args: Prisma.PacienteLenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteLentePayload>
          }
          update: {
            args: Prisma.PacienteLenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteLentePayload>
          }
          deleteMany: {
            args: Prisma.PacienteLenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteLenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteLenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteLentePayload>[]
          }
          upsert: {
            args: Prisma.PacienteLenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteLentePayload>
          }
          aggregate: {
            args: Prisma.PacienteLenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacienteLente>
          }
          groupBy: {
            args: Prisma.PacienteLenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteLenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteLenteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteLenteCountAggregateOutputType> | number
          }
        }
      }
      RecetaLente: {
        payload: Prisma.$RecetaLentePayload<ExtArgs>
        fields: Prisma.RecetaLenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecetaLenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaLentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecetaLenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaLentePayload>
          }
          findFirst: {
            args: Prisma.RecetaLenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaLentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecetaLenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaLentePayload>
          }
          findMany: {
            args: Prisma.RecetaLenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaLentePayload>[]
          }
          create: {
            args: Prisma.RecetaLenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaLentePayload>
          }
          createMany: {
            args: Prisma.RecetaLenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecetaLenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaLentePayload>[]
          }
          delete: {
            args: Prisma.RecetaLenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaLentePayload>
          }
          update: {
            args: Prisma.RecetaLenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaLentePayload>
          }
          deleteMany: {
            args: Prisma.RecetaLenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecetaLenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecetaLenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaLentePayload>[]
          }
          upsert: {
            args: Prisma.RecetaLenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaLentePayload>
          }
          aggregate: {
            args: Prisma.RecetaLenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecetaLente>
          }
          groupBy: {
            args: Prisma.RecetaLenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecetaLenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecetaLenteCountArgs<ExtArgs>
            result: $Utils.Optional<RecetaLenteCountAggregateOutputType> | number
          }
        }
      }
      FotoRecetaLente: {
        payload: Prisma.$FotoRecetaLentePayload<ExtArgs>
        fields: Prisma.FotoRecetaLenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotoRecetaLenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaLentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotoRecetaLenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaLentePayload>
          }
          findFirst: {
            args: Prisma.FotoRecetaLenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaLentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotoRecetaLenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaLentePayload>
          }
          findMany: {
            args: Prisma.FotoRecetaLenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaLentePayload>[]
          }
          create: {
            args: Prisma.FotoRecetaLenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaLentePayload>
          }
          createMany: {
            args: Prisma.FotoRecetaLenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FotoRecetaLenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaLentePayload>[]
          }
          delete: {
            args: Prisma.FotoRecetaLenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaLentePayload>
          }
          update: {
            args: Prisma.FotoRecetaLenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaLentePayload>
          }
          deleteMany: {
            args: Prisma.FotoRecetaLenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotoRecetaLenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FotoRecetaLenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaLentePayload>[]
          }
          upsert: {
            args: Prisma.FotoRecetaLenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoRecetaLentePayload>
          }
          aggregate: {
            args: Prisma.FotoRecetaLenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFotoRecetaLente>
          }
          groupBy: {
            args: Prisma.FotoRecetaLenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotoRecetaLenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotoRecetaLenteCountArgs<ExtArgs>
            result: $Utils.Optional<FotoRecetaLenteCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    paciente?: PacienteOmit
    receta?: RecetaOmit
    fotoReceta?: FotoRecetaOmit
    pacienteLente?: PacienteLenteOmit
    recetaLente?: RecetaLenteOmit
    fotoRecetaLente?: FotoRecetaLenteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    recetas: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetas?: boolean | PacienteCountOutputTypeCountRecetasArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountRecetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetaWhereInput
  }


  /**
   * Count Type RecetaCountOutputType
   */

  export type RecetaCountOutputType = {
    fotos: number
  }

  export type RecetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotos?: boolean | RecetaCountOutputTypeCountFotosArgs
  }

  // Custom InputTypes
  /**
   * RecetaCountOutputType without action
   */
  export type RecetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaCountOutputType
     */
    select?: RecetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecetaCountOutputType without action
   */
  export type RecetaCountOutputTypeCountFotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoRecetaWhereInput
  }


  /**
   * Count Type PacienteLenteCountOutputType
   */

  export type PacienteLenteCountOutputType = {
    recetas: number
  }

  export type PacienteLenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetas?: boolean | PacienteLenteCountOutputTypeCountRecetasArgs
  }

  // Custom InputTypes
  /**
   * PacienteLenteCountOutputType without action
   */
  export type PacienteLenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteLenteCountOutputType
     */
    select?: PacienteLenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteLenteCountOutputType without action
   */
  export type PacienteLenteCountOutputTypeCountRecetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetaLenteWhereInput
  }


  /**
   * Count Type RecetaLenteCountOutputType
   */

  export type RecetaLenteCountOutputType = {
    fotos: number
  }

  export type RecetaLenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fotos?: boolean | RecetaLenteCountOutputTypeCountFotosArgs
  }

  // Custom InputTypes
  /**
   * RecetaLenteCountOutputType without action
   */
  export type RecetaLenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLenteCountOutputType
     */
    select?: RecetaLenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecetaLenteCountOutputType without action
   */
  export type RecetaLenteCountOutputTypeCountFotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoRecetaLenteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    id: number | null
  }

  export type PacienteSumAggregateOutputType = {
    id: number | null
  }

  export type PacienteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    creadoEn: Date | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    creadoEn: Date | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    nombre: number
    creadoEn: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    id?: true
  }

  export type PacienteSumAggregateInputType = {
    id?: true
  }

  export type PacienteMinAggregateInputType = {
    id?: true
    nombre?: true
    creadoEn?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    creadoEn?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    nombre?: true
    creadoEn?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: number
    nombre: string
    creadoEn: Date
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
    recetas?: boolean | Paciente$recetasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "creadoEn", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetas?: boolean | Paciente$recetasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      recetas: Prisma.$RecetaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      creadoEn: Date
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {PacienteUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recetas<T extends Paciente$recetasArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$recetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'Int'>
    readonly nombre: FieldRef<"Paciente", 'String'>
    readonly creadoEn: FieldRef<"Paciente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente updateManyAndReturn
   */
  export type PacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.recetas
   */
  export type Paciente$recetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    where?: RecetaWhereInput
    orderBy?: RecetaOrderByWithRelationInput | RecetaOrderByWithRelationInput[]
    cursor?: RecetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecetaScalarFieldEnum | RecetaScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Receta
   */

  export type AggregateReceta = {
    _count: RecetaCountAggregateOutputType | null
    _avg: RecetaAvgAggregateOutputType | null
    _sum: RecetaSumAggregateOutputType | null
    _min: RecetaMinAggregateOutputType | null
    _max: RecetaMaxAggregateOutputType | null
  }

  export type RecetaAvgAggregateOutputType = {
    id: number | null
    pacienteId: number | null
  }

  export type RecetaSumAggregateOutputType = {
    id: number | null
    pacienteId: number | null
  }

  export type RecetaMinAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    fecha: Date | null
  }

  export type RecetaMaxAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    fecha: Date | null
  }

  export type RecetaCountAggregateOutputType = {
    id: number
    pacienteId: number
    fecha: number
    _all: number
  }


  export type RecetaAvgAggregateInputType = {
    id?: true
    pacienteId?: true
  }

  export type RecetaSumAggregateInputType = {
    id?: true
    pacienteId?: true
  }

  export type RecetaMinAggregateInputType = {
    id?: true
    pacienteId?: true
    fecha?: true
  }

  export type RecetaMaxAggregateInputType = {
    id?: true
    pacienteId?: true
    fecha?: true
  }

  export type RecetaCountAggregateInputType = {
    id?: true
    pacienteId?: true
    fecha?: true
    _all?: true
  }

  export type RecetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receta to aggregate.
     */
    where?: RecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recetas to fetch.
     */
    orderBy?: RecetaOrderByWithRelationInput | RecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recetas
    **/
    _count?: true | RecetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecetaMaxAggregateInputType
  }

  export type GetRecetaAggregateType<T extends RecetaAggregateArgs> = {
        [P in keyof T & keyof AggregateReceta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceta[P]>
      : GetScalarType<T[P], AggregateReceta[P]>
  }




  export type RecetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetaWhereInput
    orderBy?: RecetaOrderByWithAggregationInput | RecetaOrderByWithAggregationInput[]
    by: RecetaScalarFieldEnum[] | RecetaScalarFieldEnum
    having?: RecetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecetaCountAggregateInputType | true
    _avg?: RecetaAvgAggregateInputType
    _sum?: RecetaSumAggregateInputType
    _min?: RecetaMinAggregateInputType
    _max?: RecetaMaxAggregateInputType
  }

  export type RecetaGroupByOutputType = {
    id: number
    pacienteId: number
    fecha: Date
    _count: RecetaCountAggregateOutputType | null
    _avg: RecetaAvgAggregateOutputType | null
    _sum: RecetaSumAggregateOutputType | null
    _min: RecetaMinAggregateOutputType | null
    _max: RecetaMaxAggregateOutputType | null
  }

  type GetRecetaGroupByPayload<T extends RecetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecetaGroupByOutputType[P]>
            : GetScalarType<T[P], RecetaGroupByOutputType[P]>
        }
      >
    >


  export type RecetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    fecha?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    fotos?: boolean | Receta$fotosArgs<ExtArgs>
    _count?: boolean | RecetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receta"]>

  export type RecetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    fecha?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receta"]>

  export type RecetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    fecha?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receta"]>

  export type RecetaSelectScalar = {
    id?: boolean
    pacienteId?: boolean
    fecha?: boolean
  }

  export type RecetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pacienteId" | "fecha", ExtArgs["result"]["receta"]>
  export type RecetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    fotos?: boolean | Receta$fotosArgs<ExtArgs>
    _count?: boolean | RecetaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type RecetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }

  export type $RecetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receta"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      fotos: Prisma.$FotoRecetaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pacienteId: number
      fecha: Date
    }, ExtArgs["result"]["receta"]>
    composites: {}
  }

  type RecetaGetPayload<S extends boolean | null | undefined | RecetaDefaultArgs> = $Result.GetResult<Prisma.$RecetaPayload, S>

  type RecetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecetaCountAggregateInputType | true
    }

  export interface RecetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receta'], meta: { name: 'Receta' } }
    /**
     * Find zero or one Receta that matches the filter.
     * @param {RecetaFindUniqueArgs} args - Arguments to find a Receta
     * @example
     * // Get one Receta
     * const receta = await prisma.receta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecetaFindUniqueArgs>(args: SelectSubset<T, RecetaFindUniqueArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecetaFindUniqueOrThrowArgs} args - Arguments to find a Receta
     * @example
     * // Get one Receta
     * const receta = await prisma.receta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecetaFindUniqueOrThrowArgs>(args: SelectSubset<T, RecetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaFindFirstArgs} args - Arguments to find a Receta
     * @example
     * // Get one Receta
     * const receta = await prisma.receta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecetaFindFirstArgs>(args?: SelectSubset<T, RecetaFindFirstArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaFindFirstOrThrowArgs} args - Arguments to find a Receta
     * @example
     * // Get one Receta
     * const receta = await prisma.receta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecetaFindFirstOrThrowArgs>(args?: SelectSubset<T, RecetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recetas
     * const recetas = await prisma.receta.findMany()
     * 
     * // Get first 10 Recetas
     * const recetas = await prisma.receta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recetaWithIdOnly = await prisma.receta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecetaFindManyArgs>(args?: SelectSubset<T, RecetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receta.
     * @param {RecetaCreateArgs} args - Arguments to create a Receta.
     * @example
     * // Create one Receta
     * const Receta = await prisma.receta.create({
     *   data: {
     *     // ... data to create a Receta
     *   }
     * })
     * 
     */
    create<T extends RecetaCreateArgs>(args: SelectSubset<T, RecetaCreateArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recetas.
     * @param {RecetaCreateManyArgs} args - Arguments to create many Recetas.
     * @example
     * // Create many Recetas
     * const receta = await prisma.receta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecetaCreateManyArgs>(args?: SelectSubset<T, RecetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recetas and returns the data saved in the database.
     * @param {RecetaCreateManyAndReturnArgs} args - Arguments to create many Recetas.
     * @example
     * // Create many Recetas
     * const receta = await prisma.receta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recetas and only return the `id`
     * const recetaWithIdOnly = await prisma.receta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecetaCreateManyAndReturnArgs>(args?: SelectSubset<T, RecetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receta.
     * @param {RecetaDeleteArgs} args - Arguments to delete one Receta.
     * @example
     * // Delete one Receta
     * const Receta = await prisma.receta.delete({
     *   where: {
     *     // ... filter to delete one Receta
     *   }
     * })
     * 
     */
    delete<T extends RecetaDeleteArgs>(args: SelectSubset<T, RecetaDeleteArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receta.
     * @param {RecetaUpdateArgs} args - Arguments to update one Receta.
     * @example
     * // Update one Receta
     * const receta = await prisma.receta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecetaUpdateArgs>(args: SelectSubset<T, RecetaUpdateArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recetas.
     * @param {RecetaDeleteManyArgs} args - Arguments to filter Recetas to delete.
     * @example
     * // Delete a few Recetas
     * const { count } = await prisma.receta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecetaDeleteManyArgs>(args?: SelectSubset<T, RecetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recetas
     * const receta = await prisma.receta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecetaUpdateManyArgs>(args: SelectSubset<T, RecetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recetas and returns the data updated in the database.
     * @param {RecetaUpdateManyAndReturnArgs} args - Arguments to update many Recetas.
     * @example
     * // Update many Recetas
     * const receta = await prisma.receta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recetas and only return the `id`
     * const recetaWithIdOnly = await prisma.receta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecetaUpdateManyAndReturnArgs>(args: SelectSubset<T, RecetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receta.
     * @param {RecetaUpsertArgs} args - Arguments to update or create a Receta.
     * @example
     * // Update or create a Receta
     * const receta = await prisma.receta.upsert({
     *   create: {
     *     // ... data to create a Receta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receta we want to update
     *   }
     * })
     */
    upsert<T extends RecetaUpsertArgs>(args: SelectSubset<T, RecetaUpsertArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaCountArgs} args - Arguments to filter Recetas to count.
     * @example
     * // Count the number of Recetas
     * const count = await prisma.receta.count({
     *   where: {
     *     // ... the filter for the Recetas we want to count
     *   }
     * })
    **/
    count<T extends RecetaCountArgs>(
      args?: Subset<T, RecetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecetaAggregateArgs>(args: Subset<T, RecetaAggregateArgs>): Prisma.PrismaPromise<GetRecetaAggregateType<T>>

    /**
     * Group by Receta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaGroupByArgs} args - Group by arguments.
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
      T extends RecetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecetaGroupByArgs['orderBy'] }
        : { orderBy?: RecetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receta model
   */
  readonly fields: RecetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fotos<T extends Receta$fotosArgs<ExtArgs> = {}>(args?: Subset<T, Receta$fotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoRecetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Receta model
   */
  interface RecetaFieldRefs {
    readonly id: FieldRef<"Receta", 'Int'>
    readonly pacienteId: FieldRef<"Receta", 'Int'>
    readonly fecha: FieldRef<"Receta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Receta findUnique
   */
  export type RecetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * Filter, which Receta to fetch.
     */
    where: RecetaWhereUniqueInput
  }

  /**
   * Receta findUniqueOrThrow
   */
  export type RecetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * Filter, which Receta to fetch.
     */
    where: RecetaWhereUniqueInput
  }

  /**
   * Receta findFirst
   */
  export type RecetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * Filter, which Receta to fetch.
     */
    where?: RecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recetas to fetch.
     */
    orderBy?: RecetaOrderByWithRelationInput | RecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recetas.
     */
    cursor?: RecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recetas.
     */
    distinct?: RecetaScalarFieldEnum | RecetaScalarFieldEnum[]
  }

  /**
   * Receta findFirstOrThrow
   */
  export type RecetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * Filter, which Receta to fetch.
     */
    where?: RecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recetas to fetch.
     */
    orderBy?: RecetaOrderByWithRelationInput | RecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recetas.
     */
    cursor?: RecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recetas.
     */
    distinct?: RecetaScalarFieldEnum | RecetaScalarFieldEnum[]
  }

  /**
   * Receta findMany
   */
  export type RecetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * Filter, which Recetas to fetch.
     */
    where?: RecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recetas to fetch.
     */
    orderBy?: RecetaOrderByWithRelationInput | RecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recetas.
     */
    cursor?: RecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recetas.
     */
    skip?: number
    distinct?: RecetaScalarFieldEnum | RecetaScalarFieldEnum[]
  }

  /**
   * Receta create
   */
  export type RecetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * The data needed to create a Receta.
     */
    data: XOR<RecetaCreateInput, RecetaUncheckedCreateInput>
  }

  /**
   * Receta createMany
   */
  export type RecetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recetas.
     */
    data: RecetaCreateManyInput | RecetaCreateManyInput[]
  }

  /**
   * Receta createManyAndReturn
   */
  export type RecetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * The data used to create many Recetas.
     */
    data: RecetaCreateManyInput | RecetaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receta update
   */
  export type RecetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * The data needed to update a Receta.
     */
    data: XOR<RecetaUpdateInput, RecetaUncheckedUpdateInput>
    /**
     * Choose, which Receta to update.
     */
    where: RecetaWhereUniqueInput
  }

  /**
   * Receta updateMany
   */
  export type RecetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recetas.
     */
    data: XOR<RecetaUpdateManyMutationInput, RecetaUncheckedUpdateManyInput>
    /**
     * Filter which Recetas to update
     */
    where?: RecetaWhereInput
    /**
     * Limit how many Recetas to update.
     */
    limit?: number
  }

  /**
   * Receta updateManyAndReturn
   */
  export type RecetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * The data used to update Recetas.
     */
    data: XOR<RecetaUpdateManyMutationInput, RecetaUncheckedUpdateManyInput>
    /**
     * Filter which Recetas to update
     */
    where?: RecetaWhereInput
    /**
     * Limit how many Recetas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receta upsert
   */
  export type RecetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * The filter to search for the Receta to update in case it exists.
     */
    where: RecetaWhereUniqueInput
    /**
     * In case the Receta found by the `where` argument doesn't exist, create a new Receta with this data.
     */
    create: XOR<RecetaCreateInput, RecetaUncheckedCreateInput>
    /**
     * In case the Receta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecetaUpdateInput, RecetaUncheckedUpdateInput>
  }

  /**
   * Receta delete
   */
  export type RecetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
    /**
     * Filter which Receta to delete.
     */
    where: RecetaWhereUniqueInput
  }

  /**
   * Receta deleteMany
   */
  export type RecetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recetas to delete
     */
    where?: RecetaWhereInput
    /**
     * Limit how many Recetas to delete.
     */
    limit?: number
  }

  /**
   * Receta.fotos
   */
  export type Receta$fotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoReceta
     */
    select?: FotoRecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoReceta
     */
    omit?: FotoRecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaInclude<ExtArgs> | null
    where?: FotoRecetaWhereInput
    orderBy?: FotoRecetaOrderByWithRelationInput | FotoRecetaOrderByWithRelationInput[]
    cursor?: FotoRecetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotoRecetaScalarFieldEnum | FotoRecetaScalarFieldEnum[]
  }

  /**
   * Receta without action
   */
  export type RecetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receta
     */
    select?: RecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receta
     */
    omit?: RecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaInclude<ExtArgs> | null
  }


  /**
   * Model FotoReceta
   */

  export type AggregateFotoReceta = {
    _count: FotoRecetaCountAggregateOutputType | null
    _avg: FotoRecetaAvgAggregateOutputType | null
    _sum: FotoRecetaSumAggregateOutputType | null
    _min: FotoRecetaMinAggregateOutputType | null
    _max: FotoRecetaMaxAggregateOutputType | null
  }

  export type FotoRecetaAvgAggregateOutputType = {
    id: number | null
    recetaId: number | null
  }

  export type FotoRecetaSumAggregateOutputType = {
    id: number | null
    recetaId: number | null
  }

  export type FotoRecetaMinAggregateOutputType = {
    id: number | null
    recetaId: number | null
    foto: string | null
    observaciones: string | null
  }

  export type FotoRecetaMaxAggregateOutputType = {
    id: number | null
    recetaId: number | null
    foto: string | null
    observaciones: string | null
  }

  export type FotoRecetaCountAggregateOutputType = {
    id: number
    recetaId: number
    foto: number
    observaciones: number
    _all: number
  }


  export type FotoRecetaAvgAggregateInputType = {
    id?: true
    recetaId?: true
  }

  export type FotoRecetaSumAggregateInputType = {
    id?: true
    recetaId?: true
  }

  export type FotoRecetaMinAggregateInputType = {
    id?: true
    recetaId?: true
    foto?: true
    observaciones?: true
  }

  export type FotoRecetaMaxAggregateInputType = {
    id?: true
    recetaId?: true
    foto?: true
    observaciones?: true
  }

  export type FotoRecetaCountAggregateInputType = {
    id?: true
    recetaId?: true
    foto?: true
    observaciones?: true
    _all?: true
  }

  export type FotoRecetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotoReceta to aggregate.
     */
    where?: FotoRecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoRecetas to fetch.
     */
    orderBy?: FotoRecetaOrderByWithRelationInput | FotoRecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotoRecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoRecetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoRecetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FotoRecetas
    **/
    _count?: true | FotoRecetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FotoRecetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FotoRecetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotoRecetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotoRecetaMaxAggregateInputType
  }

  export type GetFotoRecetaAggregateType<T extends FotoRecetaAggregateArgs> = {
        [P in keyof T & keyof AggregateFotoReceta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFotoReceta[P]>
      : GetScalarType<T[P], AggregateFotoReceta[P]>
  }




  export type FotoRecetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoRecetaWhereInput
    orderBy?: FotoRecetaOrderByWithAggregationInput | FotoRecetaOrderByWithAggregationInput[]
    by: FotoRecetaScalarFieldEnum[] | FotoRecetaScalarFieldEnum
    having?: FotoRecetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotoRecetaCountAggregateInputType | true
    _avg?: FotoRecetaAvgAggregateInputType
    _sum?: FotoRecetaSumAggregateInputType
    _min?: FotoRecetaMinAggregateInputType
    _max?: FotoRecetaMaxAggregateInputType
  }

  export type FotoRecetaGroupByOutputType = {
    id: number
    recetaId: number
    foto: string
    observaciones: string
    _count: FotoRecetaCountAggregateOutputType | null
    _avg: FotoRecetaAvgAggregateOutputType | null
    _sum: FotoRecetaSumAggregateOutputType | null
    _min: FotoRecetaMinAggregateOutputType | null
    _max: FotoRecetaMaxAggregateOutputType | null
  }

  type GetFotoRecetaGroupByPayload<T extends FotoRecetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotoRecetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotoRecetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotoRecetaGroupByOutputType[P]>
            : GetScalarType<T[P], FotoRecetaGroupByOutputType[P]>
        }
      >
    >


  export type FotoRecetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recetaId?: boolean
    foto?: boolean
    observaciones?: boolean
    receta?: boolean | RecetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotoReceta"]>

  export type FotoRecetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recetaId?: boolean
    foto?: boolean
    observaciones?: boolean
    receta?: boolean | RecetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotoReceta"]>

  export type FotoRecetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recetaId?: boolean
    foto?: boolean
    observaciones?: boolean
    receta?: boolean | RecetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotoReceta"]>

  export type FotoRecetaSelectScalar = {
    id?: boolean
    recetaId?: boolean
    foto?: boolean
    observaciones?: boolean
  }

  export type FotoRecetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recetaId" | "foto" | "observaciones", ExtArgs["result"]["fotoReceta"]>
  export type FotoRecetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetaDefaultArgs<ExtArgs>
  }
  export type FotoRecetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetaDefaultArgs<ExtArgs>
  }
  export type FotoRecetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetaDefaultArgs<ExtArgs>
  }

  export type $FotoRecetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FotoReceta"
    objects: {
      receta: Prisma.$RecetaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recetaId: number
      foto: string
      observaciones: string
    }, ExtArgs["result"]["fotoReceta"]>
    composites: {}
  }

  type FotoRecetaGetPayload<S extends boolean | null | undefined | FotoRecetaDefaultArgs> = $Result.GetResult<Prisma.$FotoRecetaPayload, S>

  type FotoRecetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotoRecetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotoRecetaCountAggregateInputType | true
    }

  export interface FotoRecetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FotoReceta'], meta: { name: 'FotoReceta' } }
    /**
     * Find zero or one FotoReceta that matches the filter.
     * @param {FotoRecetaFindUniqueArgs} args - Arguments to find a FotoReceta
     * @example
     * // Get one FotoReceta
     * const fotoReceta = await prisma.fotoReceta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotoRecetaFindUniqueArgs>(args: SelectSubset<T, FotoRecetaFindUniqueArgs<ExtArgs>>): Prisma__FotoRecetaClient<$Result.GetResult<Prisma.$FotoRecetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FotoReceta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotoRecetaFindUniqueOrThrowArgs} args - Arguments to find a FotoReceta
     * @example
     * // Get one FotoReceta
     * const fotoReceta = await prisma.fotoReceta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotoRecetaFindUniqueOrThrowArgs>(args: SelectSubset<T, FotoRecetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotoRecetaClient<$Result.GetResult<Prisma.$FotoRecetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotoReceta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaFindFirstArgs} args - Arguments to find a FotoReceta
     * @example
     * // Get one FotoReceta
     * const fotoReceta = await prisma.fotoReceta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotoRecetaFindFirstArgs>(args?: SelectSubset<T, FotoRecetaFindFirstArgs<ExtArgs>>): Prisma__FotoRecetaClient<$Result.GetResult<Prisma.$FotoRecetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotoReceta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaFindFirstOrThrowArgs} args - Arguments to find a FotoReceta
     * @example
     * // Get one FotoReceta
     * const fotoReceta = await prisma.fotoReceta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotoRecetaFindFirstOrThrowArgs>(args?: SelectSubset<T, FotoRecetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotoRecetaClient<$Result.GetResult<Prisma.$FotoRecetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FotoRecetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FotoRecetas
     * const fotoRecetas = await prisma.fotoReceta.findMany()
     * 
     * // Get first 10 FotoRecetas
     * const fotoRecetas = await prisma.fotoReceta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fotoRecetaWithIdOnly = await prisma.fotoReceta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FotoRecetaFindManyArgs>(args?: SelectSubset<T, FotoRecetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoRecetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FotoReceta.
     * @param {FotoRecetaCreateArgs} args - Arguments to create a FotoReceta.
     * @example
     * // Create one FotoReceta
     * const FotoReceta = await prisma.fotoReceta.create({
     *   data: {
     *     // ... data to create a FotoReceta
     *   }
     * })
     * 
     */
    create<T extends FotoRecetaCreateArgs>(args: SelectSubset<T, FotoRecetaCreateArgs<ExtArgs>>): Prisma__FotoRecetaClient<$Result.GetResult<Prisma.$FotoRecetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FotoRecetas.
     * @param {FotoRecetaCreateManyArgs} args - Arguments to create many FotoRecetas.
     * @example
     * // Create many FotoRecetas
     * const fotoReceta = await prisma.fotoReceta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotoRecetaCreateManyArgs>(args?: SelectSubset<T, FotoRecetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FotoRecetas and returns the data saved in the database.
     * @param {FotoRecetaCreateManyAndReturnArgs} args - Arguments to create many FotoRecetas.
     * @example
     * // Create many FotoRecetas
     * const fotoReceta = await prisma.fotoReceta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FotoRecetas and only return the `id`
     * const fotoRecetaWithIdOnly = await prisma.fotoReceta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FotoRecetaCreateManyAndReturnArgs>(args?: SelectSubset<T, FotoRecetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoRecetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FotoReceta.
     * @param {FotoRecetaDeleteArgs} args - Arguments to delete one FotoReceta.
     * @example
     * // Delete one FotoReceta
     * const FotoReceta = await prisma.fotoReceta.delete({
     *   where: {
     *     // ... filter to delete one FotoReceta
     *   }
     * })
     * 
     */
    delete<T extends FotoRecetaDeleteArgs>(args: SelectSubset<T, FotoRecetaDeleteArgs<ExtArgs>>): Prisma__FotoRecetaClient<$Result.GetResult<Prisma.$FotoRecetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FotoReceta.
     * @param {FotoRecetaUpdateArgs} args - Arguments to update one FotoReceta.
     * @example
     * // Update one FotoReceta
     * const fotoReceta = await prisma.fotoReceta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotoRecetaUpdateArgs>(args: SelectSubset<T, FotoRecetaUpdateArgs<ExtArgs>>): Prisma__FotoRecetaClient<$Result.GetResult<Prisma.$FotoRecetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FotoRecetas.
     * @param {FotoRecetaDeleteManyArgs} args - Arguments to filter FotoRecetas to delete.
     * @example
     * // Delete a few FotoRecetas
     * const { count } = await prisma.fotoReceta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotoRecetaDeleteManyArgs>(args?: SelectSubset<T, FotoRecetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FotoRecetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FotoRecetas
     * const fotoReceta = await prisma.fotoReceta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotoRecetaUpdateManyArgs>(args: SelectSubset<T, FotoRecetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FotoRecetas and returns the data updated in the database.
     * @param {FotoRecetaUpdateManyAndReturnArgs} args - Arguments to update many FotoRecetas.
     * @example
     * // Update many FotoRecetas
     * const fotoReceta = await prisma.fotoReceta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FotoRecetas and only return the `id`
     * const fotoRecetaWithIdOnly = await prisma.fotoReceta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FotoRecetaUpdateManyAndReturnArgs>(args: SelectSubset<T, FotoRecetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoRecetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FotoReceta.
     * @param {FotoRecetaUpsertArgs} args - Arguments to update or create a FotoReceta.
     * @example
     * // Update or create a FotoReceta
     * const fotoReceta = await prisma.fotoReceta.upsert({
     *   create: {
     *     // ... data to create a FotoReceta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FotoReceta we want to update
     *   }
     * })
     */
    upsert<T extends FotoRecetaUpsertArgs>(args: SelectSubset<T, FotoRecetaUpsertArgs<ExtArgs>>): Prisma__FotoRecetaClient<$Result.GetResult<Prisma.$FotoRecetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FotoRecetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaCountArgs} args - Arguments to filter FotoRecetas to count.
     * @example
     * // Count the number of FotoRecetas
     * const count = await prisma.fotoReceta.count({
     *   where: {
     *     // ... the filter for the FotoRecetas we want to count
     *   }
     * })
    **/
    count<T extends FotoRecetaCountArgs>(
      args?: Subset<T, FotoRecetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotoRecetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FotoReceta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotoRecetaAggregateArgs>(args: Subset<T, FotoRecetaAggregateArgs>): Prisma.PrismaPromise<GetFotoRecetaAggregateType<T>>

    /**
     * Group by FotoReceta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaGroupByArgs} args - Group by arguments.
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
      T extends FotoRecetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotoRecetaGroupByArgs['orderBy'] }
        : { orderBy?: FotoRecetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FotoRecetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotoRecetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FotoReceta model
   */
  readonly fields: FotoRecetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FotoReceta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotoRecetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receta<T extends RecetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecetaDefaultArgs<ExtArgs>>): Prisma__RecetaClient<$Result.GetResult<Prisma.$RecetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FotoReceta model
   */
  interface FotoRecetaFieldRefs {
    readonly id: FieldRef<"FotoReceta", 'Int'>
    readonly recetaId: FieldRef<"FotoReceta", 'Int'>
    readonly foto: FieldRef<"FotoReceta", 'String'>
    readonly observaciones: FieldRef<"FotoReceta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FotoReceta findUnique
   */
  export type FotoRecetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoReceta
     */
    select?: FotoRecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoReceta
     */
    omit?: FotoRecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaInclude<ExtArgs> | null
    /**
     * Filter, which FotoReceta to fetch.
     */
    where: FotoRecetaWhereUniqueInput
  }

  /**
   * FotoReceta findUniqueOrThrow
   */
  export type FotoRecetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoReceta
     */
    select?: FotoRecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoReceta
     */
    omit?: FotoRecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaInclude<ExtArgs> | null
    /**
     * Filter, which FotoReceta to fetch.
     */
    where: FotoRecetaWhereUniqueInput
  }

  /**
   * FotoReceta findFirst
   */
  export type FotoRecetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoReceta
     */
    select?: FotoRecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoReceta
     */
    omit?: FotoRecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaInclude<ExtArgs> | null
    /**
     * Filter, which FotoReceta to fetch.
     */
    where?: FotoRecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoRecetas to fetch.
     */
    orderBy?: FotoRecetaOrderByWithRelationInput | FotoRecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotoRecetas.
     */
    cursor?: FotoRecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoRecetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoRecetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotoRecetas.
     */
    distinct?: FotoRecetaScalarFieldEnum | FotoRecetaScalarFieldEnum[]
  }

  /**
   * FotoReceta findFirstOrThrow
   */
  export type FotoRecetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoReceta
     */
    select?: FotoRecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoReceta
     */
    omit?: FotoRecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaInclude<ExtArgs> | null
    /**
     * Filter, which FotoReceta to fetch.
     */
    where?: FotoRecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoRecetas to fetch.
     */
    orderBy?: FotoRecetaOrderByWithRelationInput | FotoRecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotoRecetas.
     */
    cursor?: FotoRecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoRecetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoRecetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotoRecetas.
     */
    distinct?: FotoRecetaScalarFieldEnum | FotoRecetaScalarFieldEnum[]
  }

  /**
   * FotoReceta findMany
   */
  export type FotoRecetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoReceta
     */
    select?: FotoRecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoReceta
     */
    omit?: FotoRecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaInclude<ExtArgs> | null
    /**
     * Filter, which FotoRecetas to fetch.
     */
    where?: FotoRecetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoRecetas to fetch.
     */
    orderBy?: FotoRecetaOrderByWithRelationInput | FotoRecetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FotoRecetas.
     */
    cursor?: FotoRecetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoRecetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoRecetas.
     */
    skip?: number
    distinct?: FotoRecetaScalarFieldEnum | FotoRecetaScalarFieldEnum[]
  }

  /**
   * FotoReceta create
   */
  export type FotoRecetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoReceta
     */
    select?: FotoRecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoReceta
     */
    omit?: FotoRecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaInclude<ExtArgs> | null
    /**
     * The data needed to create a FotoReceta.
     */
    data: XOR<FotoRecetaCreateInput, FotoRecetaUncheckedCreateInput>
  }

  /**
   * FotoReceta createMany
   */
  export type FotoRecetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FotoRecetas.
     */
    data: FotoRecetaCreateManyInput | FotoRecetaCreateManyInput[]
  }

  /**
   * FotoReceta createManyAndReturn
   */
  export type FotoRecetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoReceta
     */
    select?: FotoRecetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FotoReceta
     */
    omit?: FotoRecetaOmit<ExtArgs> | null
    /**
     * The data used to create many FotoRecetas.
     */
    data: FotoRecetaCreateManyInput | FotoRecetaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FotoReceta update
   */
  export type FotoRecetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoReceta
     */
    select?: FotoRecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoReceta
     */
    omit?: FotoRecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaInclude<ExtArgs> | null
    /**
     * The data needed to update a FotoReceta.
     */
    data: XOR<FotoRecetaUpdateInput, FotoRecetaUncheckedUpdateInput>
    /**
     * Choose, which FotoReceta to update.
     */
    where: FotoRecetaWhereUniqueInput
  }

  /**
   * FotoReceta updateMany
   */
  export type FotoRecetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FotoRecetas.
     */
    data: XOR<FotoRecetaUpdateManyMutationInput, FotoRecetaUncheckedUpdateManyInput>
    /**
     * Filter which FotoRecetas to update
     */
    where?: FotoRecetaWhereInput
    /**
     * Limit how many FotoRecetas to update.
     */
    limit?: number
  }

  /**
   * FotoReceta updateManyAndReturn
   */
  export type FotoRecetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoReceta
     */
    select?: FotoRecetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FotoReceta
     */
    omit?: FotoRecetaOmit<ExtArgs> | null
    /**
     * The data used to update FotoRecetas.
     */
    data: XOR<FotoRecetaUpdateManyMutationInput, FotoRecetaUncheckedUpdateManyInput>
    /**
     * Filter which FotoRecetas to update
     */
    where?: FotoRecetaWhereInput
    /**
     * Limit how many FotoRecetas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FotoReceta upsert
   */
  export type FotoRecetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoReceta
     */
    select?: FotoRecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoReceta
     */
    omit?: FotoRecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaInclude<ExtArgs> | null
    /**
     * The filter to search for the FotoReceta to update in case it exists.
     */
    where: FotoRecetaWhereUniqueInput
    /**
     * In case the FotoReceta found by the `where` argument doesn't exist, create a new FotoReceta with this data.
     */
    create: XOR<FotoRecetaCreateInput, FotoRecetaUncheckedCreateInput>
    /**
     * In case the FotoReceta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotoRecetaUpdateInput, FotoRecetaUncheckedUpdateInput>
  }

  /**
   * FotoReceta delete
   */
  export type FotoRecetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoReceta
     */
    select?: FotoRecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoReceta
     */
    omit?: FotoRecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaInclude<ExtArgs> | null
    /**
     * Filter which FotoReceta to delete.
     */
    where: FotoRecetaWhereUniqueInput
  }

  /**
   * FotoReceta deleteMany
   */
  export type FotoRecetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotoRecetas to delete
     */
    where?: FotoRecetaWhereInput
    /**
     * Limit how many FotoRecetas to delete.
     */
    limit?: number
  }

  /**
   * FotoReceta without action
   */
  export type FotoRecetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoReceta
     */
    select?: FotoRecetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoReceta
     */
    omit?: FotoRecetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaInclude<ExtArgs> | null
  }


  /**
   * Model PacienteLente
   */

  export type AggregatePacienteLente = {
    _count: PacienteLenteCountAggregateOutputType | null
    _avg: PacienteLenteAvgAggregateOutputType | null
    _sum: PacienteLenteSumAggregateOutputType | null
    _min: PacienteLenteMinAggregateOutputType | null
    _max: PacienteLenteMaxAggregateOutputType | null
  }

  export type PacienteLenteAvgAggregateOutputType = {
    id: number | null
  }

  export type PacienteLenteSumAggregateOutputType = {
    id: number | null
  }

  export type PacienteLenteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    creadoEn: Date | null
  }

  export type PacienteLenteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    creadoEn: Date | null
  }

  export type PacienteLenteCountAggregateOutputType = {
    id: number
    nombre: number
    creadoEn: number
    _all: number
  }


  export type PacienteLenteAvgAggregateInputType = {
    id?: true
  }

  export type PacienteLenteSumAggregateInputType = {
    id?: true
  }

  export type PacienteLenteMinAggregateInputType = {
    id?: true
    nombre?: true
    creadoEn?: true
  }

  export type PacienteLenteMaxAggregateInputType = {
    id?: true
    nombre?: true
    creadoEn?: true
  }

  export type PacienteLenteCountAggregateInputType = {
    id?: true
    nombre?: true
    creadoEn?: true
    _all?: true
  }

  export type PacienteLenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PacienteLente to aggregate.
     */
    where?: PacienteLenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacienteLentes to fetch.
     */
    orderBy?: PacienteLenteOrderByWithRelationInput | PacienteLenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteLenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacienteLentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacienteLentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PacienteLentes
    **/
    _count?: true | PacienteLenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteLenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteLenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteLenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteLenteMaxAggregateInputType
  }

  export type GetPacienteLenteAggregateType<T extends PacienteLenteAggregateArgs> = {
        [P in keyof T & keyof AggregatePacienteLente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacienteLente[P]>
      : GetScalarType<T[P], AggregatePacienteLente[P]>
  }




  export type PacienteLenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteLenteWhereInput
    orderBy?: PacienteLenteOrderByWithAggregationInput | PacienteLenteOrderByWithAggregationInput[]
    by: PacienteLenteScalarFieldEnum[] | PacienteLenteScalarFieldEnum
    having?: PacienteLenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteLenteCountAggregateInputType | true
    _avg?: PacienteLenteAvgAggregateInputType
    _sum?: PacienteLenteSumAggregateInputType
    _min?: PacienteLenteMinAggregateInputType
    _max?: PacienteLenteMaxAggregateInputType
  }

  export type PacienteLenteGroupByOutputType = {
    id: number
    nombre: string
    creadoEn: Date
    _count: PacienteLenteCountAggregateOutputType | null
    _avg: PacienteLenteAvgAggregateOutputType | null
    _sum: PacienteLenteSumAggregateOutputType | null
    _min: PacienteLenteMinAggregateOutputType | null
    _max: PacienteLenteMaxAggregateOutputType | null
  }

  type GetPacienteLenteGroupByPayload<T extends PacienteLenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteLenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteLenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteLenteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteLenteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteLenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
    recetas?: boolean | PacienteLente$recetasArgs<ExtArgs>
    _count?: boolean | PacienteLenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacienteLente"]>

  export type PacienteLenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["pacienteLente"]>

  export type PacienteLenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["pacienteLente"]>

  export type PacienteLenteSelectScalar = {
    id?: boolean
    nombre?: boolean
    creadoEn?: boolean
  }

  export type PacienteLenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "creadoEn", ExtArgs["result"]["pacienteLente"]>
  export type PacienteLenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetas?: boolean | PacienteLente$recetasArgs<ExtArgs>
    _count?: boolean | PacienteLenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacienteLenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PacienteLenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PacienteLentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PacienteLente"
    objects: {
      recetas: Prisma.$RecetaLentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      creadoEn: Date
    }, ExtArgs["result"]["pacienteLente"]>
    composites: {}
  }

  type PacienteLenteGetPayload<S extends boolean | null | undefined | PacienteLenteDefaultArgs> = $Result.GetResult<Prisma.$PacienteLentePayload, S>

  type PacienteLenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteLenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteLenteCountAggregateInputType | true
    }

  export interface PacienteLenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PacienteLente'], meta: { name: 'PacienteLente' } }
    /**
     * Find zero or one PacienteLente that matches the filter.
     * @param {PacienteLenteFindUniqueArgs} args - Arguments to find a PacienteLente
     * @example
     * // Get one PacienteLente
     * const pacienteLente = await prisma.pacienteLente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteLenteFindUniqueArgs>(args: SelectSubset<T, PacienteLenteFindUniqueArgs<ExtArgs>>): Prisma__PacienteLenteClient<$Result.GetResult<Prisma.$PacienteLentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PacienteLente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteLenteFindUniqueOrThrowArgs} args - Arguments to find a PacienteLente
     * @example
     * // Get one PacienteLente
     * const pacienteLente = await prisma.pacienteLente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteLenteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteLenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteLenteClient<$Result.GetResult<Prisma.$PacienteLentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PacienteLente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteLenteFindFirstArgs} args - Arguments to find a PacienteLente
     * @example
     * // Get one PacienteLente
     * const pacienteLente = await prisma.pacienteLente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteLenteFindFirstArgs>(args?: SelectSubset<T, PacienteLenteFindFirstArgs<ExtArgs>>): Prisma__PacienteLenteClient<$Result.GetResult<Prisma.$PacienteLentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PacienteLente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteLenteFindFirstOrThrowArgs} args - Arguments to find a PacienteLente
     * @example
     * // Get one PacienteLente
     * const pacienteLente = await prisma.pacienteLente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteLenteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteLenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteLenteClient<$Result.GetResult<Prisma.$PacienteLentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PacienteLentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteLenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PacienteLentes
     * const pacienteLentes = await prisma.pacienteLente.findMany()
     * 
     * // Get first 10 PacienteLentes
     * const pacienteLentes = await prisma.pacienteLente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteLenteWithIdOnly = await prisma.pacienteLente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteLenteFindManyArgs>(args?: SelectSubset<T, PacienteLenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacienteLentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PacienteLente.
     * @param {PacienteLenteCreateArgs} args - Arguments to create a PacienteLente.
     * @example
     * // Create one PacienteLente
     * const PacienteLente = await prisma.pacienteLente.create({
     *   data: {
     *     // ... data to create a PacienteLente
     *   }
     * })
     * 
     */
    create<T extends PacienteLenteCreateArgs>(args: SelectSubset<T, PacienteLenteCreateArgs<ExtArgs>>): Prisma__PacienteLenteClient<$Result.GetResult<Prisma.$PacienteLentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PacienteLentes.
     * @param {PacienteLenteCreateManyArgs} args - Arguments to create many PacienteLentes.
     * @example
     * // Create many PacienteLentes
     * const pacienteLente = await prisma.pacienteLente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteLenteCreateManyArgs>(args?: SelectSubset<T, PacienteLenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PacienteLentes and returns the data saved in the database.
     * @param {PacienteLenteCreateManyAndReturnArgs} args - Arguments to create many PacienteLentes.
     * @example
     * // Create many PacienteLentes
     * const pacienteLente = await prisma.pacienteLente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PacienteLentes and only return the `id`
     * const pacienteLenteWithIdOnly = await prisma.pacienteLente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteLenteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteLenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacienteLentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PacienteLente.
     * @param {PacienteLenteDeleteArgs} args - Arguments to delete one PacienteLente.
     * @example
     * // Delete one PacienteLente
     * const PacienteLente = await prisma.pacienteLente.delete({
     *   where: {
     *     // ... filter to delete one PacienteLente
     *   }
     * })
     * 
     */
    delete<T extends PacienteLenteDeleteArgs>(args: SelectSubset<T, PacienteLenteDeleteArgs<ExtArgs>>): Prisma__PacienteLenteClient<$Result.GetResult<Prisma.$PacienteLentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PacienteLente.
     * @param {PacienteLenteUpdateArgs} args - Arguments to update one PacienteLente.
     * @example
     * // Update one PacienteLente
     * const pacienteLente = await prisma.pacienteLente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteLenteUpdateArgs>(args: SelectSubset<T, PacienteLenteUpdateArgs<ExtArgs>>): Prisma__PacienteLenteClient<$Result.GetResult<Prisma.$PacienteLentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PacienteLentes.
     * @param {PacienteLenteDeleteManyArgs} args - Arguments to filter PacienteLentes to delete.
     * @example
     * // Delete a few PacienteLentes
     * const { count } = await prisma.pacienteLente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteLenteDeleteManyArgs>(args?: SelectSubset<T, PacienteLenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PacienteLentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteLenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PacienteLentes
     * const pacienteLente = await prisma.pacienteLente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteLenteUpdateManyArgs>(args: SelectSubset<T, PacienteLenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PacienteLentes and returns the data updated in the database.
     * @param {PacienteLenteUpdateManyAndReturnArgs} args - Arguments to update many PacienteLentes.
     * @example
     * // Update many PacienteLentes
     * const pacienteLente = await prisma.pacienteLente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PacienteLentes and only return the `id`
     * const pacienteLenteWithIdOnly = await prisma.pacienteLente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PacienteLenteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteLenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacienteLentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PacienteLente.
     * @param {PacienteLenteUpsertArgs} args - Arguments to update or create a PacienteLente.
     * @example
     * // Update or create a PacienteLente
     * const pacienteLente = await prisma.pacienteLente.upsert({
     *   create: {
     *     // ... data to create a PacienteLente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PacienteLente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteLenteUpsertArgs>(args: SelectSubset<T, PacienteLenteUpsertArgs<ExtArgs>>): Prisma__PacienteLenteClient<$Result.GetResult<Prisma.$PacienteLentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PacienteLentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteLenteCountArgs} args - Arguments to filter PacienteLentes to count.
     * @example
     * // Count the number of PacienteLentes
     * const count = await prisma.pacienteLente.count({
     *   where: {
     *     // ... the filter for the PacienteLentes we want to count
     *   }
     * })
    **/
    count<T extends PacienteLenteCountArgs>(
      args?: Subset<T, PacienteLenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteLenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PacienteLente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteLenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteLenteAggregateArgs>(args: Subset<T, PacienteLenteAggregateArgs>): Prisma.PrismaPromise<GetPacienteLenteAggregateType<T>>

    /**
     * Group by PacienteLente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteLenteGroupByArgs} args - Group by arguments.
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
      T extends PacienteLenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteLenteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteLenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteLenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteLenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PacienteLente model
   */
  readonly fields: PacienteLenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PacienteLente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteLenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recetas<T extends PacienteLente$recetasArgs<ExtArgs> = {}>(args?: Subset<T, PacienteLente$recetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaLentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PacienteLente model
   */
  interface PacienteLenteFieldRefs {
    readonly id: FieldRef<"PacienteLente", 'Int'>
    readonly nombre: FieldRef<"PacienteLente", 'String'>
    readonly creadoEn: FieldRef<"PacienteLente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PacienteLente findUnique
   */
  export type PacienteLenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteLente
     */
    select?: PacienteLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteLente
     */
    omit?: PacienteLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteLenteInclude<ExtArgs> | null
    /**
     * Filter, which PacienteLente to fetch.
     */
    where: PacienteLenteWhereUniqueInput
  }

  /**
   * PacienteLente findUniqueOrThrow
   */
  export type PacienteLenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteLente
     */
    select?: PacienteLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteLente
     */
    omit?: PacienteLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteLenteInclude<ExtArgs> | null
    /**
     * Filter, which PacienteLente to fetch.
     */
    where: PacienteLenteWhereUniqueInput
  }

  /**
   * PacienteLente findFirst
   */
  export type PacienteLenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteLente
     */
    select?: PacienteLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteLente
     */
    omit?: PacienteLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteLenteInclude<ExtArgs> | null
    /**
     * Filter, which PacienteLente to fetch.
     */
    where?: PacienteLenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacienteLentes to fetch.
     */
    orderBy?: PacienteLenteOrderByWithRelationInput | PacienteLenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PacienteLentes.
     */
    cursor?: PacienteLenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacienteLentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacienteLentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacienteLentes.
     */
    distinct?: PacienteLenteScalarFieldEnum | PacienteLenteScalarFieldEnum[]
  }

  /**
   * PacienteLente findFirstOrThrow
   */
  export type PacienteLenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteLente
     */
    select?: PacienteLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteLente
     */
    omit?: PacienteLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteLenteInclude<ExtArgs> | null
    /**
     * Filter, which PacienteLente to fetch.
     */
    where?: PacienteLenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacienteLentes to fetch.
     */
    orderBy?: PacienteLenteOrderByWithRelationInput | PacienteLenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PacienteLentes.
     */
    cursor?: PacienteLenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacienteLentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacienteLentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacienteLentes.
     */
    distinct?: PacienteLenteScalarFieldEnum | PacienteLenteScalarFieldEnum[]
  }

  /**
   * PacienteLente findMany
   */
  export type PacienteLenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteLente
     */
    select?: PacienteLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteLente
     */
    omit?: PacienteLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteLenteInclude<ExtArgs> | null
    /**
     * Filter, which PacienteLentes to fetch.
     */
    where?: PacienteLenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacienteLentes to fetch.
     */
    orderBy?: PacienteLenteOrderByWithRelationInput | PacienteLenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PacienteLentes.
     */
    cursor?: PacienteLenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacienteLentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacienteLentes.
     */
    skip?: number
    distinct?: PacienteLenteScalarFieldEnum | PacienteLenteScalarFieldEnum[]
  }

  /**
   * PacienteLente create
   */
  export type PacienteLenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteLente
     */
    select?: PacienteLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteLente
     */
    omit?: PacienteLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteLenteInclude<ExtArgs> | null
    /**
     * The data needed to create a PacienteLente.
     */
    data: XOR<PacienteLenteCreateInput, PacienteLenteUncheckedCreateInput>
  }

  /**
   * PacienteLente createMany
   */
  export type PacienteLenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PacienteLentes.
     */
    data: PacienteLenteCreateManyInput | PacienteLenteCreateManyInput[]
  }

  /**
   * PacienteLente createManyAndReturn
   */
  export type PacienteLenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteLente
     */
    select?: PacienteLenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteLente
     */
    omit?: PacienteLenteOmit<ExtArgs> | null
    /**
     * The data used to create many PacienteLentes.
     */
    data: PacienteLenteCreateManyInput | PacienteLenteCreateManyInput[]
  }

  /**
   * PacienteLente update
   */
  export type PacienteLenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteLente
     */
    select?: PacienteLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteLente
     */
    omit?: PacienteLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteLenteInclude<ExtArgs> | null
    /**
     * The data needed to update a PacienteLente.
     */
    data: XOR<PacienteLenteUpdateInput, PacienteLenteUncheckedUpdateInput>
    /**
     * Choose, which PacienteLente to update.
     */
    where: PacienteLenteWhereUniqueInput
  }

  /**
   * PacienteLente updateMany
   */
  export type PacienteLenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PacienteLentes.
     */
    data: XOR<PacienteLenteUpdateManyMutationInput, PacienteLenteUncheckedUpdateManyInput>
    /**
     * Filter which PacienteLentes to update
     */
    where?: PacienteLenteWhereInput
    /**
     * Limit how many PacienteLentes to update.
     */
    limit?: number
  }

  /**
   * PacienteLente updateManyAndReturn
   */
  export type PacienteLenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteLente
     */
    select?: PacienteLenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteLente
     */
    omit?: PacienteLenteOmit<ExtArgs> | null
    /**
     * The data used to update PacienteLentes.
     */
    data: XOR<PacienteLenteUpdateManyMutationInput, PacienteLenteUncheckedUpdateManyInput>
    /**
     * Filter which PacienteLentes to update
     */
    where?: PacienteLenteWhereInput
    /**
     * Limit how many PacienteLentes to update.
     */
    limit?: number
  }

  /**
   * PacienteLente upsert
   */
  export type PacienteLenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteLente
     */
    select?: PacienteLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteLente
     */
    omit?: PacienteLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteLenteInclude<ExtArgs> | null
    /**
     * The filter to search for the PacienteLente to update in case it exists.
     */
    where: PacienteLenteWhereUniqueInput
    /**
     * In case the PacienteLente found by the `where` argument doesn't exist, create a new PacienteLente with this data.
     */
    create: XOR<PacienteLenteCreateInput, PacienteLenteUncheckedCreateInput>
    /**
     * In case the PacienteLente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteLenteUpdateInput, PacienteLenteUncheckedUpdateInput>
  }

  /**
   * PacienteLente delete
   */
  export type PacienteLenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteLente
     */
    select?: PacienteLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteLente
     */
    omit?: PacienteLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteLenteInclude<ExtArgs> | null
    /**
     * Filter which PacienteLente to delete.
     */
    where: PacienteLenteWhereUniqueInput
  }

  /**
   * PacienteLente deleteMany
   */
  export type PacienteLenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PacienteLentes to delete
     */
    where?: PacienteLenteWhereInput
    /**
     * Limit how many PacienteLentes to delete.
     */
    limit?: number
  }

  /**
   * PacienteLente.recetas
   */
  export type PacienteLente$recetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLente
     */
    select?: RecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaLente
     */
    omit?: RecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaLenteInclude<ExtArgs> | null
    where?: RecetaLenteWhereInput
    orderBy?: RecetaLenteOrderByWithRelationInput | RecetaLenteOrderByWithRelationInput[]
    cursor?: RecetaLenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecetaLenteScalarFieldEnum | RecetaLenteScalarFieldEnum[]
  }

  /**
   * PacienteLente without action
   */
  export type PacienteLenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteLente
     */
    select?: PacienteLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteLente
     */
    omit?: PacienteLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteLenteInclude<ExtArgs> | null
  }


  /**
   * Model RecetaLente
   */

  export type AggregateRecetaLente = {
    _count: RecetaLenteCountAggregateOutputType | null
    _avg: RecetaLenteAvgAggregateOutputType | null
    _sum: RecetaLenteSumAggregateOutputType | null
    _min: RecetaLenteMinAggregateOutputType | null
    _max: RecetaLenteMaxAggregateOutputType | null
  }

  export type RecetaLenteAvgAggregateOutputType = {
    id: number | null
    pacienteLenteId: number | null
  }

  export type RecetaLenteSumAggregateOutputType = {
    id: number | null
    pacienteLenteId: number | null
  }

  export type RecetaLenteMinAggregateOutputType = {
    id: number | null
    pacienteLenteId: number | null
    fecha: Date | null
  }

  export type RecetaLenteMaxAggregateOutputType = {
    id: number | null
    pacienteLenteId: number | null
    fecha: Date | null
  }

  export type RecetaLenteCountAggregateOutputType = {
    id: number
    pacienteLenteId: number
    fecha: number
    _all: number
  }


  export type RecetaLenteAvgAggregateInputType = {
    id?: true
    pacienteLenteId?: true
  }

  export type RecetaLenteSumAggregateInputType = {
    id?: true
    pacienteLenteId?: true
  }

  export type RecetaLenteMinAggregateInputType = {
    id?: true
    pacienteLenteId?: true
    fecha?: true
  }

  export type RecetaLenteMaxAggregateInputType = {
    id?: true
    pacienteLenteId?: true
    fecha?: true
  }

  export type RecetaLenteCountAggregateInputType = {
    id?: true
    pacienteLenteId?: true
    fecha?: true
    _all?: true
  }

  export type RecetaLenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecetaLente to aggregate.
     */
    where?: RecetaLenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecetaLentes to fetch.
     */
    orderBy?: RecetaLenteOrderByWithRelationInput | RecetaLenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecetaLenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecetaLentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecetaLentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecetaLentes
    **/
    _count?: true | RecetaLenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecetaLenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecetaLenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecetaLenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecetaLenteMaxAggregateInputType
  }

  export type GetRecetaLenteAggregateType<T extends RecetaLenteAggregateArgs> = {
        [P in keyof T & keyof AggregateRecetaLente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecetaLente[P]>
      : GetScalarType<T[P], AggregateRecetaLente[P]>
  }




  export type RecetaLenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetaLenteWhereInput
    orderBy?: RecetaLenteOrderByWithAggregationInput | RecetaLenteOrderByWithAggregationInput[]
    by: RecetaLenteScalarFieldEnum[] | RecetaLenteScalarFieldEnum
    having?: RecetaLenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecetaLenteCountAggregateInputType | true
    _avg?: RecetaLenteAvgAggregateInputType
    _sum?: RecetaLenteSumAggregateInputType
    _min?: RecetaLenteMinAggregateInputType
    _max?: RecetaLenteMaxAggregateInputType
  }

  export type RecetaLenteGroupByOutputType = {
    id: number
    pacienteLenteId: number
    fecha: Date
    _count: RecetaLenteCountAggregateOutputType | null
    _avg: RecetaLenteAvgAggregateOutputType | null
    _sum: RecetaLenteSumAggregateOutputType | null
    _min: RecetaLenteMinAggregateOutputType | null
    _max: RecetaLenteMaxAggregateOutputType | null
  }

  type GetRecetaLenteGroupByPayload<T extends RecetaLenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecetaLenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecetaLenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecetaLenteGroupByOutputType[P]>
            : GetScalarType<T[P], RecetaLenteGroupByOutputType[P]>
        }
      >
    >


  export type RecetaLenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteLenteId?: boolean
    fecha?: boolean
    paciente?: boolean | PacienteLenteDefaultArgs<ExtArgs>
    fotos?: boolean | RecetaLente$fotosArgs<ExtArgs>
    _count?: boolean | RecetaLenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recetaLente"]>

  export type RecetaLenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteLenteId?: boolean
    fecha?: boolean
    paciente?: boolean | PacienteLenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recetaLente"]>

  export type RecetaLenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteLenteId?: boolean
    fecha?: boolean
    paciente?: boolean | PacienteLenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recetaLente"]>

  export type RecetaLenteSelectScalar = {
    id?: boolean
    pacienteLenteId?: boolean
    fecha?: boolean
  }

  export type RecetaLenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pacienteLenteId" | "fecha", ExtArgs["result"]["recetaLente"]>
  export type RecetaLenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteLenteDefaultArgs<ExtArgs>
    fotos?: boolean | RecetaLente$fotosArgs<ExtArgs>
    _count?: boolean | RecetaLenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecetaLenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteLenteDefaultArgs<ExtArgs>
  }
  export type RecetaLenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteLenteDefaultArgs<ExtArgs>
  }

  export type $RecetaLentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecetaLente"
    objects: {
      paciente: Prisma.$PacienteLentePayload<ExtArgs>
      fotos: Prisma.$FotoRecetaLentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pacienteLenteId: number
      fecha: Date
    }, ExtArgs["result"]["recetaLente"]>
    composites: {}
  }

  type RecetaLenteGetPayload<S extends boolean | null | undefined | RecetaLenteDefaultArgs> = $Result.GetResult<Prisma.$RecetaLentePayload, S>

  type RecetaLenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecetaLenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecetaLenteCountAggregateInputType | true
    }

  export interface RecetaLenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecetaLente'], meta: { name: 'RecetaLente' } }
    /**
     * Find zero or one RecetaLente that matches the filter.
     * @param {RecetaLenteFindUniqueArgs} args - Arguments to find a RecetaLente
     * @example
     * // Get one RecetaLente
     * const recetaLente = await prisma.recetaLente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecetaLenteFindUniqueArgs>(args: SelectSubset<T, RecetaLenteFindUniqueArgs<ExtArgs>>): Prisma__RecetaLenteClient<$Result.GetResult<Prisma.$RecetaLentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecetaLente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecetaLenteFindUniqueOrThrowArgs} args - Arguments to find a RecetaLente
     * @example
     * // Get one RecetaLente
     * const recetaLente = await prisma.recetaLente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecetaLenteFindUniqueOrThrowArgs>(args: SelectSubset<T, RecetaLenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecetaLenteClient<$Result.GetResult<Prisma.$RecetaLentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecetaLente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaLenteFindFirstArgs} args - Arguments to find a RecetaLente
     * @example
     * // Get one RecetaLente
     * const recetaLente = await prisma.recetaLente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecetaLenteFindFirstArgs>(args?: SelectSubset<T, RecetaLenteFindFirstArgs<ExtArgs>>): Prisma__RecetaLenteClient<$Result.GetResult<Prisma.$RecetaLentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecetaLente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaLenteFindFirstOrThrowArgs} args - Arguments to find a RecetaLente
     * @example
     * // Get one RecetaLente
     * const recetaLente = await prisma.recetaLente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecetaLenteFindFirstOrThrowArgs>(args?: SelectSubset<T, RecetaLenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecetaLenteClient<$Result.GetResult<Prisma.$RecetaLentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecetaLentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaLenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecetaLentes
     * const recetaLentes = await prisma.recetaLente.findMany()
     * 
     * // Get first 10 RecetaLentes
     * const recetaLentes = await prisma.recetaLente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recetaLenteWithIdOnly = await prisma.recetaLente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecetaLenteFindManyArgs>(args?: SelectSubset<T, RecetaLenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaLentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecetaLente.
     * @param {RecetaLenteCreateArgs} args - Arguments to create a RecetaLente.
     * @example
     * // Create one RecetaLente
     * const RecetaLente = await prisma.recetaLente.create({
     *   data: {
     *     // ... data to create a RecetaLente
     *   }
     * })
     * 
     */
    create<T extends RecetaLenteCreateArgs>(args: SelectSubset<T, RecetaLenteCreateArgs<ExtArgs>>): Prisma__RecetaLenteClient<$Result.GetResult<Prisma.$RecetaLentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecetaLentes.
     * @param {RecetaLenteCreateManyArgs} args - Arguments to create many RecetaLentes.
     * @example
     * // Create many RecetaLentes
     * const recetaLente = await prisma.recetaLente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecetaLenteCreateManyArgs>(args?: SelectSubset<T, RecetaLenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecetaLentes and returns the data saved in the database.
     * @param {RecetaLenteCreateManyAndReturnArgs} args - Arguments to create many RecetaLentes.
     * @example
     * // Create many RecetaLentes
     * const recetaLente = await prisma.recetaLente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecetaLentes and only return the `id`
     * const recetaLenteWithIdOnly = await prisma.recetaLente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecetaLenteCreateManyAndReturnArgs>(args?: SelectSubset<T, RecetaLenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaLentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecetaLente.
     * @param {RecetaLenteDeleteArgs} args - Arguments to delete one RecetaLente.
     * @example
     * // Delete one RecetaLente
     * const RecetaLente = await prisma.recetaLente.delete({
     *   where: {
     *     // ... filter to delete one RecetaLente
     *   }
     * })
     * 
     */
    delete<T extends RecetaLenteDeleteArgs>(args: SelectSubset<T, RecetaLenteDeleteArgs<ExtArgs>>): Prisma__RecetaLenteClient<$Result.GetResult<Prisma.$RecetaLentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecetaLente.
     * @param {RecetaLenteUpdateArgs} args - Arguments to update one RecetaLente.
     * @example
     * // Update one RecetaLente
     * const recetaLente = await prisma.recetaLente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecetaLenteUpdateArgs>(args: SelectSubset<T, RecetaLenteUpdateArgs<ExtArgs>>): Prisma__RecetaLenteClient<$Result.GetResult<Prisma.$RecetaLentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecetaLentes.
     * @param {RecetaLenteDeleteManyArgs} args - Arguments to filter RecetaLentes to delete.
     * @example
     * // Delete a few RecetaLentes
     * const { count } = await prisma.recetaLente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecetaLenteDeleteManyArgs>(args?: SelectSubset<T, RecetaLenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecetaLentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaLenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecetaLentes
     * const recetaLente = await prisma.recetaLente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecetaLenteUpdateManyArgs>(args: SelectSubset<T, RecetaLenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecetaLentes and returns the data updated in the database.
     * @param {RecetaLenteUpdateManyAndReturnArgs} args - Arguments to update many RecetaLentes.
     * @example
     * // Update many RecetaLentes
     * const recetaLente = await prisma.recetaLente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecetaLentes and only return the `id`
     * const recetaLenteWithIdOnly = await prisma.recetaLente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecetaLenteUpdateManyAndReturnArgs>(args: SelectSubset<T, RecetaLenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaLentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecetaLente.
     * @param {RecetaLenteUpsertArgs} args - Arguments to update or create a RecetaLente.
     * @example
     * // Update or create a RecetaLente
     * const recetaLente = await prisma.recetaLente.upsert({
     *   create: {
     *     // ... data to create a RecetaLente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecetaLente we want to update
     *   }
     * })
     */
    upsert<T extends RecetaLenteUpsertArgs>(args: SelectSubset<T, RecetaLenteUpsertArgs<ExtArgs>>): Prisma__RecetaLenteClient<$Result.GetResult<Prisma.$RecetaLentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecetaLentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaLenteCountArgs} args - Arguments to filter RecetaLentes to count.
     * @example
     * // Count the number of RecetaLentes
     * const count = await prisma.recetaLente.count({
     *   where: {
     *     // ... the filter for the RecetaLentes we want to count
     *   }
     * })
    **/
    count<T extends RecetaLenteCountArgs>(
      args?: Subset<T, RecetaLenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecetaLenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecetaLente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaLenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecetaLenteAggregateArgs>(args: Subset<T, RecetaLenteAggregateArgs>): Prisma.PrismaPromise<GetRecetaLenteAggregateType<T>>

    /**
     * Group by RecetaLente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaLenteGroupByArgs} args - Group by arguments.
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
      T extends RecetaLenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecetaLenteGroupByArgs['orderBy'] }
        : { orderBy?: RecetaLenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecetaLenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecetaLenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecetaLente model
   */
  readonly fields: RecetaLenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecetaLente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecetaLenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteLenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteLenteDefaultArgs<ExtArgs>>): Prisma__PacienteLenteClient<$Result.GetResult<Prisma.$PacienteLentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fotos<T extends RecetaLente$fotosArgs<ExtArgs> = {}>(args?: Subset<T, RecetaLente$fotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoRecetaLentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RecetaLente model
   */
  interface RecetaLenteFieldRefs {
    readonly id: FieldRef<"RecetaLente", 'Int'>
    readonly pacienteLenteId: FieldRef<"RecetaLente", 'Int'>
    readonly fecha: FieldRef<"RecetaLente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecetaLente findUnique
   */
  export type RecetaLenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLente
     */
    select?: RecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaLente
     */
    omit?: RecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaLenteInclude<ExtArgs> | null
    /**
     * Filter, which RecetaLente to fetch.
     */
    where: RecetaLenteWhereUniqueInput
  }

  /**
   * RecetaLente findUniqueOrThrow
   */
  export type RecetaLenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLente
     */
    select?: RecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaLente
     */
    omit?: RecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaLenteInclude<ExtArgs> | null
    /**
     * Filter, which RecetaLente to fetch.
     */
    where: RecetaLenteWhereUniqueInput
  }

  /**
   * RecetaLente findFirst
   */
  export type RecetaLenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLente
     */
    select?: RecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaLente
     */
    omit?: RecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaLenteInclude<ExtArgs> | null
    /**
     * Filter, which RecetaLente to fetch.
     */
    where?: RecetaLenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecetaLentes to fetch.
     */
    orderBy?: RecetaLenteOrderByWithRelationInput | RecetaLenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecetaLentes.
     */
    cursor?: RecetaLenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecetaLentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecetaLentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecetaLentes.
     */
    distinct?: RecetaLenteScalarFieldEnum | RecetaLenteScalarFieldEnum[]
  }

  /**
   * RecetaLente findFirstOrThrow
   */
  export type RecetaLenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLente
     */
    select?: RecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaLente
     */
    omit?: RecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaLenteInclude<ExtArgs> | null
    /**
     * Filter, which RecetaLente to fetch.
     */
    where?: RecetaLenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecetaLentes to fetch.
     */
    orderBy?: RecetaLenteOrderByWithRelationInput | RecetaLenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecetaLentes.
     */
    cursor?: RecetaLenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecetaLentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecetaLentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecetaLentes.
     */
    distinct?: RecetaLenteScalarFieldEnum | RecetaLenteScalarFieldEnum[]
  }

  /**
   * RecetaLente findMany
   */
  export type RecetaLenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLente
     */
    select?: RecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaLente
     */
    omit?: RecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaLenteInclude<ExtArgs> | null
    /**
     * Filter, which RecetaLentes to fetch.
     */
    where?: RecetaLenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecetaLentes to fetch.
     */
    orderBy?: RecetaLenteOrderByWithRelationInput | RecetaLenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecetaLentes.
     */
    cursor?: RecetaLenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecetaLentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecetaLentes.
     */
    skip?: number
    distinct?: RecetaLenteScalarFieldEnum | RecetaLenteScalarFieldEnum[]
  }

  /**
   * RecetaLente create
   */
  export type RecetaLenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLente
     */
    select?: RecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaLente
     */
    omit?: RecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaLenteInclude<ExtArgs> | null
    /**
     * The data needed to create a RecetaLente.
     */
    data: XOR<RecetaLenteCreateInput, RecetaLenteUncheckedCreateInput>
  }

  /**
   * RecetaLente createMany
   */
  export type RecetaLenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecetaLentes.
     */
    data: RecetaLenteCreateManyInput | RecetaLenteCreateManyInput[]
  }

  /**
   * RecetaLente createManyAndReturn
   */
  export type RecetaLenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLente
     */
    select?: RecetaLenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaLente
     */
    omit?: RecetaLenteOmit<ExtArgs> | null
    /**
     * The data used to create many RecetaLentes.
     */
    data: RecetaLenteCreateManyInput | RecetaLenteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaLenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecetaLente update
   */
  export type RecetaLenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLente
     */
    select?: RecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaLente
     */
    omit?: RecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaLenteInclude<ExtArgs> | null
    /**
     * The data needed to update a RecetaLente.
     */
    data: XOR<RecetaLenteUpdateInput, RecetaLenteUncheckedUpdateInput>
    /**
     * Choose, which RecetaLente to update.
     */
    where: RecetaLenteWhereUniqueInput
  }

  /**
   * RecetaLente updateMany
   */
  export type RecetaLenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecetaLentes.
     */
    data: XOR<RecetaLenteUpdateManyMutationInput, RecetaLenteUncheckedUpdateManyInput>
    /**
     * Filter which RecetaLentes to update
     */
    where?: RecetaLenteWhereInput
    /**
     * Limit how many RecetaLentes to update.
     */
    limit?: number
  }

  /**
   * RecetaLente updateManyAndReturn
   */
  export type RecetaLenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLente
     */
    select?: RecetaLenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaLente
     */
    omit?: RecetaLenteOmit<ExtArgs> | null
    /**
     * The data used to update RecetaLentes.
     */
    data: XOR<RecetaLenteUpdateManyMutationInput, RecetaLenteUncheckedUpdateManyInput>
    /**
     * Filter which RecetaLentes to update
     */
    where?: RecetaLenteWhereInput
    /**
     * Limit how many RecetaLentes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaLenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecetaLente upsert
   */
  export type RecetaLenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLente
     */
    select?: RecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaLente
     */
    omit?: RecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaLenteInclude<ExtArgs> | null
    /**
     * The filter to search for the RecetaLente to update in case it exists.
     */
    where: RecetaLenteWhereUniqueInput
    /**
     * In case the RecetaLente found by the `where` argument doesn't exist, create a new RecetaLente with this data.
     */
    create: XOR<RecetaLenteCreateInput, RecetaLenteUncheckedCreateInput>
    /**
     * In case the RecetaLente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecetaLenteUpdateInput, RecetaLenteUncheckedUpdateInput>
  }

  /**
   * RecetaLente delete
   */
  export type RecetaLenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLente
     */
    select?: RecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaLente
     */
    omit?: RecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaLenteInclude<ExtArgs> | null
    /**
     * Filter which RecetaLente to delete.
     */
    where: RecetaLenteWhereUniqueInput
  }

  /**
   * RecetaLente deleteMany
   */
  export type RecetaLenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecetaLentes to delete
     */
    where?: RecetaLenteWhereInput
    /**
     * Limit how many RecetaLentes to delete.
     */
    limit?: number
  }

  /**
   * RecetaLente.fotos
   */
  export type RecetaLente$fotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoRecetaLente
     */
    select?: FotoRecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoRecetaLente
     */
    omit?: FotoRecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaLenteInclude<ExtArgs> | null
    where?: FotoRecetaLenteWhereInput
    orderBy?: FotoRecetaLenteOrderByWithRelationInput | FotoRecetaLenteOrderByWithRelationInput[]
    cursor?: FotoRecetaLenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotoRecetaLenteScalarFieldEnum | FotoRecetaLenteScalarFieldEnum[]
  }

  /**
   * RecetaLente without action
   */
  export type RecetaLenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaLente
     */
    select?: RecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaLente
     */
    omit?: RecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaLenteInclude<ExtArgs> | null
  }


  /**
   * Model FotoRecetaLente
   */

  export type AggregateFotoRecetaLente = {
    _count: FotoRecetaLenteCountAggregateOutputType | null
    _avg: FotoRecetaLenteAvgAggregateOutputType | null
    _sum: FotoRecetaLenteSumAggregateOutputType | null
    _min: FotoRecetaLenteMinAggregateOutputType | null
    _max: FotoRecetaLenteMaxAggregateOutputType | null
  }

  export type FotoRecetaLenteAvgAggregateOutputType = {
    id: number | null
    recetaLenteId: number | null
  }

  export type FotoRecetaLenteSumAggregateOutputType = {
    id: number | null
    recetaLenteId: number | null
  }

  export type FotoRecetaLenteMinAggregateOutputType = {
    id: number | null
    recetaLenteId: number | null
    foto: string | null
    observaciones: string | null
  }

  export type FotoRecetaLenteMaxAggregateOutputType = {
    id: number | null
    recetaLenteId: number | null
    foto: string | null
    observaciones: string | null
  }

  export type FotoRecetaLenteCountAggregateOutputType = {
    id: number
    recetaLenteId: number
    foto: number
    observaciones: number
    _all: number
  }


  export type FotoRecetaLenteAvgAggregateInputType = {
    id?: true
    recetaLenteId?: true
  }

  export type FotoRecetaLenteSumAggregateInputType = {
    id?: true
    recetaLenteId?: true
  }

  export type FotoRecetaLenteMinAggregateInputType = {
    id?: true
    recetaLenteId?: true
    foto?: true
    observaciones?: true
  }

  export type FotoRecetaLenteMaxAggregateInputType = {
    id?: true
    recetaLenteId?: true
    foto?: true
    observaciones?: true
  }

  export type FotoRecetaLenteCountAggregateInputType = {
    id?: true
    recetaLenteId?: true
    foto?: true
    observaciones?: true
    _all?: true
  }

  export type FotoRecetaLenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotoRecetaLente to aggregate.
     */
    where?: FotoRecetaLenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoRecetaLentes to fetch.
     */
    orderBy?: FotoRecetaLenteOrderByWithRelationInput | FotoRecetaLenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotoRecetaLenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoRecetaLentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoRecetaLentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FotoRecetaLentes
    **/
    _count?: true | FotoRecetaLenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FotoRecetaLenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FotoRecetaLenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotoRecetaLenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotoRecetaLenteMaxAggregateInputType
  }

  export type GetFotoRecetaLenteAggregateType<T extends FotoRecetaLenteAggregateArgs> = {
        [P in keyof T & keyof AggregateFotoRecetaLente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFotoRecetaLente[P]>
      : GetScalarType<T[P], AggregateFotoRecetaLente[P]>
  }




  export type FotoRecetaLenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoRecetaLenteWhereInput
    orderBy?: FotoRecetaLenteOrderByWithAggregationInput | FotoRecetaLenteOrderByWithAggregationInput[]
    by: FotoRecetaLenteScalarFieldEnum[] | FotoRecetaLenteScalarFieldEnum
    having?: FotoRecetaLenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotoRecetaLenteCountAggregateInputType | true
    _avg?: FotoRecetaLenteAvgAggregateInputType
    _sum?: FotoRecetaLenteSumAggregateInputType
    _min?: FotoRecetaLenteMinAggregateInputType
    _max?: FotoRecetaLenteMaxAggregateInputType
  }

  export type FotoRecetaLenteGroupByOutputType = {
    id: number
    recetaLenteId: number
    foto: string
    observaciones: string
    _count: FotoRecetaLenteCountAggregateOutputType | null
    _avg: FotoRecetaLenteAvgAggregateOutputType | null
    _sum: FotoRecetaLenteSumAggregateOutputType | null
    _min: FotoRecetaLenteMinAggregateOutputType | null
    _max: FotoRecetaLenteMaxAggregateOutputType | null
  }

  type GetFotoRecetaLenteGroupByPayload<T extends FotoRecetaLenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotoRecetaLenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotoRecetaLenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotoRecetaLenteGroupByOutputType[P]>
            : GetScalarType<T[P], FotoRecetaLenteGroupByOutputType[P]>
        }
      >
    >


  export type FotoRecetaLenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recetaLenteId?: boolean
    foto?: boolean
    observaciones?: boolean
    receta?: boolean | RecetaLenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotoRecetaLente"]>

  export type FotoRecetaLenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recetaLenteId?: boolean
    foto?: boolean
    observaciones?: boolean
    receta?: boolean | RecetaLenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotoRecetaLente"]>

  export type FotoRecetaLenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recetaLenteId?: boolean
    foto?: boolean
    observaciones?: boolean
    receta?: boolean | RecetaLenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fotoRecetaLente"]>

  export type FotoRecetaLenteSelectScalar = {
    id?: boolean
    recetaLenteId?: boolean
    foto?: boolean
    observaciones?: boolean
  }

  export type FotoRecetaLenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recetaLenteId" | "foto" | "observaciones", ExtArgs["result"]["fotoRecetaLente"]>
  export type FotoRecetaLenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetaLenteDefaultArgs<ExtArgs>
  }
  export type FotoRecetaLenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetaLenteDefaultArgs<ExtArgs>
  }
  export type FotoRecetaLenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetaLenteDefaultArgs<ExtArgs>
  }

  export type $FotoRecetaLentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FotoRecetaLente"
    objects: {
      receta: Prisma.$RecetaLentePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recetaLenteId: number
      foto: string
      observaciones: string
    }, ExtArgs["result"]["fotoRecetaLente"]>
    composites: {}
  }

  type FotoRecetaLenteGetPayload<S extends boolean | null | undefined | FotoRecetaLenteDefaultArgs> = $Result.GetResult<Prisma.$FotoRecetaLentePayload, S>

  type FotoRecetaLenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotoRecetaLenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotoRecetaLenteCountAggregateInputType | true
    }

  export interface FotoRecetaLenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FotoRecetaLente'], meta: { name: 'FotoRecetaLente' } }
    /**
     * Find zero or one FotoRecetaLente that matches the filter.
     * @param {FotoRecetaLenteFindUniqueArgs} args - Arguments to find a FotoRecetaLente
     * @example
     * // Get one FotoRecetaLente
     * const fotoRecetaLente = await prisma.fotoRecetaLente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotoRecetaLenteFindUniqueArgs>(args: SelectSubset<T, FotoRecetaLenteFindUniqueArgs<ExtArgs>>): Prisma__FotoRecetaLenteClient<$Result.GetResult<Prisma.$FotoRecetaLentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FotoRecetaLente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotoRecetaLenteFindUniqueOrThrowArgs} args - Arguments to find a FotoRecetaLente
     * @example
     * // Get one FotoRecetaLente
     * const fotoRecetaLente = await prisma.fotoRecetaLente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotoRecetaLenteFindUniqueOrThrowArgs>(args: SelectSubset<T, FotoRecetaLenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotoRecetaLenteClient<$Result.GetResult<Prisma.$FotoRecetaLentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotoRecetaLente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaLenteFindFirstArgs} args - Arguments to find a FotoRecetaLente
     * @example
     * // Get one FotoRecetaLente
     * const fotoRecetaLente = await prisma.fotoRecetaLente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotoRecetaLenteFindFirstArgs>(args?: SelectSubset<T, FotoRecetaLenteFindFirstArgs<ExtArgs>>): Prisma__FotoRecetaLenteClient<$Result.GetResult<Prisma.$FotoRecetaLentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FotoRecetaLente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaLenteFindFirstOrThrowArgs} args - Arguments to find a FotoRecetaLente
     * @example
     * // Get one FotoRecetaLente
     * const fotoRecetaLente = await prisma.fotoRecetaLente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotoRecetaLenteFindFirstOrThrowArgs>(args?: SelectSubset<T, FotoRecetaLenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotoRecetaLenteClient<$Result.GetResult<Prisma.$FotoRecetaLentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FotoRecetaLentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaLenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FotoRecetaLentes
     * const fotoRecetaLentes = await prisma.fotoRecetaLente.findMany()
     * 
     * // Get first 10 FotoRecetaLentes
     * const fotoRecetaLentes = await prisma.fotoRecetaLente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fotoRecetaLenteWithIdOnly = await prisma.fotoRecetaLente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FotoRecetaLenteFindManyArgs>(args?: SelectSubset<T, FotoRecetaLenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoRecetaLentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FotoRecetaLente.
     * @param {FotoRecetaLenteCreateArgs} args - Arguments to create a FotoRecetaLente.
     * @example
     * // Create one FotoRecetaLente
     * const FotoRecetaLente = await prisma.fotoRecetaLente.create({
     *   data: {
     *     // ... data to create a FotoRecetaLente
     *   }
     * })
     * 
     */
    create<T extends FotoRecetaLenteCreateArgs>(args: SelectSubset<T, FotoRecetaLenteCreateArgs<ExtArgs>>): Prisma__FotoRecetaLenteClient<$Result.GetResult<Prisma.$FotoRecetaLentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FotoRecetaLentes.
     * @param {FotoRecetaLenteCreateManyArgs} args - Arguments to create many FotoRecetaLentes.
     * @example
     * // Create many FotoRecetaLentes
     * const fotoRecetaLente = await prisma.fotoRecetaLente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotoRecetaLenteCreateManyArgs>(args?: SelectSubset<T, FotoRecetaLenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FotoRecetaLentes and returns the data saved in the database.
     * @param {FotoRecetaLenteCreateManyAndReturnArgs} args - Arguments to create many FotoRecetaLentes.
     * @example
     * // Create many FotoRecetaLentes
     * const fotoRecetaLente = await prisma.fotoRecetaLente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FotoRecetaLentes and only return the `id`
     * const fotoRecetaLenteWithIdOnly = await prisma.fotoRecetaLente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FotoRecetaLenteCreateManyAndReturnArgs>(args?: SelectSubset<T, FotoRecetaLenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoRecetaLentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FotoRecetaLente.
     * @param {FotoRecetaLenteDeleteArgs} args - Arguments to delete one FotoRecetaLente.
     * @example
     * // Delete one FotoRecetaLente
     * const FotoRecetaLente = await prisma.fotoRecetaLente.delete({
     *   where: {
     *     // ... filter to delete one FotoRecetaLente
     *   }
     * })
     * 
     */
    delete<T extends FotoRecetaLenteDeleteArgs>(args: SelectSubset<T, FotoRecetaLenteDeleteArgs<ExtArgs>>): Prisma__FotoRecetaLenteClient<$Result.GetResult<Prisma.$FotoRecetaLentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FotoRecetaLente.
     * @param {FotoRecetaLenteUpdateArgs} args - Arguments to update one FotoRecetaLente.
     * @example
     * // Update one FotoRecetaLente
     * const fotoRecetaLente = await prisma.fotoRecetaLente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotoRecetaLenteUpdateArgs>(args: SelectSubset<T, FotoRecetaLenteUpdateArgs<ExtArgs>>): Prisma__FotoRecetaLenteClient<$Result.GetResult<Prisma.$FotoRecetaLentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FotoRecetaLentes.
     * @param {FotoRecetaLenteDeleteManyArgs} args - Arguments to filter FotoRecetaLentes to delete.
     * @example
     * // Delete a few FotoRecetaLentes
     * const { count } = await prisma.fotoRecetaLente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotoRecetaLenteDeleteManyArgs>(args?: SelectSubset<T, FotoRecetaLenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FotoRecetaLentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaLenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FotoRecetaLentes
     * const fotoRecetaLente = await prisma.fotoRecetaLente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotoRecetaLenteUpdateManyArgs>(args: SelectSubset<T, FotoRecetaLenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FotoRecetaLentes and returns the data updated in the database.
     * @param {FotoRecetaLenteUpdateManyAndReturnArgs} args - Arguments to update many FotoRecetaLentes.
     * @example
     * // Update many FotoRecetaLentes
     * const fotoRecetaLente = await prisma.fotoRecetaLente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FotoRecetaLentes and only return the `id`
     * const fotoRecetaLenteWithIdOnly = await prisma.fotoRecetaLente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FotoRecetaLenteUpdateManyAndReturnArgs>(args: SelectSubset<T, FotoRecetaLenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoRecetaLentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FotoRecetaLente.
     * @param {FotoRecetaLenteUpsertArgs} args - Arguments to update or create a FotoRecetaLente.
     * @example
     * // Update or create a FotoRecetaLente
     * const fotoRecetaLente = await prisma.fotoRecetaLente.upsert({
     *   create: {
     *     // ... data to create a FotoRecetaLente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FotoRecetaLente we want to update
     *   }
     * })
     */
    upsert<T extends FotoRecetaLenteUpsertArgs>(args: SelectSubset<T, FotoRecetaLenteUpsertArgs<ExtArgs>>): Prisma__FotoRecetaLenteClient<$Result.GetResult<Prisma.$FotoRecetaLentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FotoRecetaLentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaLenteCountArgs} args - Arguments to filter FotoRecetaLentes to count.
     * @example
     * // Count the number of FotoRecetaLentes
     * const count = await prisma.fotoRecetaLente.count({
     *   where: {
     *     // ... the filter for the FotoRecetaLentes we want to count
     *   }
     * })
    **/
    count<T extends FotoRecetaLenteCountArgs>(
      args?: Subset<T, FotoRecetaLenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotoRecetaLenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FotoRecetaLente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaLenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotoRecetaLenteAggregateArgs>(args: Subset<T, FotoRecetaLenteAggregateArgs>): Prisma.PrismaPromise<GetFotoRecetaLenteAggregateType<T>>

    /**
     * Group by FotoRecetaLente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoRecetaLenteGroupByArgs} args - Group by arguments.
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
      T extends FotoRecetaLenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotoRecetaLenteGroupByArgs['orderBy'] }
        : { orderBy?: FotoRecetaLenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FotoRecetaLenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotoRecetaLenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FotoRecetaLente model
   */
  readonly fields: FotoRecetaLenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FotoRecetaLente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotoRecetaLenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receta<T extends RecetaLenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecetaLenteDefaultArgs<ExtArgs>>): Prisma__RecetaLenteClient<$Result.GetResult<Prisma.$RecetaLentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FotoRecetaLente model
   */
  interface FotoRecetaLenteFieldRefs {
    readonly id: FieldRef<"FotoRecetaLente", 'Int'>
    readonly recetaLenteId: FieldRef<"FotoRecetaLente", 'Int'>
    readonly foto: FieldRef<"FotoRecetaLente", 'String'>
    readonly observaciones: FieldRef<"FotoRecetaLente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FotoRecetaLente findUnique
   */
  export type FotoRecetaLenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoRecetaLente
     */
    select?: FotoRecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoRecetaLente
     */
    omit?: FotoRecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaLenteInclude<ExtArgs> | null
    /**
     * Filter, which FotoRecetaLente to fetch.
     */
    where: FotoRecetaLenteWhereUniqueInput
  }

  /**
   * FotoRecetaLente findUniqueOrThrow
   */
  export type FotoRecetaLenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoRecetaLente
     */
    select?: FotoRecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoRecetaLente
     */
    omit?: FotoRecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaLenteInclude<ExtArgs> | null
    /**
     * Filter, which FotoRecetaLente to fetch.
     */
    where: FotoRecetaLenteWhereUniqueInput
  }

  /**
   * FotoRecetaLente findFirst
   */
  export type FotoRecetaLenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoRecetaLente
     */
    select?: FotoRecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoRecetaLente
     */
    omit?: FotoRecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaLenteInclude<ExtArgs> | null
    /**
     * Filter, which FotoRecetaLente to fetch.
     */
    where?: FotoRecetaLenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoRecetaLentes to fetch.
     */
    orderBy?: FotoRecetaLenteOrderByWithRelationInput | FotoRecetaLenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotoRecetaLentes.
     */
    cursor?: FotoRecetaLenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoRecetaLentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoRecetaLentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotoRecetaLentes.
     */
    distinct?: FotoRecetaLenteScalarFieldEnum | FotoRecetaLenteScalarFieldEnum[]
  }

  /**
   * FotoRecetaLente findFirstOrThrow
   */
  export type FotoRecetaLenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoRecetaLente
     */
    select?: FotoRecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoRecetaLente
     */
    omit?: FotoRecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaLenteInclude<ExtArgs> | null
    /**
     * Filter, which FotoRecetaLente to fetch.
     */
    where?: FotoRecetaLenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoRecetaLentes to fetch.
     */
    orderBy?: FotoRecetaLenteOrderByWithRelationInput | FotoRecetaLenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FotoRecetaLentes.
     */
    cursor?: FotoRecetaLenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoRecetaLentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoRecetaLentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FotoRecetaLentes.
     */
    distinct?: FotoRecetaLenteScalarFieldEnum | FotoRecetaLenteScalarFieldEnum[]
  }

  /**
   * FotoRecetaLente findMany
   */
  export type FotoRecetaLenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoRecetaLente
     */
    select?: FotoRecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoRecetaLente
     */
    omit?: FotoRecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaLenteInclude<ExtArgs> | null
    /**
     * Filter, which FotoRecetaLentes to fetch.
     */
    where?: FotoRecetaLenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FotoRecetaLentes to fetch.
     */
    orderBy?: FotoRecetaLenteOrderByWithRelationInput | FotoRecetaLenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FotoRecetaLentes.
     */
    cursor?: FotoRecetaLenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FotoRecetaLentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FotoRecetaLentes.
     */
    skip?: number
    distinct?: FotoRecetaLenteScalarFieldEnum | FotoRecetaLenteScalarFieldEnum[]
  }

  /**
   * FotoRecetaLente create
   */
  export type FotoRecetaLenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoRecetaLente
     */
    select?: FotoRecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoRecetaLente
     */
    omit?: FotoRecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaLenteInclude<ExtArgs> | null
    /**
     * The data needed to create a FotoRecetaLente.
     */
    data: XOR<FotoRecetaLenteCreateInput, FotoRecetaLenteUncheckedCreateInput>
  }

  /**
   * FotoRecetaLente createMany
   */
  export type FotoRecetaLenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FotoRecetaLentes.
     */
    data: FotoRecetaLenteCreateManyInput | FotoRecetaLenteCreateManyInput[]
  }

  /**
   * FotoRecetaLente createManyAndReturn
   */
  export type FotoRecetaLenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoRecetaLente
     */
    select?: FotoRecetaLenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FotoRecetaLente
     */
    omit?: FotoRecetaLenteOmit<ExtArgs> | null
    /**
     * The data used to create many FotoRecetaLentes.
     */
    data: FotoRecetaLenteCreateManyInput | FotoRecetaLenteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaLenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FotoRecetaLente update
   */
  export type FotoRecetaLenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoRecetaLente
     */
    select?: FotoRecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoRecetaLente
     */
    omit?: FotoRecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaLenteInclude<ExtArgs> | null
    /**
     * The data needed to update a FotoRecetaLente.
     */
    data: XOR<FotoRecetaLenteUpdateInput, FotoRecetaLenteUncheckedUpdateInput>
    /**
     * Choose, which FotoRecetaLente to update.
     */
    where: FotoRecetaLenteWhereUniqueInput
  }

  /**
   * FotoRecetaLente updateMany
   */
  export type FotoRecetaLenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FotoRecetaLentes.
     */
    data: XOR<FotoRecetaLenteUpdateManyMutationInput, FotoRecetaLenteUncheckedUpdateManyInput>
    /**
     * Filter which FotoRecetaLentes to update
     */
    where?: FotoRecetaLenteWhereInput
    /**
     * Limit how many FotoRecetaLentes to update.
     */
    limit?: number
  }

  /**
   * FotoRecetaLente updateManyAndReturn
   */
  export type FotoRecetaLenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoRecetaLente
     */
    select?: FotoRecetaLenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FotoRecetaLente
     */
    omit?: FotoRecetaLenteOmit<ExtArgs> | null
    /**
     * The data used to update FotoRecetaLentes.
     */
    data: XOR<FotoRecetaLenteUpdateManyMutationInput, FotoRecetaLenteUncheckedUpdateManyInput>
    /**
     * Filter which FotoRecetaLentes to update
     */
    where?: FotoRecetaLenteWhereInput
    /**
     * Limit how many FotoRecetaLentes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaLenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FotoRecetaLente upsert
   */
  export type FotoRecetaLenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoRecetaLente
     */
    select?: FotoRecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoRecetaLente
     */
    omit?: FotoRecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaLenteInclude<ExtArgs> | null
    /**
     * The filter to search for the FotoRecetaLente to update in case it exists.
     */
    where: FotoRecetaLenteWhereUniqueInput
    /**
     * In case the FotoRecetaLente found by the `where` argument doesn't exist, create a new FotoRecetaLente with this data.
     */
    create: XOR<FotoRecetaLenteCreateInput, FotoRecetaLenteUncheckedCreateInput>
    /**
     * In case the FotoRecetaLente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotoRecetaLenteUpdateInput, FotoRecetaLenteUncheckedUpdateInput>
  }

  /**
   * FotoRecetaLente delete
   */
  export type FotoRecetaLenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoRecetaLente
     */
    select?: FotoRecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoRecetaLente
     */
    omit?: FotoRecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaLenteInclude<ExtArgs> | null
    /**
     * Filter which FotoRecetaLente to delete.
     */
    where: FotoRecetaLenteWhereUniqueInput
  }

  /**
   * FotoRecetaLente deleteMany
   */
  export type FotoRecetaLenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FotoRecetaLentes to delete
     */
    where?: FotoRecetaLenteWhereInput
    /**
     * Limit how many FotoRecetaLentes to delete.
     */
    limit?: number
  }

  /**
   * FotoRecetaLente without action
   */
  export type FotoRecetaLenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FotoRecetaLente
     */
    select?: FotoRecetaLenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FotoRecetaLente
     */
    omit?: FotoRecetaLenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoRecetaLenteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PacienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    creadoEn: 'creadoEn'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const RecetaScalarFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    fecha: 'fecha'
  };

  export type RecetaScalarFieldEnum = (typeof RecetaScalarFieldEnum)[keyof typeof RecetaScalarFieldEnum]


  export const FotoRecetaScalarFieldEnum: {
    id: 'id',
    recetaId: 'recetaId',
    foto: 'foto',
    observaciones: 'observaciones'
  };

  export type FotoRecetaScalarFieldEnum = (typeof FotoRecetaScalarFieldEnum)[keyof typeof FotoRecetaScalarFieldEnum]


  export const PacienteLenteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    creadoEn: 'creadoEn'
  };

  export type PacienteLenteScalarFieldEnum = (typeof PacienteLenteScalarFieldEnum)[keyof typeof PacienteLenteScalarFieldEnum]


  export const RecetaLenteScalarFieldEnum: {
    id: 'id',
    pacienteLenteId: 'pacienteLenteId',
    fecha: 'fecha'
  };

  export type RecetaLenteScalarFieldEnum = (typeof RecetaLenteScalarFieldEnum)[keyof typeof RecetaLenteScalarFieldEnum]


  export const FotoRecetaLenteScalarFieldEnum: {
    id: 'id',
    recetaLenteId: 'recetaLenteId',
    foto: 'foto',
    observaciones: 'observaciones'
  };

  export type FotoRecetaLenteScalarFieldEnum = (typeof FotoRecetaLenteScalarFieldEnum)[keyof typeof FotoRecetaLenteScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: IntFilter<"Paciente"> | number
    nombre?: StringFilter<"Paciente"> | string
    creadoEn?: DateTimeFilter<"Paciente"> | Date | string
    recetas?: RecetaListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
    recetas?: RecetaOrderByRelationAggregateInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    nombre?: StringFilter<"Paciente"> | string
    creadoEn?: DateTimeFilter<"Paciente"> | Date | string
    recetas?: RecetaListRelationFilter
  }, "id">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paciente"> | number
    nombre?: StringWithAggregatesFilter<"Paciente"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
  }

  export type RecetaWhereInput = {
    AND?: RecetaWhereInput | RecetaWhereInput[]
    OR?: RecetaWhereInput[]
    NOT?: RecetaWhereInput | RecetaWhereInput[]
    id?: IntFilter<"Receta"> | number
    pacienteId?: IntFilter<"Receta"> | number
    fecha?: DateTimeFilter<"Receta"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    fotos?: FotoRecetaListRelationFilter
  }

  export type RecetaOrderByWithRelationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    fecha?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    fotos?: FotoRecetaOrderByRelationAggregateInput
  }

  export type RecetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecetaWhereInput | RecetaWhereInput[]
    OR?: RecetaWhereInput[]
    NOT?: RecetaWhereInput | RecetaWhereInput[]
    pacienteId?: IntFilter<"Receta"> | number
    fecha?: DateTimeFilter<"Receta"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    fotos?: FotoRecetaListRelationFilter
  }, "id">

  export type RecetaOrderByWithAggregationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    fecha?: SortOrder
    _count?: RecetaCountOrderByAggregateInput
    _avg?: RecetaAvgOrderByAggregateInput
    _max?: RecetaMaxOrderByAggregateInput
    _min?: RecetaMinOrderByAggregateInput
    _sum?: RecetaSumOrderByAggregateInput
  }

  export type RecetaScalarWhereWithAggregatesInput = {
    AND?: RecetaScalarWhereWithAggregatesInput | RecetaScalarWhereWithAggregatesInput[]
    OR?: RecetaScalarWhereWithAggregatesInput[]
    NOT?: RecetaScalarWhereWithAggregatesInput | RecetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Receta"> | number
    pacienteId?: IntWithAggregatesFilter<"Receta"> | number
    fecha?: DateTimeWithAggregatesFilter<"Receta"> | Date | string
  }

  export type FotoRecetaWhereInput = {
    AND?: FotoRecetaWhereInput | FotoRecetaWhereInput[]
    OR?: FotoRecetaWhereInput[]
    NOT?: FotoRecetaWhereInput | FotoRecetaWhereInput[]
    id?: IntFilter<"FotoReceta"> | number
    recetaId?: IntFilter<"FotoReceta"> | number
    foto?: StringFilter<"FotoReceta"> | string
    observaciones?: StringFilter<"FotoReceta"> | string
    receta?: XOR<RecetaScalarRelationFilter, RecetaWhereInput>
  }

  export type FotoRecetaOrderByWithRelationInput = {
    id?: SortOrder
    recetaId?: SortOrder
    foto?: SortOrder
    observaciones?: SortOrder
    receta?: RecetaOrderByWithRelationInput
  }

  export type FotoRecetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FotoRecetaWhereInput | FotoRecetaWhereInput[]
    OR?: FotoRecetaWhereInput[]
    NOT?: FotoRecetaWhereInput | FotoRecetaWhereInput[]
    recetaId?: IntFilter<"FotoReceta"> | number
    foto?: StringFilter<"FotoReceta"> | string
    observaciones?: StringFilter<"FotoReceta"> | string
    receta?: XOR<RecetaScalarRelationFilter, RecetaWhereInput>
  }, "id">

  export type FotoRecetaOrderByWithAggregationInput = {
    id?: SortOrder
    recetaId?: SortOrder
    foto?: SortOrder
    observaciones?: SortOrder
    _count?: FotoRecetaCountOrderByAggregateInput
    _avg?: FotoRecetaAvgOrderByAggregateInput
    _max?: FotoRecetaMaxOrderByAggregateInput
    _min?: FotoRecetaMinOrderByAggregateInput
    _sum?: FotoRecetaSumOrderByAggregateInput
  }

  export type FotoRecetaScalarWhereWithAggregatesInput = {
    AND?: FotoRecetaScalarWhereWithAggregatesInput | FotoRecetaScalarWhereWithAggregatesInput[]
    OR?: FotoRecetaScalarWhereWithAggregatesInput[]
    NOT?: FotoRecetaScalarWhereWithAggregatesInput | FotoRecetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FotoReceta"> | number
    recetaId?: IntWithAggregatesFilter<"FotoReceta"> | number
    foto?: StringWithAggregatesFilter<"FotoReceta"> | string
    observaciones?: StringWithAggregatesFilter<"FotoReceta"> | string
  }

  export type PacienteLenteWhereInput = {
    AND?: PacienteLenteWhereInput | PacienteLenteWhereInput[]
    OR?: PacienteLenteWhereInput[]
    NOT?: PacienteLenteWhereInput | PacienteLenteWhereInput[]
    id?: IntFilter<"PacienteLente"> | number
    nombre?: StringFilter<"PacienteLente"> | string
    creadoEn?: DateTimeFilter<"PacienteLente"> | Date | string
    recetas?: RecetaLenteListRelationFilter
  }

  export type PacienteLenteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
    recetas?: RecetaLenteOrderByRelationAggregateInput
  }

  export type PacienteLenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PacienteLenteWhereInput | PacienteLenteWhereInput[]
    OR?: PacienteLenteWhereInput[]
    NOT?: PacienteLenteWhereInput | PacienteLenteWhereInput[]
    nombre?: StringFilter<"PacienteLente"> | string
    creadoEn?: DateTimeFilter<"PacienteLente"> | Date | string
    recetas?: RecetaLenteListRelationFilter
  }, "id">

  export type PacienteLenteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
    _count?: PacienteLenteCountOrderByAggregateInput
    _avg?: PacienteLenteAvgOrderByAggregateInput
    _max?: PacienteLenteMaxOrderByAggregateInput
    _min?: PacienteLenteMinOrderByAggregateInput
    _sum?: PacienteLenteSumOrderByAggregateInput
  }

  export type PacienteLenteScalarWhereWithAggregatesInput = {
    AND?: PacienteLenteScalarWhereWithAggregatesInput | PacienteLenteScalarWhereWithAggregatesInput[]
    OR?: PacienteLenteScalarWhereWithAggregatesInput[]
    NOT?: PacienteLenteScalarWhereWithAggregatesInput | PacienteLenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PacienteLente"> | number
    nombre?: StringWithAggregatesFilter<"PacienteLente"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"PacienteLente"> | Date | string
  }

  export type RecetaLenteWhereInput = {
    AND?: RecetaLenteWhereInput | RecetaLenteWhereInput[]
    OR?: RecetaLenteWhereInput[]
    NOT?: RecetaLenteWhereInput | RecetaLenteWhereInput[]
    id?: IntFilter<"RecetaLente"> | number
    pacienteLenteId?: IntFilter<"RecetaLente"> | number
    fecha?: DateTimeFilter<"RecetaLente"> | Date | string
    paciente?: XOR<PacienteLenteScalarRelationFilter, PacienteLenteWhereInput>
    fotos?: FotoRecetaLenteListRelationFilter
  }

  export type RecetaLenteOrderByWithRelationInput = {
    id?: SortOrder
    pacienteLenteId?: SortOrder
    fecha?: SortOrder
    paciente?: PacienteLenteOrderByWithRelationInput
    fotos?: FotoRecetaLenteOrderByRelationAggregateInput
  }

  export type RecetaLenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecetaLenteWhereInput | RecetaLenteWhereInput[]
    OR?: RecetaLenteWhereInput[]
    NOT?: RecetaLenteWhereInput | RecetaLenteWhereInput[]
    pacienteLenteId?: IntFilter<"RecetaLente"> | number
    fecha?: DateTimeFilter<"RecetaLente"> | Date | string
    paciente?: XOR<PacienteLenteScalarRelationFilter, PacienteLenteWhereInput>
    fotos?: FotoRecetaLenteListRelationFilter
  }, "id">

  export type RecetaLenteOrderByWithAggregationInput = {
    id?: SortOrder
    pacienteLenteId?: SortOrder
    fecha?: SortOrder
    _count?: RecetaLenteCountOrderByAggregateInput
    _avg?: RecetaLenteAvgOrderByAggregateInput
    _max?: RecetaLenteMaxOrderByAggregateInput
    _min?: RecetaLenteMinOrderByAggregateInput
    _sum?: RecetaLenteSumOrderByAggregateInput
  }

  export type RecetaLenteScalarWhereWithAggregatesInput = {
    AND?: RecetaLenteScalarWhereWithAggregatesInput | RecetaLenteScalarWhereWithAggregatesInput[]
    OR?: RecetaLenteScalarWhereWithAggregatesInput[]
    NOT?: RecetaLenteScalarWhereWithAggregatesInput | RecetaLenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RecetaLente"> | number
    pacienteLenteId?: IntWithAggregatesFilter<"RecetaLente"> | number
    fecha?: DateTimeWithAggregatesFilter<"RecetaLente"> | Date | string
  }

  export type FotoRecetaLenteWhereInput = {
    AND?: FotoRecetaLenteWhereInput | FotoRecetaLenteWhereInput[]
    OR?: FotoRecetaLenteWhereInput[]
    NOT?: FotoRecetaLenteWhereInput | FotoRecetaLenteWhereInput[]
    id?: IntFilter<"FotoRecetaLente"> | number
    recetaLenteId?: IntFilter<"FotoRecetaLente"> | number
    foto?: StringFilter<"FotoRecetaLente"> | string
    observaciones?: StringFilter<"FotoRecetaLente"> | string
    receta?: XOR<RecetaLenteScalarRelationFilter, RecetaLenteWhereInput>
  }

  export type FotoRecetaLenteOrderByWithRelationInput = {
    id?: SortOrder
    recetaLenteId?: SortOrder
    foto?: SortOrder
    observaciones?: SortOrder
    receta?: RecetaLenteOrderByWithRelationInput
  }

  export type FotoRecetaLenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FotoRecetaLenteWhereInput | FotoRecetaLenteWhereInput[]
    OR?: FotoRecetaLenteWhereInput[]
    NOT?: FotoRecetaLenteWhereInput | FotoRecetaLenteWhereInput[]
    recetaLenteId?: IntFilter<"FotoRecetaLente"> | number
    foto?: StringFilter<"FotoRecetaLente"> | string
    observaciones?: StringFilter<"FotoRecetaLente"> | string
    receta?: XOR<RecetaLenteScalarRelationFilter, RecetaLenteWhereInput>
  }, "id">

  export type FotoRecetaLenteOrderByWithAggregationInput = {
    id?: SortOrder
    recetaLenteId?: SortOrder
    foto?: SortOrder
    observaciones?: SortOrder
    _count?: FotoRecetaLenteCountOrderByAggregateInput
    _avg?: FotoRecetaLenteAvgOrderByAggregateInput
    _max?: FotoRecetaLenteMaxOrderByAggregateInput
    _min?: FotoRecetaLenteMinOrderByAggregateInput
    _sum?: FotoRecetaLenteSumOrderByAggregateInput
  }

  export type FotoRecetaLenteScalarWhereWithAggregatesInput = {
    AND?: FotoRecetaLenteScalarWhereWithAggregatesInput | FotoRecetaLenteScalarWhereWithAggregatesInput[]
    OR?: FotoRecetaLenteScalarWhereWithAggregatesInput[]
    NOT?: FotoRecetaLenteScalarWhereWithAggregatesInput | FotoRecetaLenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FotoRecetaLente"> | number
    recetaLenteId?: IntWithAggregatesFilter<"FotoRecetaLente"> | number
    foto?: StringWithAggregatesFilter<"FotoRecetaLente"> | string
    observaciones?: StringWithAggregatesFilter<"FotoRecetaLente"> | string
  }

  export type PacienteCreateInput = {
    nombre: string
    creadoEn?: Date | string
    recetas?: RecetaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
    recetas?: RecetaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    recetas?: RecetaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    recetas?: RecetaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
  }

  export type PacienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecetaCreateInput = {
    fecha?: Date | string
    paciente: PacienteCreateNestedOneWithoutRecetasInput
    fotos?: FotoRecetaCreateNestedManyWithoutRecetaInput
  }

  export type RecetaUncheckedCreateInput = {
    id?: number
    pacienteId: number
    fecha?: Date | string
    fotos?: FotoRecetaUncheckedCreateNestedManyWithoutRecetaInput
  }

  export type RecetaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutRecetasNestedInput
    fotos?: FotoRecetaUpdateManyWithoutRecetaNestedInput
  }

  export type RecetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: FotoRecetaUncheckedUpdateManyWithoutRecetaNestedInput
  }

  export type RecetaCreateManyInput = {
    id?: number
    pacienteId: number
    fecha?: Date | string
  }

  export type RecetaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoRecetaCreateInput = {
    foto: string
    observaciones?: string
    receta: RecetaCreateNestedOneWithoutFotosInput
  }

  export type FotoRecetaUncheckedCreateInput = {
    id?: number
    recetaId: number
    foto: string
    observaciones?: string
  }

  export type FotoRecetaUpdateInput = {
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
    receta?: RecetaUpdateOneRequiredWithoutFotosNestedInput
  }

  export type FotoRecetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recetaId?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
  }

  export type FotoRecetaCreateManyInput = {
    id?: number
    recetaId: number
    foto: string
    observaciones?: string
  }

  export type FotoRecetaUpdateManyMutationInput = {
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
  }

  export type FotoRecetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recetaId?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteLenteCreateInput = {
    nombre: string
    creadoEn?: Date | string
    recetas?: RecetaLenteCreateNestedManyWithoutPacienteInput
  }

  export type PacienteLenteUncheckedCreateInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
    recetas?: RecetaLenteUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteLenteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    recetas?: RecetaLenteUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteLenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    recetas?: RecetaLenteUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteLenteCreateManyInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
  }

  export type PacienteLenteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteLenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecetaLenteCreateInput = {
    fecha?: Date | string
    paciente: PacienteLenteCreateNestedOneWithoutRecetasInput
    fotos?: FotoRecetaLenteCreateNestedManyWithoutRecetaInput
  }

  export type RecetaLenteUncheckedCreateInput = {
    id?: number
    pacienteLenteId: number
    fecha?: Date | string
    fotos?: FotoRecetaLenteUncheckedCreateNestedManyWithoutRecetaInput
  }

  export type RecetaLenteUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteLenteUpdateOneRequiredWithoutRecetasNestedInput
    fotos?: FotoRecetaLenteUpdateManyWithoutRecetaNestedInput
  }

  export type RecetaLenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteLenteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: FotoRecetaLenteUncheckedUpdateManyWithoutRecetaNestedInput
  }

  export type RecetaLenteCreateManyInput = {
    id?: number
    pacienteLenteId: number
    fecha?: Date | string
  }

  export type RecetaLenteUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecetaLenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteLenteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoRecetaLenteCreateInput = {
    foto: string
    observaciones?: string
    receta: RecetaLenteCreateNestedOneWithoutFotosInput
  }

  export type FotoRecetaLenteUncheckedCreateInput = {
    id?: number
    recetaLenteId: number
    foto: string
    observaciones?: string
  }

  export type FotoRecetaLenteUpdateInput = {
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
    receta?: RecetaLenteUpdateOneRequiredWithoutFotosNestedInput
  }

  export type FotoRecetaLenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recetaLenteId?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
  }

  export type FotoRecetaLenteCreateManyInput = {
    id?: number
    recetaLenteId: number
    foto: string
    observaciones?: string
  }

  export type FotoRecetaLenteUpdateManyMutationInput = {
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
  }

  export type FotoRecetaLenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recetaLenteId?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
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

  export type RecetaListRelationFilter = {
    every?: RecetaWhereInput
    some?: RecetaWhereInput
    none?: RecetaWhereInput
  }

  export type RecetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
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

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type FotoRecetaListRelationFilter = {
    every?: FotoRecetaWhereInput
    some?: FotoRecetaWhereInput
    none?: FotoRecetaWhereInput
  }

  export type FotoRecetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecetaCountOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    fecha?: SortOrder
  }

  export type RecetaAvgOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
  }

  export type RecetaMaxOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    fecha?: SortOrder
  }

  export type RecetaMinOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    fecha?: SortOrder
  }

  export type RecetaSumOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
  }

  export type RecetaScalarRelationFilter = {
    is?: RecetaWhereInput
    isNot?: RecetaWhereInput
  }

  export type FotoRecetaCountOrderByAggregateInput = {
    id?: SortOrder
    recetaId?: SortOrder
    foto?: SortOrder
    observaciones?: SortOrder
  }

  export type FotoRecetaAvgOrderByAggregateInput = {
    id?: SortOrder
    recetaId?: SortOrder
  }

  export type FotoRecetaMaxOrderByAggregateInput = {
    id?: SortOrder
    recetaId?: SortOrder
    foto?: SortOrder
    observaciones?: SortOrder
  }

  export type FotoRecetaMinOrderByAggregateInput = {
    id?: SortOrder
    recetaId?: SortOrder
    foto?: SortOrder
    observaciones?: SortOrder
  }

  export type FotoRecetaSumOrderByAggregateInput = {
    id?: SortOrder
    recetaId?: SortOrder
  }

  export type RecetaLenteListRelationFilter = {
    every?: RecetaLenteWhereInput
    some?: RecetaLenteWhereInput
    none?: RecetaLenteWhereInput
  }

  export type RecetaLenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteLenteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type PacienteLenteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PacienteLenteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type PacienteLenteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creadoEn?: SortOrder
  }

  export type PacienteLenteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PacienteLenteScalarRelationFilter = {
    is?: PacienteLenteWhereInput
    isNot?: PacienteLenteWhereInput
  }

  export type FotoRecetaLenteListRelationFilter = {
    every?: FotoRecetaLenteWhereInput
    some?: FotoRecetaLenteWhereInput
    none?: FotoRecetaLenteWhereInput
  }

  export type FotoRecetaLenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecetaLenteCountOrderByAggregateInput = {
    id?: SortOrder
    pacienteLenteId?: SortOrder
    fecha?: SortOrder
  }

  export type RecetaLenteAvgOrderByAggregateInput = {
    id?: SortOrder
    pacienteLenteId?: SortOrder
  }

  export type RecetaLenteMaxOrderByAggregateInput = {
    id?: SortOrder
    pacienteLenteId?: SortOrder
    fecha?: SortOrder
  }

  export type RecetaLenteMinOrderByAggregateInput = {
    id?: SortOrder
    pacienteLenteId?: SortOrder
    fecha?: SortOrder
  }

  export type RecetaLenteSumOrderByAggregateInput = {
    id?: SortOrder
    pacienteLenteId?: SortOrder
  }

  export type RecetaLenteScalarRelationFilter = {
    is?: RecetaLenteWhereInput
    isNot?: RecetaLenteWhereInput
  }

  export type FotoRecetaLenteCountOrderByAggregateInput = {
    id?: SortOrder
    recetaLenteId?: SortOrder
    foto?: SortOrder
    observaciones?: SortOrder
  }

  export type FotoRecetaLenteAvgOrderByAggregateInput = {
    id?: SortOrder
    recetaLenteId?: SortOrder
  }

  export type FotoRecetaLenteMaxOrderByAggregateInput = {
    id?: SortOrder
    recetaLenteId?: SortOrder
    foto?: SortOrder
    observaciones?: SortOrder
  }

  export type FotoRecetaLenteMinOrderByAggregateInput = {
    id?: SortOrder
    recetaLenteId?: SortOrder
    foto?: SortOrder
    observaciones?: SortOrder
  }

  export type FotoRecetaLenteSumOrderByAggregateInput = {
    id?: SortOrder
    recetaLenteId?: SortOrder
  }

  export type RecetaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<RecetaCreateWithoutPacienteInput, RecetaUncheckedCreateWithoutPacienteInput> | RecetaCreateWithoutPacienteInput[] | RecetaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RecetaCreateOrConnectWithoutPacienteInput | RecetaCreateOrConnectWithoutPacienteInput[]
    createMany?: RecetaCreateManyPacienteInputEnvelope
    connect?: RecetaWhereUniqueInput | RecetaWhereUniqueInput[]
  }

  export type RecetaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<RecetaCreateWithoutPacienteInput, RecetaUncheckedCreateWithoutPacienteInput> | RecetaCreateWithoutPacienteInput[] | RecetaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RecetaCreateOrConnectWithoutPacienteInput | RecetaCreateOrConnectWithoutPacienteInput[]
    createMany?: RecetaCreateManyPacienteInputEnvelope
    connect?: RecetaWhereUniqueInput | RecetaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RecetaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<RecetaCreateWithoutPacienteInput, RecetaUncheckedCreateWithoutPacienteInput> | RecetaCreateWithoutPacienteInput[] | RecetaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RecetaCreateOrConnectWithoutPacienteInput | RecetaCreateOrConnectWithoutPacienteInput[]
    upsert?: RecetaUpsertWithWhereUniqueWithoutPacienteInput | RecetaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: RecetaCreateManyPacienteInputEnvelope
    set?: RecetaWhereUniqueInput | RecetaWhereUniqueInput[]
    disconnect?: RecetaWhereUniqueInput | RecetaWhereUniqueInput[]
    delete?: RecetaWhereUniqueInput | RecetaWhereUniqueInput[]
    connect?: RecetaWhereUniqueInput | RecetaWhereUniqueInput[]
    update?: RecetaUpdateWithWhereUniqueWithoutPacienteInput | RecetaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: RecetaUpdateManyWithWhereWithoutPacienteInput | RecetaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: RecetaScalarWhereInput | RecetaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecetaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<RecetaCreateWithoutPacienteInput, RecetaUncheckedCreateWithoutPacienteInput> | RecetaCreateWithoutPacienteInput[] | RecetaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RecetaCreateOrConnectWithoutPacienteInput | RecetaCreateOrConnectWithoutPacienteInput[]
    upsert?: RecetaUpsertWithWhereUniqueWithoutPacienteInput | RecetaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: RecetaCreateManyPacienteInputEnvelope
    set?: RecetaWhereUniqueInput | RecetaWhereUniqueInput[]
    disconnect?: RecetaWhereUniqueInput | RecetaWhereUniqueInput[]
    delete?: RecetaWhereUniqueInput | RecetaWhereUniqueInput[]
    connect?: RecetaWhereUniqueInput | RecetaWhereUniqueInput[]
    update?: RecetaUpdateWithWhereUniqueWithoutPacienteInput | RecetaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: RecetaUpdateManyWithWhereWithoutPacienteInput | RecetaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: RecetaScalarWhereInput | RecetaScalarWhereInput[]
  }

  export type PacienteCreateNestedOneWithoutRecetasInput = {
    create?: XOR<PacienteCreateWithoutRecetasInput, PacienteUncheckedCreateWithoutRecetasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutRecetasInput
    connect?: PacienteWhereUniqueInput
  }

  export type FotoRecetaCreateNestedManyWithoutRecetaInput = {
    create?: XOR<FotoRecetaCreateWithoutRecetaInput, FotoRecetaUncheckedCreateWithoutRecetaInput> | FotoRecetaCreateWithoutRecetaInput[] | FotoRecetaUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: FotoRecetaCreateOrConnectWithoutRecetaInput | FotoRecetaCreateOrConnectWithoutRecetaInput[]
    createMany?: FotoRecetaCreateManyRecetaInputEnvelope
    connect?: FotoRecetaWhereUniqueInput | FotoRecetaWhereUniqueInput[]
  }

  export type FotoRecetaUncheckedCreateNestedManyWithoutRecetaInput = {
    create?: XOR<FotoRecetaCreateWithoutRecetaInput, FotoRecetaUncheckedCreateWithoutRecetaInput> | FotoRecetaCreateWithoutRecetaInput[] | FotoRecetaUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: FotoRecetaCreateOrConnectWithoutRecetaInput | FotoRecetaCreateOrConnectWithoutRecetaInput[]
    createMany?: FotoRecetaCreateManyRecetaInputEnvelope
    connect?: FotoRecetaWhereUniqueInput | FotoRecetaWhereUniqueInput[]
  }

  export type PacienteUpdateOneRequiredWithoutRecetasNestedInput = {
    create?: XOR<PacienteCreateWithoutRecetasInput, PacienteUncheckedCreateWithoutRecetasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutRecetasInput
    upsert?: PacienteUpsertWithoutRecetasInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutRecetasInput, PacienteUpdateWithoutRecetasInput>, PacienteUncheckedUpdateWithoutRecetasInput>
  }

  export type FotoRecetaUpdateManyWithoutRecetaNestedInput = {
    create?: XOR<FotoRecetaCreateWithoutRecetaInput, FotoRecetaUncheckedCreateWithoutRecetaInput> | FotoRecetaCreateWithoutRecetaInput[] | FotoRecetaUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: FotoRecetaCreateOrConnectWithoutRecetaInput | FotoRecetaCreateOrConnectWithoutRecetaInput[]
    upsert?: FotoRecetaUpsertWithWhereUniqueWithoutRecetaInput | FotoRecetaUpsertWithWhereUniqueWithoutRecetaInput[]
    createMany?: FotoRecetaCreateManyRecetaInputEnvelope
    set?: FotoRecetaWhereUniqueInput | FotoRecetaWhereUniqueInput[]
    disconnect?: FotoRecetaWhereUniqueInput | FotoRecetaWhereUniqueInput[]
    delete?: FotoRecetaWhereUniqueInput | FotoRecetaWhereUniqueInput[]
    connect?: FotoRecetaWhereUniqueInput | FotoRecetaWhereUniqueInput[]
    update?: FotoRecetaUpdateWithWhereUniqueWithoutRecetaInput | FotoRecetaUpdateWithWhereUniqueWithoutRecetaInput[]
    updateMany?: FotoRecetaUpdateManyWithWhereWithoutRecetaInput | FotoRecetaUpdateManyWithWhereWithoutRecetaInput[]
    deleteMany?: FotoRecetaScalarWhereInput | FotoRecetaScalarWhereInput[]
  }

  export type FotoRecetaUncheckedUpdateManyWithoutRecetaNestedInput = {
    create?: XOR<FotoRecetaCreateWithoutRecetaInput, FotoRecetaUncheckedCreateWithoutRecetaInput> | FotoRecetaCreateWithoutRecetaInput[] | FotoRecetaUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: FotoRecetaCreateOrConnectWithoutRecetaInput | FotoRecetaCreateOrConnectWithoutRecetaInput[]
    upsert?: FotoRecetaUpsertWithWhereUniqueWithoutRecetaInput | FotoRecetaUpsertWithWhereUniqueWithoutRecetaInput[]
    createMany?: FotoRecetaCreateManyRecetaInputEnvelope
    set?: FotoRecetaWhereUniqueInput | FotoRecetaWhereUniqueInput[]
    disconnect?: FotoRecetaWhereUniqueInput | FotoRecetaWhereUniqueInput[]
    delete?: FotoRecetaWhereUniqueInput | FotoRecetaWhereUniqueInput[]
    connect?: FotoRecetaWhereUniqueInput | FotoRecetaWhereUniqueInput[]
    update?: FotoRecetaUpdateWithWhereUniqueWithoutRecetaInput | FotoRecetaUpdateWithWhereUniqueWithoutRecetaInput[]
    updateMany?: FotoRecetaUpdateManyWithWhereWithoutRecetaInput | FotoRecetaUpdateManyWithWhereWithoutRecetaInput[]
    deleteMany?: FotoRecetaScalarWhereInput | FotoRecetaScalarWhereInput[]
  }

  export type RecetaCreateNestedOneWithoutFotosInput = {
    create?: XOR<RecetaCreateWithoutFotosInput, RecetaUncheckedCreateWithoutFotosInput>
    connectOrCreate?: RecetaCreateOrConnectWithoutFotosInput
    connect?: RecetaWhereUniqueInput
  }

  export type RecetaUpdateOneRequiredWithoutFotosNestedInput = {
    create?: XOR<RecetaCreateWithoutFotosInput, RecetaUncheckedCreateWithoutFotosInput>
    connectOrCreate?: RecetaCreateOrConnectWithoutFotosInput
    upsert?: RecetaUpsertWithoutFotosInput
    connect?: RecetaWhereUniqueInput
    update?: XOR<XOR<RecetaUpdateToOneWithWhereWithoutFotosInput, RecetaUpdateWithoutFotosInput>, RecetaUncheckedUpdateWithoutFotosInput>
  }

  export type RecetaLenteCreateNestedManyWithoutPacienteInput = {
    create?: XOR<RecetaLenteCreateWithoutPacienteInput, RecetaLenteUncheckedCreateWithoutPacienteInput> | RecetaLenteCreateWithoutPacienteInput[] | RecetaLenteUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RecetaLenteCreateOrConnectWithoutPacienteInput | RecetaLenteCreateOrConnectWithoutPacienteInput[]
    createMany?: RecetaLenteCreateManyPacienteInputEnvelope
    connect?: RecetaLenteWhereUniqueInput | RecetaLenteWhereUniqueInput[]
  }

  export type RecetaLenteUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<RecetaLenteCreateWithoutPacienteInput, RecetaLenteUncheckedCreateWithoutPacienteInput> | RecetaLenteCreateWithoutPacienteInput[] | RecetaLenteUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RecetaLenteCreateOrConnectWithoutPacienteInput | RecetaLenteCreateOrConnectWithoutPacienteInput[]
    createMany?: RecetaLenteCreateManyPacienteInputEnvelope
    connect?: RecetaLenteWhereUniqueInput | RecetaLenteWhereUniqueInput[]
  }

  export type RecetaLenteUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<RecetaLenteCreateWithoutPacienteInput, RecetaLenteUncheckedCreateWithoutPacienteInput> | RecetaLenteCreateWithoutPacienteInput[] | RecetaLenteUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RecetaLenteCreateOrConnectWithoutPacienteInput | RecetaLenteCreateOrConnectWithoutPacienteInput[]
    upsert?: RecetaLenteUpsertWithWhereUniqueWithoutPacienteInput | RecetaLenteUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: RecetaLenteCreateManyPacienteInputEnvelope
    set?: RecetaLenteWhereUniqueInput | RecetaLenteWhereUniqueInput[]
    disconnect?: RecetaLenteWhereUniqueInput | RecetaLenteWhereUniqueInput[]
    delete?: RecetaLenteWhereUniqueInput | RecetaLenteWhereUniqueInput[]
    connect?: RecetaLenteWhereUniqueInput | RecetaLenteWhereUniqueInput[]
    update?: RecetaLenteUpdateWithWhereUniqueWithoutPacienteInput | RecetaLenteUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: RecetaLenteUpdateManyWithWhereWithoutPacienteInput | RecetaLenteUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: RecetaLenteScalarWhereInput | RecetaLenteScalarWhereInput[]
  }

  export type RecetaLenteUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<RecetaLenteCreateWithoutPacienteInput, RecetaLenteUncheckedCreateWithoutPacienteInput> | RecetaLenteCreateWithoutPacienteInput[] | RecetaLenteUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: RecetaLenteCreateOrConnectWithoutPacienteInput | RecetaLenteCreateOrConnectWithoutPacienteInput[]
    upsert?: RecetaLenteUpsertWithWhereUniqueWithoutPacienteInput | RecetaLenteUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: RecetaLenteCreateManyPacienteInputEnvelope
    set?: RecetaLenteWhereUniqueInput | RecetaLenteWhereUniqueInput[]
    disconnect?: RecetaLenteWhereUniqueInput | RecetaLenteWhereUniqueInput[]
    delete?: RecetaLenteWhereUniqueInput | RecetaLenteWhereUniqueInput[]
    connect?: RecetaLenteWhereUniqueInput | RecetaLenteWhereUniqueInput[]
    update?: RecetaLenteUpdateWithWhereUniqueWithoutPacienteInput | RecetaLenteUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: RecetaLenteUpdateManyWithWhereWithoutPacienteInput | RecetaLenteUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: RecetaLenteScalarWhereInput | RecetaLenteScalarWhereInput[]
  }

  export type PacienteLenteCreateNestedOneWithoutRecetasInput = {
    create?: XOR<PacienteLenteCreateWithoutRecetasInput, PacienteLenteUncheckedCreateWithoutRecetasInput>
    connectOrCreate?: PacienteLenteCreateOrConnectWithoutRecetasInput
    connect?: PacienteLenteWhereUniqueInput
  }

  export type FotoRecetaLenteCreateNestedManyWithoutRecetaInput = {
    create?: XOR<FotoRecetaLenteCreateWithoutRecetaInput, FotoRecetaLenteUncheckedCreateWithoutRecetaInput> | FotoRecetaLenteCreateWithoutRecetaInput[] | FotoRecetaLenteUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: FotoRecetaLenteCreateOrConnectWithoutRecetaInput | FotoRecetaLenteCreateOrConnectWithoutRecetaInput[]
    createMany?: FotoRecetaLenteCreateManyRecetaInputEnvelope
    connect?: FotoRecetaLenteWhereUniqueInput | FotoRecetaLenteWhereUniqueInput[]
  }

  export type FotoRecetaLenteUncheckedCreateNestedManyWithoutRecetaInput = {
    create?: XOR<FotoRecetaLenteCreateWithoutRecetaInput, FotoRecetaLenteUncheckedCreateWithoutRecetaInput> | FotoRecetaLenteCreateWithoutRecetaInput[] | FotoRecetaLenteUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: FotoRecetaLenteCreateOrConnectWithoutRecetaInput | FotoRecetaLenteCreateOrConnectWithoutRecetaInput[]
    createMany?: FotoRecetaLenteCreateManyRecetaInputEnvelope
    connect?: FotoRecetaLenteWhereUniqueInput | FotoRecetaLenteWhereUniqueInput[]
  }

  export type PacienteLenteUpdateOneRequiredWithoutRecetasNestedInput = {
    create?: XOR<PacienteLenteCreateWithoutRecetasInput, PacienteLenteUncheckedCreateWithoutRecetasInput>
    connectOrCreate?: PacienteLenteCreateOrConnectWithoutRecetasInput
    upsert?: PacienteLenteUpsertWithoutRecetasInput
    connect?: PacienteLenteWhereUniqueInput
    update?: XOR<XOR<PacienteLenteUpdateToOneWithWhereWithoutRecetasInput, PacienteLenteUpdateWithoutRecetasInput>, PacienteLenteUncheckedUpdateWithoutRecetasInput>
  }

  export type FotoRecetaLenteUpdateManyWithoutRecetaNestedInput = {
    create?: XOR<FotoRecetaLenteCreateWithoutRecetaInput, FotoRecetaLenteUncheckedCreateWithoutRecetaInput> | FotoRecetaLenteCreateWithoutRecetaInput[] | FotoRecetaLenteUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: FotoRecetaLenteCreateOrConnectWithoutRecetaInput | FotoRecetaLenteCreateOrConnectWithoutRecetaInput[]
    upsert?: FotoRecetaLenteUpsertWithWhereUniqueWithoutRecetaInput | FotoRecetaLenteUpsertWithWhereUniqueWithoutRecetaInput[]
    createMany?: FotoRecetaLenteCreateManyRecetaInputEnvelope
    set?: FotoRecetaLenteWhereUniqueInput | FotoRecetaLenteWhereUniqueInput[]
    disconnect?: FotoRecetaLenteWhereUniqueInput | FotoRecetaLenteWhereUniqueInput[]
    delete?: FotoRecetaLenteWhereUniqueInput | FotoRecetaLenteWhereUniqueInput[]
    connect?: FotoRecetaLenteWhereUniqueInput | FotoRecetaLenteWhereUniqueInput[]
    update?: FotoRecetaLenteUpdateWithWhereUniqueWithoutRecetaInput | FotoRecetaLenteUpdateWithWhereUniqueWithoutRecetaInput[]
    updateMany?: FotoRecetaLenteUpdateManyWithWhereWithoutRecetaInput | FotoRecetaLenteUpdateManyWithWhereWithoutRecetaInput[]
    deleteMany?: FotoRecetaLenteScalarWhereInput | FotoRecetaLenteScalarWhereInput[]
  }

  export type FotoRecetaLenteUncheckedUpdateManyWithoutRecetaNestedInput = {
    create?: XOR<FotoRecetaLenteCreateWithoutRecetaInput, FotoRecetaLenteUncheckedCreateWithoutRecetaInput> | FotoRecetaLenteCreateWithoutRecetaInput[] | FotoRecetaLenteUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: FotoRecetaLenteCreateOrConnectWithoutRecetaInput | FotoRecetaLenteCreateOrConnectWithoutRecetaInput[]
    upsert?: FotoRecetaLenteUpsertWithWhereUniqueWithoutRecetaInput | FotoRecetaLenteUpsertWithWhereUniqueWithoutRecetaInput[]
    createMany?: FotoRecetaLenteCreateManyRecetaInputEnvelope
    set?: FotoRecetaLenteWhereUniqueInput | FotoRecetaLenteWhereUniqueInput[]
    disconnect?: FotoRecetaLenteWhereUniqueInput | FotoRecetaLenteWhereUniqueInput[]
    delete?: FotoRecetaLenteWhereUniqueInput | FotoRecetaLenteWhereUniqueInput[]
    connect?: FotoRecetaLenteWhereUniqueInput | FotoRecetaLenteWhereUniqueInput[]
    update?: FotoRecetaLenteUpdateWithWhereUniqueWithoutRecetaInput | FotoRecetaLenteUpdateWithWhereUniqueWithoutRecetaInput[]
    updateMany?: FotoRecetaLenteUpdateManyWithWhereWithoutRecetaInput | FotoRecetaLenteUpdateManyWithWhereWithoutRecetaInput[]
    deleteMany?: FotoRecetaLenteScalarWhereInput | FotoRecetaLenteScalarWhereInput[]
  }

  export type RecetaLenteCreateNestedOneWithoutFotosInput = {
    create?: XOR<RecetaLenteCreateWithoutFotosInput, RecetaLenteUncheckedCreateWithoutFotosInput>
    connectOrCreate?: RecetaLenteCreateOrConnectWithoutFotosInput
    connect?: RecetaLenteWhereUniqueInput
  }

  export type RecetaLenteUpdateOneRequiredWithoutFotosNestedInput = {
    create?: XOR<RecetaLenteCreateWithoutFotosInput, RecetaLenteUncheckedCreateWithoutFotosInput>
    connectOrCreate?: RecetaLenteCreateOrConnectWithoutFotosInput
    upsert?: RecetaLenteUpsertWithoutFotosInput
    connect?: RecetaLenteWhereUniqueInput
    update?: XOR<XOR<RecetaLenteUpdateToOneWithWhereWithoutFotosInput, RecetaLenteUpdateWithoutFotosInput>, RecetaLenteUncheckedUpdateWithoutFotosInput>
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

  export type RecetaCreateWithoutPacienteInput = {
    fecha?: Date | string
    fotos?: FotoRecetaCreateNestedManyWithoutRecetaInput
  }

  export type RecetaUncheckedCreateWithoutPacienteInput = {
    id?: number
    fecha?: Date | string
    fotos?: FotoRecetaUncheckedCreateNestedManyWithoutRecetaInput
  }

  export type RecetaCreateOrConnectWithoutPacienteInput = {
    where: RecetaWhereUniqueInput
    create: XOR<RecetaCreateWithoutPacienteInput, RecetaUncheckedCreateWithoutPacienteInput>
  }

  export type RecetaCreateManyPacienteInputEnvelope = {
    data: RecetaCreateManyPacienteInput | RecetaCreateManyPacienteInput[]
  }

  export type RecetaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: RecetaWhereUniqueInput
    update: XOR<RecetaUpdateWithoutPacienteInput, RecetaUncheckedUpdateWithoutPacienteInput>
    create: XOR<RecetaCreateWithoutPacienteInput, RecetaUncheckedCreateWithoutPacienteInput>
  }

  export type RecetaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: RecetaWhereUniqueInput
    data: XOR<RecetaUpdateWithoutPacienteInput, RecetaUncheckedUpdateWithoutPacienteInput>
  }

  export type RecetaUpdateManyWithWhereWithoutPacienteInput = {
    where: RecetaScalarWhereInput
    data: XOR<RecetaUpdateManyMutationInput, RecetaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type RecetaScalarWhereInput = {
    AND?: RecetaScalarWhereInput | RecetaScalarWhereInput[]
    OR?: RecetaScalarWhereInput[]
    NOT?: RecetaScalarWhereInput | RecetaScalarWhereInput[]
    id?: IntFilter<"Receta"> | number
    pacienteId?: IntFilter<"Receta"> | number
    fecha?: DateTimeFilter<"Receta"> | Date | string
  }

  export type PacienteCreateWithoutRecetasInput = {
    nombre: string
    creadoEn?: Date | string
  }

  export type PacienteUncheckedCreateWithoutRecetasInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
  }

  export type PacienteCreateOrConnectWithoutRecetasInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutRecetasInput, PacienteUncheckedCreateWithoutRecetasInput>
  }

  export type FotoRecetaCreateWithoutRecetaInput = {
    foto: string
    observaciones?: string
  }

  export type FotoRecetaUncheckedCreateWithoutRecetaInput = {
    id?: number
    foto: string
    observaciones?: string
  }

  export type FotoRecetaCreateOrConnectWithoutRecetaInput = {
    where: FotoRecetaWhereUniqueInput
    create: XOR<FotoRecetaCreateWithoutRecetaInput, FotoRecetaUncheckedCreateWithoutRecetaInput>
  }

  export type FotoRecetaCreateManyRecetaInputEnvelope = {
    data: FotoRecetaCreateManyRecetaInput | FotoRecetaCreateManyRecetaInput[]
  }

  export type PacienteUpsertWithoutRecetasInput = {
    update: XOR<PacienteUpdateWithoutRecetasInput, PacienteUncheckedUpdateWithoutRecetasInput>
    create: XOR<PacienteCreateWithoutRecetasInput, PacienteUncheckedCreateWithoutRecetasInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutRecetasInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutRecetasInput, PacienteUncheckedUpdateWithoutRecetasInput>
  }

  export type PacienteUpdateWithoutRecetasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteUncheckedUpdateWithoutRecetasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoRecetaUpsertWithWhereUniqueWithoutRecetaInput = {
    where: FotoRecetaWhereUniqueInput
    update: XOR<FotoRecetaUpdateWithoutRecetaInput, FotoRecetaUncheckedUpdateWithoutRecetaInput>
    create: XOR<FotoRecetaCreateWithoutRecetaInput, FotoRecetaUncheckedCreateWithoutRecetaInput>
  }

  export type FotoRecetaUpdateWithWhereUniqueWithoutRecetaInput = {
    where: FotoRecetaWhereUniqueInput
    data: XOR<FotoRecetaUpdateWithoutRecetaInput, FotoRecetaUncheckedUpdateWithoutRecetaInput>
  }

  export type FotoRecetaUpdateManyWithWhereWithoutRecetaInput = {
    where: FotoRecetaScalarWhereInput
    data: XOR<FotoRecetaUpdateManyMutationInput, FotoRecetaUncheckedUpdateManyWithoutRecetaInput>
  }

  export type FotoRecetaScalarWhereInput = {
    AND?: FotoRecetaScalarWhereInput | FotoRecetaScalarWhereInput[]
    OR?: FotoRecetaScalarWhereInput[]
    NOT?: FotoRecetaScalarWhereInput | FotoRecetaScalarWhereInput[]
    id?: IntFilter<"FotoReceta"> | number
    recetaId?: IntFilter<"FotoReceta"> | number
    foto?: StringFilter<"FotoReceta"> | string
    observaciones?: StringFilter<"FotoReceta"> | string
  }

  export type RecetaCreateWithoutFotosInput = {
    fecha?: Date | string
    paciente: PacienteCreateNestedOneWithoutRecetasInput
  }

  export type RecetaUncheckedCreateWithoutFotosInput = {
    id?: number
    pacienteId: number
    fecha?: Date | string
  }

  export type RecetaCreateOrConnectWithoutFotosInput = {
    where: RecetaWhereUniqueInput
    create: XOR<RecetaCreateWithoutFotosInput, RecetaUncheckedCreateWithoutFotosInput>
  }

  export type RecetaUpsertWithoutFotosInput = {
    update: XOR<RecetaUpdateWithoutFotosInput, RecetaUncheckedUpdateWithoutFotosInput>
    create: XOR<RecetaCreateWithoutFotosInput, RecetaUncheckedCreateWithoutFotosInput>
    where?: RecetaWhereInput
  }

  export type RecetaUpdateToOneWithWhereWithoutFotosInput = {
    where?: RecetaWhereInput
    data: XOR<RecetaUpdateWithoutFotosInput, RecetaUncheckedUpdateWithoutFotosInput>
  }

  export type RecetaUpdateWithoutFotosInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutRecetasNestedInput
  }

  export type RecetaUncheckedUpdateWithoutFotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecetaLenteCreateWithoutPacienteInput = {
    fecha?: Date | string
    fotos?: FotoRecetaLenteCreateNestedManyWithoutRecetaInput
  }

  export type RecetaLenteUncheckedCreateWithoutPacienteInput = {
    id?: number
    fecha?: Date | string
    fotos?: FotoRecetaLenteUncheckedCreateNestedManyWithoutRecetaInput
  }

  export type RecetaLenteCreateOrConnectWithoutPacienteInput = {
    where: RecetaLenteWhereUniqueInput
    create: XOR<RecetaLenteCreateWithoutPacienteInput, RecetaLenteUncheckedCreateWithoutPacienteInput>
  }

  export type RecetaLenteCreateManyPacienteInputEnvelope = {
    data: RecetaLenteCreateManyPacienteInput | RecetaLenteCreateManyPacienteInput[]
  }

  export type RecetaLenteUpsertWithWhereUniqueWithoutPacienteInput = {
    where: RecetaLenteWhereUniqueInput
    update: XOR<RecetaLenteUpdateWithoutPacienteInput, RecetaLenteUncheckedUpdateWithoutPacienteInput>
    create: XOR<RecetaLenteCreateWithoutPacienteInput, RecetaLenteUncheckedCreateWithoutPacienteInput>
  }

  export type RecetaLenteUpdateWithWhereUniqueWithoutPacienteInput = {
    where: RecetaLenteWhereUniqueInput
    data: XOR<RecetaLenteUpdateWithoutPacienteInput, RecetaLenteUncheckedUpdateWithoutPacienteInput>
  }

  export type RecetaLenteUpdateManyWithWhereWithoutPacienteInput = {
    where: RecetaLenteScalarWhereInput
    data: XOR<RecetaLenteUpdateManyMutationInput, RecetaLenteUncheckedUpdateManyWithoutPacienteInput>
  }

  export type RecetaLenteScalarWhereInput = {
    AND?: RecetaLenteScalarWhereInput | RecetaLenteScalarWhereInput[]
    OR?: RecetaLenteScalarWhereInput[]
    NOT?: RecetaLenteScalarWhereInput | RecetaLenteScalarWhereInput[]
    id?: IntFilter<"RecetaLente"> | number
    pacienteLenteId?: IntFilter<"RecetaLente"> | number
    fecha?: DateTimeFilter<"RecetaLente"> | Date | string
  }

  export type PacienteLenteCreateWithoutRecetasInput = {
    nombre: string
    creadoEn?: Date | string
  }

  export type PacienteLenteUncheckedCreateWithoutRecetasInput = {
    id?: number
    nombre: string
    creadoEn?: Date | string
  }

  export type PacienteLenteCreateOrConnectWithoutRecetasInput = {
    where: PacienteLenteWhereUniqueInput
    create: XOR<PacienteLenteCreateWithoutRecetasInput, PacienteLenteUncheckedCreateWithoutRecetasInput>
  }

  export type FotoRecetaLenteCreateWithoutRecetaInput = {
    foto: string
    observaciones?: string
  }

  export type FotoRecetaLenteUncheckedCreateWithoutRecetaInput = {
    id?: number
    foto: string
    observaciones?: string
  }

  export type FotoRecetaLenteCreateOrConnectWithoutRecetaInput = {
    where: FotoRecetaLenteWhereUniqueInput
    create: XOR<FotoRecetaLenteCreateWithoutRecetaInput, FotoRecetaLenteUncheckedCreateWithoutRecetaInput>
  }

  export type FotoRecetaLenteCreateManyRecetaInputEnvelope = {
    data: FotoRecetaLenteCreateManyRecetaInput | FotoRecetaLenteCreateManyRecetaInput[]
  }

  export type PacienteLenteUpsertWithoutRecetasInput = {
    update: XOR<PacienteLenteUpdateWithoutRecetasInput, PacienteLenteUncheckedUpdateWithoutRecetasInput>
    create: XOR<PacienteLenteCreateWithoutRecetasInput, PacienteLenteUncheckedCreateWithoutRecetasInput>
    where?: PacienteLenteWhereInput
  }

  export type PacienteLenteUpdateToOneWithWhereWithoutRecetasInput = {
    where?: PacienteLenteWhereInput
    data: XOR<PacienteLenteUpdateWithoutRecetasInput, PacienteLenteUncheckedUpdateWithoutRecetasInput>
  }

  export type PacienteLenteUpdateWithoutRecetasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteLenteUncheckedUpdateWithoutRecetasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoRecetaLenteUpsertWithWhereUniqueWithoutRecetaInput = {
    where: FotoRecetaLenteWhereUniqueInput
    update: XOR<FotoRecetaLenteUpdateWithoutRecetaInput, FotoRecetaLenteUncheckedUpdateWithoutRecetaInput>
    create: XOR<FotoRecetaLenteCreateWithoutRecetaInput, FotoRecetaLenteUncheckedCreateWithoutRecetaInput>
  }

  export type FotoRecetaLenteUpdateWithWhereUniqueWithoutRecetaInput = {
    where: FotoRecetaLenteWhereUniqueInput
    data: XOR<FotoRecetaLenteUpdateWithoutRecetaInput, FotoRecetaLenteUncheckedUpdateWithoutRecetaInput>
  }

  export type FotoRecetaLenteUpdateManyWithWhereWithoutRecetaInput = {
    where: FotoRecetaLenteScalarWhereInput
    data: XOR<FotoRecetaLenteUpdateManyMutationInput, FotoRecetaLenteUncheckedUpdateManyWithoutRecetaInput>
  }

  export type FotoRecetaLenteScalarWhereInput = {
    AND?: FotoRecetaLenteScalarWhereInput | FotoRecetaLenteScalarWhereInput[]
    OR?: FotoRecetaLenteScalarWhereInput[]
    NOT?: FotoRecetaLenteScalarWhereInput | FotoRecetaLenteScalarWhereInput[]
    id?: IntFilter<"FotoRecetaLente"> | number
    recetaLenteId?: IntFilter<"FotoRecetaLente"> | number
    foto?: StringFilter<"FotoRecetaLente"> | string
    observaciones?: StringFilter<"FotoRecetaLente"> | string
  }

  export type RecetaLenteCreateWithoutFotosInput = {
    fecha?: Date | string
    paciente: PacienteLenteCreateNestedOneWithoutRecetasInput
  }

  export type RecetaLenteUncheckedCreateWithoutFotosInput = {
    id?: number
    pacienteLenteId: number
    fecha?: Date | string
  }

  export type RecetaLenteCreateOrConnectWithoutFotosInput = {
    where: RecetaLenteWhereUniqueInput
    create: XOR<RecetaLenteCreateWithoutFotosInput, RecetaLenteUncheckedCreateWithoutFotosInput>
  }

  export type RecetaLenteUpsertWithoutFotosInput = {
    update: XOR<RecetaLenteUpdateWithoutFotosInput, RecetaLenteUncheckedUpdateWithoutFotosInput>
    create: XOR<RecetaLenteCreateWithoutFotosInput, RecetaLenteUncheckedCreateWithoutFotosInput>
    where?: RecetaLenteWhereInput
  }

  export type RecetaLenteUpdateToOneWithWhereWithoutFotosInput = {
    where?: RecetaLenteWhereInput
    data: XOR<RecetaLenteUpdateWithoutFotosInput, RecetaLenteUncheckedUpdateWithoutFotosInput>
  }

  export type RecetaLenteUpdateWithoutFotosInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteLenteUpdateOneRequiredWithoutRecetasNestedInput
  }

  export type RecetaLenteUncheckedUpdateWithoutFotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteLenteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecetaCreateManyPacienteInput = {
    id?: number
    fecha?: Date | string
  }

  export type RecetaUpdateWithoutPacienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: FotoRecetaUpdateManyWithoutRecetaNestedInput
  }

  export type RecetaUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: FotoRecetaUncheckedUpdateManyWithoutRecetaNestedInput
  }

  export type RecetaUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoRecetaCreateManyRecetaInput = {
    id?: number
    foto: string
    observaciones?: string
  }

  export type FotoRecetaUpdateWithoutRecetaInput = {
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
  }

  export type FotoRecetaUncheckedUpdateWithoutRecetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
  }

  export type FotoRecetaUncheckedUpdateManyWithoutRecetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
  }

  export type RecetaLenteCreateManyPacienteInput = {
    id?: number
    fecha?: Date | string
  }

  export type RecetaLenteUpdateWithoutPacienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: FotoRecetaLenteUpdateManyWithoutRecetaNestedInput
  }

  export type RecetaLenteUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    fotos?: FotoRecetaLenteUncheckedUpdateManyWithoutRecetaNestedInput
  }

  export type RecetaLenteUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoRecetaLenteCreateManyRecetaInput = {
    id?: number
    foto: string
    observaciones?: string
  }

  export type FotoRecetaLenteUpdateWithoutRecetaInput = {
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
  }

  export type FotoRecetaLenteUncheckedUpdateWithoutRecetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
  }

  export type FotoRecetaLenteUncheckedUpdateManyWithoutRecetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
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