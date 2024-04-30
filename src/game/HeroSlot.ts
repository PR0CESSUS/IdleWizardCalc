import { HeroesNames } from "@/type/HeroesNames";
import { BigNumber } from "./BigNumber";
import { GameContext } from "./GameContext";
import { VariableBignumber } from "./VariableBignumber";
import { VariableComplex } from "./VariableComplex";
import { VariableInt } from "./VariableInt";
import { Statistic } from "./Statistic";
import { Hero } from "./Hero";
import { GameManager } from "./GameManager";
import { ArcT2 } from "./ArcT2";

export class HeroSlot {
  Hero: Hero;
  DefaultClass: HeroesNames;
  HeroExp: VariableBignumber;
  ExpBoost: VariableBignumber;
  ExpMult: VariableComplex;
  ExpManaSources: VariableComplex;
  ExpFlat: VariableBignumber;
  ClassBonusStacks: VariableBignumber;
  APSpeed: VariableBignumber;
  // LevelLabel: TextMeshProUGUI;
  // AscensionLevelLabel: TextMeshProUGUI;
  // XPbarRect: RectTransform;
  // ExpBar: Image;
  // Tip: TextMeshProUGUI;
  // Portrait: PortraitFrame;
  // HeroPanel: HeroChoosePanel;
  Level: VariableInt;
  PlayedTime: number; //VariableLong;
  SkipedPlayedTime: VariableBignumber;
  StartingLevel: VariableInt;
  AbilityPower: VariableComplex;
  // Quote: TextMeshProUGUI;
  // QuoteImage: Image;
  // LevelUpEffect: ParticleSystem;
  // DistortionTime: TextMeshProUGUI;
  // IconSetAnim: ItemSetIconFlash;
  // sign: BottomPanelButton;
  // timer: Timer;
  // tip_active;
  GrowBaseLevel = 1.09;
  // OnPreSelect: Action;
  // OnSelect: Action;
  // OnChange: Action;
  // updateTimer;
  // checkUnlocksTimer = 10;
  // OnMirror: Action;
  Heroes: Hero[] = [];

  Init() {
    this.HeroExp = new VariableBignumber(new BigNumber(GameManager.Instance.SaveFile.CharExp.Mantissa, GameManager.Instance.SaveFile.CharExp.Exponent));
    this.ExpBoost = new VariableBignumber(1.0);
    this.ExpMult = new VariableComplex(1.0);
    this.ExpManaSources = new VariableComplex(1.0);
    this.ExpFlat = new VariableBignumber(0.0);
    this.Level = new VariableInt(new BigNumber(1));
    this.PlayedTime = 1;
    this.SkipedPlayedTime = new VariableBignumber(0.0);
    this.StartingLevel = new VariableInt(new BigNumber(1));
    this.AbilityPower = new VariableComplex(1.0);
    this.ClassBonusStacks = new VariableBignumber(0.0);
    this.APSpeed = new VariableBignumber(1.0);
    this.DefaultClass = HeroesNames.Apprentice;

    this.InitHeroes();

    // let hero: HeroesChoose = this.HeroPanel.Heroes[0];
    // hero.Init();
    this.ActivateHero(this.Heroes[GameManager.Instance.SaveFile.Hero]);
    GameContext.ContextAddResource("Hero.Level", this.Level);
    GameContext.ContextAddResource("Hero.Exp", this.HeroExp);
    // GameContext.ContextAddResource("Hero.Time", this.PlayedTime);
    GameContext.ContextAddResource("Hero.MaxLevelAllTime", Statistic.HeroMaxLevelAllTime);
    GameContext.ContextAddResource("Hero.ApprenticeMaxLevelRealm", Statistic.ApprenticeMaxLevelRealm);
    GameContext.ContextAddResource("Hero.AbilityPower", this.AbilityPower);
    GameContext.ContextAddResource("Hero.StackBonus", this.ClassBonusStacks);
    GameContext.ContextAddResource("Hero.ExpBoost", this.ExpBoost);
    GameContext.ContextAddResource("Hero.ExpMult", this.ExpMult);
    GameContext.ContextAddResource("Hero.ExpMS", this.ExpManaSources);
    GameContext.ContextAddResource("Hero.APSpeed", this.APSpeed);
    GameContext.ContextAddResource("Hero.HC", Statistic.HCTotal);
    GameContext.ContextAddResource("Hero.LS", Statistic.LSTotal);
    GameContext.ContextAddResource("Hero.CT", Statistic.CTTotal);
    //   GameManager.Instance.Ascension.OnAscension += new Action(this.onAscension);
  }

  Restart() {
    //   this.StopAllCoroutines();
    //   this.ClassBonusStacks.SetValue(0.0);
    //   this.HeroExp.SetValue(0.0);
    //   this.ExpFlat.SetValue(0.0);
    //   this.Level.SetValue(this.StartingLevel.ValueInt);
    //   this.PlayedTime.SetValue(1UL);
    //   this.SkipedPlayedTime.SetValue(0.0);
    //   this.AbilityPower.Reset(1.0);
    //   this.Hero.UpdateExp();
    //   this.SetHero(this.DefaultClass);
    //   this.ExpBar.fillAmount = 0.0;
    //   this.LevelLabel.text = "";
    //   this.HeroPanel.Restart();
  }

  PostLoad() {
    //   foreach (hero: IClassChoose in this.HeroPanel.Heroes)
    //     hero.Check();
    //   this.sign.TurnOff();
  }

  Update() {
    //   this.Hero.update();
    //   this.updateTimer += Time.unscaledDeltaTime;
    //   if (this.updateTimer > 0.25) {
    //     this.UpdateExpLabel();
    //     this.UpdateDistortionTime();
    //     this.updateTimer = 0.0;
    //   }
    //   this.checkUnlocksTimer += Time.unscaledDeltaTime;
    //   if (this.checkUnlocksTimer <= 30.0)
    //     return;
    //   foreach (hero: HeroesChoose in this.HeroPanel.Heroes) {
    //     if (!hero.Hero.Unlocked) {
    //       if (hero.CheckAvailable())
    //         break;
    //     }
    //   }
    //   this.checkUnlocksTimer = 0.0;
  }

  LateUpdate() {
    return this.Hero.UpdateExp();
  }

  UpdateExpLabel() {
    //   this.LevelLabel.text = this.Hero.Level.ValueInt.ToString();
    //   if (!GameManager.Instance.Ascension.IsActive) {
    //     this.ExpBar.fillAmount = this.Hero.LevelProgress;
    //   }
    //   else {
    //     current: DemonForm = GameManager.Instance.Ascension.GetCurrent();
    //     this.ExpBar.fillAmount = current.LevelProgress;
    //     this.AscensionLevelLabel.text = current.Level.ValueInt.ToString();
    //   }
  }

  onAscension() {
    //   this.AscensionLevelLabel.transform.parent.gameObject.SetActive(GameManager.Instance.Ascension.IsActive);
    //   if (GameManager.Instance.Ascension.IsActive)
    //     this.XPbarRect.sizeDelta = new Vector2(61, this.XPbarRect.sizeDelta.y);
    //   else
    //     this.XPbarRect.sizeDelta = new Vector2(86, this.XPbarRect.sizeDelta.y);
  }

  UpdateDistortionTime() {
    //   if (Time.timeScale > 1.0) {
    //     if (!this.DistortionTime.gameObject.activeInHierarchy)
    //       this.DistortionTime.gameObject.SetActive(true);
    //     this.DistortionTime.text = "distortion: Time x" + Time.timeScale.ToString("F2", (IFormatProvider) CultureInfo.InvariantCulture);
    //   }
    //   else {
    //     if (!this.DistortionTime.gameObject.activeInHierarchy)
    //       return;
    //     this.DistortionTime.gameObject.SetActive(false);
    //   }
  }

  ActivateHero(hero: Hero, inReset = false) {
    // console.log("ActivateHero", hero);
    // this.CurrentHero.Hero.CurrentExp = new BigNumber(this.SaveFile.CharExp.Mantissa, this.SaveFile.CharExp.Exponent);
    // this.CurrentHero.Hero.UpdateExp();
    if (this.Hero == hero) return;
    //   if (this.OnPreSelect != null)
    //     this.OnPreSelect();
    //   if (this.Hero != null)
    //     this.Hero.DisableAll();
    //   this.PlayedTime.SetValue(1UL);
    //   GameManager.Instance.Idle.Restart();
    this.Hero = hero;
    //   this.Portrait.UpdateFrame();
    // this.Hero.Level = this.Level;
    //   if (GameManager.Instance.ChallengeManager.StatsIsOn())
    //     this.Hero.Level.Change(0);
    this.Hero.experience = this.HeroExp;
    //   GameManager.Instance.CurrentHero.ClassBonusStacks.SetValue(0.0);
    //   GameManager.Instance.VoidMana.SetValue(0.0);
    //   this.Hero.ApplyEffects();
    //   GameManager.Instance.Interior.Orbs.ActivateCurrent();
    //   if (this.OnSelect != null)
    //     this.OnSelect();
    //   this.ChangeColorQuote();
    //   if (!Settings.Cursor)
    //     return;
    //   GameManager.Instance.Interior.Cursors.UpdateCursor();
  }

  // SetHero(key: HeroesNames) {return this.SetHero(this.HeroPanel.GetHero(key));}

  SetHero(h) {
    //   this.ActivateHero(h.Hero);
    //   GameManager.Instance.SpellBook.ChangeSpellSet();
    //   if (this.OnChange == null)
    //     return;
    //   this.OnChange();
  }

  AddFlatExp(value: BigNumber) {
    return this.ExpFlat.Change(value);
  }

  InitHeroes() {
    // this.Heroes[HeroesNames.Apprentice] = new Apprentice();
    // this.Heroes[HeroesNames.Druid] = new Druid();
    // this.Heroes[HeroesNames.Demonologist] = new Demonologist();
    // this.Heroes[HeroesNames.Necromancer] = new Necromancer();
    // this.Heroes[HeroesNames.Arcanist] = new Arcanist();
    // this.Heroes[HeroesNames.Prodigy] = new Prodigy();
    // this.Heroes[HeroesNames.Voidmancer] = new Voidmancer();
    // this.Heroes[HeroesNames.Exorcist] = new Exorcist();
    // this.Heroes[HeroesNames.Chronomancer] = new Chronomancer();
    // this.Heroes[HeroesNames.Umbramancer] = new Umbramancer();
    // this.Heroes[HeroesNames.Alchemist] = new Alchemist();
    // this.Heroes[HeroesNames.Ironsoul] = new Ironsoul();
    // this.Heroes[HeroesNames.Abolisher] = new Abolisher();
    // this.Heroes[HeroesNames.Shaman] = new Shaman();
    // this.Heroes[HeroesNames.Heretic] = new Heretic();
    // this.Heroes[HeroesNames.Oni] = new Oni();
    this.Heroes[HeroesNames.Archon] = new ArcT2();
    // this.Heroes[HeroesNames.Temporalist] = new ProdT2();
    // this.Heroes[HeroesNames.Desolator] = new Desolator();
  }
}
