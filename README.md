# Obsidian Flashcards LLM

![Downloads](https://img.shields.io/github/downloads/crybot/obsidian-flashcards-llm/total?style=for-the-badge)

This plugin integrates Large Language Models with Obsidian to help you generate flashcards from your notes. By leveraging OpenAI's and Deepseek's models, you can streamline your study process directly within Obsidian.

## News

- **Deepseek Integration**: The plugin now supports Deepseek models `deepseek-v4-flash` and `deepseek-v4-pro`
- **Model Updates**: Model lineup updated to include `gpt-5.4-mini`, `gpt-5.4-nano`, `gpt-5.5`, and reasoning model support
- You can change reasoning effort for reasoning models in the settings (low, medium, high)

## Features

### Multi-Provider Integration

- **Multiple Models**: Supports OpenAI GPT models, Deepseek V4 models, and reasoning models. Configure your API key in the plugin settings and select the desired model.
- **Flashcard Generation**: Generate flashcards from any open note using the available commands. The flashcards are appended to your note within a blockquote.

### Customization Options

- **Selective Content Generation**: Choose to generate flashcards from a specific selection of your note or the entire note.
- **Custom Prompts and Quantity**: Provide specific prompts and determine the number of flashcards to generate.
- **Inline Flashcards**: Customize the separator used for generating inline flashcards to match your preferred format.
- **Multi-line Flashcards**: Provide the separator used for generating multi-line flashcards.
- **Flashcards tag**: Choose which tag to append to the generated flashcards for managing your decks.
- **Max output tokens**: Set the maximum number of tokens the model can output to preserve your budget.
- **Hide flashcards in preview mode**: Toggle this setting to hide the generated flashcards during preview.
  If this is on, set `Save scheduling comment on the same line as the flashcard's last line` to on in
  the Spaced Repetition plugin as well, in order not to break the blockquote formatting.
- **Change settings on the fly**: You can change settings on a per-command basis by running the `Generate flashcards with new settings` command

### Future Plans

- **Expanded Flashcard Types**: Upcoming updates will support reversed flashcards, automatic deck creation and additional customization options.

## Compatibility

- **Integration with Obsidian-Spaced-Repetition**: This plugin is designed to work with the [obsidian-spaced-repetition](https://github.com/st3v3nmw/obsidian-spaced-repetition) plugin, ensuring seamless integration of generated flashcards into your study routine.

## Demo

Check out this demo to see the plugin in action:
![Flashcards Demo](https://github.com/crybot/obsidian-flashcards-llm/blob/master/docs/flashcards.gif)

---

You can also specify new settings on the fly with the `Generate flashcards with new settings` command:
![Flashcards Interactive Demo](https://github.com/crybot/obsidian-flashcards-llm/blob/master/docs/flashcards-interactive.gif)

Try Obsidian Flashcards LLM and transform your notes into a structured study tool. Contributions, feedback, and suggestions are always welcome!

## Setup

Follow your provider's quickstart guide to obtain an API key (e.g., [OpenAI](https://platform.openai.com/docs/quickstart) or [Deepseek](https://platform.deepseek.com/)).
Then open the plugin settings and paste your key in the `API Key` field.

## Usage

From within any open note you can run one of the following commands:

- `Generate Inline Flashcards`
- `Generate Multiline Flashcards`
  which will generate the designated number of flashcards with the required format.
  If visually you select a portion of your note before running the command, the
  model will only use that selection as context, otherwise, the whole text is used.
  Unless you see an error on screen, your flashcards should start appearing in a stream-like fashion
  at the end of your note soon enough.
  Consider using `gpt-4o` or `gpt-5.4-mini` for best results. For complex multi-line flashcards with long answers, try `gpt-5.5`, `deepseek-v4-pro`, or `deepseek-v4-flash`.
- You can also execute the command `Generate flashcards with new settings` which lets
  you transiantly customize the settings on the fly by specifying a custom prompt,
  the number of flashcards to generate and whether they have to be multiline.

## Tips

I suggest using `gpt-4o` or `gpt-5.4-mini` for most use cases because they're fast and cheap.
For more complex cards that require long answers (for example, long mathematical derivations),
try `gpt-5.5` or `deepseek-v4-pro`, which handle complex instructions well. If you'd like a faster, lower-cost alternative, `deepseek-v4-flash` is also worth trying.

## Support

If you find this plugin helpful and want to support its development, consider donating:

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://bmc.link/crybot)
[![GitHub Sponsor](https://img.shields.io/badge/GitHub%20Sponsor-171515?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/crybot)
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://paypal.me/crybot?country.x=IT&locale.x=it_IT)
