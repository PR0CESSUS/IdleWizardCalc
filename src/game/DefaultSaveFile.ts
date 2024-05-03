import { BigNumberSaveFile } from "@/type/BigNumberSaveFile";
import { Gods } from "@/type/Gods";
import { HeroesNames } from "@/type/HeroesNames";

export class DefaultSaveFile {
  BuildingLevels: number[] = Array(8).fill(0);
  Upgrades: number[] = [];
  Int: number = 0;
  Ins: number = 0;
  Scr: number = 0;
  Wis: number = 0;
  Dom: number = 0;
  Pat: number = 0;
  Mas: number = 0;
  Emp: number = 0;
  Ver: number = 0;
  Pet: number = 0;
  Hero: number = 0;
  CastSpell: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  CharExp: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  VMana: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  ClickableCollect: number = 0;
  Catalysts: {
    Catalysts: [
      {
        t: 1;
        a: 0;
        m: 0;
        r: 0;
      },
      {
        t: 2;
        a: 0;
        m: 0;
        r: 0;
      },
      {
        t: 3;
        a: 0;
        m: 0;
        r: 0;
      },
      {
        t: 4;
        a: 0;
        m: 0;
        r: 0;
      },
      {
        t: 5;
        a: 0;
        m: 0;
        r: 0;
      },
      {
        t: 6;
        a: 0;
        m: 0;
        r: 0;
      },
      {
        t: 7;
        a: 0;
        m: 0;
        r: 0;
      },
      {
        t: 8;
        a: 0;
        m: 0;
        r: 0;
      }
    ];
    // "Total": {
    //     "Mantissa": 8.220730321746082,
    //     "Exponent": 4
    // },
    // "tA": {
    //     "Mantissa": 1.8882530145088434,
    //     "Exponent": 4
    // },
    // "fA": {
    //     "Mantissa": 9.315842951949021,
    //     "Exponent": 2
    // },
    // "tM": {
    //     "Mantissa": 9.408600040084119,
    //     "Exponent": 2
    // },
    // "fM": {
    //     "Mantissa": 5.434749660395694,
    //     "Exponent": 1
    // },
    // "tR": {
    //     "Mantissa": 3.012470004485247,
    //     "Exponent": 4
    // },
    // "fR": {
    //     "Mantissa": 4.4761541559132745,
    //     "Exponent": 2
    // }
  };
  SaveTime: string;
  PetExp: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  Mana: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  Souls: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  FPS: number;
  NumberFormat: boolean;
  FloorMultibuy: boolean;
  SoundOn: boolean;
  MusicOn: boolean;
  VoidSFX: boolean;
  ClassChooiseMessage: boolean;
  RedColorCost: boolean;
  AutoClose: boolean;
  FlyingText: boolean;
  Particles: boolean;
  OrbParticles: boolean;
  BackParticles: boolean;
  ThrowShards: boolean;
  Quotes: boolean;
  ShowComics: boolean;
  CTips: boolean;
  MirrorChar: boolean;
  MirrorPet: boolean;
  Cursor: boolean;
  MusicVolume: number;
  SoundVolume: number;
  BuyPack: number;
  Ascends: number;
  AscendsRealm: number;
  TotalBuildings: number;
  ManaAllTime: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  ManaRealm: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  ManaSession: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  VoidManaAllTime: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  VoidManaRealm: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  VoidManaSession: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  MaxVMSession: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  ClicksTotal: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  ClicksRealm: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  Clicks: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  AutoClicksTotal: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  AutoClicksRealm: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  AutoClicks: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  CastSpellTotal: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  CastSpellRealm: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  ShardsTotal: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  ShardsRealm: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  ShardsSession: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  ClickableCollectRealm: number;
  ClickableCollectTotal: number;
  CTTotal: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  HCTotal: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  LSTotal: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  ClassTime: number[];
  HeroPlayedTime: number;
  PetPlayedTime: number;
  HeroSkipedPlayedTime: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  PetSkipedPlayedTime: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  TimeTotal: number;
  TimeRealm: number;
  TimeSession: number;
  SkipedTimeTotal: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  SkipedTimeRealm: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  SkipedTimeSession: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  TimeIdleTotal: number;
  TimeIdleRealm: number;
  TimeIdleSession: number;
  TimeOfflineTotal: number;
  TimeOfflineRealm: number;
  TimeOfflineSession: number;
  BoughtUpgrades: number;
  PetMaxLevel: number;
  PetMaxLevelAllTime: number;
  HeroMaxLevelAllTime: number;
  ApprenticeMaxLevelRealm: number;
  Bats: number;
  BatsE: number;
  BatsR: number;
  BatsOnly: number;
  EDE: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  ChoosenSpells: number[];
  SpellShards: string[];
  Autocast: number[];
  Stance: number;
  OtherSpellShards: null;
  AccumCasts: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  SpellUses: {
    aver: number;
    key: number;
    value: number;
  }[] = [];
  SpellUsesTR: {
    aver: number;
    key: number;
    value: number;
  }[] = [];
  Resources: null;
  Jars: null;
  Craft: {
    CSkillExp: BigNumberSaveFile;
    Charges;
    Equiped;
    Forge: {
      Auto: boolean;
      Slots;
      Work: number;
    };
    GSkillExp: BigNumberSaveFile;
    Items: { enchant: number; fav: boolean; id: number; progress: number; rusty: number; tier: number }[];
  };
  Gilding: null;
  ResCollected: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  TCollectedRes: null;
  RCollectedRes: null;
  DropMB: null;
  Corruption: null;
  Gamble: null;
  EventSave: null;
  SpellPresets: {
    prime: { [key in keyof typeof HeroesNames]: string };
    quasi: {};
  };
  ItemPresets: null;
  AchievementsSave: null;
  RAchieves: null;
  Triumphs: null;
  GalleryH: null;
  GalleryP: null;
  Interior: null;
  ActiveChID: number;
  CompletedChIDs: number[];
  ChProgress: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  Trial: {
    completed: number;
    data: number[][];
    keys: number;
    timer: number;
    tos: boolean;
    totalCompleted: number;
    tries: number;
  };
  Pantheon: {
    chooses: number[];
    exp: { [key in keyof typeof Gods]?: BigNumberSaveFile };
    maxLvl: number;
    minorLvl: number;
    prayingExp: BigNumberSaveFile;
  };
  Shop: null;
  AttTotal: number;
  AttSearched: number;
  AttFree: number;
  AttResets: number;
  AttProgress: number;
  Paragon: number;
  ClassBonusStacks: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  ClassSubRes: BigNumberSaveFile = { Mantissa: 0, Exponent: 0 };
  Social: number[];
  Memories: null;
  Realm: null;
  Ascention: null;
  Card: null;
  SaveVersion: number;
  VipTier: number;
  Relics: number;
  Real: number;
  Coins: number;
  Nullifiers: number;
  DECore: number;
  GM: number;
  Catcher: boolean;
  CatcherUpgrade: number;
  EVip3: boolean;
}
