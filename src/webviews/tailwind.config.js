/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '224px',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-16deg)' },
        '50%': { transform: 'rotate(16deg)' },
      },
      glow: {
        '0%, 100%': {
          boxShadow: '0 0 5px rgba(239, 68, 68, 0.5)',
        },
        '50%': {
          boxShadow: '0 0 12px rgba(239, 68, 68, 1)',
        },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      fadeOut: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
    },
    extend: {
      animation: {
        wiggle: 'wiggle 200ms ease-in-out',
        glow: 'glow 2000md ease-in-out',
        fadeIn: 'fadeIn 200ms ease-in-out',
        fadeOut: 'fadeOut 200ms ease-in-out',
      },
      colors: {
        vscode: {
          contrastActiveBorder: 'var(--vscode-contrastActiveBorder)',
          contrastBorder: 'var(--vscode-contrastBorder)',
          focusBorder: 'var(--vscode-focusBorder)',
          foreground: 'var(--vscode-foreground)',
          'widget-shadow': 'var(--vscode-widget-shadow)',
          'selection-background': 'var(--vscode-selection-background)',
          descriptionForeground: 'var(--vscode-descriptionForeground)',
          errorForeground: 'var(--vscode-errorForeground)',
          'icon-foreground': 'var(--vscode-icon-foreground)',
          'sash-hoverBorder': 'var(--vscode-sash-hoverBorder)',
          'window-activeBorder': 'var(--vscode-window-activeBorder)',
          'window-inactiveBorder': 'var(--vscode-window-inactiveBorder)',
          'textBlockQuote-background':
            'var(--vscode-textBlockQuote-background)',
          'textBlockQuote-border': 'var(--vscode-textBlockQuote-border)',
          'textCodeBlock-background': 'var(--vscode-textCodeBlock-background)',
          'textLink-activeForeground':
            'var(--vscode-textLink-activeForeground)',
          'textLink-foreground': 'var(--vscode-textLink-foreground)',
          'textPreformat-foreground': 'var(--vscode-textPreformat-foreground)',
          'textSeparator-foreground': 'var(--vscode-textSeparator-foreground)',
          'button-background': 'var(--vscode-button-background)',
          'button-foreground': 'var(--vscode-button-foreground)',
          'button-hoverBackground': 'var(--vscode-button-hoverBackground)',
          'button-secondaryForeground':
            'var(--vscode-button-secondaryForeground)',
          'button-secondaryBackground':
            'var(--vscode-button-secondaryBackground)',
          'button-secondaryHoverBackground':
            'var(--vscode-button-secondaryHoverBackground)',
          'checkbox-background': 'var(--vscode-checkbox-background)',
          'checkbox-foreground': 'var(--vscode-checkbox-foreground)',
          'checkbox-border': 'var(--vscode-checkbox-border)',
          'dropdown-background': 'var(--vscode-dropdown-background)',
          'dropdown-listBackground': 'var(--vscode-dropdown-listBackground)',
          'dropdown-border': 'var(--vscode-dropdown-border)',
          'dropdown-foreground': 'var(--vscode-dropdown-foreground)',
          'input-background': 'var(--vscode-input-background)',
          'input-border': 'var(--vscode-input-border)',
          'input-foreground': 'var(--vscode-input-foreground)',
          'input-placeholderForeground':
            'var(--vscode-input-placeholderForeground)',
          'inputOption-activeBackground':
            'var(--vscode-inputOption-activeBackground)',
          'inputOption-activeBorder': 'var(--vscode-inputOption-activeBorder)',
          'inputOption-activeForeground':
            'var(--vscode-inputOption-activeForeground)',
          'inputValidation-errorBackground':
            'var(--vscode-inputValidation-errorBackground)',
          'inputValidation-errorForeground':
            'var(--vscode-inputValidation-errorForeground)',
          'inputValidation-errorBorder':
            'var(--vscode-inputValidation-errorBorder)',
          'inputValidation-infoBackground':
            'var(--vscode-inputValidation-infoBackground)',
          'inputValidation-infoForeground':
            'var(--vscode-inputValidation-infoForeground)',
          'inputValidation-infoBorder':
            'var(--vscode-inputValidation-infoBorder)',
          'inputValidation-warningBackground':
            'var(--vscode-inputValidation-warningBackground)',
          'inputValidation-warningForeground':
            'var(--vscode-inputValidation-warningForeground)',
          'inputValidation-warningBorder':
            'var(--vscode-inputValidation-warningBorder)',
          'scrollbar-shadow': 'var(--vscode-scrollbar-shadow)',
          'scrollbarSlider-activeBackground':
            'var(--vscode-scrollbarSlider-activeBackground)',
          'scrollbarSlider-background':
            'var(--vscode-scrollbarSlider-background)',
          'scrollbarSlider-hoverBackground':
            'var(--vscode-scrollbarSlider-hoverBackground)',
          'badge-foreground': 'var(--vscode-badge-foreground)',
          'badge-background': 'var(--vscode-badge-background)',
          'progressBar-background': 'var(--vscode-progressBar-background)',
          'list-activeSelectionBackground':
            'var(--vscode-list-activeSelectionBackground)',
          'list-activeSelectionForeground':
            'var(--vscode-list-activeSelectionForeground)',
          'list-dropBackground': 'var(--vscode-list-dropBackground)',
          'list-focusBackground': 'var(--vscode-list-focusBackground)',
          'list-focusForeground': 'var(--vscode-list-focusForeground)',
          'list-highlightForeground': 'var(--vscode-list-highlightForeground)',
          'list-hoverBackground': 'var(--vscode-list-hoverBackground)',
          'list-hoverForeground': 'var(--vscode-list-hoverForeground)',
          'list-inactiveSelectionBackground':
            'var(--vscode-list-inactiveSelectionBackground)',
          'list-inactiveSelectionForeground':
            'var(--vscode-list-inactiveSelectionForeground)',
          'list-inactiveFocusBackground':
            'var(--vscode-list-inactiveFocusBackground)',
          'list-invalidItemForeground':
            'var(--vscode-list-invalidItemForeground)',
          'list-errorForeground': 'var(--vscode-list-errorForeground)',
          'list-warningForeground': 'var(--vscode-list-warningForeground)',
          'listFilterWidget-background':
            'var(--vscode-listFilterWidget-background)',
          'listFilterWidget-outline': 'var(--vscode-listFilterWidget-outline)',
          'listFilterWidget-noMatchesOutline':
            'var(--vscode-listFilterWidget-noMatchesOutline)',
          'list-filterMatchBackground':
            'var(--vscode-list-filterMatchBackground)',
          'list-filterMatchBorder': 'var(--vscode-list-filterMatchBorder)',
          'tree-indentGuidesStroke': 'var(--vscode-tree-indentGuidesStroke)',
          'list-deemphasizedForeground':
            'var(--vscode-list-deemphasizedForeground)',
          'activityBar-background': 'var(--vscode-activityBar-background)',
          'activityBar-dropBorder': 'var(--vscode-activityBar-dropBorder)',
          'activityBar-foreground': 'var(--vscode-activityBar-foreground)',
          'activityBar-inactiveForeground':
            'var(--vscode-activityBar-inactiveForeground)',
          'activityBar-border': 'var(--vscode-activityBar-border)',
          'activityBarBadge-background':
            'var(--vscode-activityBarBadge-background)',
          'activityBarBadge-foreground':
            'var(--vscode-activityBarBadge-foreground)',
          'activityBar-activeBorder': 'var(--vscode-activityBar-activeBorder)',
          'activityBar-activeBackground':
            'var(--vscode-activityBar-activeBackground)',
          'activityBar-activeFocusBorder':
            'var(--vscode-activityBar-activeFocusBorder)',
          'sideBar-background': 'var(--vscode-sideBar-background)',
          'sideBar-foreground': 'var(--vscode-sideBar-foreground)',
          'sideBar-border': 'var(--vscode-sideBar-border)',
          'sideBar-dropBackground': 'var(--vscode-sideBar-dropBackground)',
          'sideBarTitle-foreground': 'var(--vscode-sideBarTitle-foreground)',
          'sideBarSectionHeader-background':
            'var(--vscode-sideBarSectionHeader-background)',
          'sideBarSectionHeader-foreground':
            'var(--vscode-sideBarSectionHeader-foreground)',
          'sideBarSectionHeader-border':
            'var(--vscode-sideBarSectionHeader-border)',
          'minimap-findMatchHighlight':
            'var(--vscode-minimap-findMatchHighlight)',
          'minimap-selectionHighlight':
            'var(--vscode-minimap-selectionHighlight)',
          'minimap-errorHighlight': 'var(--vscode-minimap-errorHighlight)',
          'minimap-warningHighlight': 'var(--vscode-minimap-warningHighlight)',
          'minimap-background': 'var(--vscode-minimap-background)',
          'minimapSlider-background': 'var(--vscode-minimapSlider-background)',
          'minimapSlider-hoverBackground':
            'var(--vscode-minimapSlider-hoverBackground)',
          'minimapSlider-activeBackground':
            'var(--vscode-minimapSlider-activeBackground)',
          'minimapGutter-addedBackground':
            'var(--vscode-minimapGutter-addedBackground)',
          'minimapGutter-modifiedBackground':
            'var(--vscode-minimapGutter-modifiedBackground)',
          'minimapGutter-deletedBackground':
            'var(--vscode-minimapGutter-deletedBackground)',
          'editorGroup-border': 'var(--vscode-editorGroup-border)',
          'editorGroup-dropBackground':
            'var(--vscode-editorGroup-dropBackground)',
          'editorGroupHeader-noTabsBackground':
            'var(--vscode-editorGroupHeader-noTabsBackground)',
          'editorGroupHeader-tabsBackground':
            'var(--vscode-editorGroupHeader-tabsBackground)',
          'editorGroupHeader-tabsBorder':
            'var(--vscode-editorGroupHeader-tabsBorder)',
          'editorGroupHeader-border': 'var(--vscode-editorGroupHeader-border)',
          'editorGroup-emptyBackground':
            'var(--vscode-editorGroup-emptyBackground)',
          'editorGroup-focusedEmptyBorder':
            'var(--vscode-editorGroup-focusedEmptyBorder)',
          'tab-activeBackground': 'var(--vscode-tab-activeBackground)',
          'tab-unfocusedActiveBackground':
            'var(--vscode-tab-unfocusedActiveBackground)',
          'tab-activeForeground': 'var(--vscode-tab-activeForeground)',
          'tab-border': 'var(--vscode-tab-border)',
          'tab-activeBorder': 'var(--vscode-tab-activeBorder)',
          'tab-unfocusedActiveBorder':
            'var(--vscode-tab-unfocusedActiveBorder)',
          'tab-activeBorderTop': 'var(--vscode-tab-activeBorderTop)',
          'tab-unfocusedActiveBorderTop':
            'var(--vscode-tab-unfocusedActiveBorderTop)',
          'tab-lastPinnedBorder': 'var(--vscode-tab-lastPinnedBorder)',
          'tab-inactiveBackground': 'var(--vscode-tab-inactiveBackground)',
          'tab-unfocusedInactiveBackground':
            'var(--vscode-tab-unfocusedInactiveBackground)',
          'tab-inactiveForeground': 'var(--vscode-tab-inactiveForeground)',
          'tab-unfocusedActiveForeground':
            'var(--vscode-tab-unfocusedActiveForeground)',
          'tab-unfocusedInactiveForeground':
            'var(--vscode-tab-unfocusedInactiveForeground)',
          'tab-hoverBackground': 'var(--vscode-tab-hoverBackground)',
          'tab-unfocusedHoverBackground':
            'var(--vscode-tab-unfocusedHoverBackground)',
          'tab-hoverForeground': 'var(--vscode-tab-hoverForeground)',
          'tab-unfocusedHoverForeground':
            'var(--vscode-tab-unfocusedHoverForeground)',
          'tab-hoverBorder': 'var(--vscode-tab-hoverBorder)',
          'tab-unfocusedHoverBorder': 'var(--vscode-tab-unfocusedHoverBorder)',
          'tab-activeModifiedBorder': 'var(--vscode-tab-activeModifiedBorder)',
          'tab-inactiveModifiedBorder':
            'var(--vscode-tab-inactiveModifiedBorder)',
          'tab-unfocusedActiveModifiedBorder':
            'var(--vscode-tab-unfocusedActiveModifiedBorder)',
          'tab-unfocusedInactiveModifiedBorder':
            'var(--vscode-tab-unfocusedInactiveModifiedBorder)',
          'editorPane-background': 'var(--vscode-editorPane-background)',
          'editor-background': 'var(--vscode-editor-background)',
          'editor-foreground': 'var(--vscode-editor-foreground)',
          'editorLineNumber-foreground':
            'var(--vscode-editorLineNumber-foreground)',
          'editorLineNumber-activeForeground':
            'var(--vscode-editorLineNumber-activeForeground)',
          'editorCursor-background': 'var(--vscode-editorCursor-background)',
          'editorCursor-foreground': 'var(--vscode-editorCursor-foreground)',
          'editor-selectionBackground':
            'var(--vscode-editor-selectionBackground)',
          'editor-selectionForeground':
            'var(--vscode-editor-selectionForeground)',
          'editor-inactiveSelectionBackground':
            'var(--vscode-editor-inactiveSelectionBackground)',
          'editor-selectionHighlightBackground':
            'var(--vscode-editor-selectionHighlightBackground)',
          'editor-selectionHighlightBorder':
            'var(--vscode-editor-selectionHighlightBorder)',
          'editor-wordHighlightBackground':
            'var(--vscode-editor-wordHighlightBackground)',
          'editor-wordHighlightBorder':
            'var(--vscode-editor-wordHighlightBorder)',
          'editor-wordHighlightStrongBackground':
            'var(--vscode-editor-wordHighlightStrongBackground)',
          'editor-wordHighlightStrongBorder':
            'var(--vscode-editor-wordHighlightStrongBorder)',
          'editor-findMatchBackground':
            'var(--vscode-editor-findMatchBackground)',
          'editor-findMatchHighlightBackground':
            'var(--vscode-editor-findMatchHighlightBackground)',
          'editor-findRangeHighlightBackground':
            'var(--vscode-editor-findRangeHighlightBackground)',
          'editor-findMatchBorder': 'var(--vscode-editor-findMatchBorder)',
          'editor-findMatchHighlightBorder':
            'var(--vscode-editor-findMatchHighlightBorder)',
          'editor-findRangeHighlightBorder':
            'var(--vscode-editor-findRangeHighlightBorder)',
          'searchEditor-findMatchBackground':
            'var(--vscode-searchEditor-findMatchBackground)',
          'searchEditor-findMatchBorder':
            'var(--vscode-searchEditor-findMatchBorder)',
          'searchEditor-textInputBorder':
            'var(--vscode-searchEditor-textInputBorder)',
          'editor-hoverHighlightBackground':
            'var(--vscode-editor-hoverHighlightBackground)',
          'editor-lineHighlightBackground':
            'var(--vscode-editor-lineHighlightBackground)',
          'editor-lineHighlightBorder':
            'var(--vscode-editor-lineHighlightBorder)',
          'editorLink-activeForeground':
            'var(--vscode-editorLink-activeForeground)',
          'editor-rangeHighlightBackground':
            'var(--vscode-editor-rangeHighlightBackground)',
          'editor-rangeHighlightBorder':
            'var(--vscode-editor-rangeHighlightBorder)',
          'editor-symbolHighlightBackground':
            'var(--vscode-editor-symbolHighlightBackground)',
          'editor-symbolHighlightBorder':
            'var(--vscode-editor-symbolHighlightBorder)',
          'editorWhitespace-foreground':
            'var(--vscode-editorWhitespace-foreground)',
          'editorIndentGuide-background':
            'var(--vscode-editorIndentGuide-background)',
          'editorIndentGuide-activeBackground':
            'var(--vscode-editorIndentGuide-activeBackground)',
          'editorRuler-foreground': 'var(--vscode-editorRuler-foreground)',
          'editor-linkedEditingBackground':
            'var(--vscode-editor-linkedEditingBackground)',
          'editorCodeLens-foreground':
            'var(--vscode-editorCodeLens-foreground)',
          'editorLightBulb-foreground':
            'var(--vscode-editorLightBulb-foreground)',
          'editorLightBulbAutoFix-foreground':
            'var(--vscode-editorLightBulbAutoFix-foreground)',
          'editorBracketMatch-background':
            'var(--vscode-editorBracketMatch-background)',
          'editorBracketMatch-border':
            'var(--vscode-editorBracketMatch-border)',
          'editor-foldBackground': 'var(--vscode-editor-foldBackground)',
          'editorOverviewRuler-background':
            'var(--vscode-editorOverviewRuler-background)',
          'editorOverviewRuler-border':
            'var(--vscode-editorOverviewRuler-border)',
          'editorOverviewRuler-findMatchForeground':
            'var(--vscode-editorOverviewRuler-findMatchForeground)',
          'editorOverviewRuler-rangeHighlightForeground':
            'var(--vscode-editorOverviewRuler-rangeHighlightForeground)',
          'editorOverviewRuler-selectionHighlightForeground':
            'var(--vscode-editorOverviewRuler-selectionHighlightForeground)',
          'editorOverviewRuler-wordHighlightForeground':
            'var(--vscode-editorOverviewRuler-wordHighlightForeground)',
          'editorOverviewRuler-wordHighlightStrongForeground':
            'var(--vscode-editorOverviewRuler-wordHighlightStrongForeground)',
          'editorOverviewRuler-modifiedForeground':
            'var(--vscode-editorOverviewRuler-modifiedForeground)',
          'editorOverviewRuler-addedForeground':
            'var(--vscode-editorOverviewRuler-addedForeground)',
          'editorOverviewRuler-deletedForeground':
            'var(--vscode-editorOverviewRuler-deletedForeground)',
          'editorOverviewRuler-errorForeground':
            'var(--vscode-editorOverviewRuler-errorForeground)',
          'editorOverviewRuler-warningForeground':
            'var(--vscode-editorOverviewRuler-warningForeground)',
          'editorOverviewRuler-infoForeground':
            'var(--vscode-editorOverviewRuler-infoForeground)',
          'editorOverviewRuler-bracketMatchForeground':
            'var(--vscode-editorOverviewRuler-bracketMatchForeground)',
          'editorError-foreground': 'var(--vscode-editorError-foreground)',
          'editorError-border': 'var(--vscode-editorError-border)',
          'editorError-background': 'var(--vscode-editorError-background)',
          'editorWarning-foreground': 'var(--vscode-editorWarning-foreground)',
          'editorWarning-border': 'var(--vscode-editorWarning-border)',
          'editorWarning-background': 'var(--vscode-editorWarning-background)',
          'editorInfo-foreground': 'var(--vscode-editorInfo-foreground)',
          'editorInfo-border': 'var(--vscode-editorInfo-border)',
          'editorInfo-background': 'var(--vscode-editorInfo-background)',
          'editorHint-foreground': 'var(--vscode-editorHint-foreground)',
          'editorHint-border': 'var(--vscode-editorHint-border)',
          'problemsErrorIcon-foreground':
            'var(--vscode-problemsErrorIcon-foreground)',
          'problemsWarningIcon-foreground':
            'var(--vscode-problemsWarningIcon-foreground)',
          'problemsInfoIcon-foreground':
            'var(--vscode-problemsInfoIcon-foreground)',
          'editorUnnecessaryCode-border':
            'var(--vscode-editorUnnecessaryCode-border)',
          'editorUnnecessaryCode-opacity':
            'var(--vscode-editorUnnecessaryCode-opacity)',
          'editorGutter-background': 'var(--vscode-editorGutter-background)',
          'merge-commonHeaderBackground':
            'var(--vscode-merge-commonHeaderBackground)',
          'editorOverviewRuler-currentContentForeground':
            'var(--vscode-editorOverviewRuler-currentContentForeground)',
          'editorOverviewRuler-incomingContentForeground':
            'var(--vscode-editorOverviewRuler-incomingContentForeground)',
          'editorOverviewRuler-commonContentForeground':
            'var(--vscode-editorOverviewRuler-commonContentForeground)',
          'panel-background': 'var(--vscode-panel-background)',
          'panel-border': 'var(--vscode-panel-border)',
          'panel-dropBorder': 'var(--vscode-panel-dropBorder)',
          'panelTitle-activeBorder': 'var(--vscode-panelTitle-activeBorder)',
          'panelTitle-activeForeground':
            'var(--vscode-panelTitle-activeForeground)',
          'panelTitle-inactiveForeground':
            'var(--vscode-panelTitle-inactiveForeground)',
          'panelInput-border': 'var(--vscode-panelInput-border)',
          'panelSection-border': 'var(--vscode-panelSection-border)',
          'panelSection-dropBackground':
            'var(--vscode-panelSection-dropBackground)',
          'panelSectionHeader-background':
            'var(--vscode-panelSectionHeader-background)',
          'panelSectionHeader-foreground':
            'var(--vscode-panelSectionHeader-foreground)',
          'panelSectionHeader-border':
            'var(--vscode-panelSectionHeader-border)',
          'imagePreview-border': 'var(--vscode-imagePreview-border)',
          'statusBar-background': 'var(--vscode-statusBar-background)',
          'statusBar-foreground': 'var(--vscode-statusBar-foreground)',
          'statusBar-border': 'var(--vscode-statusBar-border)',
          'statusBar-debuggingBackground':
            'var(--vscode-statusBar-debuggingBackground)',
          'statusBar-debuggingForeground':
            'var(--vscode-statusBar-debuggingForeground)',
          'statusBar-debuggingBorder':
            'var(--vscode-statusBar-debuggingBorder)',
          'statusBar-noFolderForeground':
            'var(--vscode-statusBar-noFolderForeground)',
          'statusBar-noFolderBackground':
            'var(--vscode-statusBar-noFolderBackground)',
          'statusBar-noFolderBorder': 'var(--vscode-statusBar-noFolderBorder)',
          'statusBarItem-activeBackground':
            'var(--vscode-statusBarItem-activeBackground)',
          'statusBarItem-hoverBackground':
            'var(--vscode-statusBarItem-hoverBackground)',
          'statusBarItem-prominentForeground':
            'var(--vscode-statusBarItem-prominentForeground)',
          'statusBarItem-prominentBackground':
            'var(--vscode-statusBarItem-prominentBackground)',
          'statusBarItem-prominentHoverBackground':
            'var(--vscode-statusBarItem-prominentHoverBackground)',
          'statusBarItem-remoteBackground':
            'var(--vscode-statusBarItem-remoteBackground)',
          'statusBarItem-remoteForeground':
            'var(--vscode-statusBarItem-remoteForeground)',
          'statusBarItem-errorBackground':
            'var(--vscode-statusBarItem-errorBackground)',
          'statusBarItem-errorForeground':
            'var(--vscode-statusBarItem-errorForeground)',
          'titleBar-activeBackground':
            'var(--vscode-titleBar-activeBackground)',
          'titleBar-activeForeground':
            'var(--vscode-titleBar-activeForeground)',
          'titleBar-inactiveBackground':
            'var(--vscode-titleBar-inactiveBackground)',
          'titleBar-inactiveForeground':
            'var(--vscode-titleBar-inactiveForeground)',
          'titleBar-border': 'var(--vscode-titleBar-border)',
          'menubar-selectionForeground':
            'var(--vscode-menubar-selectionForeground)',
          'menubar-selectionBackground':
            'var(--vscode-menubar-selectionBackground)',
          'menubar-selectionBorder': 'var(--vscode-menubar-selectionBorder)',
          'menu-foreground': 'var(--vscode-menu-foreground)',
          'menu-background': 'var(--vscode-menu-background)',
          'menu-selectionForeground': 'var(--vscode-menu-selectionForeground)',
          'menu-selectionBackground': 'var(--vscode-menu-selectionBackground)',
          'menu-selectionBorder': 'var(--vscode-menu-selectionBorder)',
          'menu-separatorBackground': 'var(--vscode-menu-separatorBackground)',
          'menu-border': 'var(--vscode-menu-border)',
          'notificationCenter-border':
            'var(--vscode-notificationCenter-border)',
          'notificationCenterHeader-foreground':
            'var(--vscode-notificationCenterHeader-foreground)',
          'notificationCenterHeader-background':
            'var(--vscode-notificationCenterHeader-background)',
          'notificationToast-border': 'var(--vscode-notificationToast-border)',
          'notifications-foreground': 'var(--vscode-notifications-foreground)',
          'notifications-background': 'var(--vscode-notifications-background)',
          'notifications-border': 'var(--vscode-notifications-border)',
          'notificationLink-foreground':
            'var(--vscode-notificationLink-foreground)',
          'notificationsErrorIcon-foreground':
            'var(--vscode-notificationsErrorIcon-foreground)',
          'notificationsWarningIcon-foreground':
            'var(--vscode-notificationsWarningIcon-foreground)',
          'notificationsInfoIcon-foreground':
            'var(--vscode-notificationsInfoIcon-foreground)',
          'extensionButton-prominentForeground':
            'var(--vscode-extensionButton-prominentForeground)',
          'extensionButton-prominentBackground':
            'var(--vscode-extensionButton-prominentBackground)',
          'extensionButton-prominentHoverBackground':
            'var(--vscode-extensionButton-prominentHoverBackground)',
          'extensionBadge-remoteBackground':
            'var(--vscode-extensionBadge-remoteBackground)',
          'extensionBadge-remoteForeground':
            'var(--vscode-extensionBadge-remoteForeground)',
          'pickerGroup-border': 'var(--vscode-pickerGroup-border)',
          'pickerGroup-foreground': 'var(--vscode-pickerGroup-foreground)',
          'quickInput-background': 'var(--vscode-quickInput-background)',
          'quickInput-foreground': 'var(--vscode-quickInput-foreground)',
          'quickInputTitle-background':
            'var(--vscode-quickInputTitle-background)',
          'terminal-background': 'var(--vscode-terminal-background)',
          'terminal-border': 'var(--vscode-terminal-border)',
          'terminal-foreground': 'var(--vscode-terminal-foreground)',
          'terminal-ansiBlack': 'var(--vscode-terminal-ansiBlack)',
          'terminal-ansiBlue': 'var(--vscode-terminal-ansiBlue)',
          'terminal-ansiBrightBlack': 'var(--vscode-terminal-ansiBrightBlack)',
          'terminal-ansiBrightBlue': 'var(--vscode-terminal-ansiBrightBlue)',
          'terminal-ansiBrightCyan': 'var(--vscode-terminal-ansiBrightCyan)',
          'terminal-ansiBrightGreen': 'var(--vscode-terminal-ansiBrightGreen)',
          'terminal-ansiBrightMagenta':
            'var(--vscode-terminal-ansiBrightMagenta)',
          'terminal-ansiBrightRed': 'var(--vscode-terminal-ansiBrightRed)',
          'terminal-ansiBrightWhite': 'var(--vscode-terminal-ansiBrightWhite)',
          'terminal-ansiBrightYellow':
            'var(--vscode-terminal-ansiBrightYellow)',
          'terminal-ansiCyan': 'var(--vscode-terminal-ansiCyan)',
          'terminal-ansiGreen': 'var(--vscode-terminal-ansiGreen)',
          'terminal-ansiMagenta': 'var(--vscode-terminal-ansiMagenta)',
          'terminal-ansiRed': 'var(--vscode-terminal-ansiRed)',
          'terminal-ansiWhite': 'var(--vscode-terminal-ansiWhite)',
          'terminal-ansiYellow': 'var(--vscode-terminal-ansiYellow)',
          'terminal-selectionBackground':
            'var(--vscode-terminal-selectionBackground)',
          'terminalCursor-background':
            'var(--vscode-terminalCursor-background)',
          'terminalCursor-foreground':
            'var(--vscode-terminalCursor-foreground)',
          'debugToolBar-background': 'var(--vscode-debugToolBar-background)',
          'debugToolBar-border': 'var(--vscode-debugToolBar-border)',
          'editor-stackFrameHighlightBackground':
            'var(--vscode-editor-stackFrameHighlightBackground)',
          'editor-focusedStackFrameHighlightBackground':
            'var(--vscode-editor-focusedStackFrameHighlightBackground)',
          'debugView-exceptionLabelForeground':
            'var(--vscode-debugView-exceptionLabelForeground)',
          'debugView-exceptionLabelBackground':
            'var(--vscode-debugView-exceptionLabelBackground)',
          'debugView-stateLabelForeground':
            'var(--vscode-debugView-stateLabelForeground)',
          'debugView-stateLabelBackground':
            'var(--vscode-debugView-stateLabelBackground)',
          'debugView-valueChangedHighlight':
            'var(--vscode-debugView-valueChangedHighlight)',
          'debugTokenExpression-name':
            'var(--vscode-debugTokenExpression-name)',
          'debugTokenExpression-value':
            'var(--vscode-debugTokenExpression-value)',
          'debugTokenExpression-string':
            'var(--vscode-debugTokenExpression-string)',
          'debugTokenExpression-boolean':
            'var(--vscode-debugTokenExpression-boolean)',
          'debugTokenExpression-number':
            'var(--vscode-debugTokenExpression-number)',
          'debugTokenExpression-error':
            'var(--vscode-debugTokenExpression-error)',
          'testing-iconFailed': 'var(--vscode-testing-iconFailed)',
          'testing-iconErrored': 'var(--vscode-testing-iconErrored)',
          'testing-iconPassed': 'var(--vscode-testing-iconPassed)',
          'testing-runAction': 'var(--vscode-testing-runAction)',
          'testing-iconQueued': 'var(--vscode-testing-iconQueued)',
          'testing-iconUnset': 'var(--vscode-testing-iconUnset)',
          'testing-iconSkipped': 'var(--vscode-testing-iconSkipped)',
          'testing-peekBorder': 'var(--vscode-testing-peekBorder)',
          'testing-message-error-decorationForeground':
            'var(--vscode-testing-message-error-decorationForeground)',
          'testing-message-error-lineBackground':
            'var(--vscode-testing-message-error-lineBackground)',
          'testing-message-warning-decorationForeground':
            'var(--vscode-testing-message-warning-decorationForeground)',
          'testing-message-warning-lineBackground':
            'var(--vscode-testing-message-warning-lineBackground)',
          'testing-message-info-decorationForeground':
            'var(--vscode-testing-message-info-decorationForeground)',
          'testing-message-info-lineBackground':
            'var(--vscode-testing-message-info-lineBackground)',
          'testing-message-hint-decorationForeground':
            'var(--vscode-testing-message-hint-decorationForeground)',
          'testing-message-hint-lineBackground':
            'var(--vscode-testing-message-hint-lineBackground)',
          'welcomePage-background': 'var(--vscode-welcomePage-background)',
          'welcomePage-buttonBackground':
            'var(--vscode-welcomePage-buttonBackground)',
          'welcomePage-buttonHoverBackground':
            'var(--vscode-welcomePage-buttonHoverBackground)',
          'welcomePage-progress-background':
            'var(--vscode-welcomePage-progress-background)',
          'welcomePage-progress-foreground':
            'var(--vscode-welcomePage-progress-foreground)',
          'walkThrough-embeddedEditorBackground':
            'var(--vscode-walkThrough-embeddedEditorBackground)',
          'scm-providerBorder': 'var(--vscode-scm-providerBorder)',
          'gitDecoration-addedResourceForeground':
            'var(--vscode-gitDecoration-addedResourceForeground)',
          'gitDecoration-modifiedResourceForeground':
            'var(--vscode-gitDecoration-modifiedResourceForeground)',
          'gitDecoration-stageModifiedResourceForeground':
            'var(--vscode-gitDecoration-stageModifiedResourceForeground)',
          'gitDecoration-deletedResourceForeground':
            'var(--vscode-gitDecoration-deletedResourceForeground)',
          'gitDecoration-stageDeletedResourceForeground':
            'var(--vscode-gitDecoration-stageDeletedResourceForeground)',
          'gitDecoration-untrackedResourceForeground':
            'var(--vscode-gitDecoration-untrackedResourceForeground)',
          'gitDecoration-ignoredResourceForeground':
            'var(--vscode-gitDecoration-ignoredResourceForeground)',
          'gitDecoration-conflictingResourceForeground':
            'var(--vscode-gitDecoration-conflictingResourceForeground)',
          'gitDecoration-submoduleResourceForeground':
            'var(--vscode-gitDecoration-submoduleResourceForeground)',
          'settings-headerForeground':
            'var(--vscode-settings-headerForeground)',
          'settings-modifiedItemIndicator':
            'var(--vscode-settings-modifiedItemIndicator)',
          'settings-dropdownBackground':
            'var(--vscode-settings-dropdownBackground)',
          'settings-dropdownForeground':
            'var(--vscode-settings-dropdownForeground)',
          'settings-dropdownBorder': 'var(--vscode-settings-dropdownBorder)',
          'settings-dropdownListBorder':
            'var(--vscode-settings-dropdownListBorder)',
          'settings-checkboxBackground':
            'var(--vscode-settings-checkboxBackground)',
          'settings-checkboxForeground':
            'var(--vscode-settings-checkboxForeground)',
          'settings-checkboxBorder': 'var(--vscode-settings-checkboxBorder)',
          'settings-textInputBackground':
            'var(--vscode-settings-textInputBackground)',
          'settings-textInputForeground':
            'var(--vscode-settings-textInputForeground)',
          'settings-textInputBorder': 'var(--vscode-settings-textInputBorder)',
          'settings-numberInputBackground':
            'var(--vscode-settings-numberInputBackground)',
          'settings-numberInputForeground':
            'var(--vscode-settings-numberInputForeground)',
          'settings-numberInputBorder':
            'var(--vscode-settings-numberInputBorder)',
          'settings-focusedRowBackground':
            'var(--vscode-settings-focusedRowBackground)',
          'notebook-focusedRowBorder':
            'var(--vscode-notebook-focusedRowBorder)',
          'notebook-rowHoverBackground':
            'var(--vscode-notebook-rowHoverBackground)',
          'breadcrumb-foreground': 'var(--vscode-breadcrumb-foreground)',
          'breadcrumb-background': 'var(--vscode-breadcrumb-background)',
          'breadcrumb-focusForeground':
            'var(--vscode-breadcrumb-focusForeground)',
          'breadcrumb-activeSelectionForeground':
            'var(--vscode-breadcrumb-activeSelectionForeground)',
          'breadcrumbPicker-background':
            'var(--vscode-breadcrumbPicker-background)',
          'editor-snippetTabstopHighlightBackground':
            'var(--vscode-editor-snippetTabstopHighlightBackground)',
          'editor-snippetTabstopHighlightBorder':
            'var(--vscode-editor-snippetTabstopHighlightBorder)',
          'editor-snippetFinalTabstopHighlightBackground':
            'var(--vscode-editor-snippetFinalTabstopHighlightBackground)',
          'editor-snippetFinalTabstopHighlightBorder':
            'var(--vscode-editor-snippetFinalTabstopHighlightBorder)',
          'symbolIcon-arrayForeground':
            'var(--vscode-symbolIcon-arrayForeground)',
          'symbolIcon-booleanForeground':
            'var(--vscode-symbolIcon-booleanForeground)',
          'symbolIcon-classForeground':
            'var(--vscode-symbolIcon-classForeground)',
          'symbolIcon-colorForeground':
            'var(--vscode-symbolIcon-colorForeground)',
          'symbolIcon-constantForeground':
            'var(--vscode-symbolIcon-constantForeground)',
          'symbolIcon-constructorForeground':
            'var(--vscode-symbolIcon-constructorForeground)',
          'symbolIcon-enumeratorForeground':
            'var(--vscode-symbolIcon-enumeratorForeground)',
          'symbolIcon-enumeratorMemberForeground':
            'var(--vscode-symbolIcon-enumeratorMemberForeground)',
          'symbolIcon-eventForeground':
            'var(--vscode-symbolIcon-eventForeground)',
          'symbolIcon-fieldForeground':
            'var(--vscode-symbolIcon-fieldForeground)',
          'symbolIcon-fileForeground':
            'var(--vscode-symbolIcon-fileForeground)',
          'symbolIcon-folderForeground':
            'var(--vscode-symbolIcon-folderForeground)',
          'symbolIcon-functionForeground':
            'var(--vscode-symbolIcon-functionForeground)',
          'symbolIcon-interfaceForeground':
            'var(--vscode-symbolIcon-interfaceForeground)',
          'symbolIcon-keyForeground': 'var(--vscode-symbolIcon-keyForeground)',
          'symbolIcon-keywordForeground':
            'var(--vscode-symbolIcon-keywordForeground)',
          'symbolIcon-methodForeground':
            'var(--vscode-symbolIcon-methodForeground)',
          'symbolIcon-moduleForeground':
            'var(--vscode-symbolIcon-moduleForeground)',
          'symbolIcon-namespaceForeground':
            'var(--vscode-symbolIcon-namespaceForeground)',
          'symbolIcon-nullForeground':
            'var(--vscode-symbolIcon-nullForeground)',
          'symbolIcon-numberForeground':
            'var(--vscode-symbolIcon-numberForeground)',
          'symbolIcon-objectForeground':
            'var(--vscode-symbolIcon-objectForeground)',
          'symbolIcon-operatorForeground':
            'var(--vscode-symbolIcon-operatorForeground)',
          'symbolIcon-packageForeground':
            'var(--vscode-symbolIcon-packageForeground)',
          'symbolIcon-propertyForeground':
            'var(--vscode-symbolIcon-propertyForeground)',
          'symbolIcon-referenceForeground':
            'var(--vscode-symbolIcon-referenceForeground)',
          'symbolIcon-snippetForeground':
            'var(--vscode-symbolIcon-snippetForeground)',
          'symbolIcon-stringForeground':
            'var(--vscode-symbolIcon-stringForeground)',
          'symbolIcon-structForeground':
            'var(--vscode-symbolIcon-structForeground)',
          'symbolIcon-textForeground':
            'var(--vscode-symbolIcon-textForeground)',
          'symbolIcon-typeParameterForeground':
            'var(--vscode-symbolIcon-typeParameterForeground)',
          'symbolIcon-unitForeground':
            'var(--vscode-symbolIcon-unitForeground)',
          'symbolIcon-variableForeground':
            'var(--vscode-symbolIcon-variableForeground)',
          'debugIcon-breakpointForeground':
            'var(--vscode-debugIcon-breakpointForeground)',
          'debugIcon-breakpointDisabledForeground':
            'var(--vscode-debugIcon-breakpointDisabledForeground)',
          'debugIcon-breakpointUnverifiedForeground':
            'var(--vscode-debugIcon-breakpointUnverifiedForeground)',
          'debugIcon-breakpointCurrentStackframeForeground':
            'var(--vscode-debugIcon-breakpointCurrentStackframeForeground)',
          'debugIcon-breakpointStackframeForeground':
            'var(--vscode-debugIcon-breakpointStackframeForeground)',
          'debugIcon-startForeground':
            'var(--vscode-debugIcon-startForeground)',
          'debugIcon-pauseForeground':
            'var(--vscode-debugIcon-pauseForeground)',
          'debugIcon-stopForeground': 'var(--vscode-debugIcon-stopForeground)',
          'debugIcon-disconnectForeground':
            'var(--vscode-debugIcon-disconnectForeground)',
          'debugIcon-restartForeground':
            'var(--vscode-debugIcon-restartForeground)',
          'debugIcon-stepOverForeground':
            'var(--vscode-debugIcon-stepOverForeground)',
          'debugIcon-stepIntoForeground':
            'var(--vscode-debugIcon-stepIntoForeground)',
          'debugIcon-stepOutForeground':
            'var(--vscode-debugIcon-stepOutForeground)',
          'debugIcon-continueForeground':
            'var(--vscode-debugIcon-continueForeground)',
          'debugIcon-stepBackForeground':
            'var(--vscode-debugIcon-stepBackForeground)',
          'debugConsole-infoForeground':
            'var(--vscode-debugConsole-infoForeground)',
          'debugConsole-warningForeground':
            'var(--vscode-debugConsole-warningForeground)',
          'debugConsole-errorForeground':
            'var(--vscode-debugConsole-errorForeground)',
          'debugConsole-sourceForeground':
            'var(--vscode-debugConsole-sourceForeground)',
          'debugConsoleInputIcon-foreground':
            'var(--vscode-debugConsoleInputIcon-foreground)',
          'notebook-cellBorderColor': 'var(--vscode-notebook-cellBorderColor)',
          'notebook-focusedEditorBorder':
            'var(--vscode-notebook-focusedEditorBorder)',
          'notebookStatusSuccessIcon-foreground':
            'var(--vscode-notebookStatusSuccessIcon-foreground)',
          'notebookStatusErrorIcon-foreground':
            'var(--vscode-notebookStatusErrorIcon-foreground)',
          'notebookStatusRunningIcon-foreground':
            'var(--vscode-notebookStatusRunningIcon-foreground)',
          'notebook-outputContainerBackgroundColor':
            'var(--vscode-notebook-outputContainerBackgroundColor)',
          'notebook-cellToolbarSeparator':
            'var(--vscode-notebook-cellToolbarSeparator)',
          'notebook-focusedCellBackground':
            'var(--vscode-notebook-focusedCellBackground)',
          'notebook-cellHoverBackground':
            'var(--vscode-notebook-cellHoverBackground)',
          'notebook-focusedCellBorder':
            'var(--vscode-notebook-focusedCellBorder)',
          'notebook-focusedCellShadow':
            'var(--vscode-notebook-focusedCellShadow)',
          'notebook-selectedCellBorder':
            'var(--vscode-notebook-selectedCellBorder)',
          'notebook-cellStatusBarItemHoverBackground':
            'var(--vscode-notebook-cellStatusBarItemHoverBackground)',
          'notebook-cellInsertionIndicator':
            'var(--vscode-notebook-cellInsertionIndicator)',
          'notebookScrollbarSlider-background':
            'var(--vscode-notebookScrollbarSlider-background)',
          'notebookScrollbarSlider-hoverBackground':
            'var(--vscode-notebookScrollbarSlider-hoverBackground)',
          'notebookScrollbarSlider-activeBackground':
            'var(--vscode-notebookScrollbarSlider-activeBackground)',
          'notebook-symbolHighlightBackground':
            'var(--vscode-notebook-symbolHighlightBackground)',
          'notebook-inactiveFocusedCellBorder':
            'var(--vscode-notebook-inactiveFocusedCellBorder)',
          'charts-foreground': 'var(--vscode-charts-foreground)',
          'charts-lines': 'var(--vscode-charts-lines)',
          'charts-red': 'var(--vscode-charts-red)',
          'charts-blue': 'var(--vscode-charts-blue)',
          'charts-yellow': 'var(--vscode-charts-yellow)',
          'charts-orange': 'var(--vscode-charts-orange)',
          'charts-green': 'var(--vscode-charts-green)',
          'charts-purple': 'var(--vscode-charts-purple)',
          'editorWidget-background': 'var(--vscode-editorWidget-background)',
          'editorHoverWidget-background':
            'var(--vscode-editorHoverWidget-background)',
          'pullRequests-merged': 'var(--vscode-pullRequests-merged)',
          'gitlens-closedAutolinkedIssueIconColor':
            'var(--vscode-gitlens-closedAutolinkedIssueIconColor)',
        },
      },
    },
  },
  plugins: [],
};
