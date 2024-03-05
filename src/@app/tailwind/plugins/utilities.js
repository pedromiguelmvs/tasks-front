const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addComponents }) => {
  addComponents({
    ".mat-icon": {
      "--tw-text-opacity": "1",
      color: "rgba(var(--app-mat-icon-rgb), var(--tw-text-opacity))",
    },
    ".text-low-pure": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-low-pure-rgb), var(--tw-text-opacity)) !important",
    },
    ".text-low-light": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-low-light-rgb), var(--tw-text-opacity)) !important",
    },
    ".text-low-medium": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-low-medium-rgb), var(--tw-text-opacity)) !important",
    },
    ".text-low-dark": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-low-dark-rgb), var(--tw-text-opacity)) !important",
    },
    ".text-high-pure": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-high-pure-rgb), var(--tw-text-opacity)) !important",
    },
    ".text-high-light": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-high-light-rgb), var(--tw-text-opacity)) !important",
    },
    ".text-high-medium": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-high-medium-rgb), var(--tw-text-opacity)) !important",
    },
    ".text-high-dark": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-high-dark-rgb), var(--tw-text-opacity)) !important",
    },
    ".text-primary-pure": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-primary-pure-rgb), var(--tw-text-opacity)) !important",
    },
    ".text-primary-light": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-primary-light-rgb), var(--tw-text-opacity)) !important",
    },
    ".text-primary-medium": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-primary-medium-rgb), var(--tw-text-opacity)) !important",
    },
    ".text-primary-dark": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-primary-dark-rgb), var(--tw-text-opacity)) !important",
    },
    ".border-color": {
      "--tw-text-opacity": "1 !important",
      borderColor:
        "rgba(var(--app-border-rgb), var(--tw-text-opacity)) !important",
    },
    ".text-hint": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-hint-rgb), var(--tw-text-opacity)) !important",
    },
    ".input-border": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-input-border-rgb), var(--tw-text-opacity)) !important",
    },
    ".text-disabled": {
      "--tw-text-opacity": "1 !important",
      color:
        "rgba(var(--app-text-disabled-rgb), var(--tw-text-opacity)) !important",
    },
    ".bg-app-bar": {
      "--tw-bg-opacity": "1 !important",
      backgroundColor:
        "rgba(var(--app-bg-app-bar-rgb), var(--tw-bg-opacity)) !important",
    },
    ".bg-card": {
      "--tw-bg-opacity": "1 !important",
      backgroundColor:
        "rgba(var(--app-bg-card-rgb), var(--tw-bg-opacity)) !important",
    },
    ".bg-default": {
      "--tw-bg-opacity": "1 !important",
      backgroundColor:
        "rgba(var(--app-bg-default-rgb), var(--tw-bg-opacity)) !important",
    },
    ".bg-dialog": {
      "--tw-bg-opacity": "1 !important",
      backgroundColor:
        "rgba(var(--app-bg-dialog-rgb), var(--tw-bg-opacity)) !important",
    },
    ".bg-hover": {
      "--tw-bg-opacity": "1 !important",
      backgroundColor:
        "rgba(var(--app-bg-hover-rgb), var(--tw-bg-opacity)) !important",
    },
    ".bg-active": {
      "--tw-bg-opacity": "1 !important",
      backgroundColor:
        "rgba(var(--app-bg-active-rgb), var(--tw-bg-opacity)) !important",
    },
    ".ring-bg-default": {
      "--tw-ring-opacity": "1 !important",
      "--tw-ring-color":
        "rgba(var(--app-bg-default-rgb), var(--tw-ring-opacity)) !important",
    },
    ".ring-bg-card": {
      "--tw-ring-opacity": "1 !important",
      "--tw-ring-color":
        "rgba(var(--app-bg-card-rgb), var(--tw-ring-opacity)) !important",
    },
    ".divider": {
      color: "var(--app-divider) !important",
    },
  });

  addComponents({
    ".bg-hover": {
      backgroundColor: "var(--app-bg-hover) !important",
    },
  });
});
