# Quasar example
# See also https://v1.quasar-framework.org/quasar-cli/developing-mobile-apps/build-commands
#
# upgrade to latest version 
quasar upgrade
# or
yarn upgrade quasar
#
# run yarn   to build web version
quasar dev &
#
# run yarn   to build cordova ios version
quasar dev -m cordova -T ios
# ..or the longer form:
quasar dev --mode cordova -T ios
# using a specific emulator (--emulator, -e)
quasar dev -m cordova -T ios -e iPhone-7
# or
quasar dev -m cordova -T ios -e iPhone-X,com.apple.CoreSimulator.SimRuntime.iOS-12-2
#
# run yarn   to build cordova android version
quasar dev -m cordova -T android
# ..or the longer form:
quasar dev --mode cordova -T android
#
# run yarn   to build electron mac/windows stand-alone version
quasar dev -m electron
