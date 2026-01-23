# Changelog

All notable changes to Day by Day will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.0] - 2026-01-23

### Added
- Push notification system for engagement and habit reminders:
  - Daily check-in reminder to log medications and symptoms (configurable time, default 9am)
  - Temperature tracking reminder (optional, configurable time, default 10am)
  - Weekly backup reminder (configurable day/time, default Sunday 8pm)
  - End of cycle PDF summary reminder (fires on last day of cycle)
  - Fully customisable notification schedule and preferences
  - Snooze functionality with configurable duration
  - Quiet hours support to prevent nighttime disturbances
  - Notification action buttons for quick responses
  - iOS limitation warnings and guidance
- Notifications section in Settings with granular controls
- Comprehensive notification documentation in help.html

### Technical
- Service worker notification scheduling and handling
- Notification permission management
- Local notification state persistence
- Notification click handlers with app navigation
- Background notification support (browser-dependent)

## [1.4.4] - 2026-01-23

### Changed
- Enhanced about.html documentation:
  - Updated Contact section with clearer support expectations and limitations
  - Added new "Data Storage & Risks" section explaining local storage implications
  - Added PDF export feature to "How It Works" section
- Comprehensive help.html improvements:
  - Added complete "Cycle Summary PDF" section with usage guidance
  - Added "Offline Use" subsection explaining offline functionality
  - Added "Swipe Navigation" subsection for touch gesture navigation
  - Added "Milestone Messages" to Today View features
  - Added "Quick Navigation" subsection explaining "Back to Today" button
  - Improved overall documentation coverage of existing features

## [1.4.3] - 2026-01-23

### Fixed
- Service worker cache version now syncs with app version:
  - Cache version updated from generic "v2" to "v1.4.3" matching app version
  - Ensures users receive latest file updates (including help.html fixes)
  - Old caches are properly invalidated and removed
  - Resolves issue where users were not receiving updated files due to stale cache

## [1.4.2] - 2026-01-20

### Fixed
- Medication schedule now extends correctly to support custom cycle lengths up to 60 days:
  - Days 13+ now generate dynamically instead of stopping at day 19
  - Loratadine timing remains absolute (days 4-12) as medically prescribed
  - Recovery medications continue through the entire cycle length
- Symptom tracking charts now display correct number of day labels matching the cycle length:
  - Chart labels were hardcoded to 21 days, causing rendering issues for custom cycle lengths
  - Charts now correctly show all days from -1 to the end of the cycle
- PDF export now shows accurate cycle length in "Days Completed" statistic:
  - Previously always showed "X / 21" regardless of actual cycle length
  - Now correctly displays "X / [actual cycle length]"

## [1.4.1] - 2026-01-20

### Fixed
- Milestone messages now adapt correctly to custom cycle lengths:
  - "Halfway there" message now appears at the actual midpoint of any cycle length
  - "Final day" message now appears on the correct last day (was hardcoded to day 20, which didn't exist in 21-day cycles)
  - "Two weeks done" message only shows for cycles of 16+ days and when it's not the final day
  - Treatment-specific messages (days -1, 0, 1, 2, 3) remain consistent across all cycle lengths

## [1.4.0] - 2026-01-19

### Added
- Comprehensive demo backup file with 1.5 cycles of realistic sample data
- Two separate data management options:
  - "Clear Tracking Data" - removes only symptom/medication tracking whilst keeping configuration
  - "Reset All Data" - complete app reset with double confirmation
- Missing fields to backup/restore: Date of Birth, Hospital Number, Cycle Length, Number of Cycles

### Changed
- British English spelling consistency ("customize" → "customise", "recognize" → "recognise")
- Enhanced backup file structure to include all patient configuration fields
- Improved help documentation for data management options

### Fixed
- Backup/restore now preserves custom cycle configuration settings
- Personal details (DOB, Hospital Number) now included in backups

## [1.3.0] - 2026-01-18

### Added
- Customisable cycle length (1-60 days, default: 21 days)
- Customisable number of cycles (1-12 cycles, default: 6 cycles)
- Cycle Configuration section in Settings
- Help documentation for cycle customisation

### Changed
- Calendar and medication schedules now adapt to custom cycle lengths
- Cycle dates interface updated to support variable number of cycles

## [1.2.0] - 2026-01-13

### Added
- Date of Birth field to patient details
- Patient/Hospital Number field to patient details
- Automatic update detection and notification system
- Date of birth formatted display (dd mmmm yyyy)

### Changed
- Removed Day +20 from default schedule to prevent cycle overlap

### Fixed
- Android status bar colour and bottom navigation alignment
- Bottom navigation spacing consistency across all pages

## [1.1.0] - 2026-01-07

### Added
- Service worker for offline functionality (PWA support)
- Swipe navigation between views
- "Back to Today" floating button for quick navigation
- Install as app capability for mobile devices

### Changed
- Improved text clarity and user interface copy
- Enhanced navigation experience with touch gestures

## [1.0.0] - 2026-01-06

### Added
- Initial release of Day by Day
- Medication tracking with customisable schedules
- Cycle-based calendar view (6 cycles × 21 days)
- PRN (as-needed) medication tracking:
  - Metoclopramide (anti-sickness)
  - Tramadol (pain relief)
  - Loperamide (diarrhoea)
  - Movicol (constipation)
- Symptom tracking with 9 metrics:
  - Fatigue, nausea, pain, appetite, mood
  - Mouth sores, sleep quality, bowel function, concentration
- Symptom trend charts (Chart.js integration)
- Weight tracking
- Daily notes (general, food & drink)
- "Today's Win" feature for positive moments
- Daily summary email generation
- Patient details management
- Emergency contact storage
- Dark/Light theme support
- Accent colour customisation
- Daily inspirational quotes (Quotable API)
- Backup/Restore functionality (JSON export/import)
- Responsive mobile-first design
- Privacy-first architecture (local storage only)
- Help documentation
- About page with acknowledgements
- Licence page (Apache 2.0)
- Bottom navigation bar
- Settings panel
- Print-friendly cycle overview

### Technical
- Progressive Web App (PWA) support
- Offline-first architecture
- LocalStorage-based data persistence
- No backend or account system
- Service worker for caching
- Mobile app install prompts
- Chart.js for data visualisation
- Google Fonts (DM Sans, Fraunces)
- Heroicons-style navigation icons

---

## Version History

- **1.5.0** (2026-01-23) - Push notification system
- **1.4.4** (2026-01-23) - Documentation improvements (about.html and help.html)
- **1.4.3** (2026-01-23) - Service worker cache version fix
- **1.4.2** (2026-01-20) - Additional cycle length adaptation bug fixes
- **1.4.1** (2026-01-20) - Milestone message cycle length bug fixes
- **1.4.0** (2026-01-19) - Enhanced backup/restore and data management
- **1.3.0** (2026-01-18) - Customisable cycles
- **1.2.0** (2026-01-13) - Patient details and auto-updates
- **1.1.0** (2026-01-07) - Offline support and navigation
- **1.0.0** (2026-01-06) - Initial release

[1.5.0]: https://github.com/kenmccarthy/daybyday/compare/v1.4.4...v1.5.0
[1.4.4]: https://github.com/kenmccarthy/daybyday/compare/v1.4.3...v1.4.4
[1.4.3]: https://github.com/kenmccarthy/daybyday/compare/v1.4.2...v1.4.3
[1.4.2]: https://github.com/kenmccarthy/daybyday/compare/v1.4.1...v1.4.2
[1.4.1]: https://github.com/kenmccarthy/daybyday/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/kenmccarthy/daybyday/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/kenmccarthy/daybyday/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/kenmccarthy/daybyday/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/kenmccarthy/daybyday/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/kenmccarthy/daybyday/releases/tag/v1.0.0
