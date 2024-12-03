export const manifest = {
  manifest_version: 3,
  name: "extension-with-vite-sample",
  version: "0.0.1",
  action: {
    default_popup: "index.html",
  },
  options_page: "option.html"
} satisfies chrome.runtime.ManifestV3