# Bash autocomplete compatability so bash files can be loaded
autoload bashcompinit
bashcompinit
source ~/.extra
source ~/.zsh/history.zsh
source ~/.zsh/completion.zsh


# Autosuggestions
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh

# Prompt
setopt PROMPT_SUBST
source ~/.git-prompt.sh
autoload -U colors && colors

PROMPT='%{$fg[yellow]%}%1d' # current directory
PROMPT+='%{$fg[blue]%}$(__git_ps1 " %s")' # current git branch
PROMPT+='%{$reset_color%} | '


# Key bindings
bindkey ' ' magic-space  # [Space] - do history expansion
