# ZeroC DataCapture

Welcome to ZeroC DataCapture!

## Getting started

First of all, to clone the repository use the SSH option. You need to [generate an SSH key](https://docs.gitlab.com/ee/user/ssh.html#add-an-ssh-key-to-your-gitlab-account) and add it to your GitLab account.

## Requirements

- [Download Node](https://nodejs.org/en/download/) or use package management for your OS

**MacOS**

- Install [Android Studio](https://developer.android.com/studio) and [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)

**Windows/Linux**

- Install [Android Studio](https://developer.android.com/studio) (building and emulating apps for iOS is not possible)

Here's the [official guide](https://reactnative.dev/docs/environment-setup) to set up the development environment from React Native. Just select your Development OS and Target OS and skip the _'Creating a new application'_ part.

## Package manager

This project uses Yarn as the package manager. [Here's the installation instruction.](https://classic.yarnpkg.com/lang/en/docs/install)

## Install dependencies

Run `yarn`

## Launch iOS dev environment

Run `yarn react-native run-ios`

## Launch Android dev environment

Run `yarn react-native run-android`

## Mandatory VS Code plugins

- ESLint
- Prettier
- ES7+ React/Redux/React-Native (recommended)
