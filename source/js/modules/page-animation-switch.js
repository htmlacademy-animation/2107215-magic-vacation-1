import AccentTypographyBuild from './accent-typography-builder';

export default class AnimationsSwitcher {
  constructor() {
    this.storyText = new AccentTypographyBuild(`.slider__item-title`, 400, `ease`, `accent-typography--active`, `slider__text`, 0, 60);
    this.prizesText = new AccentTypographyBuild(`.prizes__title`, 400, `ease`, `accent-typography--active`, `prizes__text`, 0, 60);
    this.rulesText = new AccentTypographyBuild(`.rules__title`, 400, `ease`, `accent-typography--active`, `rules__text`, 0, 60);
    this.introText = new AccentTypographyBuild(`.intro__title`, 400, `ease`, `accent-typography--active`, `intro__text`, 0, 50);
    this.gameText = new AccentTypographyBuild(`.game__title`, 400, `ease`, `accent-typography--active`, `game__text`, 0, 60);
    this.introDateText = new AccentTypographyBuild(`.intro__date`, 200, `cubic-bezier(0.32, -0.98, 0, 0.77)`, `accent-typography--active`, `intro__text-date`, 1250, 40);

    this.scriptRunSchema = {
      top: [
        this.introText.runAnimation.bind(this.introText),
        this.introDateText.runAnimation.bind(this.introDateText)
      ],
      story: [
        this.storyText.runAnimation.bind(this.storyText),
      ],
      prizes: [
        this.prizesText.runAnimation.bind(this.prizesText),
      ],
      rules: [
        this.rulesText.runAnimation.bind(this.rulesText),
      ],
      game: [
        this.gameText.runAnimation.bind(this.gameText),
      ]
    };

    this.scriptDestroySchema = {
      top: [
        this.introText.destroyAnimation.bind(this.introText),
        this.introDateText.destroyAnimation.bind(this.introDateText)
      ],
      story: [
        this.storyText.destroyAnimation.bind(this.storyText),
      ],
      prizes: [
        this.prizesText.destroyAnimation.bind(this.prizesText),
      ],
      rules: [
        this.rulesText.destroyAnimation.bind(this.rulesText),
      ],
      game: [
        this.gameText.destroyAnimation.bind(this.gameText),
      ]
    };
  }

  resetAnimation() {
    for (const destroySchema in this.scriptDestroySchema) {
      if (this.scriptDestroySchema.hasOwnProperty(destroySchema)) {
        this.scriptDestroySchema[destroySchema].forEach((funct) => setTimeout(() => funct(), 200));
      }
    }
  }

  setAnimation(sectionId) {
    this.resetAnimation();

    if (this.scriptRunSchema[sectionId]) {
      [...this.scriptRunSchema[sectionId]].forEach((funct) => setTimeout(() => funct(), 200));
    }
  }
}
