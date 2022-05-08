function replaceMetaTags(details) {
	let filter = browser.webRequest.filterResponseData(details.requestId);
	let decoder = new TextDecoder("utf-8");
	let encoder = new TextEncoder();

	filter.ondata = event => {
		let str = decoder.decode(event.data, {stream: true});
		str = str.replaceAll(/<meta( |http-equiv=.?content-security-policy.?|content=".*?"){4,}\/?>/gi, '<!-- CSP REMOVED -->');
		filter.write(encoder.encode(str));
		filter.disconnect();
	}

	return {};
}

browser.browserAction.setBadgeText({text: "on"});
browser.browserAction.setBadgeBackgroundColor({color: "green"});

browser.browserAction.onClicked.addListener(() => {
	const has = browser.webRequest.onBeforeRequest.hasListener(replaceMetaTags);

	browser.browserAction.setBadgeText({text: has ? "on" : "off" });
	browser.browserAction.setBadgeBackgroundColor({color: has ? "green" : "red" });

	if (has) {
		browser.webRequest.onBeforeRequest.removeListener(replaceMetaTags)
		return;
	}

	browser.webRequest.onBeforeRequest.addListener(
		replaceMetaTags,
		{ urls: ["<all_urls>"], types: ["main_frame"] },
		["blocking"]
	);
});
