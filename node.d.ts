declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    class $mol_object2 {
        static $: typeof $$;
        [$mol_ambient_ref]: typeof $$;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        destructor(): void;
        toString(): any;
        toJSON(): any;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

interface $node {
    [key: string]: any;
}
declare var $node: $node;

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    function $mol_deprecated(message: string): <Method extends (this: Host, ...args: readonly any[]) => any, Host extends { [key in Field]: Method; }, Field extends keyof Host>(host: Host, field: Field, descr: TypedPropertyDescriptor<Method>) => void;
}

declare namespace $ {
    const $mol_tree_convert: unique symbol;
    type $mol_tree_path = Array<string | number | null>;
    type $mol_tree_hack = (input: $mol_tree, context: $mol_tree_context) => readonly $mol_tree[];
    type $mol_tree_context = Record<string, $mol_tree_hack>;
    type $mol_tree_library = Record<string, $mol_tree_context>;
    class $mol_tree extends $mol_object2 {
        readonly type: string;
        readonly data: string;
        readonly sub: readonly $mol_tree[];
        readonly baseUri: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(config?: Partial<$mol_tree>);
        static values(str: string, baseUri?: string): $mol_tree[];
        clone(config?: Partial<$mol_tree>): $mol_tree;
        make(config: Partial<$mol_tree>): $mol_tree;
        make_data(value: string, sub?: readonly $mol_tree[]): $mol_tree;
        make_struct(type: string, sub?: readonly $mol_tree[]): $mol_tree;
        static fromString(str: string, baseUri?: string): $mol_tree;
        static fromJSON(json: any, baseUri?: string): $mol_tree;
        get uri(): string;
        toString(prefix?: string): string;
        toJSON(): any;
        get value(): string;
        insert(value: $mol_tree, ...path: $mol_tree_path): $mol_tree;
        select(...path: $mol_tree_path): $mol_tree;
        filter(path: string[], value?: string): $mol_tree;
        transform(visit: (stack: $mol_tree[], sub: () => $mol_tree[]) => $mol_tree | null, stack?: $mol_tree[]): $mol_tree | null;
        hack(context: $mol_tree_context): $mol_tree;
        error(message: string): Error;
    }
}

declare namespace $ {
    function $mol_log3_node_make(level: keyof Console, output: 'stdout' | 'stderr', type: string, color: keyof typeof $node.colorette): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    function $mol_env(): Record<string, string | undefined>;
}

declare namespace $ {
}

/// <reference types="node" />
declare namespace $ {
    function $mol_exec(this: $, dir: string, command: string, ...args: string[]): import("child_process").SpawnSyncReturns<Buffer>;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): $mol_style_unit<"%">;
        static px(value: number): $mol_style_unit<"px">;
        static mm(value: number): $mol_style_unit<"mm">;
        static cm(value: number): $mol_style_unit<"cm">;
        static Q(value: number): $mol_style_unit<"Q">;
        static in(value: number): $mol_style_unit<"in">;
        static pc(value: number): $mol_style_unit<"pc">;
        static pt(value: number): $mol_style_unit<"pt">;
        static cap(value: number): $mol_style_unit<"cap">;
        static ch(value: number): $mol_style_unit<"ch">;
        static em(value: number): $mol_style_unit<"em">;
        static rem(value: number): $mol_style_unit<"rem">;
        static ex(value: number): $mol_style_unit<"ex">;
        static ic(value: number): $mol_style_unit<"ic">;
        static lh(value: number): $mol_style_unit<"lh">;
        static rlh(value: number): $mol_style_unit<"rlh">;
        static vh(value: number): $mol_style_unit<"vh">;
        static vw(value: number): $mol_style_unit<"vw">;
        static vi(value: number): $mol_style_unit<"vi">;
        static vb(value: number): $mol_style_unit<"vb">;
        static vmin(value: number): $mol_style_unit<"vmin">;
        static vmax(value: number): $mol_style_unit<"vmax">;
        static deg(value: number): $mol_style_unit<"deg">;
        static rad(value: number): $mol_style_unit<"rad">;
        static grad(value: number): $mol_style_unit<"grad">;
        static turn(value: number): $mol_style_unit<"turn">;
        static s(value: number): $mol_style_unit<"s">;
        static ms(value: number): $mol_style_unit<"ms">;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'url' | 'scale';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string>(name: Name): $mol_style_func<"var", Name>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | $mol_style_unit<"%">)[]>;
        static clamp(min: $mol_style_unit<any>, mid: $mol_style_unit<any>, max: $mol_style_unit<any>): $mol_style_func<"clamp", $mol_style_unit<any>[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
    }
}

declare namespace $ {
}

declare namespace $ {
    const $mol_theme: {
        back: $mol_style_func<"var", "--mol_theme_back">;
        hover: $mol_style_func<"var", "--mol_theme_hover">;
        card: $mol_style_func<"var", "--mol_theme_card">;
        current: $mol_style_func<"var", "--mol_theme_current">;
        special: $mol_style_func<"var", "--mol_theme_special">;
        text: $mol_style_func<"var", "--mol_theme_text">;
        control: $mol_style_func<"var", "--mol_theme_control">;
        shade: $mol_style_func<"var", "--mol_theme_shade">;
        line: $mol_style_func<"var", "--mol_theme_line">;
        focus: $mol_style_func<"var", "--mol_theme_focus">;
        field: $mol_style_func<"var", "--mol_theme_field">;
        image: $mol_style_func<"var", "--mol_theme_image">;
    };
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
    }
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        refresh(): void;
        complete(): void;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor): void;
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: (number | $mol_wire_sub)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any;
    function $mol_dev_format_auto(obj: any): any;
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor): void;
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_after_timeout {
        task: () => void;
        constructor(task: () => void);
    }
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_frame | null;
        static plan(): void;
        static sync(): void;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, ...args: Args);
        plan(): void;
        reap(): void;
        toString(): any;
        toJSON(): any;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async(): Promise<Result>;
    }
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, [...Args], Result>;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[], Result>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => Result>): {
        value: (this: Host, ...args: Args) => Result;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => Result) | undefined;
        set?: ((value: (...args: Args) => Result) => void) | undefined;
    };
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result, keys: number): (host: Host, args: Args) => $mol_wire_atom<Host, [...Args], Result>;
        recall(...args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_mem<Keys extends number>(keys: Keys): <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
    function $mol_wire_mem_func<Keys extends number>(keys: Keys): <Result, Host, Args extends unknown[], Func extends (this: Host, ...args: Args) => Result>(func: Func) => Func;
}

declare namespace $ {
    let $mol_mem: <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
    let $mol_mem_key: <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
    let $mol_mem_key2: <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
    let $mol_mem_key3: <Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (...args: any[]) => any>>(host: Host, field: Field, descr?: TypedPropertyDescriptor<Prop> | undefined) => {
        value: NonNullable<Prop>;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[]): Element[];
    }
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value | undefined) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_wire_async<Host extends object>(obj: Host): { [key in keyof Host]: Host[key] extends (...args: infer Args) => infer Res ? Res extends Promise<any> ? Host[key] : (...args: Args) => Promise<Res> : Host[key]; };
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? Field : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): void;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | $mol_view | Node)[];
        sub_visible(): readonly (string | number | boolean | $mol_view | Node)[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): ClientRect | null;
        view_rect_cache(next?: ClientRect | null): ClientRect | null;
        view_rect_watcher(): {
            destructor: () => boolean;
        };
        dom_id(): any;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        view_names_owned(): string[];
        view_names(): string[];
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style_size(): {
            [key: string]: string | number;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): readonly $mol_view[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): Promise<void>;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
    class $mol_svg extends $mol_view {
        dom_name(): string;
        dom_name_space(): string;
        font_size(): number;
        font_family(): string;
        style_size(): {};
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node(next?: Element): Element;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        render(): void;
    }
}

declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): CSSStyleDeclaration;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        dom_name(): string;
        attr(): {
            viewBox: string;
            preserveAspectRatio: string;
        };
        view_box(): string;
        aspect(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        dom_name(): string;
        attr(): {
            d: string;
        };
        geometry(): string;
    }
}

declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        view_box(): string;
        minimal_width(): number;
        minimal_height(): number;
        sub(): readonly any[];
        path(): string;
        Path(): $mol_svg_path;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_offline(uri?: string): void;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset';
    type Color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | $mol_style_unit<$mol_style_unit_length> | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Span_align = 'none' | 'start' | 'end' | 'center';
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both';
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type ContainRule = 'size' | 'layout' | 'style' | 'paint';
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat';
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        alignContent?: 'baseline' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'center' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | readonly ['first' | 'last', 'baseline'] | readonly ['safe' | 'unsafe', 'start' | 'end' | 'flex-start' | 'flex-end'] | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            color?: Color | Common;
            image?: readonly (readonly [$mol_style_func<'url'>])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center';
            size?: (BG_size | [BG_size, BG_size])[];
        };
        backdropFilter: string;
        box?: {
            shadow?: readonly {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: Color;
            }[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: Color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch';
        scrollbar?: {
            color?: readonly [Color, Color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: {
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: Directions<Color> | Common;
            width?: Directions<Length> | Common;
        };
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number;
        opacity: number;
    }
    export {};
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type Descendant<Name extends keyof $mol_view_all, Config> = $mol_style_guard<Extract<$mol_type_result<$mol_view_all[Name]>, $mol_view>, Config>;
    type Kids<Config> = {
        [view in keyof Config]: view extends keyof $mol_view_all ? Descendant<view, Config[view]> : $mol_type_error<'Unknown View'>;
    };
    type Attrs<View extends $mol_view, Config> = {
        [name in keyof Config]: name extends keyof ReturnType<View['attr']> ? {
            [val in keyof Config[name]]: $mol_style_guard<View, Config[name][val]>;
        } : $mol_type_error<'Unknown attribute'>;
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    export type $mol_style_guard<View extends $mol_view, Config> = $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? unknown : key extends $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '>' ? Kids<Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends keyof $mol_view_all ? Descendant<key, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : $mol_type_error<'Unknown Property or View'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: {
        readonly block: $mol_style_func<"var", "--mol_gap_block">;
        readonly text: $mol_style_func<"var", "--mol_gap_text">;
        readonly round: $mol_style_func<"var", "--mol_gap_round">;
        readonly space: $mol_style_func<"var", "--mol_gap_space">;
        readonly blur: $mol_style_func<"var", "--mol_gap_blur">;
    };
}

declare namespace $ {
    class $mol_scroll extends $mol_view {
        scroll_top(val?: any): number;
        scroll_left(val?: any): number;
        field(): {
            tabIndex: number;
        };
        event(): {
            scroll: (event?: any) => any;
        };
        tabindex(): number;
        event_scroll(event?: any): any;
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $ {
    class $mol_page extends $mol_view {
        dom_name(): string;
        sub(): readonly any[];
        Title(): $mol_view;
        tools(): readonly $mol_view_content[];
        Tools(): $mol_view;
        head(): readonly any[];
        Head(): $mol_view;
        body(): readonly $mol_view_content[];
        body_scroll_top(val?: any): number;
        Body(): $$.$mol_scroll;
        foot(): readonly $mol_view[];
        Foot(): $mol_view;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
    function $mol_charset_decode(value: Uint8Array, code?: $mol_charset_encoding): string;
}

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array;
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file_not_found extends Error {
    }
    abstract class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        static base: string;
        path(): string;
        parent(): $mol_file;
        abstract stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        reset(): void;
        version(): string;
        abstract ensure(): void;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        abstract buffer(next?: Uint8Array): Uint8Array;
        text(next?: string, virt?: 'virt'): string;
        abstract sub(): $mol_file[];
        abstract resolve(path: string): $mol_file;
        abstract relate(base?: $mol_file): string;
        abstract append(next: Uint8Array | string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
        size(): number;
    }
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, next?: Value): Value | undefined;
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    class $mol_file_node extends $mol_file {
        static absolute(path: string): $mol_file_node;
        static relative(path: string): $mol_file_node;
        watcher(): {
            destructor(): void;
        };
        stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        ensure(): void;
        buffer(next?: Uint8Array): Uint8Array;
        sub(): $mol_file[];
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): undefined;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {
    class $mol_row extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_alpha extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_t extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_t_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_access_point extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_access_point_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_access_point_network_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_arrow_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_arrow_left_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_arrow_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_arrow_right_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_badge extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_badge_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_badge_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_badge_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_badge_horizontal_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_badge_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_card_details extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_card_details_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_check_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_child extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_child_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_clock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_clock_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_convert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_details extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_edit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_group extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_group_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_heart extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_heart_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_key extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_key_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_minus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_multiple_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_multiple_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_multiple_minus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_multiple_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_multiple_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_question extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_question_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_remove_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_search_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_star extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_star_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_supervisor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_supervisor_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_switch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_account_tie extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_accusoft extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_adchoices extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_adjust extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_adobe extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_air_conditioner extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_air_filter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_air_horn extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_air_purifier extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_airbag extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_airballoon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_airplane extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_airplane_landing extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_airplane_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_airplane_takeoff extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_airplay extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_airport extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alarm extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alarm_bell extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alarm_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alarm_light extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alarm_light_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alarm_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alarm_note extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alarm_note_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alarm_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alarm_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alarm_snooze extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_album extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alert_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alert_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alert_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alert_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alert_decagram extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alert_decagram_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alert_octagon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alert_octagon_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alert_octagram extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alert_octagram_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alien extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_all_inclusive extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_a extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_a_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_a_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_a_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_a_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_b extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_b_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_b_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_b_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_b_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_c extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_c_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_c_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_c_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_c_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_d extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_d_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_d_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_d_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_d_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_e extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_e_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_e_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_e_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_e_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_f extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_f_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_f_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_f_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_f_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_g extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_g_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_g_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_g_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_g_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_h extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_h_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_h_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_h_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_h_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_i extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_i_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_i_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_i_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_i_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_j extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_j_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_j_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_j_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_j_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_k extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_k_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_k_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_k_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_k_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_l extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_l_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_l_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_l_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_l_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_m extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_m_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_m_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_m_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_m_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_n extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_n_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_n_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_n_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_n_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_o extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_o_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_o_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_o_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_o_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_p extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_p_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_p_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_p_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_p_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_q extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_q_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_q_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_q_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_q_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_r extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_r_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_r_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_r_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_r_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_s extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_s_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_s_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_s_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_s_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_t_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_t_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_t_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_u extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_u_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_u_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_u_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_u_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_v extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_v_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_v_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_v_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_v_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_w extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_w_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_w_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_w_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_w_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_x extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_x_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_x_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_x_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_x_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_y extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_y_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_y_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_y_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_y_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_z extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_z_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_z_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_z_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alpha_z_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_alphabetical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_altimeter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_amazon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_amazon_alexa extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_amazon_drive extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ambulance extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ammunition extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ampersand extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_amplifier extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_anchor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_android extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_android_auto extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_android_debug_bridge extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_android_head extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_android_messages extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_android_studio extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_angle_acute extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_angle_obtuse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_angle_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_angular extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_angularjs extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_animation extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_animation_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_animation_play extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_animation_play_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_anvil extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_apple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_apple_finder extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_apple_icloud extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_apple_ios extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_apple_keyboard_caps extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_apple_keyboard_command extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_apple_keyboard_control extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_apple_keyboard_option extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_apple_keyboard_shift extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_apple_safari extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_application extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_application_export extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_application_import extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_apps extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_apps_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_archive extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrange_bring_forward extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrange_bring_to_front extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrange_send_backward extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrange_send_to_back extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_bottom_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_bottom_left_bold_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_bottom_left_thick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_bottom_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_bottom_right_bold_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_bottom_right_thick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_collapse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_collapse_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_collapse_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_collapse_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_collapse_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_collapse_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_collapse_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_collapse_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_decision extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_decision_auto extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_decision_auto_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_decision_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down_bold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down_bold_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down_bold_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down_bold_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down_bold_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down_bold_hexagon_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down_bold_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down_drop_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down_drop_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_down_thick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_expand extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_expand_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_expand_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_expand_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_expand_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_expand_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_expand_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_expand_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_bold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_bold_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_bold_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_bold_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_bold_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_bold_hexagon_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_bold_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_drop_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_drop_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_right_bold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_right_bold_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_left_thick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right_bold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right_bold_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right_bold_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right_bold_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right_bold_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right_bold_hexagon_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right_bold_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right_drop_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right_drop_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_right_thick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_split_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_split_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_top_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_top_left_bold_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_top_left_bottom_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_top_left_bottom_right_bold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_top_left_thick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_top_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_top_right_bold_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_top_right_bottom_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_top_right_bottom_left_bold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_top_right_thick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_bold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_bold_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_bold_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_bold_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_bold_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_bold_hexagon_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_bold_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_down_bold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_down_bold_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_drop_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_drop_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_thick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_artist extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_artist_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_artstation extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_aspect_ratio extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_assistant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_asterisk extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_at extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_atlassian extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_atm extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_atom extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_atom_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_attachment extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_audio_video extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_audiobook extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_augmented_reality extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_auto_fix extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_auto_upload extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_autorenew extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_av_timer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_aws extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axe extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_arrow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_arrow_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_x_arrow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_x_arrow_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_x_rotate_clockwise extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_x_rotate_counterclockwise extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_x_y_arrow_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_y_arrow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_y_arrow_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_y_rotate_clockwise extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_y_rotate_counterclockwise extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_z_arrow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_z_arrow_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_z_rotate_clockwise extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_axis_z_rotate_counterclockwise extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_azure extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_babel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_baby extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_baby_buggy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_baby_face extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_baby_face_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_backburger extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_backspace extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_backspace_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_backspace_reverse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_backspace_reverse_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_backup_restore extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bacteria extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bacteria_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_badminton extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bag_personal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bag_personal_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bag_personal_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bag_personal_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_balloon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ballot extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ballot_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ballot_recount extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ballot_recount_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bandage extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bandcamp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bank extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bank_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bank_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bank_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bank_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bank_transfer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bank_transfer_in extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bank_transfer_out extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_barcode extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_barcode_scan extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_barley extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_barley_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_barn extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_barrel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_baseball extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_baseball_bat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_basecamp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_basket extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_basket_fill extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_basket_unfill extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_basketball extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_basketball_hoop extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_basketball_hoop_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_10 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_10_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_20 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_20_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_30 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_30_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_40 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_40_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_50 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_50_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_60 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_60_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_70 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_70_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_80 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_80_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_90 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_90_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_alert_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_bluetooth_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_10 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_100 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_20 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_30 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_40 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_50 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_60 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_70 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_80 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_90 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_wireless extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_wireless_10 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_wireless_20 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_wireless_30 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_wireless_40 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_wireless_50 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_wireless_60 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_wireless_70 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_wireless_80 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_wireless_90 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_wireless_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_charging_wireless_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_negative extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_positive extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_unknown extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battery_unknown_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_battlenet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_beach extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_beaker extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_beaker_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_beats extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bed_empty extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_beer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_behance extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell_ring extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell_ring_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell_sleep extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bell_sleep_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_beta extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_betamax extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_biathlon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bible extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bike extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_billiards extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_billiards_rack extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bing extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_binoculars extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bio extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_biohazard extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bitbucket extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bitcoin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_black_mesa extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_blackberry extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_blender extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_blender_software extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_blinds extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_block_helper extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_blogger extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_blood_bag extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bluetooth_audio extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bluetooth_connect extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bluetooth_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bluetooth_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bluetooth_transfer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_blur extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_blur_linear extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_blur_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_blur_radial extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bolnisi_cross extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bolt extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bomb extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bomb_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_lock_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_multiple_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_multiple_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_multiple_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_multiple_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_open_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_open_page_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_open_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_play extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_play_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_search_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_book_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark_minus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark_music extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bookmark_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_boom_gate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_boom_gate_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_boom_gate_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_boom_gate_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_boom_gate_down_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_boom_gate_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_boom_gate_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_boom_gate_up_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_boombox extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bootstrap extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_all_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_bottom extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_bottom_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_color extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_inside extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_left_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_none extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_none_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_outside extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_right_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_style extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_top extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_top_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_border_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bottle_wine extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bow_tie extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bowl extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bowling extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_box_cutter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_box_shadow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_boxing_glove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_braille extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_brain extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bread_slice extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bread_slice_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bridge extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_account_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_download extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_download_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_edit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_edit_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_minus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_remove_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_search_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_upload extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_briefcase_upload_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_brightness_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_brightness_2 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_brightness_3 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_brightness_4 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_brightness_5 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_brightness_6 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_brightness_7 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_brightness_auto extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_brightness_percent extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_broom extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_brush extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_buddhism extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_buffer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bug extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bug_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bug_check_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bug_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bugle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bulldozer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bullet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bulletin_board extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bullhorn extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bullhorn_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bullseye extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bullseye_arrow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bus_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bus_articulated_end extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bus_articulated_front extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bus_clock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bus_double_decker extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bus_school extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_bus_side extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cached extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cactus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cake extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cake_layered extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cake_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calculator extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calculator_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_account_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_blank extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_blank_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_check_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_clock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_edit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_export extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_heart extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_import extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_month extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_month_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_multiple_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_multiselect extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_question extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_range extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_range_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_remove_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_repeat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_repeat_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_star extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_text_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_today extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_week extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_week_begin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_weekend extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_calendar_weekend_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_call_made extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_call_merge extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_call_missed extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_call_received extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_call_split extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camcorder extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camcorder_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camcorder_box_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camcorder_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_burst extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_control extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_enhance extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_enhance_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_front extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_front_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_gopro extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_image extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_iris extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_metering_center extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_metering_matrix extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_metering_partial extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_metering_spot extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_party_mode extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_rear extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_rear_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_retake extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_retake_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_switch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_timer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_wireless extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_camera_wireless_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_campfire extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cancel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_candle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_candycane extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cannabis extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_caps_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_back extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_battery extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_brake_abs extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_brake_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_brake_hold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_brake_parking extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_connected extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_convertible extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_cruise_control extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_defrost_front extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_defrost_rear extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_door extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_electric extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_esp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_estate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_hatchback extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_key extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_light_dimmed extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_light_fog extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_light_high extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_limousine extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_parking_lights extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_pickup extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_side extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_sports extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_tire_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_traction_control extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_car_wash extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_caravan extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_card extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_card_bulleted extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_card_bulleted_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_card_bulleted_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_card_bulleted_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_card_bulleted_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_card_bulleted_settings_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_card_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_card_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_card_text_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cards extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cards_club extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cards_diamond extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cards_heart extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cards_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cards_playing_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cards_spade extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cards_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_carrot extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_carry_on_bag_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cart extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cart_arrow_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cart_arrow_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cart_arrow_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cart_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cart_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cart_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cart_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cart_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_case_sensitive_alt extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cash extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cash_100 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cash_marker extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cash_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cash_refund extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cash_register extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cash_usd extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cassette extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cast extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cast_connected extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cast_education extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cast_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_castle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cctv extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ceiling_light extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_android extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_arrow_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_basic extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_dock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_erase extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_iphone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_key extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_link extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_link_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_message extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_nfc extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_screenshot extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_settings_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_sound extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cellphone_wireless extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_celtic_cross extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_certificate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chair_school extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_charity extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_arc extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_areaspline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_areaspline_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_bar extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_bar_stacked extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_bell_curve extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_bubble extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_donut extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_donut_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_gantt extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_histogram extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_line extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_line_stacked extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_line_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_multiline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_pie extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_scatter_plot extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_scatter_plot_hexbin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_timeline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_timeline_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chart_tree extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chat_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chat_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chat_processing extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_bold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_decagram extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_underline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_underline_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_check_underline_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbook extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_blank extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_blank_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_blank_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_blank_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_intermediate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_marked extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_marked_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_marked_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_marked_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_multiple_blank extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_multiple_blank_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_multiple_blank_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_multiple_blank_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_multiple_marked extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_multiple_marked_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_multiple_marked_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkbox_multiple_marked_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_checkerboard extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chef_hat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chemical_weapon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chess_bishop extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chess_king extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chess_knight extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chess_pawn extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chess_queen extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chess_rook extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_double_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_double_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_double_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_double_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_down_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_down_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_down_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_down_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_left_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_left_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_left_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_left_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_right_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_right_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_right_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_right_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_triple_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_triple_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_triple_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_triple_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_up_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_up_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_up_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_up_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chili_hot extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chili_medium extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chili_mild extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chip extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_christianity extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_christianity_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_church extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_double extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_edit_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_expand extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_medium extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_slice_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_slice_2 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_slice_3 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_slice_4 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_slice_5 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_slice_6 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_slice_7 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_slice_8 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circle_small extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_circular_saw extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cisco_webex extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_city extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_city_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_city_variant_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_account_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_arrow_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_arrow_down_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_arrow_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_arrow_left_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_arrow_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_arrow_right_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_arrow_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_arrow_up_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_check_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_flow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_play extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_play_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_pulse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_pulse_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_text_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_text_play extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clipboard_text_play_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clippy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clock_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clock_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clock_digital extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clock_end extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clock_fast extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clock_in extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clock_out extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clock_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clock_start extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_close extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_close_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_close_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_close_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_close_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_close_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_close_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_close_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_close_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_close_octagon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_close_octagon_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_close_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_closed_caption extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_closed_caption_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_braces extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_download extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_download_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_print extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_print_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_question extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_search_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_sync extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_tags extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_upload extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cloud_upload_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_clover extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_array extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_braces extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_brackets extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_equal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_greater_than extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_greater_than_or_equal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_less_than extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_less_than_or_equal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_not_equal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_not_equal_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_parentheses extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_string extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_tags extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_code_tags_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_codepen extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_coffee extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_coffee_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_coffee_to_go extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_coffin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cogs extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_coin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_coins extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_collage extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_collapse_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_collapse_all_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_color_helper extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comma extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comma_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comma_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comma_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comma_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_account_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_arrow_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_arrow_left_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_arrow_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_arrow_right_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_check_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_eye extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_eye_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_processing extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_processing_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_question extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_question_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_remove_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_search_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_text_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_text_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_comment_text_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_compare extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_compass extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_compass_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_compass_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_compass_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_console extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_console_line extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_console_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_console_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_contact_mail extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_contact_mail_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_contact_phone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_contact_phone_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_contactless_payment extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_contacts extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_contain extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_contain_end extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_contain_start extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_copy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_cut extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_duplicate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_paste extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_save extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_save_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_save_edit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_save_edit_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_save_move extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_save_move_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_save_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_save_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_content_save_settings_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_contrast extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_contrast_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_contrast_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_controller_classic extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_controller_classic_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cookie extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_copyright extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cordova extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_corn extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_counter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cowboy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cpu_32_bit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cpu_64_bit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_crane extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_creation extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_creative_commons extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_credit_card extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_credit_card_clock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_credit_card_clock_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_credit_card_marker extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_credit_card_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_credit_card_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_credit_card_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_credit_card_refund extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_credit_card_scan extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_credit_card_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_credit_card_wireless extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cricket extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_crop extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_crop_free extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_crop_landscape extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_crop_portrait extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_crop_rotate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_crop_square extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_crosshairs extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_crosshairs_gps extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_crown extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cryengine extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_crystal_ball extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cube extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cube_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cube_scan extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cube_send extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cube_unfolded extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cup extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cup_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cup_water extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cupcake extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_curling extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_bdt extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_brl extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_btc extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_chf extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_cny extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_eth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_eur extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_gbp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_ils extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_inr extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_jpy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_krw extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_kzt extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_ngn extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_php extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_rial extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_rub extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_sign extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_try extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_twd extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_usd extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_currency_usd_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_current_ac extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_current_dc extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cursor_default extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cursor_default_click extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cursor_default_click_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cursor_default_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cursor_move extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cursor_pointer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_cursor_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_database extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_database_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_database_edit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_database_export extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_database_import extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_database_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_database_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_database_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_database_refresh extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_database_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_database_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_database_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_death_star extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_death_star_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_deathly_hallows extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_debian extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_debug_step_into extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_debug_step_out extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_debug_step_over extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_decagram extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_decagram_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_decimal_decrease extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_decimal_increase extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete_empty extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete_empty_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete_forever extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete_forever_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete_restore extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete_sweep extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete_sweep_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delete_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_delta extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_desk_lamp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_deskphone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_desktop_classic extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_desktop_mac extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_desktop_mac_dashboard extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_desktop_tower extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_desktop_tower_monitor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_details extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dev_to extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_developer_board extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_deviantart extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dialpad extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_diameter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_diameter_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_diameter_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_diamond extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_diamond_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_diamond_stone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dice_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dice_2 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dice_3 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dice_4 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dice_5 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dice_6 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dice_d10 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dice_d12 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dice_d20 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dice_d4 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dice_d6 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dice_d8 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dice_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dictionary extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dip_switch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_directions extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_directions_fork extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_disc extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_disc_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_disc_player extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_discord extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dishwasher extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_disqus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_disqus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_diving_flippers extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_diving_helmet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_diving_scuba extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_diving_scuba_flag extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_diving_scuba_tank extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_diving_scuba_tank_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_diving_snorkel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_division extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_division_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dlna extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dna extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dns extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dns_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_do_not_disturb extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_do_not_disturb_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_docker extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_doctor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dog extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dog_service extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dog_side extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dolby extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dolly extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_domain extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_domain_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_donkey extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_door extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_door_closed extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_door_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_doorbell_video extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dot_net extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dots_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dots_horizontal_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dots_horizontal_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dots_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dots_vertical_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dots_vertical_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_douban extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_download extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_download_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_download_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_download_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_download_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_drag extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_drag_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_drag_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_drag_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_drama_masks extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_drawing extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_drawing_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dribbble extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dribbble_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_drone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dropbox extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_drupal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_duck extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dumbbell extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_dump_truck extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ear_hearing extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ear_hearing_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_earth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_earth_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_earth_box_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_earth_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_edge extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_egg extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_egg_easter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eight_track extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eject extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eject_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_electric_switch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_elephant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_elevation_decline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_elevation_rise extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_elevator extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ellipse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ellipse_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_check_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_edit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_edit_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_mark_as_unread extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_minus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_open_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_open_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_open_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_search_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_email_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ember extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emby extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_angry extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_angry_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_cool extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_cool_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_cry extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_cry_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_dead extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_dead_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_devil extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_devil_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_excited extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_excited_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_happy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_happy_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_kiss extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_kiss_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_neutral extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_neutral_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_poop extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_poop_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_sad extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_sad_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_tongue extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_tongue_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_wink extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_emoticon_wink_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_engine extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_engine_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_engine_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_engine_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_equal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_equal_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_equalizer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_equalizer_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eraser extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eraser_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_escalator extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eslint extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_et extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ethereum extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ethernet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ethernet_cable extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ethernet_cable_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_etsy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ev_station extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eventbrite extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_evernote extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_exclamation extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_exit_run extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_exit_to_app extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_expand_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_expand_all_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_exponent extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_exponent_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_export extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_export_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eye extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eye_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eye_check_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eye_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eye_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eye_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eye_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eye_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eye_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eye_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eye_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eye_settings_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eyedropper extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_eyedropper_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_face extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_face_agent extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_face_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_face_profile extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_face_recognition extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_facebook extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_facebook_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_facebook_messenger extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_facebook_workplace extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_factory extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fan extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fan_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fast_forward extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fast_forward_10 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fast_forward_30 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fast_forward_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fax extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_feather extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_feature_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_feature_search_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fedora extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ferris_wheel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ferry extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_cabinet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_cad extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_cad_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_cancel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_cancel_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_chart extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_check_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_cloud extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_compare extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_delimited extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_delimited_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box_check_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box_minus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box_remove_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_box_search_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_edit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_edit_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_document_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_download extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_download_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_excel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_excel_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_export extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_eye extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_eye_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_find extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_find_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_hidden extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_image extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_image_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_import extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_move extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_music extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_music_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_pdf extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_pdf_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_pdf_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_percent extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_powerpoint extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_powerpoint_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_presentation_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_question extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_replace extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_replace_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_restore extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_search_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_send extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_table extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_table_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_tree extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_undo extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_upload extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_upload_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_video extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_video_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_word extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_word_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_file_xml extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_film extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_filmstrip extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_filmstrip_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_filter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_filter_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_filter_minus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_filter_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_filter_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_filter_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_filter_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_filter_remove_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_filter_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_finance extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_find_replace extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fingerprint extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fingerprint_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fire extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fire_extinguisher extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fire_truck extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_firebase extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_firefox extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fireplace extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fireplace_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_firework extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fish extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fishbowl extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fishbowl_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fit_to_page extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fit_to_page_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flag extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flag_checkered extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flag_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flag_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flag_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flag_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flag_triangle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flag_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flag_variant_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flare extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flash extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flash_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flash_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flash_auto extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flash_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flash_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flash_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flash_red_eye extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flashlight extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flashlight_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flask extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flask_empty extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flask_empty_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flask_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flattr extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flickr extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flip_to_back extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flip_to_front extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_floor_lamp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_floor_plan extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_floppy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_floppy_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flower extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flower_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flower_poppy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flower_tulip extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_flower_tulip_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_account_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_clock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_clock_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_download extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_edit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_edit_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_google_drive extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_image extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_key extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_key_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_key_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_lock_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_move extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_multiple_image extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_open_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_pound extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_pound_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_remove_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_search_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_star extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_star_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_sync extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_sync_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_text_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_folder_upload extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_font_awesome extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_food extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_food_apple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_food_apple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_food_croissant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_food_fork_drink extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_food_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_food_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_football extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_football_australian extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_football_helmet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_forklift extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_align_bottom extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_align_center extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_align_justify extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_align_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_align_middle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_align_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_align_top extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_annotation_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_annotation_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_bold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_clear extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_color_fill extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_color_highlight extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_color_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_columns extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_float_center extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_float_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_float_none extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_float_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_font extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_font_size_decrease extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_font_size_increase extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_header_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_header_2 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_header_3 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_header_4 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_header_5 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_header_6 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_header_decrease extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_header_equal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_header_increase extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_header_pound extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_horizontal_align_center extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_horizontal_align_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_horizontal_align_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_indent_decrease extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_indent_increase extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_italic extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_letter_case extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_letter_case_lower extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_letter_case_upper extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_line_spacing extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_line_style extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_line_weight extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_list_bulleted extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_list_bulleted_square extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_list_bulleted_type extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_list_checkbox extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_list_checks extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_list_numbered extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_list_numbered_rtl extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_list_triangle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_overline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_page_break extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_paint extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_paragraph extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_pilcrow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_quote_close extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_quote_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_rotate_90 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_section extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_size extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_strikethrough extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_strikethrough_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_subscript extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_superscript extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_text_rotation_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_text_rotation_none extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_text_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_text_wrapping_clip extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_text_wrapping_overflow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_text_wrapping_wrap extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_textbox extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_textdirection_l_to_r extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_textdirection_r_to_l extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_title extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_underline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_vertical_align_bottom extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_vertical_align_center extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_vertical_align_top extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_wrap_inline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_wrap_square extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_wrap_tight extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_format_wrap_top_bottom extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_forum extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_forum_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_forward extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_forwardburger extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fountain extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fountain_pen extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fountain_pen_tip extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_foursquare extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_freebsd extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_frequently_asked_questions extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fridge extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fridge_bottom extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fridge_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fridge_top extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fuel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fullscreen extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fullscreen_exit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_function extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_function_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fuse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_fuse_blade extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_circle_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_circle_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_circle_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_circle_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_round extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_round_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_round_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_round_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_round_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_round_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_square extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_square_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gamepad_variant_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gantry_crane extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_garage extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_garage_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_garage_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gas_cylinder extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gas_station extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gas_station_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gate_and extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gate_nand extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gate_nor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gate_not extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gate_or extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gate_xnor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gate_xor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gatsby extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gauge extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gauge_empty extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gauge_full extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gauge_low extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gavel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gender_female extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gender_male extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gender_male_female extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gender_transgender extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gentoo extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_double_tap extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_pinch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_spread extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_swipe extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_swipe_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_swipe_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_swipe_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_swipe_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_swipe_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_swipe_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_tap extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_tap_hold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_two_double_tap extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gesture_two_tap extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ghost extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ghost_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gif extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gift extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gift_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_git extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_github_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_github_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_github_face extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gitlab extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_glass_cocktail extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_glass_flute extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_glass_mug extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_glass_stange extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_glass_tulip extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_glass_wine extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_glassdoor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_glasses extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_globe_model extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gmail extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gnome extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_go_kart extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_go_kart_track extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gog extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_golf extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gondola extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_goodreads extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_adwords extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_allo extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_analytics extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_assistant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_cardboard extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_chrome extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_circles extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_circles_communities extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_circles_extended extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_circles_group extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_classroom extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_controller extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_controller_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_drive extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_earth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_fit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_glass extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_hangouts extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_home extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_keep extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_lens extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_maps extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_nearby extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_pages extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_photos extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_physical_web extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_play extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_plus_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_podcast extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_spreadsheet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_street_view extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_google_translate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gpu extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_gradient extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_grain extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_graphql extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_grave_stone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_grease_pencil extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_greater_than extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_greater_than_or_equal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_grid extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_grid_large extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_grid_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_grill extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_group extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_guitar_acoustic extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_guitar_electric extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_guitar_pick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_guitar_pick_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_guy_fawkes_mask extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hackernews extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hail extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_halloween extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hamburger extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hammer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hand extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hand_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hand_okay extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hand_peace extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hand_peace_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hand_pointing_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hand_pointing_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hand_pointing_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hand_pointing_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hand_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hand_saw extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hanger extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hard_hat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_harddisk extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hat_fedora extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hazard_lights extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hdr extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hdr_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_headphones extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_headphones_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_headphones_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_headphones_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_headphones_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_headset extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_headset_dock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_headset_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_broken extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_broken_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_flash extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_half extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_half_full extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_half_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_heart_pulse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_helicopter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_help extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_help_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_help_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_help_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_help_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_help_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_help_rhombus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_help_rhombus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hexagon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hexagon_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hexagon_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hexagon_slice_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hexagon_slice_2 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hexagon_slice_3 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hexagon_slice_4 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hexagon_slice_5 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hexagon_slice_6 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hexagram extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hexagram_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_high_definition extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_high_definition_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_highway extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hiking extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hinduism extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_history extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hockey_puck extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hockey_sticks extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hololens extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_analytics extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_assistant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_automation extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_city extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_city_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_currency_usd extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_flood extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_floor_0 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_floor_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_floor_2 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_floor_3 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_floor_a extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_floor_b extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_floor_g extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_floor_l extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_floor_negative_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_group extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_heart extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_lock_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_map_marker extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_modern extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_home_variant_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hook extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hook_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hops extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_horseshoe extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hospital extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hospital_building extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hospital_marker extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hot_tub extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hotel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_houzz extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_houzz_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hubspot extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_hulu extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_child extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_female_female extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_female extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_female_boy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_female_girl extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_greeting extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_handsdown extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_handsup extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_male_male extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_male extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_male_boy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_male_female extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_male_girl extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_male_height extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_male_height_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_human_pregnant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_humble_bundle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ice_cream extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ice_pop extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_identifier extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_iframe extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_iframe_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_album extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_area extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_area_close extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_broken extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_broken_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_filter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_filter_black_white extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_filter_center_focus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_filter_center_focus_strong extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_filter_center_focus_strong_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_filter_center_focus_weak extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_filter_drama extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_filter_frames extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_filter_hdr extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_filter_none extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_filter_tilt_shift extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_filter_vintage extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_frame extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_move extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_search_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_size_select_actual extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_size_select_large extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_image_size_select_small extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_import extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_inbox extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_inbox_arrow_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_inbox_arrow_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_inbox_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_inbox_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_incognito extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_infinity extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_information extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_information_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_information_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_instagram extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_instapaper extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_internet_explorer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_invert_colors extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_invert_colors_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ip extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ip_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ip_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ipod extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_islam extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_itunes extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_jabber extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_jeepney extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_jellyfish extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_jellyfish_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_jira extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_jquery extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_jsfiddle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_json extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_judaism extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_kabaddi extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_karate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_keg extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_kettle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_key extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_key_change extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_key_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_key_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_key_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_key_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_key_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_keyboard extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_keyboard_backspace extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_keyboard_caps extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_keyboard_close extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_keyboard_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_keyboard_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_keyboard_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_keyboard_return extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_keyboard_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_keyboard_settings_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_keyboard_tab extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_keyboard_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_kickstarter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_knife extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_knife_military extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_kodi extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_label extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_label_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_label_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_label_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_label_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_label_variant_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ladybug extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lambda extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lamp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lan extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lan_connect extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lan_disconnect extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lan_pending extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_c extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_cpp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_csharp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_css3 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_go extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_haskell extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_html5 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_java extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_javascript extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_lua extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_php extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_python extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_python_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_r extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_ruby_on_rails extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_swift extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_language_typescript extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_laptop extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_laptop_chromebook extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_laptop_mac extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_laptop_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_laptop_windows extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_laravel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lasso extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lastfm extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lastpass extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_launch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lava_lamp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_layers extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_layers_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_layers_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_layers_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_layers_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_layers_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_layers_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lead_pencil extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_leaf extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_leaf_maple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_leak extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_leak_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_led_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_led_on extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_led_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_led_strip extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_led_variant_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_led_variant_on extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_led_variant_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_less_than extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_less_than_or_equal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_library extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_library_books extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_library_movie extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_library_music extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_library_music_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_library_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_library_shelves extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_library_video extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lifebuoy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_light_switch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lightbulb extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lightbulb_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lightbulb_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lightbulb_on extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lightbulb_on_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lightbulb_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lighthouse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lighthouse_on extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_link extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_link_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_link_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_link_box_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_link_box_variant_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_link_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_link_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_link_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_link_variant_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_linkedin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_linkedin_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_linux extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_linux_mint extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_litecoin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_loading extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lock_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lock_clock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lock_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lock_open_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lock_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lock_pattern extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lock_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lock_question extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lock_reset extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lock_smart extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_locker extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_locker_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_login extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_login_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_logout extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_logout_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_looks extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_loop extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_loupe extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lumx extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_lyft extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_magnet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_magnet_on extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_magnify extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_magnify_close extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_magnify_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_magnify_minus_cursor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_magnify_minus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_magnify_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_magnify_plus_cursor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_magnify_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mail extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mail_ru extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mailbox extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mailbox_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mailbox_open_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mailbox_open_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mailbox_open_up_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mailbox_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mailbox_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mailbox_up_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_check_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_clock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_clock_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_legend extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_distance extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_path extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_question extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_question_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_radius extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_marker_remove_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_map_search_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mapbox extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_margin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_markdown extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_marker extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_marker_cancel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_marker_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mastodon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mastodon_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_material_design extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_material_ui extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_math_compass extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_math_cos extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_math_sin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_math_tan extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_matrix extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_maxcdn extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_medal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_medical_bag extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_medium extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_meetup extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_memory extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu_down_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu_left_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu_right_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu_swap extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu_swap_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_menu_up_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_bulleted extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_bulleted_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_draw extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_image extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_processing extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_reply extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_reply_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_settings_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_text_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_message_video extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_meteor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_metronome extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_metronome_tick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_micro_sd extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_microphone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_microphone_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_microphone_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_microphone_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_microphone_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_microphone_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_microphone_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_microphone_variant_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_microscope extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_microsoft extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_microsoft_dynamics extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_microwave extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_midi extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_midi_port extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mine extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_minecraft extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mini_sd extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_minidisc extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_minus_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_minus_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_minus_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_minus_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_minus_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_minus_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mixcloud extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mixed_martial_arts extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mixed_reality extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mixer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_molecule extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_monitor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_monitor_cellphone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_monitor_cellphone_star extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_monitor_dashboard extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_monitor_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_monitor_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_monitor_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_monitor_screenshot extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_monitor_star extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_more extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mother_nurse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_motion_sensor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_motorbike extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mouse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mouse_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mouse_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mouse_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mouse_variant_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_move_resize extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_move_resize_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_movie extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_movie_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_movie_roll extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_muffin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_multiplication extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_multiplication_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mushroom extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_mushroom_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_note extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_note_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_note_bluetooth_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_note_eighth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_note_half extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_note_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_note_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_note_quarter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_note_sixteenth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_note_whole extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_music_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nail extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nas extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nativescript extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nature extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nature_people extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_navigation extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_near_me extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_necklace extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_needle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_netflix extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_strength_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_strength_1_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_strength_2 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_strength_2_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_strength_3 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_strength_3_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_strength_4 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_strength_4_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_strength_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_strength_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_network_strength_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_new_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_newspaper extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_newspaper_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_newspaper_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nfc extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nfc_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nfc_search_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nfc_tap extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nfc_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nfc_variant_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ninja extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nintendo_switch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nodejs extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_not_equal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_not_equal_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_note extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_note_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_note_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_note_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_note_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_note_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_note_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_note_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_notebook extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_notebook_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_notebook_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_notification_clear_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_npm extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_npm_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_npm_variant_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nuke extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_null extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_0 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_0_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_0_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_0_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_0_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_0_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_0_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_1_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_1_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_1_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_1_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_1_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_1_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_2 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_2_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_2_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_2_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_2_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_2_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_2_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_3 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_3_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_3_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_3_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_3_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_3_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_3_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_4 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_4_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_4_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_4_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_4_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_4_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_4_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_5 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_5_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_5_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_5_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_5_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_5_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_5_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_6 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_6_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_6_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_6_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_6_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_6_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_6_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_7 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_7_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_7_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_7_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_7_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_7_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_7_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_8 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_8_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_8_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_8_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_8_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_8_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_8_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_9 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_9_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_9_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_9_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_9_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_9_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_9_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_9_plus_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_9_plus_box_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_9_plus_box_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_9_plus_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_9_plus_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_numeric_9_plus_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nut extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_nutrition extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_oar extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ocarina extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_octagon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_octagon_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_octagram extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_octagram_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_odnoklassniki extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_office extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_office_building extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_oil extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_oil_lamp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_oil_temperature extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_omega extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_one_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_onedrive extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_onenote extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_onepassword extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_opacity extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_open_in_app extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_open_in_new extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_open_source_initiative extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_openid extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_opera extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_orbit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_origin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ornament extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ornament_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_outlook extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_owl extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pac_man extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_package extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_package_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_package_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_package_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_package_variant_closed extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_page_first extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_page_last extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_page_layout_body extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_page_layout_footer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_page_layout_header extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_page_layout_sidebar_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_page_layout_sidebar_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_page_next extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_page_next_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_page_previous extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_page_previous_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_palette extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_palette_advanced extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_palette_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_palette_swatch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pan extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pan_bottom_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pan_bottom_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pan_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pan_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pan_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pan_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pan_top_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pan_top_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pan_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pan_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_panda extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pandora extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_panorama extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_panorama_fisheye extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_panorama_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_panorama_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_panorama_wide_angle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_paper_cut_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_paperclip extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_parachute extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_parachute_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_parking extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_passport extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_passport_biometric extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_patreon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pause extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pause_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pause_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pause_octagon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pause_octagon_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_paw extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_paw_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_paypal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pdf_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_peace extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pen extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pen_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pen_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pen_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pen_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pen_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_lock_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_minus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pencil_remove_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_penguin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pentagon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pentagon_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_percent extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_periodic_table extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_periodic_table_co2 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_periscope extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_perspective_less extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_perspective_more extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pharmacy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_classic extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_forward extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_hangup extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_in_talk extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_incoming extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_log extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_missed extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_outgoing extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_paused extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_return extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_rotate_landscape extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_rotate_portrait extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_phone_voip extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pi extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pi_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pi_hole extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_piano extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pickaxe extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_picture_in_picture_bottom_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_picture_in_picture_bottom_right_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_picture_in_picture_top_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_picture_in_picture_top_right_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pier extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pier_crane extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pig extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pill extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pillar extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pin_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pin_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pin_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pine_tree extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pine_tree_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pinterest extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pinterest_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pinwheel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pinwheel_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pipe extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pipe_disconnected extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pipe_leak extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pirate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pistol extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_piston extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pizza extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_play extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_play_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_play_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_play_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_play_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_play_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_play_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_play_pause extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_play_protected_content extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_play_speed extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_playlist_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_playlist_edit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_playlist_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_playlist_music extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_playlist_music_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_playlist_play extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_playlist_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_playlist_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_playlist_star extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_playstation extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plex extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus_circle_multiple_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus_minus_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus_one extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pocket extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_podcast extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_podium extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_podium_bronze extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_podium_gold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_podium_silver extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_point_of_sale extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pokeball extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pokemon_go extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_poker_chip extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_polaroid extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_poll extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_poll_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_polymer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pool extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_popcorn extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_postage_stamp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pot extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pot_mix extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pound extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pound_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power_cycle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power_on extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power_plug extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power_plug_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power_sleep extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power_socket extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power_socket_au extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power_socket_eu extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power_socket_uk extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power_socket_us extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_power_standby extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_powershell extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_prescription extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_presentation extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_presentation_play extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_printer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_printer_3d extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_printer_3d_nozzle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_printer_3d_nozzle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_printer_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_printer_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_printer_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_printer_wireless extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_priority_high extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_priority_low extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_professional_hexagon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_progress_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_progress_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_progress_clock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_progress_download extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_progress_upload extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_progress_wrench extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_projector extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_projector_screen extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_publish extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pulse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_pumpkin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_purse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_purse_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_puzzle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_puzzle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_qi extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_qqchat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_qrcode extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_qrcode_edit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_qrcode_scan extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_quadcopter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_quality_high extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_quality_low extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_quality_medium extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_quicktime extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_quora extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rabbit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_racing_helmet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_racquetball extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radar extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radiator extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radiator_disabled extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radiator_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radio extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radio_am extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radio_fm extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radio_handheld extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radio_tower extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radioactive extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radioactive_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radiobox_blank extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radiobox_marked extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radius extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_radius_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_railroad_light extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_raspberry_pi extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ray_end extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ray_end_arrow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ray_start extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ray_start_arrow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ray_start_end extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ray_vertex extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_react extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_read extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_receipt extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_record extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_record_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_record_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_record_player extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_record_rec extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rectangle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rectangle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_recycle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_reddit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_redo extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_redo_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_reflect_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_reflect_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_refresh extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_regex extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_registered_trademark extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_relative_scale extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_reload extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_reminder extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_remote extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_remote_desktop extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_remote_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_remote_tv extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_remote_tv_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rename_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_reorder_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_reorder_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_repeat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_repeat_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_repeat_once extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_replay extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_reply extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_reply_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_reply_all_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_reply_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_reproduction extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_resistor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_resistor_nodes extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_resize extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_resize_bottom_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_responsive extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_restart extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_restart_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_restore extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_restore_clock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rewind extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rewind_10 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rewind_30 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rewind_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rhombus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rhombus_medium extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rhombus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rhombus_split extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ribbon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rice extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ring extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rivet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_road extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_road_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_robot extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_robot_industrial extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_robot_vacuum extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_robot_vacuum_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rocket extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_roller_skate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rollerblade extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rollupjs extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_room_service extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_room_service_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rotate_3d extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rotate_3d_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rotate_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rotate_left_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rotate_orbit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rotate_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rotate_right_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rounded_corner extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_router_wireless extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_router_wireless_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_routes extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rowing extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rss extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rss_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rss_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ruby extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_rugby extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ruler extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ruler_square extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_run extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_run_fast extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sack extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sack_percent extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_safe extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_safety_goggles extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sailing extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sale extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_salesforce extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sass extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_satellite extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_satellite_uplink extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_satellite_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sausage extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_saw_blade extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_saxophone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_scale extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_scale_balance extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_scale_bathroom extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_scanner extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_scanner_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_scatter_plot extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_scatter_plot_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_school extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_scissors_cutting extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_screen_rotation extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_screen_rotation_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_screw_flat_top extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_screw_lag extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_screw_machine_flat_top extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_screw_machine_round_top extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_screw_round_top extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_screwdriver extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_script extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_script_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_script_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_script_text_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sd extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_search_web extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seat_flat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seat_flat_angled extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seat_individual_suite extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seat_legroom_extra extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seat_legroom_normal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seat_legroom_reduced extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seat_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seat_recline_extra extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seat_recline_normal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seatbelt extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_security extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_security_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seed extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_seed_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_segment extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_select extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_select_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_select_color extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_select_compare extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_select_drag extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_select_inverse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_select_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_selection extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_selection_drag extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_selection_ellipse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_selection_ellipse_arrow_inside extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_selection_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_send extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_send_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_send_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_send_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_serial_port extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_server extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_server_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_server_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_server_network_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_server_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_server_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_server_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_server_security extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_set_all extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_set_center extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_set_center_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_set_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_set_left_center extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_set_left_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_set_none extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_set_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_set_top_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_settings_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_settings_helper extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_settings_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shape extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shape_circle_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shape_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shape_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shape_polygon_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shape_rectangle_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shape_square_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_share extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_share_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_share_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_share_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_share_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sheep extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_account_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_airplane extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_airplane_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_check_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_cross extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_cross_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_half_full extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_home extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_home_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_key extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_key_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_link_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_link_variant_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_lock_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_remove_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shield_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ship_wheel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shoe_formal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shoe_heel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shoe_print extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shopify extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shopping extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shopping_music extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shovel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shovel_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shower extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shower_head extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shredder extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shuffle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shuffle_disabled extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_shuffle_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sigma extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sigma_lower extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sign_caution extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sign_direction extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sign_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal_2g extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal_3g extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal_4g extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal_5g extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal_cellular_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal_cellular_2 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal_cellular_3 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal_cellular_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal_distance_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal_hspa extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal_hspa_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signal_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signature extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signature_freehand extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signature_image extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_signature_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_silo extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_silverware extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_silverware_fork extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_silverware_fork_knife extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_silverware_spoon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_silverware_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sim extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sim_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sim_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sina_weibo extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sitemap extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skew_less extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skew_more extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skip_backward extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skip_backward_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skip_forward extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skip_forward_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skip_next extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skip_next_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skip_next_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skip_next_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skip_previous extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skip_previous_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skip_previous_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skip_previous_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skull extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skull_crossbones extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skull_crossbones_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skull_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skype extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_skype_business extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_slack extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_slackware extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sleep extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sleep_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_slope_downhill extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_slope_uphill extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_smog extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_smoke_detector extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_smoking extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_smoking_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_snapchat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_snowflake extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_snowflake_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_snowflake_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_snowman extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_soccer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_soccer_field extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sofa extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_solar_panel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_solar_panel_large extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_solar_power extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_solid extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sort extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sort_alphabetical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sort_ascending extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sort_descending extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sort_numeric extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sort_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sort_variant_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sort_variant_lock_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_soundcloud extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source_branch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source_commit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source_commit_end extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source_commit_end_local extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source_commit_local extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source_commit_next_local extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source_commit_start extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source_commit_start_next_local extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source_fork extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source_merge extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source_pull extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source_repository extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_source_repository_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_soy_sauce extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_spa extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_spa_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_space_invaders extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_spade extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_speaker extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_speaker_bluetooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_speaker_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_speaker_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_speaker_wireless extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_speedometer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_spellcheck extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_spider_web extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_spotify extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_spotlight extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_spotlight_beam extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_spray extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_spray_bottle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sprout extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sprout_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_square extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_square_edit_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_square_inc extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_square_inc_cash extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_square_medium extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_square_medium_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_square_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_square_root extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_square_root_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_square_small extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_squeegee extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ssh extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_stack_exchange extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_stack_overflow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_stadium extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_stairs extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_stamper extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_standard_definition extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_star extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_star_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_star_box_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_star_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_star_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_star_face extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_star_four_points extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_star_four_points_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_star_half extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_star_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_star_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_star_three_points extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_star_three_points_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_steam extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_steam_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_steering extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_steering_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_step_backward extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_step_backward_2 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_step_forward extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_step_forward_2 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_stethoscope extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sticker extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sticker_emoji extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_stocking extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_stop extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_stop_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_stop_circle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_store extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_store_24_hour extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_stove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_strava extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_stretch_to_page extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_stretch_to_page_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_subdirectory_arrow_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_subdirectory_arrow_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_subtitles extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_subtitles_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_subway extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_subway_alert_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_subway_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_summit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sunglasses extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_surround_sound extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_surround_sound_2_0 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_surround_sound_3_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_surround_sound_5_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_surround_sound_7_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_svg extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_swap_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_swap_horizontal_bold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_swap_horizontal_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_swap_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_swap_vertical_bold extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_swap_vertical_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_swim extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_switch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sword extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sword_cross extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_symfony extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sync extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sync_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_sync_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tab extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tab_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tab_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tab_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tab_unselected extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_border extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_column extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_column_plus_after extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_column_plus_before extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_column_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_column_width extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_edit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_large extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_merge_cells extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_of_contents extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_row extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_row_height extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_row_plus_after extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_row_plus_before extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_row_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_search extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_settings extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_table_tennis extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tablet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tablet_android extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tablet_cellphone extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tablet_dashboard extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tablet_ipad extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_taco extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tag extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tag_faces extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tag_heart extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tag_heart_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tag_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tag_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tag_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tag_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tag_remove extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tag_text_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tank extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tape_measure extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_target extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_target_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_target_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_taxi extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tea extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tea_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_teach extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_teamviewer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_telegram extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_telescope extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_television extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_television_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_television_classic extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_television_classic_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_television_guide extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_television_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_television_play extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_temperature_celsius extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_temperature_fahrenheit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_temperature_kelvin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tennis extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tennis_ball extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tent extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_terrain extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_test_tube extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_test_tube_empty extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_test_tube_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_text_shadow extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_text_short extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_text_subject extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_text_to_speech extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_text_to_speech_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_textbox extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_textbox_password extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_texture extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_theater extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_theme_light_dark extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thermometer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thermometer_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thermometer_chevron_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thermometer_chevron_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thermometer_lines extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thermometer_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thermometer_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thermostat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thermostat_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thought_bubble extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thought_bubble_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thumb_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thumb_down_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thumb_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thumb_up_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_thumbs_up_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ticket extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ticket_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ticket_confirmation extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ticket_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ticket_percent extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tie extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tilde extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_timelapse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_timeline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_timeline_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_timeline_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_timeline_text_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_timer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_timer_10 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_timer_3 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_timer_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_timer_sand extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_timer_sand_empty extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_timer_sand_full extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_timetable extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_toaster_oven extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_toggle_switch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_toggle_switch_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_toggle_switch_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_toggle_switch_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_toilet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_toolbox extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_toolbox_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tooltip extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tooltip_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tooltip_edit extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tooltip_image extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tooltip_image_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tooltip_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tooltip_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tooltip_plus_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tooltip_text extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tooltip_text_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tooth extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tooth_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tortoise extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tournament extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tower_beach extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tower_fire extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_towing extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_track_light extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trackpad extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trackpad_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tractor extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trademark extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_traffic_light extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_train extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_train_car extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_train_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tram extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_transcribe extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_transcribe_close extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_transfer_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_transfer_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_transfer_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_transfer_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_transit_connection extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_transit_connection_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_transit_transfer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_transition extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_transition_masked extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_translate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_translate_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_transmission_tower extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trash_can extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trash_can_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_treasure_chest extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tree extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tree_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trello extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trending_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trending_neutral extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trending_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_triangle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_triangle_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_triforce extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trophy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trophy_award extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trophy_broken extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trophy_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trophy_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_trophy_variant_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_truck extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_truck_check extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_truck_delivery extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_truck_fast extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_truck_trailer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tshirt_crew extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tshirt_crew_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tshirt_v extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tshirt_v_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tumble_dryer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tumblr extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tumblr_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tumblr_reblog extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tune extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_tune_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_turnstile extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_turnstile_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_turtle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_twitch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_twitter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_twitter_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_twitter_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_twitter_retweet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_two_factor_authentication extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_typewriter extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_uber extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ubisoft extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ubuntu extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ultra_high_definition extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_umbraco extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_umbrella extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_umbrella_closed extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_umbrella_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_undo extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_undo_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_unfold_less_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_unfold_less_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_unfold_more_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_unfold_more_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_ungroup extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_unicode extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_unity extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_unreal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_untappd extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_update extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_upload extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_upload_multiple extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_upload_network extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_upload_network_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_upload_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_usb extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_van_passenger extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_van_utility extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vanish extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_variable extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_arrange_above extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_arrange_below extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_bezier extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_circle_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_combine extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_curve extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_difference extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_difference_ab extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_difference_ba extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_ellipse extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_intersection extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_line extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_point extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_polygon extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_polyline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_radius extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_rectangle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_selection extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_square extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_triangle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vector_union extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_venmo extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vhs extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vibrate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vibrate_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_3d extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_3d_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_4k_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_account extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_image extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_input_antenna extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_input_component extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_input_hdmi extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_input_svideo extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_stabilization extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_switch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_vintage extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_wireless extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_video_wireless_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_agenda extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_array extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_carousel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_column extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_comfy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_compact extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_compact_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_dashboard extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_dashboard_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_dashboard_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_day extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_grid extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_headline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_list extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_module extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_parallel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_quilt extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_sequential extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_split_horizontal extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_split_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_stream extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_view_week extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vimeo extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_violin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_virtual_reality extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_visual_studio extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_visual_studio_code extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vk extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vk_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vk_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vlc extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_voice extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_voice_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_voicemail extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_volleyball extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_volume_high extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_volume_low extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_volume_medium extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_volume_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_volume_mute extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_volume_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_volume_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_volume_variant_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vote extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vote_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vpn extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vuejs extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_vuetify extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_walk extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wall extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wall_sconce extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wall_sconce_flat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wall_sconce_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wallet extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wallet_giftcard extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wallet_membership extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wallet_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wallet_travel extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wallpaper extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wan extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_washing_machine extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_watch extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_watch_export extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_watch_export_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_watch_import extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_watch_import_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_watch_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_watch_vibrate extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_watch_vibrate_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_water extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_water_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_water_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_water_percent extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_water_pump extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_watermark extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wave extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_waves extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_waze extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_cloudy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_cloudy_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_cloudy_arrow_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_fog extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_hail extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_hazy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_hurricane extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_lightning extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_lightning_rainy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_night extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_night_partly_cloudy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_partly_cloudy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_partly_lightning extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_partly_rainy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_partly_snowy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_partly_snowy_rainy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_pouring extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_rainy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_snowy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_snowy_heavy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_snowy_rainy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_sunny extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_sunny_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_sunset extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_sunset_down extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_sunset_up extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_tornado extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_windy extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weather_windy_variant extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_web extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_webcam extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_webhook extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_webpack extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wechat extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weight extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weight_gram extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weight_kilogram extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_weight_pound extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_whatsapp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wheelchair_accessibility extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_whistle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_white_balance_auto extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_white_balance_incandescent extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_white_balance_iridescent extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_white_balance_sunny extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_widgets extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_star extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_1 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_1_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_1_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_2 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_2_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_2_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_3 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_3_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_3_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_4 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_4_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_4_lock extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_alert_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_lock_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_off_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wifi_strength_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wii extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wiiu extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wikipedia extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wind_turbine extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_window_close extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_window_closed extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_window_maximize extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_window_minimize extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_window_open extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_window_restore extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_windows extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_windows_classic extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wiper extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wiper_wash extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wordpress extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_worker extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wrap extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wrap_disabled extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wrench extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wrench_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_wunderlist extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xamarin extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xamarin_outline extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xaml extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xbox extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xbox_controller extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xbox_controller_battery_alert extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xbox_controller_battery_charging extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xbox_controller_battery_empty extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xbox_controller_battery_full extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xbox_controller_battery_low extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xbox_controller_battery_medium extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xbox_controller_battery_unknown extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xbox_controller_menu extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xbox_controller_off extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xbox_controller_view extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xda extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xing extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xing_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xing_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xml extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_xmpp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_yahoo extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_yammer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_yeast extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_yelp extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_yin_yang extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_youtube extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_youtube_creator_studio extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_youtube_gaming extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_youtube_subscription extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_youtube_tv extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_z_wave extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zend extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zigbee extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zip_box extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zip_disk extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zodiac_aquarius extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zodiac_aries extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zodiac_cancer extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zodiac_capricorn extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zodiac_gemini extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zodiac_leo extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zodiac_libra extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zodiac_pisces extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zodiac_sagittarius extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zodiac_scorpio extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zodiac_taurus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_zodiac_virgo extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_pop extends $mol_view {
        showed(val?: any): boolean;
        align_vert(): string;
        align_hor(): string;
        sub(): readonly any[];
        sub_visible(): readonly any[];
        Anchor(): any;
        align(): string;
        bubble_content(): readonly $mol_view_content[];
        height_max(): number;
        Bubble(): $mol_pop_bubble;
    }
    class $mol_pop_bubble extends $mol_scroll {
        sub(): readonly $mol_view_content[];
        style(): {
            maxHeight: number;
        };
        attr(): {
            mol_pop_align: string;
            tabindex: number;
        };
        content(): readonly $mol_view_content[];
        height_max(): number;
        align(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "suspense" | "left" | "right";
    }
}

declare namespace $ {
    class $mol_speck extends $mol_view {
        attr(): {
            mol_theme: string;
        };
        style(): {
            minHeight: string;
        };
        sub(): readonly any[];
        value(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button extends $mol_view {
        enabled(): boolean;
        minimal_height(): number;
        minimal_width(): number;
        click(event?: any): any;
        event_click(event?: any): any;
        event(): {
            click: (event?: any) => any;
            keydown: (event?: any) => any;
        };
        attr(): {
            disabled: boolean;
            role: string;
            tabindex: number;
            title: string;
        };
        sub(): readonly $mol_view_content[];
        Speck(): $mol_speck;
        event_activate(event?: any): any;
        event_key_press(event?: any): any;
        disabled(): boolean;
        tab_index(): number;
        hint(): string;
        error(): string;
    }
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: null): null;
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        sub_visible(): ($mol_view_content | $mol_speck)[];
    }
}

declare namespace $ {
    class $mol_button_typed extends $mol_button {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_hotkey extends $mol_plugin {
        event(): {
            keydown: (event?: any) => any;
        };
        key(): {};
        mod_ctrl(): boolean;
        mod_alt(): boolean;
        mod_shift(): boolean;
        keydown(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): {
            [x: number]: ((event: KeyboardEvent) => void) | undefined;
            readonly backspace?: ((event: KeyboardEvent) => void) | undefined;
            readonly tab?: ((event: KeyboardEvent) => void) | undefined;
            readonly enter?: ((event: KeyboardEvent) => void) | undefined;
            readonly shift?: ((event: KeyboardEvent) => void) | undefined;
            readonly ctrl?: ((event: KeyboardEvent) => void) | undefined;
            readonly alt?: ((event: KeyboardEvent) => void) | undefined;
            readonly pause?: ((event: KeyboardEvent) => void) | undefined;
            readonly capsLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly escape?: ((event: KeyboardEvent) => void) | undefined;
            readonly space?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageUp?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageDown?: ((event: KeyboardEvent) => void) | undefined;
            readonly end?: ((event: KeyboardEvent) => void) | undefined;
            readonly home?: ((event: KeyboardEvent) => void) | undefined;
            readonly left?: ((event: KeyboardEvent) => void) | undefined;
            readonly up?: ((event: KeyboardEvent) => void) | undefined;
            readonly right?: ((event: KeyboardEvent) => void) | undefined;
            readonly down?: ((event: KeyboardEvent) => void) | undefined;
            readonly insert?: ((event: KeyboardEvent) => void) | undefined;
            readonly delete?: ((event: KeyboardEvent) => void) | undefined;
            readonly key0?: ((event: KeyboardEvent) => void) | undefined;
            readonly key1?: ((event: KeyboardEvent) => void) | undefined;
            readonly key2?: ((event: KeyboardEvent) => void) | undefined;
            readonly key3?: ((event: KeyboardEvent) => void) | undefined;
            readonly key4?: ((event: KeyboardEvent) => void) | undefined;
            readonly key5?: ((event: KeyboardEvent) => void) | undefined;
            readonly key6?: ((event: KeyboardEvent) => void) | undefined;
            readonly key7?: ((event: KeyboardEvent) => void) | undefined;
            readonly key8?: ((event: KeyboardEvent) => void) | undefined;
            readonly key9?: ((event: KeyboardEvent) => void) | undefined;
            readonly A?: ((event: KeyboardEvent) => void) | undefined;
            readonly B?: ((event: KeyboardEvent) => void) | undefined;
            readonly C?: ((event: KeyboardEvent) => void) | undefined;
            readonly D?: ((event: KeyboardEvent) => void) | undefined;
            readonly E?: ((event: KeyboardEvent) => void) | undefined;
            readonly F?: ((event: KeyboardEvent) => void) | undefined;
            readonly G?: ((event: KeyboardEvent) => void) | undefined;
            readonly H?: ((event: KeyboardEvent) => void) | undefined;
            readonly I?: ((event: KeyboardEvent) => void) | undefined;
            readonly J?: ((event: KeyboardEvent) => void) | undefined;
            readonly K?: ((event: KeyboardEvent) => void) | undefined;
            readonly L?: ((event: KeyboardEvent) => void) | undefined;
            readonly M?: ((event: KeyboardEvent) => void) | undefined;
            readonly N?: ((event: KeyboardEvent) => void) | undefined;
            readonly O?: ((event: KeyboardEvent) => void) | undefined;
            readonly P?: ((event: KeyboardEvent) => void) | undefined;
            readonly Q?: ((event: KeyboardEvent) => void) | undefined;
            readonly R?: ((event: KeyboardEvent) => void) | undefined;
            readonly S?: ((event: KeyboardEvent) => void) | undefined;
            readonly T?: ((event: KeyboardEvent) => void) | undefined;
            readonly U?: ((event: KeyboardEvent) => void) | undefined;
            readonly V?: ((event: KeyboardEvent) => void) | undefined;
            readonly W?: ((event: KeyboardEvent) => void) | undefined;
            readonly X?: ((event: KeyboardEvent) => void) | undefined;
            readonly Y?: ((event: KeyboardEvent) => void) | undefined;
            readonly Z?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaRight?: ((event: KeyboardEvent) => void) | undefined;
            readonly select?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad0?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad1?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad2?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad3?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad4?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad5?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad6?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad7?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad8?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad9?: ((event: KeyboardEvent) => void) | undefined;
            readonly multiply?: ((event: KeyboardEvent) => void) | undefined;
            readonly add?: ((event: KeyboardEvent) => void) | undefined;
            readonly subtract?: ((event: KeyboardEvent) => void) | undefined;
            readonly decimal?: ((event: KeyboardEvent) => void) | undefined;
            readonly divide?: ((event: KeyboardEvent) => void) | undefined;
            readonly F1?: ((event: KeyboardEvent) => void) | undefined;
            readonly F2?: ((event: KeyboardEvent) => void) | undefined;
            readonly F3?: ((event: KeyboardEvent) => void) | undefined;
            readonly F4?: ((event: KeyboardEvent) => void) | undefined;
            readonly F5?: ((event: KeyboardEvent) => void) | undefined;
            readonly F6?: ((event: KeyboardEvent) => void) | undefined;
            readonly F7?: ((event: KeyboardEvent) => void) | undefined;
            readonly F8?: ((event: KeyboardEvent) => void) | undefined;
            readonly F9?: ((event: KeyboardEvent) => void) | undefined;
            readonly F10?: ((event: KeyboardEvent) => void) | undefined;
            readonly F11?: ((event: KeyboardEvent) => void) | undefined;
            readonly F12?: ((event: KeyboardEvent) => void) | undefined;
            readonly numLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly scrollLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly semicolon?: ((event: KeyboardEvent) => void) | undefined;
            readonly equals?: ((event: KeyboardEvent) => void) | undefined;
            readonly comma?: ((event: KeyboardEvent) => void) | undefined;
            readonly dash?: ((event: KeyboardEvent) => void) | undefined;
            readonly period?: ((event: KeyboardEvent) => void) | undefined;
            readonly forwardSlash?: ((event: KeyboardEvent) => void) | undefined;
            readonly graveAccent?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketOpen?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBack?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBackLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketClose?: ((event: KeyboardEvent) => void) | undefined;
            readonly quoteSingle?: ((event: KeyboardEvent) => void) | undefined;
        };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_nav extends $mol_plugin {
        cycle(val?: any): boolean;
        mod_ctrl(): boolean;
        mod_shift(): boolean;
        mod_alt(): boolean;
        keys_x(val?: any): readonly any[];
        keys_y(val?: any): readonly any[];
        current_x(val?: any): any;
        current_y(val?: any): any;
        event_up(event?: any): any;
        event_down(event?: any): any;
        event_left(event?: any): any;
        event_right(event?: any): any;
        event(): {
            keydown: (event?: any) => any;
        };
        event_key(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): number | null;
        index_x(): number | null;
    }
}

declare namespace $ {
    class $mol_string extends $mol_view {
        dom_name(): string;
        enabled(): boolean;
        minimal_height(): number;
        autocomplete(): boolean;
        selection(val?: any): readonly number[];
        auto(): readonly any[];
        field(): {
            disabled: boolean;
            value: string;
            placeholder: string;
            spellcheck: boolean;
            autocomplete: string;
            selectionEnd: number;
            selectionStart: number;
        };
        attr(): {
            maxlength: number;
            type: string;
        };
        event(): {
            input: (event?: any) => any;
            keydown: (event?: any) => any;
        };
        plugins(): readonly any[];
        selection_watcher(): any;
        disabled(): boolean;
        value(val?: any): string;
        value_changed(val?: any): string;
        hint(): string;
        hint_visible(): string;
        spellcheck(): boolean;
        autocomplete_native(): string;
        selection_end(): number;
        selection_start(): number;
        length_max(): number;
        type(val?: any): string;
        event_change(event?: any): any;
        event_key_press(event?: any): any;
        submit(event?: any): any;
        Submit(): $$.$mol_hotkey;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        hint_visible(): string;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
    class $mol_icon_cross extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_list extends $mol_view {
        render_visible_only(): boolean;
        render_over(): number;
        sub(): readonly $mol_view[];
        Empty(): $mol_view;
        Gap_before(): $mol_view;
        Gap_after(): $mol_view;
        view_window(): readonly any[];
        rows(): readonly $mol_view[];
        gap_before(): number;
        gap_after(): number;
    }
}

declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(next?: [number, number]): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
    class $mol_paragraph extends $mol_view {
        line_height(): number;
        letter_width(): number;
        width_limit(): number;
        sub(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_dimmer extends $mol_paragraph {
        haystack(): string;
        needle(): string;
        sub(): readonly $mol_view_content[];
        Low(id: any): $$.$mol_paragraph;
        High(id: any): $$.$mol_paragraph;
        parts(): readonly $mol_view_content[];
        string(id: any): string;
    }
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<$mol_type_merge_object<Intersection>, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): IterableIterator<$mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | string[];
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
    class $mol_search extends $mol_pop {
        query(val?: any): string;
        suggests(): readonly string[];
        plugins(): readonly $mol_plugin[];
        showed(val?: any): boolean;
        align_hor(): string;
        Anchor(): $mol_view;
        bubble_content(): readonly $mol_view_content[];
        Suggest(id: any): $mol_button_minor;
        clear(val?: any): any;
        Hotkey(): $$.$mol_hotkey;
        nav_components(): readonly $mol_view[];
        nav_focused(component?: any): any;
        Nav(): $$.$mol_nav;
        suggests_showed(val?: any): boolean;
        hint(): string;
        submit(event?: any): any;
        enabled(): boolean;
        Query(): $$.$mol_string;
        Clear_icon(): $mol_icon_cross;
        Clear(): $mol_button_minor;
        anchor_content(): readonly any[];
        menu_items(): readonly $mol_view[];
        Menu(): $$.$mol_list;
        suggest_select(id: any, event?: any): any;
        suggest_label(id: any): string;
        Suggest_label(id: any): $$.$mol_dimmer;
        suggest_content(id: any): readonly $mol_view_content[];
    }
}

declare namespace $ {
    function $mol_wire_sync<Host extends object>(obj: Host): { [key in keyof Host]: Host[key] extends (...args: infer Args) => Promise<infer Res> ? (...args: Args) => Res : Host[key]; };
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    function $mol_fiber_defer<Value = void>(calculate: () => Value): $mol_wire_task<{}, [], Value>;
    function $mol_fiber_root<Calculate extends (this: This, ...args: any[]) => Result, Result = void, This = void>(calculate: Calculate): Calculate;
    function $mol_fiber_sync<Args extends any[], Value = void, This = void>(request: (this: This, ...args: Args) => PromiseLike<Value>): (...args: Args) => Value;
    function $mol_fiber_warp(): Promise<void>;
    class $mol_fiber_solid extends $mol_wrapper {
        static func<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    }
    class $mol_fiber {
        static method: typeof $mol_wire_method;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($mol_string | $mol_button_minor)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($mol_string | $mol_button_minor)[];
        nav_focused(component?: $mol_view): $mol_view | $mol_string | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
}

declare namespace $ {
    class $mol_link extends $mol_view {
        dom_name(): string;
        attr(): {
            href: string;
            title: string;
            target: string;
            download: string;
            mol_link_current: boolean;
        };
        sub(): readonly $mol_view_content[];
        arg(): {};
        event(): {
            click: (event?: any) => any;
        };
        uri(): string;
        hint(): string;
        target(): string;
        file_name(): string;
        current(): boolean;
        event_click(event?: any): any;
        click(event?: any): any;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static href_normal(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: any): string;
        static make_link(next: {
            [key: string]: any;
        }): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: {
            [key: string]: string;
        }): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri(): string;
        uri_native(): URL;
        current(): boolean;
        file_name(): string;
        minimal_height(): number;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
    }
}

declare namespace $ {
    class $mol_link_source extends $mol_link {
        hint(): string;
        sub(): readonly any[];
        Icon(): $mol_icon_github_circle;
    }
}

declare namespace $ {
    class $mol_media extends $mol_object2 {
        static match(query: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    function $mol_lights(this: $, next?: boolean): boolean;
}

declare namespace $ {
    class $mol_check extends $mol_button_minor {
        attr(): {
            mol_check_checked: boolean;
            "aria-checked": boolean;
            role: string;
            disabled: boolean;
            tabindex: number;
            title: string;
        };
        sub(): readonly $mol_view_content[];
        checked(val?: any): boolean;
        Icon(): any;
        title(): string;
        Title(): $mol_view;
        label(): readonly any[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
    }
}

declare namespace $ {
    class $mol_check_icon extends $mol_check {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_lights_toggle extends $mol_check_icon {
        Icon(): $mol_icon_brightness_6;
        hint(): string;
        checked(val?: any): boolean;
        Lights_icon(): $mol_icon_brightness_6;
        lights(val?: any): boolean;
    }
}

declare namespace $.$$ {
    class $mol_lights_toggle extends $.$mol_lights_toggle {
        lights(next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_theme_auto extends $mol_plugin {
        attr(): {
            mol_theme: string;
        };
        theme(): string;
    }
}

declare namespace $.$$ {
    class $mol_theme_auto extends $.$mol_theme_auto {
        theme(): "$mol_theme_light" | "$mol_theme_dark";
    }
}

declare namespace $ {
    class $mol_icon_demo extends $mol_page {
        title(): string;
        tools(): readonly any[];
        plugins(): readonly any[];
        body(): readonly any[];
        Row(id: any): $mol_row;
        data(): {
            $mol_icon_alpha_t_circle: string;
            $mol_icon_access_point: string;
            $mol_icon_access_point_network_off: string;
            $mol_icon_account: string;
            $mol_icon_account_alert: string;
            $mol_icon_account_alert_outline: string;
            $mol_icon_account_arrow_left: string;
            $mol_icon_account_arrow_left_outline: string;
            $mol_icon_account_arrow_right: string;
            $mol_icon_account_arrow_right_outline: string;
            $mol_icon_account_badge: string;
            $mol_icon_account_badge_alert: string;
            $mol_icon_account_badge_alert_outline: string;
            $mol_icon_account_badge_horizontal: string;
            $mol_icon_account_badge_horizontal_outline: string;
            $mol_icon_account_badge_outline: string;
            $mol_icon_account_box: string;
            $mol_icon_account_box_multiple: string;
            $mol_icon_account_box_outline: string;
            $mol_icon_account_card_details: string;
            $mol_icon_account_card_details_outline: string;
            $mol_icon_account_check: string;
            $mol_icon_account_check_outline: string;
            $mol_icon_account_child: string;
            $mol_icon_account_child_circle: string;
            $mol_icon_account_circle: string;
            $mol_icon_account_circle_outline: string;
            $mol_icon_account_clock: string;
            $mol_icon_account_clock_outline: string;
            $mol_icon_account_convert: string;
            $mol_icon_account_details: string;
            $mol_icon_account_edit: string;
            $mol_icon_account_group: string;
            $mol_icon_account_group_outline: string;
            $mol_icon_account_heart: string;
            $mol_icon_account_heart_outline: string;
            $mol_icon_account_key: string;
            $mol_icon_account_key_outline: string;
            $mol_icon_account_minus: string;
            $mol_icon_account_minus_outline: string;
            $mol_icon_account_multiple: string;
            $mol_icon_account_multiple_check: string;
            $mol_icon_account_multiple_minus: string;
            $mol_icon_account_multiple_minus_outline: string;
            $mol_icon_account_multiple_outline: string;
            $mol_icon_account_multiple_plus: string;
            $mol_icon_account_multiple_plus_outline: string;
            $mol_icon_account_network: string;
            $mol_icon_account_network_outline: string;
            $mol_icon_account_off: string;
            $mol_icon_account_off_outline: string;
            $mol_icon_account_outline: string;
            $mol_icon_account_plus: string;
            $mol_icon_account_plus_outline: string;
            $mol_icon_account_question: string;
            $mol_icon_account_question_outline: string;
            $mol_icon_account_remove: string;
            $mol_icon_account_remove_outline: string;
            $mol_icon_account_search: string;
            $mol_icon_account_search_outline: string;
            $mol_icon_account_settings: string;
            $mol_icon_account_star: string;
            $mol_icon_account_star_outline: string;
            $mol_icon_account_supervisor: string;
            $mol_icon_account_supervisor_circle: string;
            $mol_icon_account_switch: string;
            $mol_icon_account_tie: string;
            $mol_icon_accusoft: string;
            $mol_icon_adchoices: string;
            $mol_icon_adjust: string;
            $mol_icon_adobe: string;
            $mol_icon_air_conditioner: string;
            $mol_icon_air_filter: string;
            $mol_icon_air_horn: string;
            $mol_icon_air_purifier: string;
            $mol_icon_airbag: string;
            $mol_icon_airballoon: string;
            $mol_icon_airplane: string;
            $mol_icon_airplane_landing: string;
            $mol_icon_airplane_off: string;
            $mol_icon_airplane_takeoff: string;
            $mol_icon_airplay: string;
            $mol_icon_airport: string;
            $mol_icon_alarm: string;
            $mol_icon_alarm_bell: string;
            $mol_icon_alarm_check: string;
            $mol_icon_alarm_light: string;
            $mol_icon_alarm_light_outline: string;
            $mol_icon_alarm_multiple: string;
            $mol_icon_alarm_note: string;
            $mol_icon_alarm_note_off: string;
            $mol_icon_alarm_off: string;
            $mol_icon_alarm_plus: string;
            $mol_icon_alarm_snooze: string;
            $mol_icon_album: string;
            $mol_icon_alert: string;
            $mol_icon_alert_box: string;
            $mol_icon_alert_box_outline: string;
            $mol_icon_alert_circle: string;
            $mol_icon_alert_circle_outline: string;
            $mol_icon_alert_decagram: string;
            $mol_icon_alert_decagram_outline: string;
            $mol_icon_alert_octagon: string;
            $mol_icon_alert_octagon_outline: string;
            $mol_icon_alert_octagram: string;
            $mol_icon_alert_octagram_outline: string;
            $mol_icon_alert_outline: string;
            $mol_icon_alien: string;
            $mol_icon_all_inclusive: string;
            $mol_icon_alpha: string;
            $mol_icon_alpha_a: string;
            $mol_icon_alpha_a_box: string;
            $mol_icon_alpha_a_box_outline: string;
            $mol_icon_alpha_a_circle: string;
            $mol_icon_alpha_a_circle_outline: string;
            $mol_icon_alpha_b: string;
            $mol_icon_alpha_b_box: string;
            $mol_icon_alpha_b_box_outline: string;
            $mol_icon_alpha_b_circle: string;
            $mol_icon_alpha_b_circle_outline: string;
            $mol_icon_alpha_c: string;
            $mol_icon_alpha_c_box: string;
            $mol_icon_alpha_c_box_outline: string;
            $mol_icon_alpha_c_circle: string;
            $mol_icon_alpha_c_circle_outline: string;
            $mol_icon_alpha_d: string;
            $mol_icon_alpha_d_box: string;
            $mol_icon_alpha_d_box_outline: string;
            $mol_icon_alpha_d_circle: string;
            $mol_icon_alpha_d_circle_outline: string;
            $mol_icon_alpha_e: string;
            $mol_icon_alpha_e_box: string;
            $mol_icon_alpha_e_box_outline: string;
            $mol_icon_alpha_e_circle: string;
            $mol_icon_alpha_e_circle_outline: string;
            $mol_icon_alpha_f: string;
            $mol_icon_alpha_f_box: string;
            $mol_icon_alpha_f_box_outline: string;
            $mol_icon_alpha_f_circle: string;
            $mol_icon_alpha_f_circle_outline: string;
            $mol_icon_alpha_g: string;
            $mol_icon_alpha_g_box: string;
            $mol_icon_alpha_g_box_outline: string;
            $mol_icon_alpha_g_circle: string;
            $mol_icon_alpha_g_circle_outline: string;
            $mol_icon_alpha_h: string;
            $mol_icon_alpha_h_box: string;
            $mol_icon_alpha_h_box_outline: string;
            $mol_icon_alpha_h_circle: string;
            $mol_icon_alpha_h_circle_outline: string;
            $mol_icon_alpha_i: string;
            $mol_icon_alpha_i_box: string;
            $mol_icon_alpha_i_box_outline: string;
            $mol_icon_alpha_i_circle: string;
            $mol_icon_alpha_i_circle_outline: string;
            $mol_icon_alpha_j: string;
            $mol_icon_alpha_j_box: string;
            $mol_icon_alpha_j_box_outline: string;
            $mol_icon_alpha_j_circle: string;
            $mol_icon_alpha_j_circle_outline: string;
            $mol_icon_alpha_k: string;
            $mol_icon_alpha_k_box: string;
            $mol_icon_alpha_k_box_outline: string;
            $mol_icon_alpha_k_circle: string;
            $mol_icon_alpha_k_circle_outline: string;
            $mol_icon_alpha_l: string;
            $mol_icon_alpha_l_box: string;
            $mol_icon_alpha_l_box_outline: string;
            $mol_icon_alpha_l_circle: string;
            $mol_icon_alpha_l_circle_outline: string;
            $mol_icon_alpha_m: string;
            $mol_icon_alpha_m_box: string;
            $mol_icon_alpha_m_box_outline: string;
            $mol_icon_alpha_m_circle: string;
            $mol_icon_alpha_m_circle_outline: string;
            $mol_icon_alpha_n: string;
            $mol_icon_alpha_n_box: string;
            $mol_icon_alpha_n_box_outline: string;
            $mol_icon_alpha_n_circle: string;
            $mol_icon_alpha_n_circle_outline: string;
            $mol_icon_alpha_o: string;
            $mol_icon_alpha_o_box: string;
            $mol_icon_alpha_o_box_outline: string;
            $mol_icon_alpha_o_circle: string;
            $mol_icon_alpha_o_circle_outline: string;
            $mol_icon_alpha_p: string;
            $mol_icon_alpha_p_box: string;
            $mol_icon_alpha_p_box_outline: string;
            $mol_icon_alpha_p_circle: string;
            $mol_icon_alpha_p_circle_outline: string;
            $mol_icon_alpha_q: string;
            $mol_icon_alpha_q_box: string;
            $mol_icon_alpha_q_box_outline: string;
            $mol_icon_alpha_q_circle: string;
            $mol_icon_alpha_q_circle_outline: string;
            $mol_icon_alpha_r: string;
            $mol_icon_alpha_r_box: string;
            $mol_icon_alpha_r_box_outline: string;
            $mol_icon_alpha_r_circle: string;
            $mol_icon_alpha_r_circle_outline: string;
            $mol_icon_alpha_s: string;
            $mol_icon_alpha_s_box: string;
            $mol_icon_alpha_s_box_outline: string;
            $mol_icon_alpha_s_circle: string;
            $mol_icon_alpha_s_circle_outline: string;
            $mol_icon_alpha_t: string;
            $mol_icon_alpha_t_box: string;
            $mol_icon_alpha_t_box_outline: string;
            $mol_icon_access_point_network: string;
            $mol_icon_alpha_t_circle_outline: string;
            $mol_icon_alpha_u: string;
            $mol_icon_alpha_u_box: string;
            $mol_icon_alpha_u_box_outline: string;
            $mol_icon_alpha_u_circle: string;
            $mol_icon_alpha_u_circle_outline: string;
            $mol_icon_alpha_v: string;
            $mol_icon_alpha_v_box: string;
            $mol_icon_alpha_v_box_outline: string;
            $mol_icon_alpha_v_circle: string;
            $mol_icon_alpha_v_circle_outline: string;
            $mol_icon_alpha_w: string;
            $mol_icon_alpha_w_box: string;
            $mol_icon_alpha_w_box_outline: string;
            $mol_icon_alpha_w_circle: string;
            $mol_icon_alpha_w_circle_outline: string;
            $mol_icon_alpha_x: string;
            $mol_icon_alpha_x_box: string;
            $mol_icon_alpha_x_box_outline: string;
            $mol_icon_alpha_x_circle: string;
            $mol_icon_alpha_x_circle_outline: string;
            $mol_icon_alpha_y: string;
            $mol_icon_alpha_y_box: string;
            $mol_icon_alpha_y_box_outline: string;
            $mol_icon_alpha_y_circle: string;
            $mol_icon_alpha_y_circle_outline: string;
            $mol_icon_alpha_z: string;
            $mol_icon_alpha_z_box: string;
            $mol_icon_alpha_z_box_outline: string;
            $mol_icon_alpha_z_circle: string;
            $mol_icon_alpha_z_circle_outline: string;
            $mol_icon_alphabetical: string;
            $mol_icon_altimeter: string;
            $mol_icon_amazon: string;
            $mol_icon_amazon_alexa: string;
            $mol_icon_amazon_drive: string;
            $mol_icon_ambulance: string;
            $mol_icon_ammunition: string;
            $mol_icon_ampersand: string;
            $mol_icon_amplifier: string;
            $mol_icon_anchor: string;
            $mol_icon_android: string;
            $mol_icon_android_auto: string;
            $mol_icon_android_debug_bridge: string;
            $mol_icon_android_head: string;
            $mol_icon_android_messages: string;
            $mol_icon_android_studio: string;
            $mol_icon_angle_acute: string;
            $mol_icon_angle_obtuse: string;
            $mol_icon_angle_right: string;
            $mol_icon_angular: string;
            $mol_icon_angularjs: string;
            $mol_icon_animation: string;
            $mol_icon_animation_outline: string;
            $mol_icon_animation_play: string;
            $mol_icon_animation_play_outline: string;
            $mol_icon_anvil: string;
            $mol_icon_apple: string;
            $mol_icon_apple_finder: string;
            $mol_icon_apple_icloud: string;
            $mol_icon_apple_ios: string;
            $mol_icon_apple_keyboard_caps: string;
            $mol_icon_apple_keyboard_command: string;
            $mol_icon_apple_keyboard_control: string;
            $mol_icon_apple_keyboard_option: string;
            $mol_icon_apple_keyboard_shift: string;
            $mol_icon_apple_safari: string;
            $mol_icon_application: string;
            $mol_icon_application_export: string;
            $mol_icon_application_import: string;
            $mol_icon_apps: string;
            $mol_icon_apps_box: string;
            $mol_icon_arch: string;
            $mol_icon_archive: string;
            $mol_icon_arrange_bring_forward: string;
            $mol_icon_arrange_bring_to_front: string;
            $mol_icon_arrange_send_backward: string;
            $mol_icon_arrange_send_to_back: string;
            $mol_icon_arrow_all: string;
            $mol_icon_arrow_bottom_left: string;
            $mol_icon_arrow_bottom_left_bold_outline: string;
            $mol_icon_arrow_bottom_left_thick: string;
            $mol_icon_arrow_bottom_right: string;
            $mol_icon_arrow_bottom_right_bold_outline: string;
            $mol_icon_arrow_bottom_right_thick: string;
            $mol_icon_arrow_collapse: string;
            $mol_icon_arrow_collapse_all: string;
            $mol_icon_arrow_collapse_down: string;
            $mol_icon_arrow_collapse_horizontal: string;
            $mol_icon_arrow_collapse_left: string;
            $mol_icon_arrow_collapse_right: string;
            $mol_icon_arrow_collapse_up: string;
            $mol_icon_arrow_collapse_vertical: string;
            $mol_icon_arrow_decision: string;
            $mol_icon_arrow_decision_auto: string;
            $mol_icon_arrow_decision_auto_outline: string;
            $mol_icon_arrow_decision_outline: string;
            $mol_icon_arrow_down: string;
            $mol_icon_arrow_down_bold: string;
            $mol_icon_arrow_down_bold_box: string;
            $mol_icon_arrow_down_bold_box_outline: string;
            $mol_icon_arrow_down_bold_circle: string;
            $mol_icon_arrow_down_bold_circle_outline: string;
            $mol_icon_arrow_down_bold_hexagon_outline: string;
            $mol_icon_arrow_down_bold_outline: string;
            $mol_icon_arrow_down_box: string;
            $mol_icon_arrow_down_circle: string;
            $mol_icon_arrow_down_circle_outline: string;
            $mol_icon_arrow_down_drop_circle: string;
            $mol_icon_arrow_down_drop_circle_outline: string;
            $mol_icon_arrow_down_thick: string;
            $mol_icon_arrow_expand: string;
            $mol_icon_arrow_expand_all: string;
            $mol_icon_arrow_expand_down: string;
            $mol_icon_arrow_expand_horizontal: string;
            $mol_icon_arrow_expand_left: string;
            $mol_icon_arrow_expand_right: string;
            $mol_icon_arrow_expand_up: string;
            $mol_icon_arrow_expand_vertical: string;
            $mol_icon_arrow_left: string;
            $mol_icon_arrow_left_bold: string;
            $mol_icon_arrow_left_bold_box: string;
            $mol_icon_arrow_left_bold_box_outline: string;
            $mol_icon_arrow_left_bold_circle: string;
            $mol_icon_arrow_left_bold_circle_outline: string;
            $mol_icon_arrow_left_bold_hexagon_outline: string;
            $mol_icon_arrow_left_bold_outline: string;
            $mol_icon_arrow_left_box: string;
            $mol_icon_arrow_left_circle: string;
            $mol_icon_arrow_left_circle_outline: string;
            $mol_icon_arrow_left_drop_circle: string;
            $mol_icon_arrow_left_drop_circle_outline: string;
            $mol_icon_arrow_left_right: string;
            $mol_icon_arrow_left_right_bold: string;
            $mol_icon_arrow_left_right_bold_outline: string;
            $mol_icon_arrow_left_thick: string;
            $mol_icon_arrow_right: string;
            $mol_icon_arrow_right_bold: string;
            $mol_icon_arrow_right_bold_box: string;
            $mol_icon_arrow_right_bold_box_outline: string;
            $mol_icon_arrow_right_bold_circle: string;
            $mol_icon_arrow_right_bold_circle_outline: string;
            $mol_icon_arrow_right_bold_hexagon_outline: string;
            $mol_icon_arrow_right_bold_outline: string;
            $mol_icon_arrow_right_box: string;
            $mol_icon_arrow_right_circle: string;
            $mol_icon_arrow_right_circle_outline: string;
            $mol_icon_arrow_right_drop_circle: string;
            $mol_icon_arrow_right_drop_circle_outline: string;
            $mol_icon_arrow_right_thick: string;
            $mol_icon_arrow_split_horizontal: string;
            $mol_icon_arrow_split_vertical: string;
            $mol_icon_arrow_top_left: string;
            $mol_icon_arrow_top_left_bold_outline: string;
            $mol_icon_arrow_top_left_bottom_right: string;
            $mol_icon_arrow_top_left_bottom_right_bold: string;
            $mol_icon_arrow_top_left_thick: string;
            $mol_icon_arrow_top_right: string;
            $mol_icon_arrow_top_right_bold_outline: string;
            $mol_icon_arrow_top_right_bottom_left: string;
            $mol_icon_arrow_top_right_bottom_left_bold: string;
            $mol_icon_arrow_top_right_thick: string;
            $mol_icon_arrow_up: string;
            $mol_icon_arrow_up_bold: string;
            $mol_icon_arrow_up_bold_box: string;
            $mol_icon_arrow_up_bold_box_outline: string;
            $mol_icon_arrow_up_bold_circle: string;
            $mol_icon_arrow_up_bold_circle_outline: string;
            $mol_icon_arrow_up_bold_hexagon_outline: string;
            $mol_icon_arrow_up_bold_outline: string;
            $mol_icon_arrow_up_box: string;
            $mol_icon_arrow_up_circle: string;
            $mol_icon_arrow_up_circle_outline: string;
            $mol_icon_arrow_up_down: string;
            $mol_icon_arrow_up_down_bold: string;
            $mol_icon_arrow_up_down_bold_outline: string;
            $mol_icon_arrow_up_drop_circle: string;
            $mol_icon_arrow_up_drop_circle_outline: string;
            $mol_icon_arrow_up_thick: string;
            $mol_icon_artist: string;
            $mol_icon_artist_outline: string;
            $mol_icon_artstation: string;
            $mol_icon_aspect_ratio: string;
            $mol_icon_assistant: string;
            $mol_icon_asterisk: string;
            $mol_icon_at: string;
            $mol_icon_atlassian: string;
            $mol_icon_atm: string;
            $mol_icon_atom: string;
            $mol_icon_atom_variant: string;
            $mol_icon_attachment: string;
            $mol_icon_audio_video: string;
            $mol_icon_audiobook: string;
            $mol_icon_augmented_reality: string;
            $mol_icon_auto_fix: string;
            $mol_icon_auto_upload: string;
            $mol_icon_autorenew: string;
            $mol_icon_av_timer: string;
            $mol_icon_aws: string;
            $mol_icon_axe: string;
            $mol_icon_axis: string;
            $mol_icon_axis_arrow: string;
            $mol_icon_axis_arrow_lock: string;
            $mol_icon_axis_lock: string;
            $mol_icon_axis_x_arrow: string;
            $mol_icon_axis_x_arrow_lock: string;
            $mol_icon_axis_x_rotate_clockwise: string;
            $mol_icon_axis_x_rotate_counterclockwise: string;
            $mol_icon_axis_x_y_arrow_lock: string;
            $mol_icon_axis_y_arrow: string;
            $mol_icon_axis_y_arrow_lock: string;
            $mol_icon_axis_y_rotate_clockwise: string;
            $mol_icon_axis_y_rotate_counterclockwise: string;
            $mol_icon_axis_z_arrow: string;
            $mol_icon_axis_z_arrow_lock: string;
            $mol_icon_axis_z_rotate_clockwise: string;
            $mol_icon_axis_z_rotate_counterclockwise: string;
            $mol_icon_azure: string;
            $mol_icon_babel: string;
            $mol_icon_baby: string;
            $mol_icon_baby_buggy: string;
            $mol_icon_baby_face: string;
            $mol_icon_baby_face_outline: string;
            $mol_icon_backburger: string;
            $mol_icon_backspace: string;
            $mol_icon_backspace_outline: string;
            $mol_icon_backspace_reverse: string;
            $mol_icon_backspace_reverse_outline: string;
            $mol_icon_backup_restore: string;
            $mol_icon_bacteria: string;
            $mol_icon_bacteria_outline: string;
            $mol_icon_badminton: string;
            $mol_icon_bag_personal: string;
            $mol_icon_bag_personal_off: string;
            $mol_icon_bag_personal_off_outline: string;
            $mol_icon_bag_personal_outline: string;
            $mol_icon_balloon: string;
            $mol_icon_ballot: string;
            $mol_icon_ballot_outline: string;
            $mol_icon_ballot_recount: string;
            $mol_icon_ballot_recount_outline: string;
            $mol_icon_bandage: string;
            $mol_icon_bandcamp: string;
            $mol_icon_bank: string;
            $mol_icon_bank_minus: string;
            $mol_icon_bank_outline: string;
            $mol_icon_bank_plus: string;
            $mol_icon_bank_remove: string;
            $mol_icon_bank_transfer: string;
            $mol_icon_bank_transfer_in: string;
            $mol_icon_bank_transfer_out: string;
            $mol_icon_barcode: string;
            $mol_icon_barcode_scan: string;
            $mol_icon_barley: string;
            $mol_icon_barley_off: string;
            $mol_icon_barn: string;
            $mol_icon_barrel: string;
            $mol_icon_baseball: string;
            $mol_icon_baseball_bat: string;
            $mol_icon_basecamp: string;
            $mol_icon_basket: string;
            $mol_icon_basket_fill: string;
            $mol_icon_basket_unfill: string;
            $mol_icon_basketball: string;
            $mol_icon_basketball_hoop: string;
            $mol_icon_basketball_hoop_outline: string;
            $mol_icon_bat: string;
            $mol_icon_battery: string;
            $mol_icon_battery_10: string;
            $mol_icon_battery_10_bluetooth: string;
            $mol_icon_battery_20: string;
            $mol_icon_battery_20_bluetooth: string;
            $mol_icon_battery_30: string;
            $mol_icon_battery_30_bluetooth: string;
            $mol_icon_battery_40: string;
            $mol_icon_battery_40_bluetooth: string;
            $mol_icon_battery_50: string;
            $mol_icon_battery_50_bluetooth: string;
            $mol_icon_battery_60: string;
            $mol_icon_battery_60_bluetooth: string;
            $mol_icon_battery_70: string;
            $mol_icon_battery_70_bluetooth: string;
            $mol_icon_battery_80: string;
            $mol_icon_battery_80_bluetooth: string;
            $mol_icon_battery_90: string;
            $mol_icon_battery_90_bluetooth: string;
            $mol_icon_battery_alert: string;
            $mol_icon_battery_alert_bluetooth: string;
            $mol_icon_battery_bluetooth: string;
            $mol_icon_battery_bluetooth_variant: string;
            $mol_icon_battery_charging: string;
            $mol_icon_battery_charging_10: string;
            $mol_icon_battery_charging_100: string;
            $mol_icon_battery_charging_20: string;
            $mol_icon_battery_charging_30: string;
            $mol_icon_battery_charging_40: string;
            $mol_icon_battery_charging_50: string;
            $mol_icon_battery_charging_60: string;
            $mol_icon_battery_charging_70: string;
            $mol_icon_battery_charging_80: string;
            $mol_icon_battery_charging_90: string;
            $mol_icon_battery_charging_outline: string;
            $mol_icon_battery_charging_wireless: string;
            $mol_icon_battery_charging_wireless_10: string;
            $mol_icon_battery_charging_wireless_20: string;
            $mol_icon_battery_charging_wireless_30: string;
            $mol_icon_battery_charging_wireless_40: string;
            $mol_icon_battery_charging_wireless_50: string;
            $mol_icon_battery_charging_wireless_60: string;
            $mol_icon_battery_charging_wireless_70: string;
            $mol_icon_battery_charging_wireless_80: string;
            $mol_icon_battery_charging_wireless_90: string;
            $mol_icon_battery_charging_wireless_alert: string;
            $mol_icon_battery_charging_wireless_outline: string;
            $mol_icon_battery_minus: string;
            $mol_icon_battery_negative: string;
            $mol_icon_battery_outline: string;
            $mol_icon_battery_plus: string;
            $mol_icon_battery_positive: string;
            $mol_icon_battery_unknown: string;
            $mol_icon_battery_unknown_bluetooth: string;
            $mol_icon_battlenet: string;
            $mol_icon_beach: string;
            $mol_icon_beaker: string;
            $mol_icon_beaker_outline: string;
            $mol_icon_beats: string;
            $mol_icon_bed_empty: string;
            $mol_icon_beer: string;
            $mol_icon_behance: string;
            $mol_icon_bell: string;
            $mol_icon_bell_alert: string;
            $mol_icon_bell_alert_outline: string;
            $mol_icon_bell_circle: string;
            $mol_icon_bell_circle_outline: string;
            $mol_icon_bell_off: string;
            $mol_icon_bell_off_outline: string;
            $mol_icon_bell_outline: string;
            $mol_icon_bell_plus: string;
            $mol_icon_bell_plus_outline: string;
            $mol_icon_bell_ring: string;
            $mol_icon_bell_ring_outline: string;
            $mol_icon_bell_sleep: string;
            $mol_icon_bell_sleep_outline: string;
            $mol_icon_beta: string;
            $mol_icon_betamax: string;
            $mol_icon_biathlon: string;
            $mol_icon_bible: string;
            $mol_icon_bike: string;
            $mol_icon_billiards: string;
            $mol_icon_billiards_rack: string;
            $mol_icon_bing: string;
            $mol_icon_binoculars: string;
            $mol_icon_bio: string;
            $mol_icon_biohazard: string;
            $mol_icon_bitbucket: string;
            $mol_icon_bitcoin: string;
            $mol_icon_black_mesa: string;
            $mol_icon_blackberry: string;
            $mol_icon_blender: string;
            $mol_icon_blender_software: string;
            $mol_icon_blinds: string;
            $mol_icon_block_helper: string;
            $mol_icon_blogger: string;
            $mol_icon_blood_bag: string;
            $mol_icon_bluetooth: string;
            $mol_icon_bluetooth_audio: string;
            $mol_icon_bluetooth_connect: string;
            $mol_icon_bluetooth_off: string;
            $mol_icon_bluetooth_settings: string;
            $mol_icon_bluetooth_transfer: string;
            $mol_icon_blur: string;
            $mol_icon_blur_linear: string;
            $mol_icon_blur_off: string;
            $mol_icon_blur_radial: string;
            $mol_icon_bolnisi_cross: string;
            $mol_icon_bolt: string;
            $mol_icon_bomb: string;
            $mol_icon_bomb_off: string;
            $mol_icon_bone: string;
            $mol_icon_book: string;
            $mol_icon_book_lock: string;
            $mol_icon_book_lock_open: string;
            $mol_icon_book_minus: string;
            $mol_icon_book_multiple: string;
            $mol_icon_book_multiple_minus: string;
            $mol_icon_book_multiple_plus: string;
            $mol_icon_book_multiple_remove: string;
            $mol_icon_book_multiple_variant: string;
            $mol_icon_book_open: string;
            $mol_icon_book_open_outline: string;
            $mol_icon_book_open_page_variant: string;
            $mol_icon_book_open_variant: string;
            $mol_icon_book_outline: string;
            $mol_icon_book_play: string;
            $mol_icon_book_play_outline: string;
            $mol_icon_book_plus: string;
            $mol_icon_book_remove: string;
            $mol_icon_book_search: string;
            $mol_icon_book_search_outline: string;
            $mol_icon_book_variant: string;
            $mol_icon_bookmark: string;
            $mol_icon_bookmark_check: string;
            $mol_icon_bookmark_minus: string;
            $mol_icon_bookmark_minus_outline: string;
            $mol_icon_bookmark_multiple: string;
            $mol_icon_bookmark_multiple_outline: string;
            $mol_icon_bookmark_music: string;
            $mol_icon_bookmark_off: string;
            $mol_icon_bookmark_off_outline: string;
            $mol_icon_bookmark_outline: string;
            $mol_icon_bookmark_plus: string;
            $mol_icon_bookmark_plus_outline: string;
            $mol_icon_bookmark_remove: string;
            $mol_icon_boom_gate: string;
            $mol_icon_boom_gate_alert: string;
            $mol_icon_boom_gate_alert_outline: string;
            $mol_icon_boom_gate_down: string;
            $mol_icon_boom_gate_down_outline: string;
            $mol_icon_boom_gate_outline: string;
            $mol_icon_boom_gate_up: string;
            $mol_icon_boom_gate_up_outline: string;
            $mol_icon_boombox: string;
            $mol_icon_bootstrap: string;
            $mol_icon_border_all: string;
            $mol_icon_border_all_variant: string;
            $mol_icon_border_bottom: string;
            $mol_icon_border_bottom_variant: string;
            $mol_icon_border_color: string;
            $mol_icon_border_horizontal: string;
            $mol_icon_border_inside: string;
            $mol_icon_border_left: string;
            $mol_icon_border_left_variant: string;
            $mol_icon_border_none: string;
            $mol_icon_border_none_variant: string;
            $mol_icon_border_outside: string;
            $mol_icon_border_right: string;
            $mol_icon_border_right_variant: string;
            $mol_icon_border_style: string;
            $mol_icon_border_top: string;
            $mol_icon_border_top_variant: string;
            $mol_icon_border_vertical: string;
            $mol_icon_bottle_wine: string;
            $mol_icon_bow_tie: string;
            $mol_icon_bowl: string;
            $mol_icon_bowling: string;
            $mol_icon_box: string;
            $mol_icon_box_cutter: string;
            $mol_icon_box_shadow: string;
            $mol_icon_boxing_glove: string;
            $mol_icon_braille: string;
            $mol_icon_brain: string;
            $mol_icon_bread_slice: string;
            $mol_icon_bread_slice_outline: string;
            $mol_icon_bridge: string;
            $mol_icon_briefcase: string;
            $mol_icon_briefcase_account: string;
            $mol_icon_briefcase_account_outline: string;
            $mol_icon_briefcase_check: string;
            $mol_icon_briefcase_download: string;
            $mol_icon_briefcase_download_outline: string;
            $mol_icon_briefcase_edit: string;
            $mol_icon_briefcase_edit_outline: string;
            $mol_icon_briefcase_minus: string;
            $mol_icon_briefcase_minus_outline: string;
            $mol_icon_briefcase_outline: string;
            $mol_icon_briefcase_plus: string;
            $mol_icon_briefcase_plus_outline: string;
            $mol_icon_briefcase_remove: string;
            $mol_icon_briefcase_remove_outline: string;
            $mol_icon_briefcase_search: string;
            $mol_icon_briefcase_search_outline: string;
            $mol_icon_briefcase_upload: string;
            $mol_icon_briefcase_upload_outline: string;
            $mol_icon_brightness_1: string;
            $mol_icon_brightness_2: string;
            $mol_icon_brightness_3: string;
            $mol_icon_brightness_4: string;
            $mol_icon_brightness_5: string;
            $mol_icon_brightness_6: string;
            $mol_icon_brightness_7: string;
            $mol_icon_brightness_auto: string;
            $mol_icon_brightness_percent: string;
            $mol_icon_broom: string;
            $mol_icon_brush: string;
            $mol_icon_buddhism: string;
            $mol_icon_buffer: string;
            $mol_icon_bug: string;
            $mol_icon_bug_check: string;
            $mol_icon_bug_check_outline: string;
            $mol_icon_bug_outline: string;
            $mol_icon_bugle: string;
            $mol_icon_bulldozer: string;
            $mol_icon_bullet: string;
            $mol_icon_bulletin_board: string;
            $mol_icon_bullhorn: string;
            $mol_icon_bullhorn_outline: string;
            $mol_icon_bullseye: string;
            $mol_icon_bullseye_arrow: string;
            $mol_icon_bus: string;
            $mol_icon_bus_alert: string;
            $mol_icon_bus_articulated_end: string;
            $mol_icon_bus_articulated_front: string;
            $mol_icon_bus_clock: string;
            $mol_icon_bus_double_decker: string;
            $mol_icon_bus_school: string;
            $mol_icon_bus_side: string;
            $mol_icon_cached: string;
            $mol_icon_cactus: string;
            $mol_icon_cake: string;
            $mol_icon_cake_layered: string;
            $mol_icon_cake_variant: string;
            $mol_icon_calculator: string;
            $mol_icon_calculator_variant: string;
            $mol_icon_calendar: string;
            $mol_icon_calendar_account: string;
            $mol_icon_calendar_account_outline: string;
            $mol_icon_calendar_alert: string;
            $mol_icon_calendar_blank: string;
            $mol_icon_calendar_blank_outline: string;
            $mol_icon_calendar_check: string;
            $mol_icon_calendar_check_outline: string;
            $mol_icon_calendar_clock: string;
            $mol_icon_calendar_edit: string;
            $mol_icon_calendar_export: string;
            $mol_icon_calendar_heart: string;
            $mol_icon_calendar_import: string;
            $mol_icon_calendar_minus: string;
            $mol_icon_calendar_month: string;
            $mol_icon_calendar_month_outline: string;
            $mol_icon_calendar_multiple: string;
            $mol_icon_calendar_multiple_check: string;
            $mol_icon_calendar_multiselect: string;
            $mol_icon_calendar_outline: string;
            $mol_icon_calendar_plus: string;
            $mol_icon_calendar_question: string;
            $mol_icon_calendar_range: string;
            $mol_icon_calendar_range_outline: string;
            $mol_icon_calendar_remove: string;
            $mol_icon_calendar_remove_outline: string;
            $mol_icon_calendar_repeat: string;
            $mol_icon_calendar_repeat_outline: string;
            $mol_icon_calendar_search: string;
            $mol_icon_calendar_star: string;
            $mol_icon_calendar_text: string;
            $mol_icon_calendar_text_outline: string;
            $mol_icon_calendar_today: string;
            $mol_icon_calendar_week: string;
            $mol_icon_calendar_week_begin: string;
            $mol_icon_calendar_weekend: string;
            $mol_icon_calendar_weekend_outline: string;
            $mol_icon_call_made: string;
            $mol_icon_call_merge: string;
            $mol_icon_call_missed: string;
            $mol_icon_call_received: string;
            $mol_icon_call_split: string;
            $mol_icon_camcorder: string;
            $mol_icon_camcorder_box: string;
            $mol_icon_camcorder_box_off: string;
            $mol_icon_camcorder_off: string;
            $mol_icon_camera: string;
            $mol_icon_camera_account: string;
            $mol_icon_camera_burst: string;
            $mol_icon_camera_control: string;
            $mol_icon_camera_enhance: string;
            $mol_icon_camera_enhance_outline: string;
            $mol_icon_camera_front: string;
            $mol_icon_camera_front_variant: string;
            $mol_icon_camera_gopro: string;
            $mol_icon_camera_image: string;
            $mol_icon_camera_iris: string;
            $mol_icon_camera_metering_center: string;
            $mol_icon_camera_metering_matrix: string;
            $mol_icon_camera_metering_partial: string;
            $mol_icon_camera_metering_spot: string;
            $mol_icon_camera_off: string;
            $mol_icon_camera_outline: string;
            $mol_icon_camera_party_mode: string;
            $mol_icon_camera_plus: string;
            $mol_icon_camera_plus_outline: string;
            $mol_icon_camera_rear: string;
            $mol_icon_camera_rear_variant: string;
            $mol_icon_camera_retake: string;
            $mol_icon_camera_retake_outline: string;
            $mol_icon_camera_switch: string;
            $mol_icon_camera_timer: string;
            $mol_icon_camera_wireless: string;
            $mol_icon_camera_wireless_outline: string;
            $mol_icon_campfire: string;
            $mol_icon_cancel: string;
            $mol_icon_candle: string;
            $mol_icon_candycane: string;
            $mol_icon_cannabis: string;
            $mol_icon_caps_lock: string;
            $mol_icon_car: string;
            $mol_icon_car_back: string;
            $mol_icon_car_battery: string;
            $mol_icon_car_brake_abs: string;
            $mol_icon_car_brake_alert: string;
            $mol_icon_car_brake_hold: string;
            $mol_icon_car_brake_parking: string;
            $mol_icon_car_connected: string;
            $mol_icon_car_convertible: string;
            $mol_icon_car_cruise_control: string;
            $mol_icon_car_defrost_front: string;
            $mol_icon_car_defrost_rear: string;
            $mol_icon_car_door: string;
            $mol_icon_car_electric: string;
            $mol_icon_car_esp: string;
            $mol_icon_car_estate: string;
            $mol_icon_car_hatchback: string;
            $mol_icon_car_key: string;
            $mol_icon_car_light_dimmed: string;
            $mol_icon_car_light_fog: string;
            $mol_icon_car_light_high: string;
            $mol_icon_car_limousine: string;
            $mol_icon_car_multiple: string;
            $mol_icon_car_off: string;
            $mol_icon_car_parking_lights: string;
            $mol_icon_car_pickup: string;
            $mol_icon_car_side: string;
            $mol_icon_car_sports: string;
            $mol_icon_car_tire_alert: string;
            $mol_icon_car_traction_control: string;
            $mol_icon_car_wash: string;
            $mol_icon_caravan: string;
            $mol_icon_card: string;
            $mol_icon_card_bulleted: string;
            $mol_icon_card_bulleted_off: string;
            $mol_icon_card_bulleted_off_outline: string;
            $mol_icon_card_bulleted_outline: string;
            $mol_icon_card_bulleted_settings: string;
            $mol_icon_card_bulleted_settings_outline: string;
            $mol_icon_card_outline: string;
            $mol_icon_card_text: string;
            $mol_icon_card_text_outline: string;
            $mol_icon_cards: string;
            $mol_icon_cards_club: string;
            $mol_icon_cards_diamond: string;
            $mol_icon_cards_heart: string;
            $mol_icon_cards_outline: string;
            $mol_icon_cards_playing_outline: string;
            $mol_icon_cards_spade: string;
            $mol_icon_cards_variant: string;
            $mol_icon_carrot: string;
            $mol_icon_carry_on_bag_check: string;
            $mol_icon_cart: string;
            $mol_icon_cart_arrow_down: string;
            $mol_icon_cart_arrow_right: string;
            $mol_icon_cart_arrow_up: string;
            $mol_icon_cart_minus: string;
            $mol_icon_cart_off: string;
            $mol_icon_cart_outline: string;
            $mol_icon_cart_plus: string;
            $mol_icon_cart_remove: string;
            $mol_icon_case_sensitive_alt: string;
            $mol_icon_cash: string;
            $mol_icon_cash_100: string;
            $mol_icon_cash_marker: string;
            $mol_icon_cash_multiple: string;
            $mol_icon_cash_refund: string;
            $mol_icon_cash_register: string;
            $mol_icon_cash_usd: string;
            $mol_icon_cassette: string;
            $mol_icon_cast: string;
            $mol_icon_cast_connected: string;
            $mol_icon_cast_education: string;
            $mol_icon_cast_off: string;
            $mol_icon_castle: string;
            $mol_icon_cat: string;
            $mol_icon_cctv: string;
            $mol_icon_ceiling_light: string;
            $mol_icon_cellphone: string;
            $mol_icon_cellphone_android: string;
            $mol_icon_cellphone_arrow_down: string;
            $mol_icon_cellphone_basic: string;
            $mol_icon_cellphone_dock: string;
            $mol_icon_cellphone_erase: string;
            $mol_icon_cellphone_iphone: string;
            $mol_icon_cellphone_key: string;
            $mol_icon_cellphone_link: string;
            $mol_icon_cellphone_link_off: string;
            $mol_icon_cellphone_lock: string;
            $mol_icon_cellphone_message: string;
            $mol_icon_cellphone_nfc: string;
            $mol_icon_cellphone_off: string;
            $mol_icon_cellphone_screenshot: string;
            $mol_icon_cellphone_settings: string;
            $mol_icon_cellphone_settings_variant: string;
            $mol_icon_cellphone_sound: string;
            $mol_icon_cellphone_text: string;
            $mol_icon_cellphone_wireless: string;
            $mol_icon_celtic_cross: string;
            $mol_icon_certificate: string;
            $mol_icon_chair_school: string;
            $mol_icon_charity: string;
            $mol_icon_chart_arc: string;
            $mol_icon_chart_areaspline: string;
            $mol_icon_chart_areaspline_variant: string;
            $mol_icon_chart_bar: string;
            $mol_icon_chart_bar_stacked: string;
            $mol_icon_chart_bell_curve: string;
            $mol_icon_chart_bubble: string;
            $mol_icon_chart_donut: string;
            $mol_icon_chart_donut_variant: string;
            $mol_icon_chart_gantt: string;
            $mol_icon_chart_histogram: string;
            $mol_icon_chart_line: string;
            $mol_icon_chart_line_stacked: string;
            $mol_icon_chart_line_variant: string;
            $mol_icon_chart_multiline: string;
            $mol_icon_chart_pie: string;
            $mol_icon_chart_scatter_plot: string;
            $mol_icon_chart_scatter_plot_hexbin: string;
            $mol_icon_chart_timeline: string;
            $mol_icon_chart_timeline_variant: string;
            $mol_icon_chart_tree: string;
            $mol_icon_chat: string;
            $mol_icon_chat_alert: string;
            $mol_icon_chat_outline: string;
            $mol_icon_chat_processing: string;
            $mol_icon_check: string;
            $mol_icon_check_all: string;
            $mol_icon_check_bold: string;
            $mol_icon_check_box_multiple_outline: string;
            $mol_icon_check_box_outline: string;
            $mol_icon_check_circle: string;
            $mol_icon_check_circle_outline: string;
            $mol_icon_check_decagram: string;
            $mol_icon_check_network: string;
            $mol_icon_check_network_outline: string;
            $mol_icon_check_outline: string;
            $mol_icon_check_underline: string;
            $mol_icon_check_underline_circle: string;
            $mol_icon_check_underline_circle_outline: string;
            $mol_icon_checkbook: string;
            $mol_icon_checkbox_blank: string;
            $mol_icon_checkbox_blank_circle: string;
            $mol_icon_checkbox_blank_circle_outline: string;
            $mol_icon_checkbox_blank_outline: string;
            $mol_icon_checkbox_intermediate: string;
            $mol_icon_checkbox_marked: string;
            $mol_icon_checkbox_marked_circle: string;
            $mol_icon_checkbox_marked_circle_outline: string;
            $mol_icon_checkbox_marked_outline: string;
            $mol_icon_checkbox_multiple_blank: string;
            $mol_icon_checkbox_multiple_blank_circle: string;
            $mol_icon_checkbox_multiple_blank_circle_outline: string;
            $mol_icon_checkbox_multiple_blank_outline: string;
            $mol_icon_checkbox_multiple_marked: string;
            $mol_icon_checkbox_multiple_marked_circle: string;
            $mol_icon_checkbox_multiple_marked_circle_outline: string;
            $mol_icon_checkbox_multiple_marked_outline: string;
            $mol_icon_checkerboard: string;
            $mol_icon_chef_hat: string;
            $mol_icon_chemical_weapon: string;
            $mol_icon_chess_bishop: string;
            $mol_icon_chess_king: string;
            $mol_icon_chess_knight: string;
            $mol_icon_chess_pawn: string;
            $mol_icon_chess_queen: string;
            $mol_icon_chess_rook: string;
            $mol_icon_chevron_double_down: string;
            $mol_icon_chevron_double_left: string;
            $mol_icon_chevron_double_right: string;
            $mol_icon_chevron_double_up: string;
            $mol_icon_chevron_down: string;
            $mol_icon_chevron_down_box: string;
            $mol_icon_chevron_down_box_outline: string;
            $mol_icon_chevron_down_circle: string;
            $mol_icon_chevron_down_circle_outline: string;
            $mol_icon_chevron_left: string;
            $mol_icon_chevron_left_box: string;
            $mol_icon_chevron_left_box_outline: string;
            $mol_icon_chevron_left_circle: string;
            $mol_icon_chevron_left_circle_outline: string;
            $mol_icon_chevron_right: string;
            $mol_icon_chevron_right_box: string;
            $mol_icon_chevron_right_box_outline: string;
            $mol_icon_chevron_right_circle: string;
            $mol_icon_chevron_right_circle_outline: string;
            $mol_icon_chevron_triple_down: string;
            $mol_icon_chevron_triple_left: string;
            $mol_icon_chevron_triple_right: string;
            $mol_icon_chevron_triple_up: string;
            $mol_icon_chevron_up: string;
            $mol_icon_chevron_up_box: string;
            $mol_icon_chevron_up_box_outline: string;
            $mol_icon_chevron_up_circle: string;
            $mol_icon_chevron_up_circle_outline: string;
            $mol_icon_chili_hot: string;
            $mol_icon_chili_medium: string;
            $mol_icon_chili_mild: string;
            $mol_icon_chip: string;
            $mol_icon_christianity: string;
            $mol_icon_christianity_outline: string;
            $mol_icon_church: string;
            $mol_icon_circle: string;
            $mol_icon_circle_double: string;
            $mol_icon_circle_edit_outline: string;
            $mol_icon_circle_expand: string;
            $mol_icon_circle_medium: string;
            $mol_icon_circle_outline: string;
            $mol_icon_circle_slice_1: string;
            $mol_icon_circle_slice_2: string;
            $mol_icon_circle_slice_3: string;
            $mol_icon_circle_slice_4: string;
            $mol_icon_circle_slice_5: string;
            $mol_icon_circle_slice_6: string;
            $mol_icon_circle_slice_7: string;
            $mol_icon_circle_slice_8: string;
            $mol_icon_circle_small: string;
            $mol_icon_circular_saw: string;
            $mol_icon_cisco_webex: string;
            $mol_icon_city: string;
            $mol_icon_city_variant: string;
            $mol_icon_city_variant_outline: string;
            $mol_icon_clipboard: string;
            $mol_icon_clipboard_account: string;
            $mol_icon_clipboard_account_outline: string;
            $mol_icon_clipboard_alert: string;
            $mol_icon_clipboard_alert_outline: string;
            $mol_icon_clipboard_arrow_down: string;
            $mol_icon_clipboard_arrow_down_outline: string;
            $mol_icon_clipboard_arrow_left: string;
            $mol_icon_clipboard_arrow_left_outline: string;
            $mol_icon_clipboard_arrow_right: string;
            $mol_icon_clipboard_arrow_right_outline: string;
            $mol_icon_clipboard_arrow_up: string;
            $mol_icon_clipboard_arrow_up_outline: string;
            $mol_icon_clipboard_check: string;
            $mol_icon_clipboard_check_outline: string;
            $mol_icon_clipboard_flow: string;
            $mol_icon_clipboard_outline: string;
            $mol_icon_clipboard_play: string;
            $mol_icon_clipboard_play_outline: string;
            $mol_icon_clipboard_plus: string;
            $mol_icon_clipboard_pulse: string;
            $mol_icon_clipboard_pulse_outline: string;
            $mol_icon_clipboard_text: string;
            $mol_icon_clipboard_text_outline: string;
            $mol_icon_clipboard_text_play: string;
            $mol_icon_clipboard_text_play_outline: string;
            $mol_icon_clippy: string;
            $mol_icon_clock: string;
            $mol_icon_clock_alert: string;
            $mol_icon_clock_alert_outline: string;
            $mol_icon_clock_digital: string;
            $mol_icon_clock_end: string;
            $mol_icon_clock_fast: string;
            $mol_icon_clock_in: string;
            $mol_icon_clock_out: string;
            $mol_icon_clock_outline: string;
            $mol_icon_clock_start: string;
            $mol_icon_close: string;
            $mol_icon_close_box: string;
            $mol_icon_close_box_multiple: string;
            $mol_icon_close_box_multiple_outline: string;
            $mol_icon_close_box_outline: string;
            $mol_icon_close_circle: string;
            $mol_icon_close_circle_outline: string;
            $mol_icon_close_network: string;
            $mol_icon_close_network_outline: string;
            $mol_icon_close_octagon: string;
            $mol_icon_close_octagon_outline: string;
            $mol_icon_close_outline: string;
            $mol_icon_closed_caption: string;
            $mol_icon_closed_caption_outline: string;
            $mol_icon_cloud: string;
            $mol_icon_cloud_alert: string;
            $mol_icon_cloud_braces: string;
            $mol_icon_cloud_check: string;
            $mol_icon_cloud_circle: string;
            $mol_icon_cloud_download: string;
            $mol_icon_cloud_download_outline: string;
            $mol_icon_cloud_off_outline: string;
            $mol_icon_cloud_outline: string;
            $mol_icon_cloud_print: string;
            $mol_icon_cloud_print_outline: string;
            $mol_icon_cloud_question: string;
            $mol_icon_cloud_search: string;
            $mol_icon_cloud_search_outline: string;
            $mol_icon_cloud_sync: string;
            $mol_icon_cloud_tags: string;
            $mol_icon_cloud_upload: string;
            $mol_icon_cloud_upload_outline: string;
            $mol_icon_clover: string;
            $mol_icon_code_array: string;
            $mol_icon_code_braces: string;
            $mol_icon_code_brackets: string;
            $mol_icon_code_equal: string;
            $mol_icon_code_greater_than: string;
            $mol_icon_code_greater_than_or_equal: string;
            $mol_icon_code_less_than: string;
            $mol_icon_code_less_than_or_equal: string;
            $mol_icon_code_not_equal: string;
            $mol_icon_code_not_equal_variant: string;
            $mol_icon_code_parentheses: string;
            $mol_icon_code_string: string;
            $mol_icon_code_tags: string;
            $mol_icon_code_tags_check: string;
            $mol_icon_codepen: string;
            $mol_icon_coffee: string;
            $mol_icon_coffee_outline: string;
            $mol_icon_coffee_to_go: string;
            $mol_icon_coffin: string;
            $mol_icon_cogs: string;
            $mol_icon_coin: string;
            $mol_icon_coins: string;
            $mol_icon_collage: string;
            $mol_icon_collapse_all: string;
            $mol_icon_collapse_all_outline: string;
            $mol_icon_color_helper: string;
            $mol_icon_comma: string;
            $mol_icon_comma_box: string;
            $mol_icon_comma_box_outline: string;
            $mol_icon_comma_circle: string;
            $mol_icon_comma_circle_outline: string;
            $mol_icon_comment: string;
            $mol_icon_comment_account: string;
            $mol_icon_comment_account_outline: string;
            $mol_icon_comment_alert: string;
            $mol_icon_comment_alert_outline: string;
            $mol_icon_comment_arrow_left: string;
            $mol_icon_comment_arrow_left_outline: string;
            $mol_icon_comment_arrow_right: string;
            $mol_icon_comment_arrow_right_outline: string;
            $mol_icon_comment_check: string;
            $mol_icon_comment_check_outline: string;
            $mol_icon_comment_eye: string;
            $mol_icon_comment_eye_outline: string;
            $mol_icon_comment_multiple: string;
            $mol_icon_comment_multiple_outline: string;
            $mol_icon_comment_outline: string;
            $mol_icon_comment_plus: string;
            $mol_icon_comment_plus_outline: string;
            $mol_icon_comment_processing: string;
            $mol_icon_comment_processing_outline: string;
            $mol_icon_comment_question: string;
            $mol_icon_comment_question_outline: string;
            $mol_icon_comment_remove: string;
            $mol_icon_comment_remove_outline: string;
            $mol_icon_comment_search: string;
            $mol_icon_comment_search_outline: string;
            $mol_icon_comment_text: string;
            $mol_icon_comment_text_multiple: string;
            $mol_icon_comment_text_multiple_outline: string;
            $mol_icon_comment_text_outline: string;
            $mol_icon_compare: string;
            $mol_icon_compass: string;
            $mol_icon_compass_off: string;
            $mol_icon_compass_off_outline: string;
            $mol_icon_compass_outline: string;
            $mol_icon_console: string;
            $mol_icon_console_line: string;
            $mol_icon_console_network: string;
            $mol_icon_console_network_outline: string;
            $mol_icon_contact_mail: string;
            $mol_icon_contact_mail_outline: string;
            $mol_icon_contact_phone: string;
            $mol_icon_contact_phone_outline: string;
            $mol_icon_contactless_payment: string;
            $mol_icon_contacts: string;
            $mol_icon_contain: string;
            $mol_icon_contain_end: string;
            $mol_icon_contain_start: string;
            $mol_icon_content_copy: string;
            $mol_icon_content_cut: string;
            $mol_icon_content_duplicate: string;
            $mol_icon_content_paste: string;
            $mol_icon_content_save: string;
            $mol_icon_content_save_all: string;
            $mol_icon_content_save_edit: string;
            $mol_icon_content_save_edit_outline: string;
            $mol_icon_content_save_move: string;
            $mol_icon_content_save_move_outline: string;
            $mol_icon_content_save_outline: string;
            $mol_icon_content_save_settings: string;
            $mol_icon_content_save_settings_outline: string;
            $mol_icon_contrast: string;
            $mol_icon_contrast_box: string;
            $mol_icon_contrast_circle: string;
            $mol_icon_controller_classic: string;
            $mol_icon_controller_classic_outline: string;
            $mol_icon_cookie: string;
            $mol_icon_copyright: string;
            $mol_icon_cordova: string;
            $mol_icon_corn: string;
            $mol_icon_counter: string;
            $mol_icon_cow: string;
            $mol_icon_cowboy: string;
            $mol_icon_cpu_32_bit: string;
            $mol_icon_cpu_64_bit: string;
            $mol_icon_crane: string;
            $mol_icon_creation: string;
            $mol_icon_creative_commons: string;
            $mol_icon_credit_card: string;
            $mol_icon_credit_card_clock: string;
            $mol_icon_credit_card_clock_outline: string;
            $mol_icon_credit_card_marker: string;
            $mol_icon_credit_card_multiple: string;
            $mol_icon_credit_card_off: string;
            $mol_icon_credit_card_plus: string;
            $mol_icon_credit_card_refund: string;
            $mol_icon_credit_card_scan: string;
            $mol_icon_credit_card_settings: string;
            $mol_icon_credit_card_wireless: string;
            $mol_icon_cricket: string;
            $mol_icon_crop: string;
            $mol_icon_crop_free: string;
            $mol_icon_crop_landscape: string;
            $mol_icon_crop_portrait: string;
            $mol_icon_crop_rotate: string;
            $mol_icon_crop_square: string;
            $mol_icon_crosshairs: string;
            $mol_icon_crosshairs_gps: string;
            $mol_icon_crown: string;
            $mol_icon_cryengine: string;
            $mol_icon_crystal_ball: string;
            $mol_icon_cube: string;
            $mol_icon_cube_outline: string;
            $mol_icon_cube_scan: string;
            $mol_icon_cube_send: string;
            $mol_icon_cube_unfolded: string;
            $mol_icon_cup: string;
            $mol_icon_cup_off: string;
            $mol_icon_cup_water: string;
            $mol_icon_cupcake: string;
            $mol_icon_curling: string;
            $mol_icon_currency_bdt: string;
            $mol_icon_currency_brl: string;
            $mol_icon_currency_btc: string;
            $mol_icon_currency_chf: string;
            $mol_icon_currency_cny: string;
            $mol_icon_currency_eth: string;
            $mol_icon_currency_eur: string;
            $mol_icon_currency_gbp: string;
            $mol_icon_currency_ils: string;
            $mol_icon_currency_inr: string;
            $mol_icon_currency_jpy: string;
            $mol_icon_currency_krw: string;
            $mol_icon_currency_kzt: string;
            $mol_icon_currency_ngn: string;
            $mol_icon_currency_php: string;
            $mol_icon_currency_rial: string;
            $mol_icon_currency_rub: string;
            $mol_icon_currency_sign: string;
            $mol_icon_currency_try: string;
            $mol_icon_currency_twd: string;
            $mol_icon_currency_usd: string;
            $mol_icon_currency_usd_off: string;
            $mol_icon_current_ac: string;
            $mol_icon_current_dc: string;
            $mol_icon_cursor_default: string;
            $mol_icon_cursor_default_click: string;
            $mol_icon_cursor_default_click_outline: string;
            $mol_icon_cursor_default_outline: string;
            $mol_icon_cursor_move: string;
            $mol_icon_cursor_pointer: string;
            $mol_icon_cursor_text: string;
            $mol_icon_database: string;
            $mol_icon_database_check: string;
            $mol_icon_database_edit: string;
            $mol_icon_database_export: string;
            $mol_icon_database_import: string;
            $mol_icon_database_lock: string;
            $mol_icon_database_minus: string;
            $mol_icon_database_plus: string;
            $mol_icon_database_refresh: string;
            $mol_icon_database_remove: string;
            $mol_icon_database_search: string;
            $mol_icon_database_settings: string;
            $mol_icon_death_star: string;
            $mol_icon_death_star_variant: string;
            $mol_icon_deathly_hallows: string;
            $mol_icon_debian: string;
            $mol_icon_debug_step_into: string;
            $mol_icon_debug_step_out: string;
            $mol_icon_debug_step_over: string;
            $mol_icon_decagram: string;
            $mol_icon_decagram_outline: string;
            $mol_icon_decimal_decrease: string;
            $mol_icon_decimal_increase: string;
            $mol_icon_delete: string;
            $mol_icon_delete_circle: string;
            $mol_icon_delete_circle_outline: string;
            $mol_icon_delete_empty: string;
            $mol_icon_delete_empty_outline: string;
            $mol_icon_delete_forever: string;
            $mol_icon_delete_forever_outline: string;
            $mol_icon_delete_outline: string;
            $mol_icon_delete_restore: string;
            $mol_icon_delete_sweep: string;
            $mol_icon_delete_sweep_outline: string;
            $mol_icon_delete_variant: string;
            $mol_icon_delta: string;
            $mol_icon_desk_lamp: string;
            $mol_icon_deskphone: string;
            $mol_icon_desktop_classic: string;
            $mol_icon_desktop_mac: string;
            $mol_icon_desktop_mac_dashboard: string;
            $mol_icon_desktop_tower: string;
            $mol_icon_desktop_tower_monitor: string;
            $mol_icon_details: string;
            $mol_icon_dev_to: string;
            $mol_icon_developer_board: string;
            $mol_icon_deviantart: string;
            $mol_icon_dialpad: string;
            $mol_icon_diameter: string;
            $mol_icon_diameter_outline: string;
            $mol_icon_diameter_variant: string;
            $mol_icon_diamond: string;
            $mol_icon_diamond_outline: string;
            $mol_icon_diamond_stone: string;
            $mol_icon_dice_1: string;
            $mol_icon_dice_2: string;
            $mol_icon_dice_3: string;
            $mol_icon_dice_4: string;
            $mol_icon_dice_5: string;
            $mol_icon_dice_6: string;
            $mol_icon_dice_d10: string;
            $mol_icon_dice_d12: string;
            $mol_icon_dice_d20: string;
            $mol_icon_dice_d4: string;
            $mol_icon_dice_d6: string;
            $mol_icon_dice_d8: string;
            $mol_icon_dice_multiple: string;
            $mol_icon_dictionary: string;
            $mol_icon_dip_switch: string;
            $mol_icon_directions: string;
            $mol_icon_directions_fork: string;
            $mol_icon_disc: string;
            $mol_icon_disc_alert: string;
            $mol_icon_disc_player: string;
            $mol_icon_discord: string;
            $mol_icon_dishwasher: string;
            $mol_icon_disqus: string;
            $mol_icon_disqus_outline: string;
            $mol_icon_diving_flippers: string;
            $mol_icon_diving_helmet: string;
            $mol_icon_diving_scuba: string;
            $mol_icon_diving_scuba_flag: string;
            $mol_icon_diving_scuba_tank: string;
            $mol_icon_diving_scuba_tank_multiple: string;
            $mol_icon_diving_snorkel: string;
            $mol_icon_division: string;
            $mol_icon_division_box: string;
            $mol_icon_dlna: string;
            $mol_icon_dna: string;
            $mol_icon_dns: string;
            $mol_icon_dns_outline: string;
            $mol_icon_do_not_disturb: string;
            $mol_icon_do_not_disturb_off: string;
            $mol_icon_docker: string;
            $mol_icon_doctor: string;
            $mol_icon_dog: string;
            $mol_icon_dog_service: string;
            $mol_icon_dog_side: string;
            $mol_icon_dolby: string;
            $mol_icon_dolly: string;
            $mol_icon_domain: string;
            $mol_icon_domain_off: string;
            $mol_icon_donkey: string;
            $mol_icon_door: string;
            $mol_icon_door_closed: string;
            $mol_icon_door_open: string;
            $mol_icon_doorbell_video: string;
            $mol_icon_dot_net: string;
            $mol_icon_dots_horizontal: string;
            $mol_icon_dots_horizontal_circle: string;
            $mol_icon_dots_horizontal_circle_outline: string;
            $mol_icon_dots_vertical: string;
            $mol_icon_dots_vertical_circle: string;
            $mol_icon_dots_vertical_circle_outline: string;
            $mol_icon_douban: string;
            $mol_icon_download: string;
            $mol_icon_download_multiple: string;
            $mol_icon_download_network: string;
            $mol_icon_download_network_outline: string;
            $mol_icon_download_outline: string;
            $mol_icon_drag: string;
            $mol_icon_drag_horizontal: string;
            $mol_icon_drag_variant: string;
            $mol_icon_drag_vertical: string;
            $mol_icon_drama_masks: string;
            $mol_icon_drawing: string;
            $mol_icon_drawing_box: string;
            $mol_icon_dribbble: string;
            $mol_icon_dribbble_box: string;
            $mol_icon_drone: string;
            $mol_icon_dropbox: string;
            $mol_icon_drupal: string;
            $mol_icon_duck: string;
            $mol_icon_dumbbell: string;
            $mol_icon_dump_truck: string;
            $mol_icon_ear_hearing: string;
            $mol_icon_ear_hearing_off: string;
            $mol_icon_earth: string;
            $mol_icon_earth_box: string;
            $mol_icon_earth_box_off: string;
            $mol_icon_earth_off: string;
            $mol_icon_edge: string;
            $mol_icon_egg: string;
            $mol_icon_egg_easter: string;
            $mol_icon_eight_track: string;
            $mol_icon_eject: string;
            $mol_icon_eject_outline: string;
            $mol_icon_electric_switch: string;
            $mol_icon_elephant: string;
            $mol_icon_elevation_decline: string;
            $mol_icon_elevation_rise: string;
            $mol_icon_elevator: string;
            $mol_icon_ellipse: string;
            $mol_icon_ellipse_outline: string;
            $mol_icon_email: string;
            $mol_icon_email_alert: string;
            $mol_icon_email_box: string;
            $mol_icon_email_check: string;
            $mol_icon_email_check_outline: string;
            $mol_icon_email_edit: string;
            $mol_icon_email_edit_outline: string;
            $mol_icon_email_lock: string;
            $mol_icon_email_mark_as_unread: string;
            $mol_icon_email_minus: string;
            $mol_icon_email_minus_outline: string;
            $mol_icon_email_multiple: string;
            $mol_icon_email_multiple_outline: string;
            $mol_icon_email_open: string;
            $mol_icon_email_open_multiple: string;
            $mol_icon_email_open_multiple_outline: string;
            $mol_icon_email_open_outline: string;
            $mol_icon_email_outline: string;
            $mol_icon_email_plus: string;
            $mol_icon_email_plus_outline: string;
            $mol_icon_email_search: string;
            $mol_icon_email_search_outline: string;
            $mol_icon_email_variant: string;
            $mol_icon_ember: string;
            $mol_icon_emby: string;
            $mol_icon_emoticon: string;
            $mol_icon_emoticon_angry: string;
            $mol_icon_emoticon_angry_outline: string;
            $mol_icon_emoticon_cool: string;
            $mol_icon_emoticon_cool_outline: string;
            $mol_icon_emoticon_cry: string;
            $mol_icon_emoticon_cry_outline: string;
            $mol_icon_emoticon_dead: string;
            $mol_icon_emoticon_dead_outline: string;
            $mol_icon_emoticon_devil: string;
            $mol_icon_emoticon_devil_outline: string;
            $mol_icon_emoticon_excited: string;
            $mol_icon_emoticon_excited_outline: string;
            $mol_icon_emoticon_happy: string;
            $mol_icon_emoticon_happy_outline: string;
            $mol_icon_emoticon_kiss: string;
            $mol_icon_emoticon_kiss_outline: string;
            $mol_icon_emoticon_neutral: string;
            $mol_icon_emoticon_neutral_outline: string;
            $mol_icon_emoticon_outline: string;
            $mol_icon_emoticon_poop: string;
            $mol_icon_emoticon_poop_outline: string;
            $mol_icon_emoticon_sad: string;
            $mol_icon_emoticon_sad_outline: string;
            $mol_icon_emoticon_tongue: string;
            $mol_icon_emoticon_tongue_outline: string;
            $mol_icon_emoticon_wink: string;
            $mol_icon_emoticon_wink_outline: string;
            $mol_icon_engine: string;
            $mol_icon_engine_off: string;
            $mol_icon_engine_off_outline: string;
            $mol_icon_engine_outline: string;
            $mol_icon_equal: string;
            $mol_icon_equal_box: string;
            $mol_icon_equalizer: string;
            $mol_icon_equalizer_outline: string;
            $mol_icon_eraser: string;
            $mol_icon_eraser_variant: string;
            $mol_icon_escalator: string;
            $mol_icon_eslint: string;
            $mol_icon_et: string;
            $mol_icon_ethereum: string;
            $mol_icon_ethernet: string;
            $mol_icon_ethernet_cable: string;
            $mol_icon_ethernet_cable_off: string;
            $mol_icon_etsy: string;
            $mol_icon_ev_station: string;
            $mol_icon_eventbrite: string;
            $mol_icon_evernote: string;
            $mol_icon_exclamation: string;
            $mol_icon_exit_run: string;
            $mol_icon_exit_to_app: string;
            $mol_icon_expand_all: string;
            $mol_icon_expand_all_outline: string;
            $mol_icon_exponent: string;
            $mol_icon_exponent_box: string;
            $mol_icon_export: string;
            $mol_icon_export_variant: string;
            $mol_icon_eye: string;
            $mol_icon_eye_check: string;
            $mol_icon_eye_check_outline: string;
            $mol_icon_eye_circle: string;
            $mol_icon_eye_circle_outline: string;
            $mol_icon_eye_off: string;
            $mol_icon_eye_off_outline: string;
            $mol_icon_eye_outline: string;
            $mol_icon_eye_plus: string;
            $mol_icon_eye_plus_outline: string;
            $mol_icon_eye_settings: string;
            $mol_icon_eye_settings_outline: string;
            $mol_icon_eyedropper: string;
            $mol_icon_eyedropper_variant: string;
            $mol_icon_face: string;
            $mol_icon_face_agent: string;
            $mol_icon_face_outline: string;
            $mol_icon_face_profile: string;
            $mol_icon_face_recognition: string;
            $mol_icon_facebook: string;
            $mol_icon_facebook_box: string;
            $mol_icon_facebook_messenger: string;
            $mol_icon_facebook_workplace: string;
            $mol_icon_factory: string;
            $mol_icon_fan: string;
            $mol_icon_fan_off: string;
            $mol_icon_fast_forward: string;
            $mol_icon_fast_forward_10: string;
            $mol_icon_fast_forward_30: string;
            $mol_icon_fast_forward_outline: string;
            $mol_icon_fax: string;
            $mol_icon_feather: string;
            $mol_icon_feature_search: string;
            $mol_icon_feature_search_outline: string;
            $mol_icon_fedora: string;
            $mol_icon_ferris_wheel: string;
            $mol_icon_ferry: string;
            $mol_icon_file: string;
            $mol_icon_file_account: string;
            $mol_icon_file_alert: string;
            $mol_icon_file_alert_outline: string;
            $mol_icon_file_cabinet: string;
            $mol_icon_file_cad: string;
            $mol_icon_file_cad_box: string;
            $mol_icon_file_cancel: string;
            $mol_icon_file_cancel_outline: string;
            $mol_icon_file_chart: string;
            $mol_icon_file_check: string;
            $mol_icon_file_check_outline: string;
            $mol_icon_file_cloud: string;
            $mol_icon_file_compare: string;
            $mol_icon_file_delimited: string;
            $mol_icon_file_delimited_outline: string;
            $mol_icon_file_document: string;
            $mol_icon_file_document_box: string;
            $mol_icon_file_document_box_check: string;
            $mol_icon_file_document_box_check_outline: string;
            $mol_icon_file_document_box_minus: string;
            $mol_icon_file_document_box_minus_outline: string;
            $mol_icon_file_document_box_multiple: string;
            $mol_icon_file_document_box_multiple_outline: string;
            $mol_icon_file_document_box_outline: string;
            $mol_icon_file_document_box_plus: string;
            $mol_icon_file_document_box_plus_outline: string;
            $mol_icon_file_document_box_remove: string;
            $mol_icon_file_document_box_remove_outline: string;
            $mol_icon_file_document_box_search: string;
            $mol_icon_file_document_box_search_outline: string;
            $mol_icon_file_document_edit: string;
            $mol_icon_file_document_edit_outline: string;
            $mol_icon_file_document_outline: string;
            $mol_icon_file_download: string;
            $mol_icon_file_download_outline: string;
            $mol_icon_file_excel: string;
            $mol_icon_file_excel_box: string;
            $mol_icon_file_export: string;
            $mol_icon_file_eye: string;
            $mol_icon_file_eye_outline: string;
            $mol_icon_file_find: string;
            $mol_icon_file_find_outline: string;
            $mol_icon_file_hidden: string;
            $mol_icon_file_image: string;
            $mol_icon_file_image_outline: string;
            $mol_icon_file_import: string;
            $mol_icon_file_lock: string;
            $mol_icon_file_move: string;
            $mol_icon_file_multiple: string;
            $mol_icon_file_music: string;
            $mol_icon_file_music_outline: string;
            $mol_icon_file_outline: string;
            $mol_icon_file_pdf: string;
            $mol_icon_file_pdf_box: string;
            $mol_icon_file_pdf_outline: string;
            $mol_icon_file_percent: string;
            $mol_icon_file_plus: string;
            $mol_icon_file_plus_outline: string;
            $mol_icon_file_powerpoint: string;
            $mol_icon_file_powerpoint_box: string;
            $mol_icon_file_presentation_box: string;
            $mol_icon_file_question: string;
            $mol_icon_file_remove: string;
            $mol_icon_file_replace: string;
            $mol_icon_file_replace_outline: string;
            $mol_icon_file_restore: string;
            $mol_icon_file_search: string;
            $mol_icon_file_search_outline: string;
            $mol_icon_file_send: string;
            $mol_icon_file_table: string;
            $mol_icon_file_table_outline: string;
            $mol_icon_file_tree: string;
            $mol_icon_file_undo: string;
            $mol_icon_file_upload: string;
            $mol_icon_file_upload_outline: string;
            $mol_icon_file_video: string;
            $mol_icon_file_video_outline: string;
            $mol_icon_file_word: string;
            $mol_icon_file_word_box: string;
            $mol_icon_file_xml: string;
            $mol_icon_film: string;
            $mol_icon_filmstrip: string;
            $mol_icon_filmstrip_off: string;
            $mol_icon_filter: string;
            $mol_icon_filter_minus: string;
            $mol_icon_filter_minus_outline: string;
            $mol_icon_filter_outline: string;
            $mol_icon_filter_plus: string;
            $mol_icon_filter_plus_outline: string;
            $mol_icon_filter_remove: string;
            $mol_icon_filter_remove_outline: string;
            $mol_icon_filter_variant: string;
            $mol_icon_finance: string;
            $mol_icon_find_replace: string;
            $mol_icon_fingerprint: string;
            $mol_icon_fingerprint_off: string;
            $mol_icon_fire: string;
            $mol_icon_fire_extinguisher: string;
            $mol_icon_fire_truck: string;
            $mol_icon_firebase: string;
            $mol_icon_firefox: string;
            $mol_icon_fireplace: string;
            $mol_icon_fireplace_off: string;
            $mol_icon_firework: string;
            $mol_icon_fish: string;
            $mol_icon_fishbowl: string;
            $mol_icon_fishbowl_outline: string;
            $mol_icon_fit_to_page: string;
            $mol_icon_fit_to_page_outline: string;
            $mol_icon_flag: string;
            $mol_icon_flag_checkered: string;
            $mol_icon_flag_minus: string;
            $mol_icon_flag_outline: string;
            $mol_icon_flag_plus: string;
            $mol_icon_flag_remove: string;
            $mol_icon_flag_triangle: string;
            $mol_icon_flag_variant: string;
            $mol_icon_flag_variant_outline: string;
            $mol_icon_flare: string;
            $mol_icon_flash: string;
            $mol_icon_flash_alert: string;
            $mol_icon_flash_alert_outline: string;
            $mol_icon_flash_auto: string;
            $mol_icon_flash_circle: string;
            $mol_icon_flash_off: string;
            $mol_icon_flash_outline: string;
            $mol_icon_flash_red_eye: string;
            $mol_icon_flashlight: string;
            $mol_icon_flashlight_off: string;
            $mol_icon_flask: string;
            $mol_icon_flask_empty: string;
            $mol_icon_flask_empty_outline: string;
            $mol_icon_flask_outline: string;
            $mol_icon_flattr: string;
            $mol_icon_flickr: string;
            $mol_icon_flip_to_back: string;
            $mol_icon_flip_to_front: string;
            $mol_icon_floor_lamp: string;
            $mol_icon_floor_plan: string;
            $mol_icon_floppy: string;
            $mol_icon_floppy_variant: string;
            $mol_icon_flower: string;
            $mol_icon_flower_outline: string;
            $mol_icon_flower_poppy: string;
            $mol_icon_flower_tulip: string;
            $mol_icon_flower_tulip_outline: string;
            $mol_icon_folder: string;
            $mol_icon_folder_account: string;
            $mol_icon_folder_account_outline: string;
            $mol_icon_folder_alert: string;
            $mol_icon_folder_alert_outline: string;
            $mol_icon_folder_clock: string;
            $mol_icon_folder_clock_outline: string;
            $mol_icon_folder_download: string;
            $mol_icon_folder_edit: string;
            $mol_icon_folder_edit_outline: string;
            $mol_icon_folder_google_drive: string;
            $mol_icon_folder_image: string;
            $mol_icon_folder_key: string;
            $mol_icon_folder_key_network: string;
            $mol_icon_folder_key_network_outline: string;
            $mol_icon_folder_lock: string;
            $mol_icon_folder_lock_open: string;
            $mol_icon_folder_move: string;
            $mol_icon_folder_multiple: string;
            $mol_icon_folder_multiple_image: string;
            $mol_icon_folder_multiple_outline: string;
            $mol_icon_folder_network: string;
            $mol_icon_folder_network_outline: string;
            $mol_icon_folder_open: string;
            $mol_icon_folder_open_outline: string;
            $mol_icon_folder_outline: string;
            $mol_icon_folder_plus: string;
            $mol_icon_folder_plus_outline: string;
            $mol_icon_folder_pound: string;
            $mol_icon_folder_pound_outline: string;
            $mol_icon_folder_remove: string;
            $mol_icon_folder_remove_outline: string;
            $mol_icon_folder_search: string;
            $mol_icon_folder_search_outline: string;
            $mol_icon_folder_star: string;
            $mol_icon_folder_star_outline: string;
            $mol_icon_folder_sync: string;
            $mol_icon_folder_sync_outline: string;
            $mol_icon_folder_text: string;
            $mol_icon_folder_text_outline: string;
            $mol_icon_folder_upload: string;
            $mol_icon_font_awesome: string;
            $mol_icon_food: string;
            $mol_icon_food_apple: string;
            $mol_icon_food_apple_outline: string;
            $mol_icon_food_croissant: string;
            $mol_icon_food_fork_drink: string;
            $mol_icon_food_off: string;
            $mol_icon_food_variant: string;
            $mol_icon_football: string;
            $mol_icon_football_australian: string;
            $mol_icon_football_helmet: string;
            $mol_icon_forklift: string;
            $mol_icon_format_align_bottom: string;
            $mol_icon_format_align_center: string;
            $mol_icon_format_align_justify: string;
            $mol_icon_format_align_left: string;
            $mol_icon_format_align_middle: string;
            $mol_icon_format_align_right: string;
            $mol_icon_format_align_top: string;
            $mol_icon_format_annotation_minus: string;
            $mol_icon_format_annotation_plus: string;
            $mol_icon_format_bold: string;
            $mol_icon_format_clear: string;
            $mol_icon_format_color_fill: string;
            $mol_icon_format_color_highlight: string;
            $mol_icon_format_color_text: string;
            $mol_icon_format_columns: string;
            $mol_icon_format_float_center: string;
            $mol_icon_format_float_left: string;
            $mol_icon_format_float_none: string;
            $mol_icon_format_float_right: string;
            $mol_icon_format_font: string;
            $mol_icon_format_font_size_decrease: string;
            $mol_icon_format_font_size_increase: string;
            $mol_icon_format_header_1: string;
            $mol_icon_format_header_2: string;
            $mol_icon_format_header_3: string;
            $mol_icon_format_header_4: string;
            $mol_icon_format_header_5: string;
            $mol_icon_format_header_6: string;
            $mol_icon_format_header_decrease: string;
            $mol_icon_format_header_equal: string;
            $mol_icon_format_header_increase: string;
            $mol_icon_format_header_pound: string;
            $mol_icon_format_horizontal_align_center: string;
            $mol_icon_format_horizontal_align_left: string;
            $mol_icon_format_horizontal_align_right: string;
            $mol_icon_format_indent_decrease: string;
            $mol_icon_format_indent_increase: string;
            $mol_icon_format_italic: string;
            $mol_icon_format_letter_case: string;
            $mol_icon_format_letter_case_lower: string;
            $mol_icon_format_letter_case_upper: string;
            $mol_icon_format_line_spacing: string;
            $mol_icon_format_line_style: string;
            $mol_icon_format_line_weight: string;
            $mol_icon_format_list_bulleted: string;
            $mol_icon_format_list_bulleted_square: string;
            $mol_icon_format_list_bulleted_type: string;
            $mol_icon_format_list_checkbox: string;
            $mol_icon_format_list_checks: string;
            $mol_icon_format_list_numbered: string;
            $mol_icon_format_list_numbered_rtl: string;
            $mol_icon_format_list_triangle: string;
            $mol_icon_format_overline: string;
            $mol_icon_format_page_break: string;
            $mol_icon_format_paint: string;
            $mol_icon_format_paragraph: string;
            $mol_icon_format_pilcrow: string;
            $mol_icon_format_quote_close: string;
            $mol_icon_format_quote_open: string;
            $mol_icon_format_rotate_90: string;
            $mol_icon_format_section: string;
            $mol_icon_format_size: string;
            $mol_icon_format_strikethrough: string;
            $mol_icon_format_strikethrough_variant: string;
            $mol_icon_format_subscript: string;
            $mol_icon_format_superscript: string;
            $mol_icon_format_text: string;
            $mol_icon_format_text_rotation_down: string;
            $mol_icon_format_text_rotation_none: string;
            $mol_icon_format_text_variant: string;
            $mol_icon_format_text_wrapping_clip: string;
            $mol_icon_format_text_wrapping_overflow: string;
            $mol_icon_format_text_wrapping_wrap: string;
            $mol_icon_format_textbox: string;
            $mol_icon_format_textdirection_l_to_r: string;
            $mol_icon_format_textdirection_r_to_l: string;
            $mol_icon_format_title: string;
            $mol_icon_format_underline: string;
            $mol_icon_format_vertical_align_bottom: string;
            $mol_icon_format_vertical_align_center: string;
            $mol_icon_format_vertical_align_top: string;
            $mol_icon_format_wrap_inline: string;
            $mol_icon_format_wrap_square: string;
            $mol_icon_format_wrap_tight: string;
            $mol_icon_format_wrap_top_bottom: string;
            $mol_icon_forum: string;
            $mol_icon_forum_outline: string;
            $mol_icon_forward: string;
            $mol_icon_forwardburger: string;
            $mol_icon_fountain: string;
            $mol_icon_fountain_pen: string;
            $mol_icon_fountain_pen_tip: string;
            $mol_icon_foursquare: string;
            $mol_icon_freebsd: string;
            $mol_icon_frequently_asked_questions: string;
            $mol_icon_fridge: string;
            $mol_icon_fridge_bottom: string;
            $mol_icon_fridge_outline: string;
            $mol_icon_fridge_top: string;
            $mol_icon_fuel: string;
            $mol_icon_fullscreen: string;
            $mol_icon_fullscreen_exit: string;
            $mol_icon_function: string;
            $mol_icon_function_variant: string;
            $mol_icon_fuse: string;
            $mol_icon_fuse_blade: string;
            $mol_icon_gamepad: string;
            $mol_icon_gamepad_circle: string;
            $mol_icon_gamepad_circle_down: string;
            $mol_icon_gamepad_circle_left: string;
            $mol_icon_gamepad_circle_outline: string;
            $mol_icon_gamepad_circle_right: string;
            $mol_icon_gamepad_circle_up: string;
            $mol_icon_gamepad_down: string;
            $mol_icon_gamepad_left: string;
            $mol_icon_gamepad_right: string;
            $mol_icon_gamepad_round: string;
            $mol_icon_gamepad_round_down: string;
            $mol_icon_gamepad_round_left: string;
            $mol_icon_gamepad_round_outline: string;
            $mol_icon_gamepad_round_right: string;
            $mol_icon_gamepad_round_up: string;
            $mol_icon_gamepad_square: string;
            $mol_icon_gamepad_square_outline: string;
            $mol_icon_gamepad_up: string;
            $mol_icon_gamepad_variant: string;
            $mol_icon_gamepad_variant_outline: string;
            $mol_icon_gantry_crane: string;
            $mol_icon_garage: string;
            $mol_icon_garage_alert: string;
            $mol_icon_garage_open: string;
            $mol_icon_gas_cylinder: string;
            $mol_icon_gas_station: string;
            $mol_icon_gas_station_outline: string;
            $mol_icon_gate: string;
            $mol_icon_gate_and: string;
            $mol_icon_gate_nand: string;
            $mol_icon_gate_nor: string;
            $mol_icon_gate_not: string;
            $mol_icon_gate_or: string;
            $mol_icon_gate_xnor: string;
            $mol_icon_gate_xor: string;
            $mol_icon_gatsby: string;
            $mol_icon_gauge: string;
            $mol_icon_gauge_empty: string;
            $mol_icon_gauge_full: string;
            $mol_icon_gauge_low: string;
            $mol_icon_gavel: string;
            $mol_icon_gender_female: string;
            $mol_icon_gender_male: string;
            $mol_icon_gender_male_female: string;
            $mol_icon_gender_transgender: string;
            $mol_icon_gentoo: string;
            $mol_icon_gesture: string;
            $mol_icon_gesture_double_tap: string;
            $mol_icon_gesture_pinch: string;
            $mol_icon_gesture_spread: string;
            $mol_icon_gesture_swipe: string;
            $mol_icon_gesture_swipe_down: string;
            $mol_icon_gesture_swipe_horizontal: string;
            $mol_icon_gesture_swipe_left: string;
            $mol_icon_gesture_swipe_right: string;
            $mol_icon_gesture_swipe_up: string;
            $mol_icon_gesture_swipe_vertical: string;
            $mol_icon_gesture_tap: string;
            $mol_icon_gesture_tap_hold: string;
            $mol_icon_gesture_two_double_tap: string;
            $mol_icon_gesture_two_tap: string;
            $mol_icon_ghost: string;
            $mol_icon_ghost_off: string;
            $mol_icon_gif: string;
            $mol_icon_gift: string;
            $mol_icon_gift_outline: string;
            $mol_icon_git: string;
            $mol_icon_github_box: string;
            $mol_icon_github_circle: string;
            $mol_icon_github_face: string;
            $mol_icon_gitlab: string;
            $mol_icon_glass_cocktail: string;
            $mol_icon_glass_flute: string;
            $mol_icon_glass_mug: string;
            $mol_icon_glass_stange: string;
            $mol_icon_glass_tulip: string;
            $mol_icon_glass_wine: string;
            $mol_icon_glassdoor: string;
            $mol_icon_glasses: string;
            $mol_icon_globe_model: string;
            $mol_icon_gmail: string;
            $mol_icon_gnome: string;
            $mol_icon_go_kart: string;
            $mol_icon_go_kart_track: string;
            $mol_icon_gog: string;
            $mol_icon_golf: string;
            $mol_icon_gondola: string;
            $mol_icon_goodreads: string;
            $mol_icon_google: string;
            $mol_icon_google_adwords: string;
            $mol_icon_google_allo: string;
            $mol_icon_google_analytics: string;
            $mol_icon_google_assistant: string;
            $mol_icon_google_cardboard: string;
            $mol_icon_google_chrome: string;
            $mol_icon_google_circles: string;
            $mol_icon_google_circles_communities: string;
            $mol_icon_google_circles_extended: string;
            $mol_icon_google_circles_group: string;
            $mol_icon_google_classroom: string;
            $mol_icon_google_controller: string;
            $mol_icon_google_controller_off: string;
            $mol_icon_google_drive: string;
            $mol_icon_google_earth: string;
            $mol_icon_google_fit: string;
            $mol_icon_google_glass: string;
            $mol_icon_google_hangouts: string;
            $mol_icon_google_home: string;
            $mol_icon_google_keep: string;
            $mol_icon_google_lens: string;
            $mol_icon_google_maps: string;
            $mol_icon_google_nearby: string;
            $mol_icon_google_pages: string;
            $mol_icon_google_photos: string;
            $mol_icon_google_physical_web: string;
            $mol_icon_google_play: string;
            $mol_icon_google_plus: string;
            $mol_icon_google_plus_box: string;
            $mol_icon_google_podcast: string;
            $mol_icon_google_spreadsheet: string;
            $mol_icon_google_street_view: string;
            $mol_icon_google_translate: string;
            $mol_icon_gpu: string;
            $mol_icon_gradient: string;
            $mol_icon_grain: string;
            $mol_icon_graphql: string;
            $mol_icon_grave_stone: string;
            $mol_icon_grease_pencil: string;
            $mol_icon_greater_than: string;
            $mol_icon_greater_than_or_equal: string;
            $mol_icon_grid: string;
            $mol_icon_grid_large: string;
            $mol_icon_grid_off: string;
            $mol_icon_grill: string;
            $mol_icon_group: string;
            $mol_icon_guitar_acoustic: string;
            $mol_icon_guitar_electric: string;
            $mol_icon_guitar_pick: string;
            $mol_icon_guitar_pick_outline: string;
            $mol_icon_guy_fawkes_mask: string;
            $mol_icon_hackernews: string;
            $mol_icon_hail: string;
            $mol_icon_halloween: string;
            $mol_icon_hamburger: string;
            $mol_icon_hammer: string;
            $mol_icon_hand: string;
            $mol_icon_hand_left: string;
            $mol_icon_hand_okay: string;
            $mol_icon_hand_peace: string;
            $mol_icon_hand_peace_variant: string;
            $mol_icon_hand_pointing_down: string;
            $mol_icon_hand_pointing_left: string;
            $mol_icon_hand_pointing_right: string;
            $mol_icon_hand_pointing_up: string;
            $mol_icon_hand_right: string;
            $mol_icon_hand_saw: string;
            $mol_icon_hanger: string;
            $mol_icon_hard_hat: string;
            $mol_icon_harddisk: string;
            $mol_icon_hat_fedora: string;
            $mol_icon_hazard_lights: string;
            $mol_icon_hdr: string;
            $mol_icon_hdr_off: string;
            $mol_icon_headphones: string;
            $mol_icon_headphones_bluetooth: string;
            $mol_icon_headphones_box: string;
            $mol_icon_headphones_off: string;
            $mol_icon_headphones_settings: string;
            $mol_icon_headset: string;
            $mol_icon_headset_dock: string;
            $mol_icon_headset_off: string;
            $mol_icon_heart: string;
            $mol_icon_heart_box: string;
            $mol_icon_heart_box_outline: string;
            $mol_icon_heart_broken: string;
            $mol_icon_heart_broken_outline: string;
            $mol_icon_heart_circle: string;
            $mol_icon_heart_circle_outline: string;
            $mol_icon_heart_flash: string;
            $mol_icon_heart_half: string;
            $mol_icon_heart_half_full: string;
            $mol_icon_heart_half_outline: string;
            $mol_icon_heart_multiple: string;
            $mol_icon_heart_multiple_outline: string;
            $mol_icon_heart_off: string;
            $mol_icon_heart_outline: string;
            $mol_icon_heart_pulse: string;
            $mol_icon_helicopter: string;
            $mol_icon_help: string;
            $mol_icon_help_box: string;
            $mol_icon_help_circle: string;
            $mol_icon_help_circle_outline: string;
            $mol_icon_help_network: string;
            $mol_icon_help_network_outline: string;
            $mol_icon_help_rhombus: string;
            $mol_icon_help_rhombus_outline: string;
            $mol_icon_hexagon: string;
            $mol_icon_hexagon_multiple: string;
            $mol_icon_hexagon_outline: string;
            $mol_icon_hexagon_slice_1: string;
            $mol_icon_hexagon_slice_2: string;
            $mol_icon_hexagon_slice_3: string;
            $mol_icon_hexagon_slice_4: string;
            $mol_icon_hexagon_slice_5: string;
            $mol_icon_hexagon_slice_6: string;
            $mol_icon_hexagram: string;
            $mol_icon_hexagram_outline: string;
            $mol_icon_high_definition: string;
            $mol_icon_high_definition_box: string;
            $mol_icon_highway: string;
            $mol_icon_hiking: string;
            $mol_icon_hinduism: string;
            $mol_icon_history: string;
            $mol_icon_hockey_puck: string;
            $mol_icon_hockey_sticks: string;
            $mol_icon_hololens: string;
            $mol_icon_home: string;
            $mol_icon_home_account: string;
            $mol_icon_home_alert: string;
            $mol_icon_home_analytics: string;
            $mol_icon_home_assistant: string;
            $mol_icon_home_automation: string;
            $mol_icon_home_circle: string;
            $mol_icon_home_city: string;
            $mol_icon_home_city_outline: string;
            $mol_icon_home_currency_usd: string;
            $mol_icon_home_flood: string;
            $mol_icon_home_floor_0: string;
            $mol_icon_home_floor_1: string;
            $mol_icon_home_floor_2: string;
            $mol_icon_home_floor_3: string;
            $mol_icon_home_floor_a: string;
            $mol_icon_home_floor_b: string;
            $mol_icon_home_floor_g: string;
            $mol_icon_home_floor_l: string;
            $mol_icon_home_floor_negative_1: string;
            $mol_icon_home_group: string;
            $mol_icon_home_heart: string;
            $mol_icon_home_lock: string;
            $mol_icon_home_lock_open: string;
            $mol_icon_home_map_marker: string;
            $mol_icon_home_minus: string;
            $mol_icon_home_modern: string;
            $mol_icon_home_outline: string;
            $mol_icon_home_plus: string;
            $mol_icon_home_variant: string;
            $mol_icon_home_variant_outline: string;
            $mol_icon_hook: string;
            $mol_icon_hook_off: string;
            $mol_icon_hops: string;
            $mol_icon_horseshoe: string;
            $mol_icon_hospital: string;
            $mol_icon_hospital_building: string;
            $mol_icon_hospital_marker: string;
            $mol_icon_hot_tub: string;
            $mol_icon_hotel: string;
            $mol_icon_houzz: string;
            $mol_icon_houzz_box: string;
            $mol_icon_hubspot: string;
            $mol_icon_hulu: string;
            $mol_icon_human: string;
            $mol_icon_human_child: string;
            $mol_icon_human_female: string;
            $mol_icon_human_female_boy: string;
            $mol_icon_human_female_female: string;
            $mol_icon_human_female_girl: string;
            $mol_icon_human_greeting: string;
            $mol_icon_human_handsdown: string;
            $mol_icon_human_handsup: string;
            $mol_icon_human_male: string;
            $mol_icon_human_male_boy: string;
            $mol_icon_human_male_female: string;
            $mol_icon_human_male_girl: string;
            $mol_icon_human_male_height: string;
            $mol_icon_human_male_height_variant: string;
            $mol_icon_human_male_male: string;
            $mol_icon_human_pregnant: string;
            $mol_icon_humble_bundle: string;
            $mol_icon_ice_cream: string;
            $mol_icon_ice_pop: string;
            $mol_icon_identifier: string;
            $mol_icon_iframe: string;
            $mol_icon_iframe_outline: string;
            $mol_icon_image: string;
            $mol_icon_image_album: string;
            $mol_icon_image_area: string;
            $mol_icon_image_area_close: string;
            $mol_icon_image_broken: string;
            $mol_icon_image_broken_variant: string;
            $mol_icon_image_filter: string;
            $mol_icon_image_filter_black_white: string;
            $mol_icon_image_filter_center_focus: string;
            $mol_icon_image_filter_center_focus_strong: string;
            $mol_icon_image_filter_center_focus_strong_outline: string;
            $mol_icon_image_filter_center_focus_weak: string;
            $mol_icon_image_filter_drama: string;
            $mol_icon_image_filter_frames: string;
            $mol_icon_image_filter_hdr: string;
            $mol_icon_image_filter_none: string;
            $mol_icon_image_filter_tilt_shift: string;
            $mol_icon_image_filter_vintage: string;
            $mol_icon_image_frame: string;
            $mol_icon_image_move: string;
            $mol_icon_image_multiple: string;
            $mol_icon_image_off: string;
            $mol_icon_image_outline: string;
            $mol_icon_image_plus: string;
            $mol_icon_image_search: string;
            $mol_icon_image_search_outline: string;
            $mol_icon_image_size_select_actual: string;
            $mol_icon_image_size_select_large: string;
            $mol_icon_image_size_select_small: string;
            $mol_icon_import: string;
            $mol_icon_inbox: string;
            $mol_icon_inbox_arrow_down: string;
            $mol_icon_inbox_arrow_up: string;
            $mol_icon_inbox_multiple: string;
            $mol_icon_inbox_multiple_outline: string;
            $mol_icon_incognito: string;
            $mol_icon_infinity: string;
            $mol_icon_information: string;
            $mol_icon_information_outline: string;
            $mol_icon_information_variant: string;
            $mol_icon_instagram: string;
            $mol_icon_instapaper: string;
            $mol_icon_internet_explorer: string;
            $mol_icon_invert_colors: string;
            $mol_icon_invert_colors_off: string;
            $mol_icon_ip: string;
            $mol_icon_ip_network: string;
            $mol_icon_ip_network_outline: string;
            $mol_icon_ipod: string;
            $mol_icon_islam: string;
            $mol_icon_itunes: string;
            $mol_icon_jabber: string;
            $mol_icon_jeepney: string;
            $mol_icon_jellyfish: string;
            $mol_icon_jellyfish_outline: string;
            $mol_icon_jira: string;
            $mol_icon_jquery: string;
            $mol_icon_jsfiddle: string;
            $mol_icon_json: string;
            $mol_icon_judaism: string;
            $mol_icon_kabaddi: string;
            $mol_icon_karate: string;
            $mol_icon_keg: string;
            $mol_icon_kettle: string;
            $mol_icon_key: string;
            $mol_icon_key_change: string;
            $mol_icon_key_minus: string;
            $mol_icon_key_outline: string;
            $mol_icon_key_plus: string;
            $mol_icon_key_remove: string;
            $mol_icon_key_variant: string;
            $mol_icon_keyboard: string;
            $mol_icon_keyboard_backspace: string;
            $mol_icon_keyboard_caps: string;
            $mol_icon_keyboard_close: string;
            $mol_icon_keyboard_off: string;
            $mol_icon_keyboard_off_outline: string;
            $mol_icon_keyboard_outline: string;
            $mol_icon_keyboard_return: string;
            $mol_icon_keyboard_settings: string;
            $mol_icon_keyboard_settings_outline: string;
            $mol_icon_keyboard_tab: string;
            $mol_icon_keyboard_variant: string;
            $mol_icon_kickstarter: string;
            $mol_icon_knife: string;
            $mol_icon_knife_military: string;
            $mol_icon_kodi: string;
            $mol_icon_label: string;
            $mol_icon_label_off: string;
            $mol_icon_label_off_outline: string;
            $mol_icon_label_outline: string;
            $mol_icon_label_variant: string;
            $mol_icon_label_variant_outline: string;
            $mol_icon_ladybug: string;
            $mol_icon_lambda: string;
            $mol_icon_lamp: string;
            $mol_icon_lan: string;
            $mol_icon_lan_connect: string;
            $mol_icon_lan_disconnect: string;
            $mol_icon_lan_pending: string;
            $mol_icon_language_c: string;
            $mol_icon_language_cpp: string;
            $mol_icon_language_csharp: string;
            $mol_icon_language_css3: string;
            $mol_icon_language_go: string;
            $mol_icon_language_haskell: string;
            $mol_icon_language_html5: string;
            $mol_icon_language_java: string;
            $mol_icon_language_javascript: string;
            $mol_icon_language_lua: string;
            $mol_icon_language_php: string;
            $mol_icon_language_python: string;
            $mol_icon_language_python_text: string;
            $mol_icon_language_r: string;
            $mol_icon_language_ruby_on_rails: string;
            $mol_icon_language_swift: string;
            $mol_icon_language_typescript: string;
            $mol_icon_laptop: string;
            $mol_icon_laptop_chromebook: string;
            $mol_icon_laptop_mac: string;
            $mol_icon_laptop_off: string;
            $mol_icon_laptop_windows: string;
            $mol_icon_laravel: string;
            $mol_icon_lasso: string;
            $mol_icon_lastfm: string;
            $mol_icon_lastpass: string;
            $mol_icon_launch: string;
            $mol_icon_lava_lamp: string;
            $mol_icon_layers: string;
            $mol_icon_layers_minus: string;
            $mol_icon_layers_off: string;
            $mol_icon_layers_off_outline: string;
            $mol_icon_layers_outline: string;
            $mol_icon_layers_plus: string;
            $mol_icon_layers_remove: string;
            $mol_icon_lead_pencil: string;
            $mol_icon_leaf: string;
            $mol_icon_leaf_maple: string;
            $mol_icon_leak: string;
            $mol_icon_leak_off: string;
            $mol_icon_led_off: string;
            $mol_icon_led_on: string;
            $mol_icon_led_outline: string;
            $mol_icon_led_strip: string;
            $mol_icon_led_variant_off: string;
            $mol_icon_led_variant_on: string;
            $mol_icon_led_variant_outline: string;
            $mol_icon_less_than: string;
            $mol_icon_less_than_or_equal: string;
            $mol_icon_library: string;
            $mol_icon_library_books: string;
            $mol_icon_library_movie: string;
            $mol_icon_library_music: string;
            $mol_icon_library_music_outline: string;
            $mol_icon_library_plus: string;
            $mol_icon_library_shelves: string;
            $mol_icon_library_video: string;
            $mol_icon_lifebuoy: string;
            $mol_icon_light_switch: string;
            $mol_icon_lightbulb: string;
            $mol_icon_lightbulb_off: string;
            $mol_icon_lightbulb_off_outline: string;
            $mol_icon_lightbulb_on: string;
            $mol_icon_lightbulb_on_outline: string;
            $mol_icon_lightbulb_outline: string;
            $mol_icon_lighthouse: string;
            $mol_icon_lighthouse_on: string;
            $mol_icon_link: string;
            $mol_icon_link_box: string;
            $mol_icon_link_box_outline: string;
            $mol_icon_link_box_variant: string;
            $mol_icon_link_box_variant_outline: string;
            $mol_icon_link_off: string;
            $mol_icon_link_plus: string;
            $mol_icon_link_variant: string;
            $mol_icon_link_variant_off: string;
            $mol_icon_linkedin: string;
            $mol_icon_linkedin_box: string;
            $mol_icon_linux: string;
            $mol_icon_linux_mint: string;
            $mol_icon_litecoin: string;
            $mol_icon_loading: string;
            $mol_icon_lock: string;
            $mol_icon_lock_alert: string;
            $mol_icon_lock_clock: string;
            $mol_icon_lock_open: string;
            $mol_icon_lock_open_outline: string;
            $mol_icon_lock_outline: string;
            $mol_icon_lock_pattern: string;
            $mol_icon_lock_plus: string;
            $mol_icon_lock_question: string;
            $mol_icon_lock_reset: string;
            $mol_icon_lock_smart: string;
            $mol_icon_locker: string;
            $mol_icon_locker_multiple: string;
            $mol_icon_login: string;
            $mol_icon_login_variant: string;
            $mol_icon_logout: string;
            $mol_icon_logout_variant: string;
            $mol_icon_looks: string;
            $mol_icon_loop: string;
            $mol_icon_loupe: string;
            $mol_icon_lumx: string;
            $mol_icon_lyft: string;
            $mol_icon_magnet: string;
            $mol_icon_magnet_on: string;
            $mol_icon_magnify: string;
            $mol_icon_magnify_close: string;
            $mol_icon_magnify_minus: string;
            $mol_icon_magnify_minus_cursor: string;
            $mol_icon_magnify_minus_outline: string;
            $mol_icon_magnify_plus: string;
            $mol_icon_magnify_plus_cursor: string;
            $mol_icon_magnify_plus_outline: string;
            $mol_icon_mail: string;
            $mol_icon_mail_ru: string;
            $mol_icon_mailbox: string;
            $mol_icon_mailbox_open: string;
            $mol_icon_mailbox_open_outline: string;
            $mol_icon_mailbox_open_up: string;
            $mol_icon_mailbox_open_up_outline: string;
            $mol_icon_mailbox_outline: string;
            $mol_icon_mailbox_up: string;
            $mol_icon_mailbox_up_outline: string;
            $mol_icon_map: string;
            $mol_icon_map_check: string;
            $mol_icon_map_check_outline: string;
            $mol_icon_map_clock: string;
            $mol_icon_map_clock_outline: string;
            $mol_icon_map_legend: string;
            $mol_icon_map_marker: string;
            $mol_icon_map_marker_alert: string;
            $mol_icon_map_marker_alert_outline: string;
            $mol_icon_map_marker_check: string;
            $mol_icon_map_marker_circle: string;
            $mol_icon_map_marker_distance: string;
            $mol_icon_map_marker_minus: string;
            $mol_icon_map_marker_multiple: string;
            $mol_icon_map_marker_off: string;
            $mol_icon_map_marker_outline: string;
            $mol_icon_map_marker_path: string;
            $mol_icon_map_marker_plus: string;
            $mol_icon_map_marker_question: string;
            $mol_icon_map_marker_question_outline: string;
            $mol_icon_map_marker_radius: string;
            $mol_icon_map_marker_remove: string;
            $mol_icon_map_marker_remove_variant: string;
            $mol_icon_map_minus: string;
            $mol_icon_map_outline: string;
            $mol_icon_map_plus: string;
            $mol_icon_map_search: string;
            $mol_icon_map_search_outline: string;
            $mol_icon_mapbox: string;
            $mol_icon_margin: string;
            $mol_icon_markdown: string;
            $mol_icon_marker: string;
            $mol_icon_marker_cancel: string;
            $mol_icon_marker_check: string;
            $mol_icon_mastodon: string;
            $mol_icon_mastodon_variant: string;
            $mol_icon_material_design: string;
            $mol_icon_material_ui: string;
            $mol_icon_math_compass: string;
            $mol_icon_math_cos: string;
            $mol_icon_math_sin: string;
            $mol_icon_math_tan: string;
            $mol_icon_matrix: string;
            $mol_icon_maxcdn: string;
            $mol_icon_medal: string;
            $mol_icon_medical_bag: string;
            $mol_icon_medium: string;
            $mol_icon_meetup: string;
            $mol_icon_memory: string;
            $mol_icon_menu: string;
            $mol_icon_menu_down: string;
            $mol_icon_menu_down_outline: string;
            $mol_icon_menu_left: string;
            $mol_icon_menu_left_outline: string;
            $mol_icon_menu_open: string;
            $mol_icon_menu_right: string;
            $mol_icon_menu_right_outline: string;
            $mol_icon_menu_swap: string;
            $mol_icon_menu_swap_outline: string;
            $mol_icon_menu_up: string;
            $mol_icon_menu_up_outline: string;
            $mol_icon_message: string;
            $mol_icon_message_alert: string;
            $mol_icon_message_alert_outline: string;
            $mol_icon_message_bulleted: string;
            $mol_icon_message_bulleted_off: string;
            $mol_icon_message_draw: string;
            $mol_icon_message_image: string;
            $mol_icon_message_outline: string;
            $mol_icon_message_plus: string;
            $mol_icon_message_processing: string;
            $mol_icon_message_reply: string;
            $mol_icon_message_reply_text: string;
            $mol_icon_message_settings: string;
            $mol_icon_message_settings_variant: string;
            $mol_icon_message_text: string;
            $mol_icon_message_text_outline: string;
            $mol_icon_message_video: string;
            $mol_icon_meteor: string;
            $mol_icon_metronome: string;
            $mol_icon_metronome_tick: string;
            $mol_icon_micro_sd: string;
            $mol_icon_microphone: string;
            $mol_icon_microphone_minus: string;
            $mol_icon_microphone_off: string;
            $mol_icon_microphone_outline: string;
            $mol_icon_microphone_plus: string;
            $mol_icon_microphone_settings: string;
            $mol_icon_microphone_variant: string;
            $mol_icon_microphone_variant_off: string;
            $mol_icon_microscope: string;
            $mol_icon_microsoft: string;
            $mol_icon_microsoft_dynamics: string;
            $mol_icon_microwave: string;
            $mol_icon_midi: string;
            $mol_icon_midi_port: string;
            $mol_icon_mine: string;
            $mol_icon_minecraft: string;
            $mol_icon_mini_sd: string;
            $mol_icon_minidisc: string;
            $mol_icon_minus: string;
            $mol_icon_minus_box: string;
            $mol_icon_minus_box_outline: string;
            $mol_icon_minus_circle: string;
            $mol_icon_minus_circle_outline: string;
            $mol_icon_minus_network: string;
            $mol_icon_minus_network_outline: string;
            $mol_icon_mixcloud: string;
            $mol_icon_mixed_martial_arts: string;
            $mol_icon_mixed_reality: string;
            $mol_icon_mixer: string;
            $mol_icon_molecule: string;
            $mol_icon_monitor: string;
            $mol_icon_monitor_cellphone: string;
            $mol_icon_monitor_cellphone_star: string;
            $mol_icon_monitor_dashboard: string;
            $mol_icon_monitor_lock: string;
            $mol_icon_monitor_multiple: string;
            $mol_icon_monitor_off: string;
            $mol_icon_monitor_screenshot: string;
            $mol_icon_monitor_star: string;
            $mol_icon_more: string;
            $mol_icon_mother_nurse: string;
            $mol_icon_motion_sensor: string;
            $mol_icon_motorbike: string;
            $mol_icon_mouse: string;
            $mol_icon_mouse_bluetooth: string;
            $mol_icon_mouse_off: string;
            $mol_icon_mouse_variant: string;
            $mol_icon_mouse_variant_off: string;
            $mol_icon_move_resize: string;
            $mol_icon_move_resize_variant: string;
            $mol_icon_movie: string;
            $mol_icon_movie_outline: string;
            $mol_icon_movie_roll: string;
            $mol_icon_muffin: string;
            $mol_icon_multiplication: string;
            $mol_icon_multiplication_box: string;
            $mol_icon_mushroom: string;
            $mol_icon_mushroom_outline: string;
            $mol_icon_music: string;
            $mol_icon_music_box: string;
            $mol_icon_music_box_outline: string;
            $mol_icon_music_circle: string;
            $mol_icon_music_circle_outline: string;
            $mol_icon_music_note: string;
            $mol_icon_music_note_bluetooth: string;
            $mol_icon_music_note_bluetooth_off: string;
            $mol_icon_music_note_eighth: string;
            $mol_icon_music_note_half: string;
            $mol_icon_music_note_off: string;
            $mol_icon_music_note_plus: string;
            $mol_icon_music_note_quarter: string;
            $mol_icon_music_note_sixteenth: string;
            $mol_icon_music_note_whole: string;
            $mol_icon_music_off: string;
            $mol_icon_nail: string;
            $mol_icon_nas: string;
            $mol_icon_nativescript: string;
            $mol_icon_nature: string;
            $mol_icon_nature_people: string;
            $mol_icon_navigation: string;
            $mol_icon_near_me: string;
            $mol_icon_necklace: string;
            $mol_icon_needle: string;
            $mol_icon_netflix: string;
            $mol_icon_network: string;
            $mol_icon_network_off: string;
            $mol_icon_network_off_outline: string;
            $mol_icon_network_outline: string;
            $mol_icon_network_strength_1: string;
            $mol_icon_network_strength_1_alert: string;
            $mol_icon_network_strength_2: string;
            $mol_icon_network_strength_2_alert: string;
            $mol_icon_network_strength_3: string;
            $mol_icon_network_strength_3_alert: string;
            $mol_icon_network_strength_4: string;
            $mol_icon_network_strength_4_alert: string;
            $mol_icon_network_strength_off: string;
            $mol_icon_network_strength_off_outline: string;
            $mol_icon_network_strength_outline: string;
            $mol_icon_new_box: string;
            $mol_icon_newspaper: string;
            $mol_icon_newspaper_minus: string;
            $mol_icon_newspaper_plus: string;
            $mol_icon_nfc: string;
            $mol_icon_nfc_off: string;
            $mol_icon_nfc_search_variant: string;
            $mol_icon_nfc_tap: string;
            $mol_icon_nfc_variant: string;
            $mol_icon_nfc_variant_off: string;
            $mol_icon_ninja: string;
            $mol_icon_nintendo_switch: string;
            $mol_icon_nodejs: string;
            $mol_icon_not_equal: string;
            $mol_icon_not_equal_variant: string;
            $mol_icon_note: string;
            $mol_icon_note_circle: string;
            $mol_icon_note_multiple: string;
            $mol_icon_note_multiple_outline: string;
            $mol_icon_note_outline: string;
            $mol_icon_note_plus: string;
            $mol_icon_note_plus_outline: string;
            $mol_icon_note_text: string;
            $mol_icon_notebook: string;
            $mol_icon_notebook_multiple: string;
            $mol_icon_notebook_outline: string;
            $mol_icon_notification_clear_all: string;
            $mol_icon_npm: string;
            $mol_icon_npm_variant: string;
            $mol_icon_npm_variant_outline: string;
            $mol_icon_nuke: string;
            $mol_icon_null: string;
            $mol_icon_numeric: string;
            $mol_icon_numeric_0: string;
            $mol_icon_numeric_0_box: string;
            $mol_icon_numeric_0_box_multiple: string;
            $mol_icon_numeric_0_box_multiple_outline: string;
            $mol_icon_numeric_0_box_outline: string;
            $mol_icon_numeric_0_circle: string;
            $mol_icon_numeric_0_circle_outline: string;
            $mol_icon_numeric_1: string;
            $mol_icon_numeric_1_box: string;
            $mol_icon_numeric_1_box_multiple: string;
            $mol_icon_numeric_1_box_multiple_outline: string;
            $mol_icon_numeric_1_box_outline: string;
            $mol_icon_numeric_1_circle: string;
            $mol_icon_numeric_1_circle_outline: string;
            $mol_icon_numeric_2: string;
            $mol_icon_numeric_2_box: string;
            $mol_icon_numeric_2_box_multiple: string;
            $mol_icon_numeric_2_box_multiple_outline: string;
            $mol_icon_numeric_2_box_outline: string;
            $mol_icon_numeric_2_circle: string;
            $mol_icon_numeric_2_circle_outline: string;
            $mol_icon_numeric_3: string;
            $mol_icon_numeric_3_box: string;
            $mol_icon_numeric_3_box_multiple: string;
            $mol_icon_numeric_3_box_multiple_outline: string;
            $mol_icon_numeric_3_box_outline: string;
            $mol_icon_numeric_3_circle: string;
            $mol_icon_numeric_3_circle_outline: string;
            $mol_icon_numeric_4: string;
            $mol_icon_numeric_4_box: string;
            $mol_icon_numeric_4_box_multiple: string;
            $mol_icon_numeric_4_box_multiple_outline: string;
            $mol_icon_numeric_4_box_outline: string;
            $mol_icon_numeric_4_circle: string;
            $mol_icon_numeric_4_circle_outline: string;
            $mol_icon_numeric_5: string;
            $mol_icon_numeric_5_box: string;
            $mol_icon_numeric_5_box_multiple: string;
            $mol_icon_numeric_5_box_multiple_outline: string;
            $mol_icon_numeric_5_box_outline: string;
            $mol_icon_numeric_5_circle: string;
            $mol_icon_numeric_5_circle_outline: string;
            $mol_icon_numeric_6: string;
            $mol_icon_numeric_6_box: string;
            $mol_icon_numeric_6_box_multiple: string;
            $mol_icon_numeric_6_box_multiple_outline: string;
            $mol_icon_numeric_6_box_outline: string;
            $mol_icon_numeric_6_circle: string;
            $mol_icon_numeric_6_circle_outline: string;
            $mol_icon_numeric_7: string;
            $mol_icon_numeric_7_box: string;
            $mol_icon_numeric_7_box_multiple: string;
            $mol_icon_numeric_7_box_multiple_outline: string;
            $mol_icon_numeric_7_box_outline: string;
            $mol_icon_numeric_7_circle: string;
            $mol_icon_numeric_7_circle_outline: string;
            $mol_icon_numeric_8: string;
            $mol_icon_numeric_8_box: string;
            $mol_icon_numeric_8_box_multiple: string;
            $mol_icon_numeric_8_box_multiple_outline: string;
            $mol_icon_numeric_8_box_outline: string;
            $mol_icon_numeric_8_circle: string;
            $mol_icon_numeric_8_circle_outline: string;
            $mol_icon_numeric_9: string;
            $mol_icon_numeric_9_box: string;
            $mol_icon_numeric_9_box_multiple: string;
            $mol_icon_numeric_9_box_multiple_outline: string;
            $mol_icon_numeric_9_box_outline: string;
            $mol_icon_numeric_9_circle: string;
            $mol_icon_numeric_9_circle_outline: string;
            $mol_icon_numeric_9_plus_box: string;
            $mol_icon_numeric_9_plus_box_multiple: string;
            $mol_icon_numeric_9_plus_box_multiple_outline: string;
            $mol_icon_numeric_9_plus_box_outline: string;
            $mol_icon_numeric_9_plus_circle: string;
            $mol_icon_numeric_9_plus_circle_outline: string;
            $mol_icon_nut: string;
            $mol_icon_nutrition: string;
            $mol_icon_oar: string;
            $mol_icon_ocarina: string;
            $mol_icon_octagon: string;
            $mol_icon_octagon_outline: string;
            $mol_icon_octagram: string;
            $mol_icon_octagram_outline: string;
            $mol_icon_odnoklassniki: string;
            $mol_icon_office: string;
            $mol_icon_office_building: string;
            $mol_icon_oil: string;
            $mol_icon_oil_lamp: string;
            $mol_icon_oil_temperature: string;
            $mol_icon_omega: string;
            $mol_icon_one_up: string;
            $mol_icon_onedrive: string;
            $mol_icon_onenote: string;
            $mol_icon_onepassword: string;
            $mol_icon_opacity: string;
            $mol_icon_open_in_app: string;
            $mol_icon_open_in_new: string;
            $mol_icon_open_source_initiative: string;
            $mol_icon_openid: string;
            $mol_icon_opera: string;
            $mol_icon_orbit: string;
            $mol_icon_origin: string;
            $mol_icon_ornament: string;
            $mol_icon_ornament_variant: string;
            $mol_icon_outlook: string;
            $mol_icon_owl: string;
            $mol_icon_pac_man: string;
            $mol_icon_package: string;
            $mol_icon_package_down: string;
            $mol_icon_package_up: string;
            $mol_icon_package_variant: string;
            $mol_icon_package_variant_closed: string;
            $mol_icon_page_first: string;
            $mol_icon_page_last: string;
            $mol_icon_page_layout_body: string;
            $mol_icon_page_layout_footer: string;
            $mol_icon_page_layout_header: string;
            $mol_icon_page_layout_sidebar_left: string;
            $mol_icon_page_layout_sidebar_right: string;
            $mol_icon_page_next: string;
            $mol_icon_page_next_outline: string;
            $mol_icon_page_previous: string;
            $mol_icon_page_previous_outline: string;
            $mol_icon_palette: string;
            $mol_icon_palette_advanced: string;
            $mol_icon_palette_outline: string;
            $mol_icon_palette_swatch: string;
            $mol_icon_pan: string;
            $mol_icon_pan_bottom_left: string;
            $mol_icon_pan_bottom_right: string;
            $mol_icon_pan_down: string;
            $mol_icon_pan_horizontal: string;
            $mol_icon_pan_left: string;
            $mol_icon_pan_right: string;
            $mol_icon_pan_top_left: string;
            $mol_icon_pan_top_right: string;
            $mol_icon_pan_up: string;
            $mol_icon_pan_vertical: string;
            $mol_icon_panda: string;
            $mol_icon_pandora: string;
            $mol_icon_panorama: string;
            $mol_icon_panorama_fisheye: string;
            $mol_icon_panorama_horizontal: string;
            $mol_icon_panorama_vertical: string;
            $mol_icon_panorama_wide_angle: string;
            $mol_icon_paper_cut_vertical: string;
            $mol_icon_paperclip: string;
            $mol_icon_parachute: string;
            $mol_icon_parachute_outline: string;
            $mol_icon_parking: string;
            $mol_icon_passport: string;
            $mol_icon_passport_biometric: string;
            $mol_icon_patreon: string;
            $mol_icon_pause: string;
            $mol_icon_pause_circle: string;
            $mol_icon_pause_circle_outline: string;
            $mol_icon_pause_octagon: string;
            $mol_icon_pause_octagon_outline: string;
            $mol_icon_paw: string;
            $mol_icon_paw_off: string;
            $mol_icon_paypal: string;
            $mol_icon_pdf_box: string;
            $mol_icon_peace: string;
            $mol_icon_pen: string;
            $mol_icon_pen_lock: string;
            $mol_icon_pen_minus: string;
            $mol_icon_pen_off: string;
            $mol_icon_pen_plus: string;
            $mol_icon_pen_remove: string;
            $mol_icon_pencil: string;
            $mol_icon_pencil_box: string;
            $mol_icon_pencil_box_outline: string;
            $mol_icon_pencil_circle: string;
            $mol_icon_pencil_circle_outline: string;
            $mol_icon_pencil_lock: string;
            $mol_icon_pencil_lock_outline: string;
            $mol_icon_pencil_minus: string;
            $mol_icon_pencil_minus_outline: string;
            $mol_icon_pencil_off: string;
            $mol_icon_pencil_off_outline: string;
            $mol_icon_pencil_outline: string;
            $mol_icon_pencil_plus: string;
            $mol_icon_pencil_plus_outline: string;
            $mol_icon_pencil_remove: string;
            $mol_icon_pencil_remove_outline: string;
            $mol_icon_penguin: string;
            $mol_icon_pentagon: string;
            $mol_icon_pentagon_outline: string;
            $mol_icon_percent: string;
            $mol_icon_periodic_table: string;
            $mol_icon_periodic_table_co2: string;
            $mol_icon_periscope: string;
            $mol_icon_perspective_less: string;
            $mol_icon_perspective_more: string;
            $mol_icon_pharmacy: string;
            $mol_icon_phone: string;
            $mol_icon_phone_alert: string;
            $mol_icon_phone_bluetooth: string;
            $mol_icon_phone_classic: string;
            $mol_icon_phone_forward: string;
            $mol_icon_phone_hangup: string;
            $mol_icon_phone_in_talk: string;
            $mol_icon_phone_incoming: string;
            $mol_icon_phone_lock: string;
            $mol_icon_phone_log: string;
            $mol_icon_phone_minus: string;
            $mol_icon_phone_missed: string;
            $mol_icon_phone_off: string;
            $mol_icon_phone_outgoing: string;
            $mol_icon_phone_outline: string;
            $mol_icon_phone_paused: string;
            $mol_icon_phone_plus: string;
            $mol_icon_phone_return: string;
            $mol_icon_phone_rotate_landscape: string;
            $mol_icon_phone_rotate_portrait: string;
            $mol_icon_phone_settings: string;
            $mol_icon_phone_voip: string;
            $mol_icon_pi: string;
            $mol_icon_pi_box: string;
            $mol_icon_pi_hole: string;
            $mol_icon_piano: string;
            $mol_icon_pickaxe: string;
            $mol_icon_picture_in_picture_bottom_right: string;
            $mol_icon_picture_in_picture_bottom_right_outline: string;
            $mol_icon_picture_in_picture_top_right: string;
            $mol_icon_picture_in_picture_top_right_outline: string;
            $mol_icon_pier: string;
            $mol_icon_pier_crane: string;
            $mol_icon_pig: string;
            $mol_icon_pill: string;
            $mol_icon_pillar: string;
            $mol_icon_pin: string;
            $mol_icon_pin_off: string;
            $mol_icon_pin_off_outline: string;
            $mol_icon_pin_outline: string;
            $mol_icon_pine_tree: string;
            $mol_icon_pine_tree_box: string;
            $mol_icon_pinterest: string;
            $mol_icon_pinterest_box: string;
            $mol_icon_pinwheel: string;
            $mol_icon_pinwheel_outline: string;
            $mol_icon_pipe: string;
            $mol_icon_pipe_disconnected: string;
            $mol_icon_pipe_leak: string;
            $mol_icon_pirate: string;
            $mol_icon_pistol: string;
            $mol_icon_piston: string;
            $mol_icon_pizza: string;
            $mol_icon_play: string;
            $mol_icon_play_box_outline: string;
            $mol_icon_play_circle: string;
            $mol_icon_play_circle_outline: string;
            $mol_icon_play_network: string;
            $mol_icon_play_network_outline: string;
            $mol_icon_play_outline: string;
            $mol_icon_play_pause: string;
            $mol_icon_play_protected_content: string;
            $mol_icon_play_speed: string;
            $mol_icon_playlist_check: string;
            $mol_icon_playlist_edit: string;
            $mol_icon_playlist_minus: string;
            $mol_icon_playlist_music: string;
            $mol_icon_playlist_music_outline: string;
            $mol_icon_playlist_play: string;
            $mol_icon_playlist_plus: string;
            $mol_icon_playlist_remove: string;
            $mol_icon_playlist_star: string;
            $mol_icon_playstation: string;
            $mol_icon_plex: string;
            $mol_icon_plus: string;
            $mol_icon_plus_box: string;
            $mol_icon_plus_box_outline: string;
            $mol_icon_plus_circle: string;
            $mol_icon_plus_circle_multiple_outline: string;
            $mol_icon_plus_circle_outline: string;
            $mol_icon_plus_minus: string;
            $mol_icon_plus_minus_box: string;
            $mol_icon_plus_network: string;
            $mol_icon_plus_network_outline: string;
            $mol_icon_plus_one: string;
            $mol_icon_plus_outline: string;
            $mol_icon_pocket: string;
            $mol_icon_podcast: string;
            $mol_icon_podium: string;
            $mol_icon_podium_bronze: string;
            $mol_icon_podium_gold: string;
            $mol_icon_podium_silver: string;
            $mol_icon_point_of_sale: string;
            $mol_icon_pokeball: string;
            $mol_icon_pokemon_go: string;
            $mol_icon_poker_chip: string;
            $mol_icon_polaroid: string;
            $mol_icon_poll: string;
            $mol_icon_poll_box: string;
            $mol_icon_polymer: string;
            $mol_icon_pool: string;
            $mol_icon_popcorn: string;
            $mol_icon_postage_stamp: string;
            $mol_icon_pot: string;
            $mol_icon_pot_mix: string;
            $mol_icon_pound: string;
            $mol_icon_pound_box: string;
            $mol_icon_power: string;
            $mol_icon_power_cycle: string;
            $mol_icon_power_off: string;
            $mol_icon_power_on: string;
            $mol_icon_power_plug: string;
            $mol_icon_power_plug_off: string;
            $mol_icon_power_settings: string;
            $mol_icon_power_sleep: string;
            $mol_icon_power_socket: string;
            $mol_icon_power_socket_au: string;
            $mol_icon_power_socket_eu: string;
            $mol_icon_power_socket_uk: string;
            $mol_icon_power_socket_us: string;
            $mol_icon_power_standby: string;
            $mol_icon_powershell: string;
            $mol_icon_prescription: string;
            $mol_icon_presentation: string;
            $mol_icon_presentation_play: string;
            $mol_icon_printer: string;
            $mol_icon_printer_3d: string;
            $mol_icon_printer_3d_nozzle: string;
            $mol_icon_printer_3d_nozzle_outline: string;
            $mol_icon_printer_alert: string;
            $mol_icon_printer_off: string;
            $mol_icon_printer_settings: string;
            $mol_icon_printer_wireless: string;
            $mol_icon_priority_high: string;
            $mol_icon_priority_low: string;
            $mol_icon_professional_hexagon: string;
            $mol_icon_progress_alert: string;
            $mol_icon_progress_check: string;
            $mol_icon_progress_clock: string;
            $mol_icon_progress_download: string;
            $mol_icon_progress_upload: string;
            $mol_icon_progress_wrench: string;
            $mol_icon_projector: string;
            $mol_icon_projector_screen: string;
            $mol_icon_publish: string;
            $mol_icon_pulse: string;
            $mol_icon_pumpkin: string;
            $mol_icon_purse: string;
            $mol_icon_purse_outline: string;
            $mol_icon_puzzle: string;
            $mol_icon_puzzle_outline: string;
            $mol_icon_qi: string;
            $mol_icon_qqchat: string;
            $mol_icon_qrcode: string;
            $mol_icon_qrcode_edit: string;
            $mol_icon_qrcode_scan: string;
            $mol_icon_quadcopter: string;
            $mol_icon_quality_high: string;
            $mol_icon_quality_low: string;
            $mol_icon_quality_medium: string;
            $mol_icon_quicktime: string;
            $mol_icon_quora: string;
            $mol_icon_rabbit: string;
            $mol_icon_racing_helmet: string;
            $mol_icon_racquetball: string;
            $mol_icon_radar: string;
            $mol_icon_radiator: string;
            $mol_icon_radiator_disabled: string;
            $mol_icon_radiator_off: string;
            $mol_icon_radio: string;
            $mol_icon_radio_am: string;
            $mol_icon_radio_fm: string;
            $mol_icon_radio_handheld: string;
            $mol_icon_radio_tower: string;
            $mol_icon_radioactive: string;
            $mol_icon_radioactive_off: string;
            $mol_icon_radiobox_blank: string;
            $mol_icon_radiobox_marked: string;
            $mol_icon_radius: string;
            $mol_icon_radius_outline: string;
            $mol_icon_railroad_light: string;
            $mol_icon_raspberry_pi: string;
            $mol_icon_ray_end: string;
            $mol_icon_ray_end_arrow: string;
            $mol_icon_ray_start: string;
            $mol_icon_ray_start_arrow: string;
            $mol_icon_ray_start_end: string;
            $mol_icon_ray_vertex: string;
            $mol_icon_react: string;
            $mol_icon_read: string;
            $mol_icon_receipt: string;
            $mol_icon_record: string;
            $mol_icon_record_circle: string;
            $mol_icon_record_circle_outline: string;
            $mol_icon_record_player: string;
            $mol_icon_record_rec: string;
            $mol_icon_rectangle: string;
            $mol_icon_rectangle_outline: string;
            $mol_icon_recycle: string;
            $mol_icon_reddit: string;
            $mol_icon_redo: string;
            $mol_icon_redo_variant: string;
            $mol_icon_reflect_horizontal: string;
            $mol_icon_reflect_vertical: string;
            $mol_icon_refresh: string;
            $mol_icon_regex: string;
            $mol_icon_registered_trademark: string;
            $mol_icon_relative_scale: string;
            $mol_icon_reload: string;
            $mol_icon_reminder: string;
            $mol_icon_remote: string;
            $mol_icon_remote_desktop: string;
            $mol_icon_remote_off: string;
            $mol_icon_remote_tv: string;
            $mol_icon_remote_tv_off: string;
            $mol_icon_rename_box: string;
            $mol_icon_reorder_horizontal: string;
            $mol_icon_reorder_vertical: string;
            $mol_icon_repeat: string;
            $mol_icon_repeat_off: string;
            $mol_icon_repeat_once: string;
            $mol_icon_replay: string;
            $mol_icon_reply: string;
            $mol_icon_reply_all: string;
            $mol_icon_reply_all_outline: string;
            $mol_icon_reply_outline: string;
            $mol_icon_reproduction: string;
            $mol_icon_resistor: string;
            $mol_icon_resistor_nodes: string;
            $mol_icon_resize: string;
            $mol_icon_resize_bottom_right: string;
            $mol_icon_responsive: string;
            $mol_icon_restart: string;
            $mol_icon_restart_off: string;
            $mol_icon_restore: string;
            $mol_icon_restore_clock: string;
            $mol_icon_rewind: string;
            $mol_icon_rewind_10: string;
            $mol_icon_rewind_30: string;
            $mol_icon_rewind_outline: string;
            $mol_icon_rhombus: string;
            $mol_icon_rhombus_medium: string;
            $mol_icon_rhombus_outline: string;
            $mol_icon_rhombus_split: string;
            $mol_icon_ribbon: string;
            $mol_icon_rice: string;
            $mol_icon_ring: string;
            $mol_icon_rivet: string;
            $mol_icon_road: string;
            $mol_icon_road_variant: string;
            $mol_icon_robot: string;
            $mol_icon_robot_industrial: string;
            $mol_icon_robot_vacuum: string;
            $mol_icon_robot_vacuum_variant: string;
            $mol_icon_rocket: string;
            $mol_icon_roller_skate: string;
            $mol_icon_rollerblade: string;
            $mol_icon_rollupjs: string;
            $mol_icon_room_service: string;
            $mol_icon_room_service_outline: string;
            $mol_icon_rotate_3d: string;
            $mol_icon_rotate_3d_variant: string;
            $mol_icon_rotate_left: string;
            $mol_icon_rotate_left_variant: string;
            $mol_icon_rotate_orbit: string;
            $mol_icon_rotate_right: string;
            $mol_icon_rotate_right_variant: string;
            $mol_icon_rounded_corner: string;
            $mol_icon_router_wireless: string;
            $mol_icon_router_wireless_settings: string;
            $mol_icon_routes: string;
            $mol_icon_rowing: string;
            $mol_icon_rss: string;
            $mol_icon_rss_box: string;
            $mol_icon_rss_off: string;
            $mol_icon_ruby: string;
            $mol_icon_rugby: string;
            $mol_icon_ruler: string;
            $mol_icon_ruler_square: string;
            $mol_icon_run: string;
            $mol_icon_run_fast: string;
            $mol_icon_sack: string;
            $mol_icon_sack_percent: string;
            $mol_icon_safe: string;
            $mol_icon_safety_goggles: string;
            $mol_icon_sailing: string;
            $mol_icon_sale: string;
            $mol_icon_salesforce: string;
            $mol_icon_sass: string;
            $mol_icon_satellite: string;
            $mol_icon_satellite_uplink: string;
            $mol_icon_satellite_variant: string;
            $mol_icon_sausage: string;
            $mol_icon_saw_blade: string;
            $mol_icon_saxophone: string;
            $mol_icon_scale: string;
            $mol_icon_scale_balance: string;
            $mol_icon_scale_bathroom: string;
            $mol_icon_scanner: string;
            $mol_icon_scanner_off: string;
            $mol_icon_scatter_plot: string;
            $mol_icon_scatter_plot_outline: string;
            $mol_icon_school: string;
            $mol_icon_scissors_cutting: string;
            $mol_icon_screen_rotation: string;
            $mol_icon_screen_rotation_lock: string;
            $mol_icon_screw_flat_top: string;
            $mol_icon_screw_lag: string;
            $mol_icon_screw_machine_flat_top: string;
            $mol_icon_screw_machine_round_top: string;
            $mol_icon_screw_round_top: string;
            $mol_icon_screwdriver: string;
            $mol_icon_script: string;
            $mol_icon_script_outline: string;
            $mol_icon_script_text: string;
            $mol_icon_script_text_outline: string;
            $mol_icon_sd: string;
            $mol_icon_seal: string;
            $mol_icon_search_web: string;
            $mol_icon_seat: string;
            $mol_icon_seat_flat: string;
            $mol_icon_seat_flat_angled: string;
            $mol_icon_seat_individual_suite: string;
            $mol_icon_seat_legroom_extra: string;
            $mol_icon_seat_legroom_normal: string;
            $mol_icon_seat_legroom_reduced: string;
            $mol_icon_seat_outline: string;
            $mol_icon_seat_recline_extra: string;
            $mol_icon_seat_recline_normal: string;
            $mol_icon_seatbelt: string;
            $mol_icon_security: string;
            $mol_icon_security_network: string;
            $mol_icon_seed: string;
            $mol_icon_seed_outline: string;
            $mol_icon_segment: string;
            $mol_icon_select: string;
            $mol_icon_select_all: string;
            $mol_icon_select_color: string;
            $mol_icon_select_compare: string;
            $mol_icon_select_drag: string;
            $mol_icon_select_inverse: string;
            $mol_icon_select_off: string;
            $mol_icon_selection: string;
            $mol_icon_selection_drag: string;
            $mol_icon_selection_ellipse: string;
            $mol_icon_selection_ellipse_arrow_inside: string;
            $mol_icon_selection_off: string;
            $mol_icon_send: string;
            $mol_icon_send_circle: string;
            $mol_icon_send_circle_outline: string;
            $mol_icon_send_lock: string;
            $mol_icon_serial_port: string;
            $mol_icon_server: string;
            $mol_icon_server_minus: string;
            $mol_icon_server_network: string;
            $mol_icon_server_network_off: string;
            $mol_icon_server_off: string;
            $mol_icon_server_plus: string;
            $mol_icon_server_remove: string;
            $mol_icon_server_security: string;
            $mol_icon_set_all: string;
            $mol_icon_set_center: string;
            $mol_icon_set_center_right: string;
            $mol_icon_set_left: string;
            $mol_icon_set_left_center: string;
            $mol_icon_set_left_right: string;
            $mol_icon_set_none: string;
            $mol_icon_set_right: string;
            $mol_icon_set_top_box: string;
            $mol_icon_settings: string;
            $mol_icon_settings_box: string;
            $mol_icon_settings_helper: string;
            $mol_icon_settings_outline: string;
            $mol_icon_shape: string;
            $mol_icon_shape_circle_plus: string;
            $mol_icon_shape_outline: string;
            $mol_icon_shape_plus: string;
            $mol_icon_shape_polygon_plus: string;
            $mol_icon_shape_rectangle_plus: string;
            $mol_icon_shape_square_plus: string;
            $mol_icon_share: string;
            $mol_icon_share_off: string;
            $mol_icon_share_off_outline: string;
            $mol_icon_share_outline: string;
            $mol_icon_share_variant: string;
            $mol_icon_sheep: string;
            $mol_icon_shield: string;
            $mol_icon_shield_account: string;
            $mol_icon_shield_account_outline: string;
            $mol_icon_shield_airplane: string;
            $mol_icon_shield_airplane_outline: string;
            $mol_icon_shield_alert: string;
            $mol_icon_shield_alert_outline: string;
            $mol_icon_shield_check: string;
            $mol_icon_shield_check_outline: string;
            $mol_icon_shield_cross: string;
            $mol_icon_shield_cross_outline: string;
            $mol_icon_shield_half_full: string;
            $mol_icon_shield_home: string;
            $mol_icon_shield_home_outline: string;
            $mol_icon_shield_key: string;
            $mol_icon_shield_key_outline: string;
            $mol_icon_shield_link_variant: string;
            $mol_icon_shield_link_variant_outline: string;
            $mol_icon_shield_lock: string;
            $mol_icon_shield_lock_outline: string;
            $mol_icon_shield_off: string;
            $mol_icon_shield_off_outline: string;
            $mol_icon_shield_outline: string;
            $mol_icon_shield_plus: string;
            $mol_icon_shield_plus_outline: string;
            $mol_icon_shield_remove: string;
            $mol_icon_shield_remove_outline: string;
            $mol_icon_shield_search: string;
            $mol_icon_ship_wheel: string;
            $mol_icon_shoe_formal: string;
            $mol_icon_shoe_heel: string;
            $mol_icon_shoe_print: string;
            $mol_icon_shopify: string;
            $mol_icon_shopping: string;
            $mol_icon_shopping_music: string;
            $mol_icon_shovel: string;
            $mol_icon_shovel_off: string;
            $mol_icon_shower: string;
            $mol_icon_shower_head: string;
            $mol_icon_shredder: string;
            $mol_icon_shuffle: string;
            $mol_icon_shuffle_disabled: string;
            $mol_icon_shuffle_variant: string;
            $mol_icon_sigma: string;
            $mol_icon_sigma_lower: string;
            $mol_icon_sign_caution: string;
            $mol_icon_sign_direction: string;
            $mol_icon_sign_text: string;
            $mol_icon_signal: string;
            $mol_icon_signal_2g: string;
            $mol_icon_signal_3g: string;
            $mol_icon_signal_4g: string;
            $mol_icon_signal_5g: string;
            $mol_icon_signal_cellular_1: string;
            $mol_icon_signal_cellular_2: string;
            $mol_icon_signal_cellular_3: string;
            $mol_icon_signal_cellular_outline: string;
            $mol_icon_signal_distance_variant: string;
            $mol_icon_signal_hspa: string;
            $mol_icon_signal_hspa_plus: string;
            $mol_icon_signal_off: string;
            $mol_icon_signal_variant: string;
            $mol_icon_signature: string;
            $mol_icon_signature_freehand: string;
            $mol_icon_signature_image: string;
            $mol_icon_signature_text: string;
            $mol_icon_silo: string;
            $mol_icon_silverware: string;
            $mol_icon_silverware_fork: string;
            $mol_icon_silverware_fork_knife: string;
            $mol_icon_silverware_spoon: string;
            $mol_icon_silverware_variant: string;
            $mol_icon_sim: string;
            $mol_icon_sim_alert: string;
            $mol_icon_sim_off: string;
            $mol_icon_sina_weibo: string;
            $mol_icon_sitemap: string;
            $mol_icon_skate: string;
            $mol_icon_skew_less: string;
            $mol_icon_skew_more: string;
            $mol_icon_skip_backward: string;
            $mol_icon_skip_backward_outline: string;
            $mol_icon_skip_forward: string;
            $mol_icon_skip_forward_outline: string;
            $mol_icon_skip_next: string;
            $mol_icon_skip_next_circle: string;
            $mol_icon_skip_next_circle_outline: string;
            $mol_icon_skip_next_outline: string;
            $mol_icon_skip_previous: string;
            $mol_icon_skip_previous_circle: string;
            $mol_icon_skip_previous_circle_outline: string;
            $mol_icon_skip_previous_outline: string;
            $mol_icon_skull: string;
            $mol_icon_skull_crossbones: string;
            $mol_icon_skull_crossbones_outline: string;
            $mol_icon_skull_outline: string;
            $mol_icon_skype: string;
            $mol_icon_skype_business: string;
            $mol_icon_slack: string;
            $mol_icon_slackware: string;
            $mol_icon_sleep: string;
            $mol_icon_sleep_off: string;
            $mol_icon_slope_downhill: string;
            $mol_icon_slope_uphill: string;
            $mol_icon_smog: string;
            $mol_icon_smoke_detector: string;
            $mol_icon_smoking: string;
            $mol_icon_smoking_off: string;
            $mol_icon_snapchat: string;
            $mol_icon_snowflake: string;
            $mol_icon_snowflake_alert: string;
            $mol_icon_snowflake_variant: string;
            $mol_icon_snowman: string;
            $mol_icon_soccer: string;
            $mol_icon_soccer_field: string;
            $mol_icon_sofa: string;
            $mol_icon_solar_panel: string;
            $mol_icon_solar_panel_large: string;
            $mol_icon_solar_power: string;
            $mol_icon_solid: string;
            $mol_icon_sort: string;
            $mol_icon_sort_alphabetical: string;
            $mol_icon_sort_ascending: string;
            $mol_icon_sort_descending: string;
            $mol_icon_sort_numeric: string;
            $mol_icon_sort_variant: string;
            $mol_icon_sort_variant_lock: string;
            $mol_icon_sort_variant_lock_open: string;
            $mol_icon_soundcloud: string;
            $mol_icon_source_branch: string;
            $mol_icon_source_commit: string;
            $mol_icon_source_commit_end: string;
            $mol_icon_source_commit_end_local: string;
            $mol_icon_source_commit_local: string;
            $mol_icon_source_commit_next_local: string;
            $mol_icon_source_commit_start: string;
            $mol_icon_source_commit_start_next_local: string;
            $mol_icon_source_fork: string;
            $mol_icon_source_merge: string;
            $mol_icon_source_pull: string;
            $mol_icon_source_repository: string;
            $mol_icon_source_repository_multiple: string;
            $mol_icon_soy_sauce: string;
            $mol_icon_spa: string;
            $mol_icon_spa_outline: string;
            $mol_icon_space_invaders: string;
            $mol_icon_spade: string;
            $mol_icon_speaker: string;
            $mol_icon_speaker_bluetooth: string;
            $mol_icon_speaker_multiple: string;
            $mol_icon_speaker_off: string;
            $mol_icon_speaker_wireless: string;
            $mol_icon_speedometer: string;
            $mol_icon_spellcheck: string;
            $mol_icon_spider_web: string;
            $mol_icon_spotify: string;
            $mol_icon_spotlight: string;
            $mol_icon_spotlight_beam: string;
            $mol_icon_spray: string;
            $mol_icon_spray_bottle: string;
            $mol_icon_sprout: string;
            $mol_icon_sprout_outline: string;
            $mol_icon_square: string;
            $mol_icon_square_edit_outline: string;
            $mol_icon_square_inc: string;
            $mol_icon_square_inc_cash: string;
            $mol_icon_square_medium: string;
            $mol_icon_square_medium_outline: string;
            $mol_icon_square_outline: string;
            $mol_icon_square_root: string;
            $mol_icon_square_root_box: string;
            $mol_icon_square_small: string;
            $mol_icon_squeegee: string;
            $mol_icon_ssh: string;
            $mol_icon_stack_exchange: string;
            $mol_icon_stack_overflow: string;
            $mol_icon_stadium: string;
            $mol_icon_stairs: string;
            $mol_icon_stamper: string;
            $mol_icon_standard_definition: string;
            $mol_icon_star: string;
            $mol_icon_star_box: string;
            $mol_icon_star_box_outline: string;
            $mol_icon_star_circle: string;
            $mol_icon_star_circle_outline: string;
            $mol_icon_star_face: string;
            $mol_icon_star_four_points: string;
            $mol_icon_star_four_points_outline: string;
            $mol_icon_star_half: string;
            $mol_icon_star_off: string;
            $mol_icon_star_outline: string;
            $mol_icon_star_three_points: string;
            $mol_icon_star_three_points_outline: string;
            $mol_icon_steam: string;
            $mol_icon_steam_box: string;
            $mol_icon_steering: string;
            $mol_icon_steering_off: string;
            $mol_icon_step_backward: string;
            $mol_icon_step_backward_2: string;
            $mol_icon_step_forward: string;
            $mol_icon_step_forward_2: string;
            $mol_icon_stethoscope: string;
            $mol_icon_sticker: string;
            $mol_icon_sticker_emoji: string;
            $mol_icon_stocking: string;
            $mol_icon_stop: string;
            $mol_icon_stop_circle: string;
            $mol_icon_stop_circle_outline: string;
            $mol_icon_store: string;
            $mol_icon_store_24_hour: string;
            $mol_icon_stove: string;
            $mol_icon_strava: string;
            $mol_icon_stretch_to_page: string;
            $mol_icon_stretch_to_page_outline: string;
            $mol_icon_subdirectory_arrow_left: string;
            $mol_icon_subdirectory_arrow_right: string;
            $mol_icon_subtitles: string;
            $mol_icon_subtitles_outline: string;
            $mol_icon_subway: string;
            $mol_icon_subway_alert_variant: string;
            $mol_icon_subway_variant: string;
            $mol_icon_summit: string;
            $mol_icon_sunglasses: string;
            $mol_icon_surround_sound: string;
            $mol_icon_surround_sound_2_0: string;
            $mol_icon_surround_sound_3_1: string;
            $mol_icon_surround_sound_5_1: string;
            $mol_icon_surround_sound_7_1: string;
            $mol_icon_svg: string;
            $mol_icon_swap_horizontal: string;
            $mol_icon_swap_horizontal_bold: string;
            $mol_icon_swap_horizontal_variant: string;
            $mol_icon_swap_vertical: string;
            $mol_icon_swap_vertical_bold: string;
            $mol_icon_swap_vertical_variant: string;
            $mol_icon_swim: string;
            $mol_icon_switch: string;
            $mol_icon_sword: string;
            $mol_icon_sword_cross: string;
            $mol_icon_symfony: string;
            $mol_icon_sync: string;
            $mol_icon_sync_alert: string;
            $mol_icon_sync_off: string;
            $mol_icon_tab: string;
            $mol_icon_tab_minus: string;
            $mol_icon_tab_plus: string;
            $mol_icon_tab_remove: string;
            $mol_icon_tab_unselected: string;
            $mol_icon_table: string;
            $mol_icon_table_border: string;
            $mol_icon_table_column: string;
            $mol_icon_table_column_plus_after: string;
            $mol_icon_table_column_plus_before: string;
            $mol_icon_table_column_remove: string;
            $mol_icon_table_column_width: string;
            $mol_icon_table_edit: string;
            $mol_icon_table_large: string;
            $mol_icon_table_merge_cells: string;
            $mol_icon_table_of_contents: string;
            $mol_icon_table_plus: string;
            $mol_icon_table_remove: string;
            $mol_icon_table_row: string;
            $mol_icon_table_row_height: string;
            $mol_icon_table_row_plus_after: string;
            $mol_icon_table_row_plus_before: string;
            $mol_icon_table_row_remove: string;
            $mol_icon_table_search: string;
            $mol_icon_table_settings: string;
            $mol_icon_table_tennis: string;
            $mol_icon_tablet: string;
            $mol_icon_tablet_android: string;
            $mol_icon_tablet_cellphone: string;
            $mol_icon_tablet_dashboard: string;
            $mol_icon_tablet_ipad: string;
            $mol_icon_taco: string;
            $mol_icon_tag: string;
            $mol_icon_tag_faces: string;
            $mol_icon_tag_heart: string;
            $mol_icon_tag_heart_outline: string;
            $mol_icon_tag_minus: string;
            $mol_icon_tag_multiple: string;
            $mol_icon_tag_outline: string;
            $mol_icon_tag_plus: string;
            $mol_icon_tag_remove: string;
            $mol_icon_tag_text_outline: string;
            $mol_icon_tank: string;
            $mol_icon_tape_measure: string;
            $mol_icon_target: string;
            $mol_icon_target_account: string;
            $mol_icon_target_variant: string;
            $mol_icon_taxi: string;
            $mol_icon_tea: string;
            $mol_icon_tea_outline: string;
            $mol_icon_teach: string;
            $mol_icon_teamviewer: string;
            $mol_icon_telegram: string;
            $mol_icon_telescope: string;
            $mol_icon_television: string;
            $mol_icon_television_box: string;
            $mol_icon_television_classic: string;
            $mol_icon_television_classic_off: string;
            $mol_icon_television_guide: string;
            $mol_icon_television_off: string;
            $mol_icon_television_play: string;
            $mol_icon_temperature_celsius: string;
            $mol_icon_temperature_fahrenheit: string;
            $mol_icon_temperature_kelvin: string;
            $mol_icon_tennis: string;
            $mol_icon_tennis_ball: string;
            $mol_icon_tent: string;
            $mol_icon_terrain: string;
            $mol_icon_test_tube: string;
            $mol_icon_test_tube_empty: string;
            $mol_icon_test_tube_off: string;
            $mol_icon_text: string;
            $mol_icon_text_shadow: string;
            $mol_icon_text_short: string;
            $mol_icon_text_subject: string;
            $mol_icon_text_to_speech: string;
            $mol_icon_text_to_speech_off: string;
            $mol_icon_textbox: string;
            $mol_icon_textbox_password: string;
            $mol_icon_texture: string;
            $mol_icon_theater: string;
            $mol_icon_theme_light_dark: string;
            $mol_icon_thermometer: string;
            $mol_icon_thermometer_alert: string;
            $mol_icon_thermometer_chevron_down: string;
            $mol_icon_thermometer_chevron_up: string;
            $mol_icon_thermometer_lines: string;
            $mol_icon_thermometer_minus: string;
            $mol_icon_thermometer_plus: string;
            $mol_icon_thermostat: string;
            $mol_icon_thermostat_box: string;
            $mol_icon_thought_bubble: string;
            $mol_icon_thought_bubble_outline: string;
            $mol_icon_thumb_down: string;
            $mol_icon_thumb_down_outline: string;
            $mol_icon_thumb_up: string;
            $mol_icon_thumb_up_outline: string;
            $mol_icon_thumbs_up_down: string;
            $mol_icon_ticket: string;
            $mol_icon_ticket_account: string;
            $mol_icon_ticket_confirmation: string;
            $mol_icon_ticket_outline: string;
            $mol_icon_ticket_percent: string;
            $mol_icon_tie: string;
            $mol_icon_tilde: string;
            $mol_icon_timelapse: string;
            $mol_icon_timeline: string;
            $mol_icon_timeline_outline: string;
            $mol_icon_timeline_text: string;
            $mol_icon_timeline_text_outline: string;
            $mol_icon_timer: string;
            $mol_icon_timer_10: string;
            $mol_icon_timer_3: string;
            $mol_icon_timer_off: string;
            $mol_icon_timer_sand: string;
            $mol_icon_timer_sand_empty: string;
            $mol_icon_timer_sand_full: string;
            $mol_icon_timetable: string;
            $mol_icon_toaster_oven: string;
            $mol_icon_toggle_switch: string;
            $mol_icon_toggle_switch_off: string;
            $mol_icon_toggle_switch_off_outline: string;
            $mol_icon_toggle_switch_outline: string;
            $mol_icon_toilet: string;
            $mol_icon_toolbox: string;
            $mol_icon_toolbox_outline: string;
            $mol_icon_tooltip: string;
            $mol_icon_tooltip_account: string;
            $mol_icon_tooltip_edit: string;
            $mol_icon_tooltip_image: string;
            $mol_icon_tooltip_image_outline: string;
            $mol_icon_tooltip_outline: string;
            $mol_icon_tooltip_plus: string;
            $mol_icon_tooltip_plus_outline: string;
            $mol_icon_tooltip_text: string;
            $mol_icon_tooltip_text_outline: string;
            $mol_icon_tooth: string;
            $mol_icon_tooth_outline: string;
            $mol_icon_tor: string;
            $mol_icon_tortoise: string;
            $mol_icon_tournament: string;
            $mol_icon_tower_beach: string;
            $mol_icon_tower_fire: string;
            $mol_icon_towing: string;
            $mol_icon_track_light: string;
            $mol_icon_trackpad: string;
            $mol_icon_trackpad_lock: string;
            $mol_icon_tractor: string;
            $mol_icon_trademark: string;
            $mol_icon_traffic_light: string;
            $mol_icon_train: string;
            $mol_icon_train_car: string;
            $mol_icon_train_variant: string;
            $mol_icon_tram: string;
            $mol_icon_transcribe: string;
            $mol_icon_transcribe_close: string;
            $mol_icon_transfer_down: string;
            $mol_icon_transfer_left: string;
            $mol_icon_transfer_right: string;
            $mol_icon_transfer_up: string;
            $mol_icon_transit_connection: string;
            $mol_icon_transit_connection_variant: string;
            $mol_icon_transit_transfer: string;
            $mol_icon_transition: string;
            $mol_icon_transition_masked: string;
            $mol_icon_translate: string;
            $mol_icon_translate_off: string;
            $mol_icon_transmission_tower: string;
            $mol_icon_trash_can: string;
            $mol_icon_trash_can_outline: string;
            $mol_icon_treasure_chest: string;
            $mol_icon_tree: string;
            $mol_icon_tree_outline: string;
            $mol_icon_trello: string;
            $mol_icon_trending_down: string;
            $mol_icon_trending_neutral: string;
            $mol_icon_trending_up: string;
            $mol_icon_triangle: string;
            $mol_icon_triangle_outline: string;
            $mol_icon_triforce: string;
            $mol_icon_trophy: string;
            $mol_icon_trophy_award: string;
            $mol_icon_trophy_broken: string;
            $mol_icon_trophy_outline: string;
            $mol_icon_trophy_variant: string;
            $mol_icon_trophy_variant_outline: string;
            $mol_icon_truck: string;
            $mol_icon_truck_check: string;
            $mol_icon_truck_delivery: string;
            $mol_icon_truck_fast: string;
            $mol_icon_truck_trailer: string;
            $mol_icon_tshirt_crew: string;
            $mol_icon_tshirt_crew_outline: string;
            $mol_icon_tshirt_v: string;
            $mol_icon_tshirt_v_outline: string;
            $mol_icon_tumble_dryer: string;
            $mol_icon_tumblr: string;
            $mol_icon_tumblr_box: string;
            $mol_icon_tumblr_reblog: string;
            $mol_icon_tune: string;
            $mol_icon_tune_vertical: string;
            $mol_icon_turnstile: string;
            $mol_icon_turnstile_outline: string;
            $mol_icon_turtle: string;
            $mol_icon_twitch: string;
            $mol_icon_twitter: string;
            $mol_icon_twitter_box: string;
            $mol_icon_twitter_circle: string;
            $mol_icon_twitter_retweet: string;
            $mol_icon_two_factor_authentication: string;
            $mol_icon_typewriter: string;
            $mol_icon_uber: string;
            $mol_icon_ubisoft: string;
            $mol_icon_ubuntu: string;
            $mol_icon_ultra_high_definition: string;
            $mol_icon_umbraco: string;
            $mol_icon_umbrella: string;
            $mol_icon_umbrella_closed: string;
            $mol_icon_umbrella_outline: string;
            $mol_icon_undo: string;
            $mol_icon_undo_variant: string;
            $mol_icon_unfold_less_horizontal: string;
            $mol_icon_unfold_less_vertical: string;
            $mol_icon_unfold_more_horizontal: string;
            $mol_icon_unfold_more_vertical: string;
            $mol_icon_ungroup: string;
            $mol_icon_unicode: string;
            $mol_icon_unity: string;
            $mol_icon_unreal: string;
            $mol_icon_untappd: string;
            $mol_icon_update: string;
            $mol_icon_upload: string;
            $mol_icon_upload_multiple: string;
            $mol_icon_upload_network: string;
            $mol_icon_upload_network_outline: string;
            $mol_icon_upload_outline: string;
            $mol_icon_usb: string;
            $mol_icon_van_passenger: string;
            $mol_icon_van_utility: string;
            $mol_icon_vanish: string;
            $mol_icon_variable: string;
            $mol_icon_vector_arrange_above: string;
            $mol_icon_vector_arrange_below: string;
            $mol_icon_vector_bezier: string;
            $mol_icon_vector_circle: string;
            $mol_icon_vector_circle_variant: string;
            $mol_icon_vector_combine: string;
            $mol_icon_vector_curve: string;
            $mol_icon_vector_difference: string;
            $mol_icon_vector_difference_ab: string;
            $mol_icon_vector_difference_ba: string;
            $mol_icon_vector_ellipse: string;
            $mol_icon_vector_intersection: string;
            $mol_icon_vector_line: string;
            $mol_icon_vector_point: string;
            $mol_icon_vector_polygon: string;
            $mol_icon_vector_polyline: string;
            $mol_icon_vector_radius: string;
            $mol_icon_vector_rectangle: string;
            $mol_icon_vector_selection: string;
            $mol_icon_vector_square: string;
            $mol_icon_vector_triangle: string;
            $mol_icon_vector_union: string;
            $mol_icon_venmo: string;
            $mol_icon_vhs: string;
            $mol_icon_vibrate: string;
            $mol_icon_vibrate_off: string;
            $mol_icon_video: string;
            $mol_icon_video_3d: string;
            $mol_icon_video_3d_variant: string;
            $mol_icon_video_4k_box: string;
            $mol_icon_video_account: string;
            $mol_icon_video_image: string;
            $mol_icon_video_input_antenna: string;
            $mol_icon_video_input_component: string;
            $mol_icon_video_input_hdmi: string;
            $mol_icon_video_input_svideo: string;
            $mol_icon_video_minus: string;
            $mol_icon_video_off: string;
            $mol_icon_video_off_outline: string;
            $mol_icon_video_outline: string;
            $mol_icon_video_plus: string;
            $mol_icon_video_stabilization: string;
            $mol_icon_video_switch: string;
            $mol_icon_video_vintage: string;
            $mol_icon_video_wireless: string;
            $mol_icon_video_wireless_outline: string;
            $mol_icon_view_agenda: string;
            $mol_icon_view_array: string;
            $mol_icon_view_carousel: string;
            $mol_icon_view_column: string;
            $mol_icon_view_comfy: string;
            $mol_icon_view_compact: string;
            $mol_icon_view_compact_outline: string;
            $mol_icon_view_dashboard: string;
            $mol_icon_view_dashboard_outline: string;
            $mol_icon_view_dashboard_variant: string;
            $mol_icon_view_day: string;
            $mol_icon_view_grid: string;
            $mol_icon_view_headline: string;
            $mol_icon_view_list: string;
            $mol_icon_view_module: string;
            $mol_icon_view_parallel: string;
            $mol_icon_view_quilt: string;
            $mol_icon_view_sequential: string;
            $mol_icon_view_split_horizontal: string;
            $mol_icon_view_split_vertical: string;
            $mol_icon_view_stream: string;
            $mol_icon_view_week: string;
            $mol_icon_vimeo: string;
            $mol_icon_violin: string;
            $mol_icon_virtual_reality: string;
            $mol_icon_visual_studio: string;
            $mol_icon_visual_studio_code: string;
            $mol_icon_vk: string;
            $mol_icon_vk_box: string;
            $mol_icon_vk_circle: string;
            $mol_icon_vlc: string;
            $mol_icon_voice: string;
            $mol_icon_voice_off: string;
            $mol_icon_voicemail: string;
            $mol_icon_volleyball: string;
            $mol_icon_volume_high: string;
            $mol_icon_volume_low: string;
            $mol_icon_volume_medium: string;
            $mol_icon_volume_minus: string;
            $mol_icon_volume_mute: string;
            $mol_icon_volume_off: string;
            $mol_icon_volume_plus: string;
            $mol_icon_volume_variant_off: string;
            $mol_icon_vote: string;
            $mol_icon_vote_outline: string;
            $mol_icon_vpn: string;
            $mol_icon_vuejs: string;
            $mol_icon_vuetify: string;
            $mol_icon_walk: string;
            $mol_icon_wall: string;
            $mol_icon_wall_sconce: string;
            $mol_icon_wall_sconce_flat: string;
            $mol_icon_wall_sconce_variant: string;
            $mol_icon_wallet: string;
            $mol_icon_wallet_giftcard: string;
            $mol_icon_wallet_membership: string;
            $mol_icon_wallet_outline: string;
            $mol_icon_wallet_travel: string;
            $mol_icon_wallpaper: string;
            $mol_icon_wan: string;
            $mol_icon_washing_machine: string;
            $mol_icon_watch: string;
            $mol_icon_watch_export: string;
            $mol_icon_watch_export_variant: string;
            $mol_icon_watch_import: string;
            $mol_icon_watch_import_variant: string;
            $mol_icon_watch_variant: string;
            $mol_icon_watch_vibrate: string;
            $mol_icon_watch_vibrate_off: string;
            $mol_icon_water: string;
            $mol_icon_water_off: string;
            $mol_icon_water_outline: string;
            $mol_icon_water_percent: string;
            $mol_icon_water_pump: string;
            $mol_icon_watermark: string;
            $mol_icon_wave: string;
            $mol_icon_waves: string;
            $mol_icon_waze: string;
            $mol_icon_weather_cloudy: string;
            $mol_icon_weather_cloudy_alert: string;
            $mol_icon_weather_cloudy_arrow_right: string;
            $mol_icon_weather_fog: string;
            $mol_icon_weather_hail: string;
            $mol_icon_weather_hazy: string;
            $mol_icon_weather_hurricane: string;
            $mol_icon_weather_lightning: string;
            $mol_icon_weather_lightning_rainy: string;
            $mol_icon_weather_night: string;
            $mol_icon_weather_night_partly_cloudy: string;
            $mol_icon_weather_partly_cloudy: string;
            $mol_icon_weather_partly_lightning: string;
            $mol_icon_weather_partly_rainy: string;
            $mol_icon_weather_partly_snowy: string;
            $mol_icon_weather_partly_snowy_rainy: string;
            $mol_icon_weather_pouring: string;
            $mol_icon_weather_rainy: string;
            $mol_icon_weather_snowy: string;
            $mol_icon_weather_snowy_heavy: string;
            $mol_icon_weather_snowy_rainy: string;
            $mol_icon_weather_sunny: string;
            $mol_icon_weather_sunny_alert: string;
            $mol_icon_weather_sunset: string;
            $mol_icon_weather_sunset_down: string;
            $mol_icon_weather_sunset_up: string;
            $mol_icon_weather_tornado: string;
            $mol_icon_weather_windy: string;
            $mol_icon_weather_windy_variant: string;
            $mol_icon_web: string;
            $mol_icon_webcam: string;
            $mol_icon_webhook: string;
            $mol_icon_webpack: string;
            $mol_icon_wechat: string;
            $mol_icon_weight: string;
            $mol_icon_weight_gram: string;
            $mol_icon_weight_kilogram: string;
            $mol_icon_weight_pound: string;
            $mol_icon_whatsapp: string;
            $mol_icon_wheelchair_accessibility: string;
            $mol_icon_whistle: string;
            $mol_icon_white_balance_auto: string;
            $mol_icon_white_balance_incandescent: string;
            $mol_icon_white_balance_iridescent: string;
            $mol_icon_white_balance_sunny: string;
            $mol_icon_widgets: string;
            $mol_icon_wifi: string;
            $mol_icon_wifi_off: string;
            $mol_icon_wifi_star: string;
            $mol_icon_wifi_strength_1: string;
            $mol_icon_wifi_strength_1_alert: string;
            $mol_icon_wifi_strength_1_lock: string;
            $mol_icon_wifi_strength_2: string;
            $mol_icon_wifi_strength_2_alert: string;
            $mol_icon_wifi_strength_2_lock: string;
            $mol_icon_wifi_strength_3: string;
            $mol_icon_wifi_strength_3_alert: string;
            $mol_icon_wifi_strength_3_lock: string;
            $mol_icon_wifi_strength_4: string;
            $mol_icon_wifi_strength_4_alert: string;
            $mol_icon_wifi_strength_4_lock: string;
            $mol_icon_wifi_strength_alert_outline: string;
            $mol_icon_wifi_strength_lock_outline: string;
            $mol_icon_wifi_strength_off: string;
            $mol_icon_wifi_strength_off_outline: string;
            $mol_icon_wifi_strength_outline: string;
            $mol_icon_wii: string;
            $mol_icon_wiiu: string;
            $mol_icon_wikipedia: string;
            $mol_icon_wind_turbine: string;
            $mol_icon_window_close: string;
            $mol_icon_window_closed: string;
            $mol_icon_window_maximize: string;
            $mol_icon_window_minimize: string;
            $mol_icon_window_open: string;
            $mol_icon_window_restore: string;
            $mol_icon_windows: string;
            $mol_icon_windows_classic: string;
            $mol_icon_wiper: string;
            $mol_icon_wiper_wash: string;
            $mol_icon_wordpress: string;
            $mol_icon_worker: string;
            $mol_icon_wrap: string;
            $mol_icon_wrap_disabled: string;
            $mol_icon_wrench: string;
            $mol_icon_wrench_outline: string;
            $mol_icon_wunderlist: string;
            $mol_icon_xamarin: string;
            $mol_icon_xamarin_outline: string;
            $mol_icon_xaml: string;
            $mol_icon_xbox: string;
            $mol_icon_xbox_controller: string;
            $mol_icon_xbox_controller_battery_alert: string;
            $mol_icon_xbox_controller_battery_charging: string;
            $mol_icon_xbox_controller_battery_empty: string;
            $mol_icon_xbox_controller_battery_full: string;
            $mol_icon_xbox_controller_battery_low: string;
            $mol_icon_xbox_controller_battery_medium: string;
            $mol_icon_xbox_controller_battery_unknown: string;
            $mol_icon_xbox_controller_menu: string;
            $mol_icon_xbox_controller_off: string;
            $mol_icon_xbox_controller_view: string;
            $mol_icon_xda: string;
            $mol_icon_xing: string;
            $mol_icon_xing_box: string;
            $mol_icon_xing_circle: string;
            $mol_icon_xml: string;
            $mol_icon_xmpp: string;
            $mol_icon_yahoo: string;
            $mol_icon_yammer: string;
            $mol_icon_yeast: string;
            $mol_icon_yelp: string;
            $mol_icon_yin_yang: string;
            $mol_icon_youtube: string;
            $mol_icon_youtube_creator_studio: string;
            $mol_icon_youtube_gaming: string;
            $mol_icon_youtube_subscription: string;
            $mol_icon_youtube_tv: string;
            $mol_icon_z_wave: string;
            $mol_icon_zend: string;
            $mol_icon_zigbee: string;
            $mol_icon_zip_box: string;
            $mol_icon_zip_disk: string;
            $mol_icon_zodiac_aquarius: string;
            $mol_icon_zodiac_aries: string;
            $mol_icon_zodiac_cancer: string;
            $mol_icon_zodiac_capricorn: string;
            $mol_icon_zodiac_gemini: string;
            $mol_icon_zodiac_leo: string;
            $mol_icon_zodiac_libra: string;
            $mol_icon_zodiac_pisces: string;
            $mol_icon_zodiac_sagittarius: string;
            $mol_icon_zodiac_scorpio: string;
            $mol_icon_zodiac_taurus: string;
            $mol_icon_zodiac_virgo: string;
        };
        icons_filter(val?: any): string;
        Icons_filter(): $$.$mol_search;
        Github(): $mol_link_source;
        Lights(): $$.$mol_lights_toggle;
        Theme(): $$.$mol_theme_auto;
        output(): readonly any[];
        Output(): $$.$mol_list;
        Row_icon(id: any): $mol_icon;
        row_title(id: any): string;
        Row_title(id: any): $$.$mol_dimmer;
        row_descr(id: any): string;
        Row_descr(id: any): $$.$mol_dimmer;
    }
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_icon_demo extends $.$mol_icon_demo {
        icons_filter(next?: string): string;
        Row_icon(name: string): $mol_icon;
        row_title(name: string): string;
        row_descr(name: string): any;
        icons_all(): string[];
        icons_filtered(): string[];
        output(): $mol_row[];
    }
}

export = $;