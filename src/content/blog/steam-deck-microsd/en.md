---
title: "Micro SD Card for Steam Deck: What Works, How to Format It, and Moving Games"
description: "How to choose a micro SD card for Steam Deck using Valve's own specs: UHS-I microSD, inserting and formatting the card, the ext4 format, and moving games from internal storage to the card."
date: 2026-11-23
---

## Key takeaways

A micro SD card for Steam Deck is a regular microSD card. Valve says any UHS-I (class 3 or better) microSD card is supported. UHS-II and UHS-III cards are expected to work as well, but their higher transfer speeds aren't supported.

You have to format the card on the Steam Deck before you use it. The Steam Deck formats cards as ext4. Formatting erases whatever was on the card.

This guide picks cards by spec, not by brand. It hasn't tested any card and doesn't recommend one.

"Will any card work in my Deck?" "Where do I go to move games onto the card?" These come up the first time people add a card. This guide covers which micro SD card for Steam Deck works, how to insert and format it, and how to move games, using Valve's own documentation. For other devices, see [how do I use a micro SD card?](/blog/en/how-to-use-microsd)

## What should I look for in a micro SD card for Steam Deck?

Match Valve's published specs. This table follows the [Steam Deck Basic Use & Troubleshooting Guide](https://help.steampowered.com/en/faqs/view/69E3-14AF-9764-4C28) and the [Steam Deck tech specs](https://www.steamdeck.com/en/tech).

| What to check | What Valve says |
| --- | --- |
| Card size | microSD. The slot is on the bottom surface |
| Capacity standards | Supports SD, SDHC, and SDXC |
| Bus type | Any UHS-I (class 3 or better) card is supported |
| UHS-II and UHS-III cards | Expected to work, without their higher transfer speeds |
| File system | The Steam Deck formats the card as ext4 |

Valve doesn't say which marking "class 3" refers to. The U3 mark on a card is UHS Speed Class 3. Speed markings are explained in [SD card speed classes](/blog/en/sd-card-speed-class), and bus types in [UHS-I vs UHS-II vs SD Express](/blog/en/uhs-sd-card).

A UHS-II card won't run at UHS-II speed in a Steam Deck. If a UHS-II card costs more, check whether a UHS-I card that meets Valve's spec is enough.

## How large a micro SD card can a Steam Deck use?

The Valve pages checked for this guide don't list a maximum capacity. The tech specs only say SD, SDHC, and SDXC are supported. The SDXC standard goes up to 2 TB. Capacity standards are covered in [SDHC vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc).

Fake cards are common at high capacities. Check a new card's real capacity with [how to spot a fake SD card](/blog/en/fake-sd-card).

## How do I insert and format a micro SD card on a Steam Deck?

Format it in Settings. These steps follow [Valve's guide](https://help.steampowered.com/en/faqs/view/69E3-14AF-9764-4C28).

1. Insert the card into the slot on the bottom surface.
2. Press the Steam button and open Settings.
3. Select System, then Format SD card.
4. Wait for it to finish. Valve says it may take a few minutes.

Formatting erases the card. If the card came from a camera or phone, copy its photos and videos somewhere else first. Opening a card on a computer is covered in [SD card reader for PC](/blog/en/sd-card-to-pc).

## What format does the Steam Deck use for micro SD cards?

ext4. The [Steam Deck FAQ](https://www.steamdeck.com/en/faq) says Steam Deck microSD cards use ext4 with casefolding, and the Deck formats cards to the proper format itself. Casefolding makes file names case-insensitive.

| Device | Card formats | Source |
| --- | --- | --- |
| Steam Deck | ext4 | [Steam Deck FAQ](https://www.steamdeck.com/en/faq) |
| iPhone | Reads APFS, Mac OS Extended, exFAT, FAT32, and FAT | [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |

ext4 isn't on Apple's list of formats the iPhone reads. This guide hasn't tested a Deck-formatted card on an iPhone. To reuse a Steam Deck card in another device, you may need to format it again in that device. Formatting for other devices is covered in [how to reformat a micro SD card](/blog/en/format-microsd).

## Can I move games from internal storage to the SD card?

Yes. [Valve's guide](https://help.steampowered.com/en/faqs/view/69E3-14AF-9764-4C28) says the Steam Deck uses built-in storage by default, and you manage it and any other connected storage from Steam > Settings > Storage.

The move steps follow [Steam's guide to moving games](https://help.steampowered.com/en/faqs/view/4BD4-4528-6B2E-8327). That page covers the Steam client in general.

1. Format the card on the Steam Deck so it can be used as storage.
2. Open Steam > Settings > Storage.
3. Select the drive that holds the games (internal storage).
4. Select the games to move, then select Move.

The same Steam page says Move lets you relocate existing games without uninstalling them.

## How is a Steam Deck card different from a Nintendo Switch card?

Both take microSD, but the format and the official specs differ.

| Item | Steam Deck | Nintendo Switch |
| --- | --- | --- |
| Bus | UHS-I. No UHS-II speed | UHS-I. The UHS-II standard isn't supported |
| Official maximum | Not listed in the Valve pages checked | microSDXC up to 2 TB |
| Formatting | The Deck formats it as ext4 | Formatted in System Settings |
| Source | [Valve's guide](https://help.steampowered.com/en/faqs/view/69E3-14AF-9764-4C28) | [Nintendo Switch micro SD card guide](/blog/en/switch-microsd) |

A card from a Switch has to be formatted again on the Steam Deck. That erases the Switch's screenshots and software data on the card.

## What if my Steam Deck doesn't recognize the micro SD card?

These steps combine Valve's guidance with general card checks.

1. Confirm the card is microSD and supports UHS-I.
2. Run Settings > System > Format SD card again. This erases the card.
3. Connect the card to a computer and see whether its capacity shows correctly.
4. If the shown capacity doesn't match the label, check it with [how to spot a fake SD card](/blog/en/fake-sd-card).
5. If a computer can't read it either, follow [SD card corrupted or not recognized?](/blog/en/sd-card-not-working)

## What if I also want iPhone photos on an SD card?

An iPhone uses different formats from the Steam Deck. To use a card with an iPhone, format it in a format the iPhone reads, such as exFAT, and connect it with a card reader. For the steps, see [micro SD for iPhone](/blog/en/iphone-microsd) and [iPhone SD card reader](/blog/en/iphone-sd-card-reader). To move photos to a USB drive instead, see [how to transfer photos from iPhone to USB](/blog/en/iphone-photos-to-usb).

## Micro SD card for Steam Deck FAQ

### How do I pick a micro SD card for Steam Deck?

Look for microSD, UHS-I support, and Valve's "class 3 or better." A UHS-II card won't run faster in a Steam Deck. This guide doesn't recommend a specific product.

### Can I use a card I formatted to exFAT on my PC?

Valve says cards need to be formatted before use with the Steam Deck. Format it again with the Deck's Format SD card option.

### Does formatting the card delete games in internal storage?

Format SD card works on the card. Games installed in internal storage aren't on the card. Games you moved to the card are erased with it.

### Can a Steam Deck boot from microSD?

Yes. The [Steam Deck FAQ](https://www.steamdeck.com/en/faq) says the Steam Deck supports booting from microSD.

### Can I use a UHS-II card?

Valve expects UHS-II cards to work. Their higher transfer speeds aren't supported.
