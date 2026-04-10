export type PlayPage = {
  title: string
  slug: string
  description: string
}

export type PlaySection = {
  title: string
  slug: string
  description: string
  pages: PlayPage[]
}

export const playSections: PlaySection[] = [
  {
    "title": "Containment",
    "slug": "containment",
    "description": "Containment components wrap other components and provide additional functionality. They are typically used to provide a consistent layout or styling.",
    "pages": [
      {
        "title": "Button",
        "slug": "button",
        "description": "The button component allows users to take actions or make choices with a single tap"
      },
      {
        "title": "Card",
        "slug": "card",
        "description": "The card component is a versatile and enhanced sheet of paper that provides a simple interface for headings, text, images, and actions"
      },
      {
        "title": "List",
        "slug": "list",
        "description": "The list component is a display interface for items"
      },
      {
        "title": "Chip",
        "slug": "chip",
        "description": "Chips are useful for displaying small pieces of information"
      },
      {
        "title": "Divider",
        "slug": "divider",
        "description": "Dividers are used to separate content into distinct sections or groups"
      },
      {
        "title": "Expansion Panel",
        "slug": "expansion-panel",
        "description": "Expansion panels are used to reveal additional content in a compact manner"
      },
      {
        "title": "Menu",
        "slug": "menu",
        "description": "The menu component is used to display a list of actions that the user can make"
      },
      {
        "title": "Dialog",
        "slug": "dialog",
        "description": "The dialog component informs a user about a specific task and may contain critical information"
      },
      {
        "title": "Bottom Sheet",
        "slug": "bottom-sheet",
        "description": "The bottom sheet component elevates content from the bottom of the screen"
      },
      {
        "title": "Overlay",
        "slug": "overlay",
        "description": "The overlay component is used to display a custom scrim that sits on top of the application"
      },
      {
        "title": "Toolbar",
        "slug": "toolbar",
        "description": "Toolbars are used to label a content area and / or display a list of actions that the user can make"
      },
      {
        "title": "Tooltip",
        "slug": "tooltip",
        "description": "Tooltips provide additional information about an element when the user hovers over it"
      },
      {
        "title": "Sheet",
        "slug": "sheet",
        "description": "The sheet component is a simple piece of paper that can be used to style and customize a block of content"
      }
    ]
  },
  {
    "title": "Navigation",
    "slug": "navigation",
    "description": "Navigation components are used to navigate between different views or pages.",
    "pages": [
      {
        "title": "App Bars",
        "slug": "app-bars",
        "description": "The app bar is used for top level navigation items and current page actions"
      },
      {
        "title": "FABs",
        "slug": "fabs",
        "description": "The floating action button is used for a promoted actions within an application"
      },
      {
        "title": "Navigation Drawers",
        "slug": "navigation-drawers",
        "description": "Navigation drawers contain primary application navigation links"
      },
      {
        "title": "Pagination",
        "slug": "pagination",
        "description": "The Pagination component is used to separate long sets of data"
      },
      {
        "title": "Bottom Navigation",
        "slug": "bottom-navigation",
        "description": "The bottom navigation component is used for displaying navigation links on mobile"
      },
      {
        "title": "Breadcrumbs",
        "slug": "breadcrumbs",
        "description": "Breadcrumbs are navigational helpers for router pages"
      },
      {
        "title": "Footer",
        "slug": "footer",
        "description": "The footer component is a simple navigation area with inner site links"
      },
      {
        "title": "Speed Dials",
        "slug": "speed-dials",
        "description": "The speed dial component is a floating action button that can reveal additional actions when clicked"
      },
      {
        "title": "System Bar",
        "slug": "system-bar",
        "description": "The system bar component shows application information with iconography, time, and more"
      },
      {
        "title": "Tabs",
        "slug": "tabs",
        "description": "Tabs are used to organize content into different sections that can be viewed independently"
      }
    ]
  },
  {
    "title": "Form inputs and controls",
    "slug": "form-inputs-and-controls",
    "description": "Form components are used to collect user input in a variety of ways.",
    "pages": [
      {
        "title": "Autocomplete",
        "slug": "autocomplete",
        "description": "Autocompletes are used to provide suggestions to the user as they type into a field"
      },
      {
        "title": "Combobox",
        "slug": "combobox",
        "description": "The combobox component is used to select a value from a list of options with the ability to enter a custom value"
      },
      {
        "title": "Text Field",
        "slug": "text-field",
        "description": "The text field component accepts textual input from users and is a replacement for the native text input element"
      },
      {
        "title": "Checkbox",
        "slug": "checkbox",
        "description": "The checkbox component is a replacement for the native input checkbox"
      },
      {
        "title": "Switch",
        "slug": "switch",
        "description": "The switch component is an alternately styled checkbox"
      },
      {
        "title": "Radio Button",
        "slug": "radio-button",
        "description": "The radio component is a replacement for its native counterpart"
      },
      {
        "title": "File Input",
        "slug": "file-input",
        "description": "The file input component is used to select files from the user’s device and is a replacement for the native file input element"
      },
      {
        "title": "Form",
        "slug": "form",
        "description": "The form component is used to wrap form elements and provide a consistent styling and a single source for validation"
      },
      {
        "title": "Inputs",
        "slug": "inputs",
        "description": "Create custom inputs that can be used with the v-model directive"
      },
      {
        "title": "Number Input",
        "slug": "number-input",
        "description": "The number input component is used for collecting numerical data from the user"
      },
      {
        "title": "OTP Input",
        "slug": "otp-input",
        "description": "The OTP input component is used for MFA authentication via input field"
      },
      {
        "title": "Select",
        "slug": "select",
        "description": "The select component is used to select a value from a list of options and is a replacement for the native select element"
      },
      {
        "title": "Slider",
        "slug": "slider",
        "description": "Sliders are used to select a value from a range of values by moving a slider thumb and are a replacement for the native input range element"
      },
      {
        "title": "Range Slider",
        "slug": "range-slider",
        "description": "Range sliders are regular sliders with the ability to select in a range"
      },
      {
        "title": "Textarea",
        "slug": "textarea",
        "description": "The textarea component is a replacement for the native textarea element"
      }
    ]
  },
  {
    "title": "Layouts",
    "slug": "layouts",
    "description": "Layout components are used to create responsive layouts.",
    "pages": [
      {
        "title": "Grids",
        "slug": "grids",
        "description": "The grid component is used to create responsive layouts"
      }
    ]
  },
  {
    "title": "Selection",
    "slug": "selection",
    "description": "These components allow a user to select one or multiple items from a list of options.",
    "pages": [
      {
        "title": "Carousel",
        "slug": "carousel",
        "description": "Carousels are used to display multiple forms of visual content"
      },
      {
        "title": "Button Group",
        "slug": "button-group",
        "description": "Button groups are used to select between multiple options using the button component"
      },
      {
        "title": "Chip Group",
        "slug": "chip-group",
        "description": "Chip group is a wrapper component that makes chips interactive and allows them to be selected"
      },
      {
        "title": "Window",
        "slug": "window",
        "description": "The window component is used to display a block of content based upon a model"
      },
      {
        "title": "Stepper",
        "slug": "stepper",
        "description": "The stepper component is a linear progress control used to break lengthy forms into smaller logical sections"
      }
    ]
  },
  {
    "title": "Data and display",
    "slug": "data-and-display",
    "description": "These components are used to display data and information in a variety of ways.",
    "pages": [
      {
        "title": "Confirm Edit",
        "slug": "confirm-edit",
        "description": "The confirm edit component is used to confirm changes to data"
      },
      {
        "title": "Data Iterator",
        "slug": "data-iterator",
        "description": "The data iterator component provides an easy interface for paginating and sorting data"
      },
      {
        "title": "Data Table",
        "slug": "data-table",
        "description": "Data tables are used to display large amounts of data in a small amount of space"
      },
      {
        "title": "Infinite Scroll",
        "slug": "infinite-scroll",
        "description": "The Infinite scroll component is a container that loads more items when scrolling"
      },
      {
        "title": "Server Side Table",
        "slug": "server-side-table",
        "description": "Server side data tables are intended to be used with a server side data source"
      },
      {
        "title": "Sparkline",
        "slug": "sparkline",
        "description": "The sparkline component creates beautiful and expressive simple graphs for displaying numerical data"
      },
      {
        "title": "Virtual Data Table",
        "slug": "virtual-data-table",
        "description": "The virtual data table component is used to display very large subsets of data"
      },
      {
        "title": "Table",
        "slug": "table",
        "description": "The table component is a barebones table for manually displaying data and is a replacement for the native table element"
      },
      {
        "title": "Virtual Scroll",
        "slug": "virtual-scroll",
        "description": "The virtual scroller component makes it possible to render large amounts of data without sacrificing performance"
      }
    ]
  },
  {
    "title": "Feedback",
    "slug": "feedback",
    "description": "These components are used to provide feedback to the user within content, over content, or in response to user actions.",
    "pages": [
      {
        "title": "Alert",
        "slug": "alert",
        "description": "Alerts convey important information to the user"
      },
      {
        "title": "Badge",
        "slug": "badge",
        "description": "Badges superscript or subscript an avatar-like icon or text onto content."
      },
      {
        "title": "Banner",
        "slug": "banner",
        "description": "Banners are used to communicate important information to the user"
      },
      {
        "title": "Empty State",
        "slug": "empty-state",
        "description": "The empty state component is used to indicate that a page or area on a page has no content."
      },
      {
        "title": "Skeleton Loader",
        "slug": "skeleton-loader",
        "description": "Displays a content, enhancing perceived performance during data-fetching & rendering"
      },
      {
        "title": "Snackbar",
        "slug": "snackbar",
        "description": "The snackbar component is used to display a message to the user that hovers over existing content"
      },
      {
        "title": "Rating",
        "slug": "rating",
        "description": "Ratings are useful for collecting user feedback"
      },
      {
        "title": "Timeline",
        "slug": "timeline",
        "description": "Timeline components are used to display a list of events in chronological order"
      },
      {
        "title": "Hover",
        "slug": "hover",
        "description": "The hover component is a wrapper component that allows you to react to hover events"
      },
      {
        "title": "Progress Circular",
        "slug": "progress-circular",
        "description": "Circular progress’s are a visual indicator of numerical data in a circle"
      },
      {
        "title": "Progress Linear",
        "slug": "progress-linear",
        "description": "The linear progress component is used to display numerical data in a horizontal line"
      }
    ]
  },
  {
    "title": "Images and icons",
    "slug": "images-and-icons",
    "description": "This subset of components are used to display media in a variety of ways.",
    "pages": [
      {
        "title": "Aspect Ratios",
        "slug": "aspect-ratios",
        "description": "The aspect ratio component enforces a defined ratio"
      },
      {
        "title": "Avatar",
        "slug": "avatar",
        "description": "Avatars are used in numerous components to display avatars and profile pictures"
      },
      {
        "title": "Icon",
        "slug": "icon",
        "description": "The icon component is an reusable component that can be used to display icons"
      },
      {
        "title": "Image",
        "slug": "image",
        "description": "The image component provides a flexible interface for displaying images"
      },
      {
        "title": "Parallax",
        "slug": "parallax",
        "description": "Creates a 3d effect that makes an image appear to move slower than the foreground"
      }
    ]
  },
  {
    "title": "Pickers",
    "slug": "pickers",
    "description": "These components are used to select a value from a specifically styled set of options.",
    "pages": [
      {
        "title": "Color Picker",
        "slug": "color-picker",
        "description": "The color picker component is used to select a color from a palette"
      },
      {
        "title": "Date Picker",
        "slug": "date-picker",
        "description": "The date picker component is used to select a single date from a calendar month / year."
      }
    ]
  },
  {
    "title": "Providers",
    "slug": "providers",
    "description": "The defaults provider component is used to set default values for all components within a template",
    "pages": [
      {
        "title": "Defaults Provider",
        "slug": "defaults-provider",
        "description": "The defaults provider component is used to set default values for all components within a template"
      },
      {
        "title": "Locale Provider",
        "slug": "locale-provider",
        "description": "The locale provider component allows you to change the language of all components within its slot"
      },
      {
        "title": "Theme Provider",
        "slug": "theme-provider",
        "description": "The theme provider component allows you to change the theme of all children components"
      }
    ]
  },
  {
    "title": "Miscellaneous",
    "slug": "miscellaneous",
    "description": "These components don’t fit into a traditional category and are used for a variety of purposes.",
    "pages": [
      {
        "title": "Lazy",
        "slug": "lazy",
        "description": "The lazy component is a wrapper component that prevents the rendering of its child components until it is visible in the viewport"
      },
      {
        "title": "No Ssr",
        "slug": "no-ssr",
        "description": "This component is used to prevent the rendering of its child components on the server"
      }
    ]
  }
]
