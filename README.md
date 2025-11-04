# JOCA MZ
An unofficial HTML5 port of wumberbumber's [JOCA](https://wumberbumber.itch.io/joca)

## Packages
The [web application](https://jocamz.oathpixel.cc) uses a rolling release model, as its source is always up-to-date with the latest commit on the repository's main branch.

The Android application uses a fixed release model, where a new version is typically introduced after a number of noteworthy commits. The latest official releases are available [here](https://github.com/keepthefaith91/joca-mz-web/releases). Future Android releases may be migrated and distributed under an opt-in closed testing track via the Google Play Store. Future details regarding this development will be included with the next release.

## Building for Android
If you'd like to contribute to the Android project, but do not currently have a development environment setup, follow the instructions in this guide.

### Prerequisites
- [Android Studio](https://developer.android.com/studio/) ([Installation Guide](https://developer.android.com/studio/install))
	- Requirements : Android 8.0 SDK Platform, Android SDK Build-Tools, Android SDK Platform-Tools, Android SDK Tools
- [RPG Maker MZ](https://www.rpgmakerweb.com/products/rpg-maker-mz)

### Setting Up Android Studio
1. In Android Studio, open the project located in `android/`
2. Wait for the background tasks to complete on the bottom of the window.
3. If the assets folder is not available, add the assets folder manually. To do so, right-click on the `app` folder, then in the context menu: `Add Folder > Assets` 
4. Open game.rmmzproject, located in the repo's root directory, via RPG MAKER MZ.
5. Export the files into the aforementioned `assets` folder. (File->Deployment->Android->Change output location (android/app/src/main/assets)->Deploy)
6. Rename the exported folder from 'joca-mz-web' to 'www'
	6a. You may delete the `android` subdirectory
	6b. You may edit build.gradle (Module : app) versionCode & versionName
7. Navigate to the js subdirectory within the exported folder. Then, delete `rmmz_manager.js` & `main.js`. Afterwards, remove the `android` suffix from `rmmz_manager.jsandroid` & `main.jsandroid`.
9. Build-->Generate APKs