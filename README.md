# with-resend

This is an [Expo](https://expo.dev) Router app that demonstrates how to capture email addresses in a native UI and push them into a [Resend](https://resend.com) audience through a route handler.

## Prerequisites

- Node.js 18 or newer (LTS recommended)
- npm (ships with Node) or Bun
- Expo CLI (available through `npx expo` or `pnpx expo`)
- A Resend account with an API key and an Audience ID

## Setup

1. Install dependencies:

   ```bash
   bun install
   ```

2. Copy the example environment file and fill in your values:

   ```bash
   cp .env.local.example .env.local
   ```

   - Replace `RESEND_API_KEY` with a key from the [Resend dashboard](https://resend.com/api-keys).
   - Set `EXPO_PUBLIC_BASE_URL` to the URL that your Expo Router deployment will use. During local development Expo automatically exposes `EXPO_BASE_URL`, so you can leave this value as-is for the simulator or Expo Go.
   - Update the `audienceId` constant in `app/api/audience+api.ts` with the ID of the audience you wish to populate. You can create or look up the ID in the [Resend audiences section](https://resend.com/app/audiences).

3. Start the development server:

   ```bash
   bun start
   ```

   Use the Expo CLI prompts to open the app on iOS, Android, the web, or inside Expo Go.

## How it works

- The form in `app/form.tsx` posts email addresses to the `/api/audience` route defined in `app/api/audience+api.ts`.
- That route handler uses the official Resend SDK to add each submitted email address to your configured audience through the `resend.contacts.create` call.
- Successful submissions trigger a confirmation alert in the app; any issues are logged to the Metro terminal for quick debugging.

## Useful resources

- [Expo documentation](https://docs.expo.dev/)
- [Resend documentation](https://resend.com/docs/introduction)
- [Resend audiences guide](https://resend.com/docs/audiences/overview)
