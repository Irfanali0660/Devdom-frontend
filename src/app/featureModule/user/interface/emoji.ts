export interface emojiinterface {
    emoji: Emoji;
    $event: $event;
  }
  export interface Emoji {
    name: string;
    unified: string;
    emoticons?: (string)[] | null;
    keywords?: (string)[] | null;
    sheet?: (number)[] | null;
    shortNames?: (string)[] | null;
    shortName: string;
    id: string;
    native: string;
    skinVariations?: (null)[] | null;
    hidden?: (null)[] | null;
    text: string;
    set: string;
    colons: string;
  }
  export interface $event {
    isTrusted: boolean;
    delegateTarget: DelegateTarget;
  }
  export interface DelegateTarget {
    location: Location;
    uidEvent: number;
    __zone_symbol__clickfalse?: (ZoneSymbolClickfalseEntityOrZoneSymbolMouseenterfalseEntityOrZoneSymbolMouseleavefalseEntityOrZoneSymbolReadystatechangefalseEntity)[] | null;
    __zone_symbol__mouseenterfalse?: (ZoneSymbolClickfalseEntityOrZoneSymbolMouseenterfalseEntityOrZoneSymbolMouseleavefalseEntityOrZoneSymbolReadystatechangefalseEntity)[] | null;
    __zone_symbol__mouseleavefalse?: (ZoneSymbolClickfalseEntityOrZoneSymbolMouseenterfalseEntityOrZoneSymbolMouseleavefalseEntityOrZoneSymbolReadystatechangefalseEntity)[] | null;
    __zone_symbol__readystatechangefalse?: (ZoneSymbolClickfalseEntityOrZoneSymbolMouseenterfalseEntityOrZoneSymbolMouseleavefalseEntityOrZoneSymbolReadystatechangefalseEntity)[] | null;
  }
  export interface Location {
    ancestorOrigins: AncestorOrigins;
    href: string;
    origin: string;
    protocol: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
  }
  export interface AncestorOrigins {
  }
  export interface ZoneSymbolClickfalseEntityOrZoneSymbolMouseenterfalseEntityOrZoneSymbolMouseleavefalseEntityOrZoneSymbolReadystatechangefalseEntity {
    type: string;
    state: string;
    source: string;
    zone: string;
    runCount: number;
  }
  