(function() {var implementors = {};
implementors["atty"] = [{"text":"impl Freeze for Stream","synthetic":true,"types":[]}];
implementors["chrono"] = [{"text":"impl Freeze for FixedOffset","synthetic":true,"types":[]},{"text":"impl Freeze for Local","synthetic":true,"types":[]},{"text":"impl Freeze for Utc","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for LocalResult&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for NaiveDate","synthetic":true,"types":[]},{"text":"impl Freeze for NaiveDateTime","synthetic":true,"types":[]},{"text":"impl Freeze for IsoWeek","synthetic":true,"types":[]},{"text":"impl Freeze for NaiveTime","synthetic":true,"types":[]},{"text":"impl&lt;Tz&gt; Freeze for Date&lt;Tz&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Tz as TimeZone&gt;::Offset: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for SecondsFormat","synthetic":true,"types":[]},{"text":"impl&lt;Tz&gt; Freeze for DateTime&lt;Tz&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Tz as TimeZone&gt;::Offset: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Parsed","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for StrftimeItems&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Pad","synthetic":true,"types":[]},{"text":"impl Freeze for Numeric","synthetic":true,"types":[]},{"text":"impl Freeze for InternalNumeric","synthetic":true,"types":[]},{"text":"impl Freeze for Fixed","synthetic":true,"types":[]},{"text":"impl Freeze for InternalFixed","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Item&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ParseError","synthetic":true,"types":[]},{"text":"impl&lt;I&gt; Freeze for DelayedFormat&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for RoundingError","synthetic":true,"types":[]},{"text":"impl Freeze for Weekday","synthetic":true,"types":[]},{"text":"impl Freeze for ParseWeekdayError","synthetic":true,"types":[]},{"text":"impl Freeze for Month","synthetic":true,"types":[]},{"text":"impl Freeze for ParseMonthError","synthetic":true,"types":[]}];
implementors["colored"] = [{"text":"impl Freeze for Color","synthetic":true,"types":[]},{"text":"impl !Freeze for ShouldColorize","synthetic":true,"types":[]},{"text":"impl Freeze for SHOULD_COLORIZE","synthetic":true,"types":[]},{"text":"impl Freeze for Style","synthetic":true,"types":[]},{"text":"impl Freeze for Styles","synthetic":true,"types":[]},{"text":"impl Freeze for ColoredString","synthetic":true,"types":[]}];
implementors["dotenv"] = [{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
implementors["libc"] = [{"text":"impl Freeze for statvfs","synthetic":true,"types":[]},{"text":"impl Freeze for max_align_t","synthetic":true,"types":[]},{"text":"impl Freeze for sigaction","synthetic":true,"types":[]},{"text":"impl Freeze for statfs","synthetic":true,"types":[]},{"text":"impl Freeze for flock","synthetic":true,"types":[]},{"text":"impl Freeze for flock64","synthetic":true,"types":[]},{"text":"impl Freeze for siginfo_t","synthetic":true,"types":[]},{"text":"impl Freeze for stack_t","synthetic":true,"types":[]},{"text":"impl Freeze for stat","synthetic":true,"types":[]},{"text":"impl Freeze for stat64","synthetic":true,"types":[]},{"text":"impl Freeze for statfs64","synthetic":true,"types":[]},{"text":"impl Freeze for statvfs64","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_attr_t","synthetic":true,"types":[]},{"text":"impl Freeze for _libc_fpxreg","synthetic":true,"types":[]},{"text":"impl Freeze for _libc_xmmreg","synthetic":true,"types":[]},{"text":"impl Freeze for _libc_fpstate","synthetic":true,"types":[]},{"text":"impl Freeze for user_regs_struct","synthetic":true,"types":[]},{"text":"impl Freeze for user","synthetic":true,"types":[]},{"text":"impl Freeze for mcontext_t","synthetic":true,"types":[]},{"text":"impl Freeze for ipc_perm","synthetic":true,"types":[]},{"text":"impl Freeze for shmid_ds","synthetic":true,"types":[]},{"text":"impl Freeze for termios2","synthetic":true,"types":[]},{"text":"impl Freeze for ip_mreqn","synthetic":true,"types":[]},{"text":"impl Freeze for user_fpregs_struct","synthetic":true,"types":[]},{"text":"impl Freeze for ucontext_t","synthetic":true,"types":[]},{"text":"impl Freeze for sigset_t","synthetic":true,"types":[]},{"text":"impl Freeze for sysinfo","synthetic":true,"types":[]},{"text":"impl Freeze for msqid_ds","synthetic":true,"types":[]},{"text":"impl Freeze for sem_t","synthetic":true,"types":[]},{"text":"impl Freeze for statx","synthetic":true,"types":[]},{"text":"impl Freeze for statx_timestamp","synthetic":true,"types":[]},{"text":"impl Freeze for aiocb","synthetic":true,"types":[]},{"text":"impl Freeze for __exit_status","synthetic":true,"types":[]},{"text":"impl Freeze for __timeval","synthetic":true,"types":[]},{"text":"impl Freeze for glob64_t","synthetic":true,"types":[]},{"text":"impl Freeze for msghdr","synthetic":true,"types":[]},{"text":"impl Freeze for cmsghdr","synthetic":true,"types":[]},{"text":"impl Freeze for termios","synthetic":true,"types":[]},{"text":"impl Freeze for mallinfo","synthetic":true,"types":[]},{"text":"impl Freeze for nlmsghdr","synthetic":true,"types":[]},{"text":"impl Freeze for nlmsgerr","synthetic":true,"types":[]},{"text":"impl Freeze for nl_pktinfo","synthetic":true,"types":[]},{"text":"impl Freeze for nl_mmap_req","synthetic":true,"types":[]},{"text":"impl Freeze for nl_mmap_hdr","synthetic":true,"types":[]},{"text":"impl Freeze for nlattr","synthetic":true,"types":[]},{"text":"impl Freeze for rtentry","synthetic":true,"types":[]},{"text":"impl Freeze for timex","synthetic":true,"types":[]},{"text":"impl Freeze for ntptimeval","synthetic":true,"types":[]},{"text":"impl Freeze for regex_t","synthetic":true,"types":[]},{"text":"impl Freeze for utmpx","synthetic":true,"types":[]},{"text":"impl Freeze for fpos64_t","synthetic":true,"types":[]},{"text":"impl Freeze for rlimit64","synthetic":true,"types":[]},{"text":"impl Freeze for glob_t","synthetic":true,"types":[]},{"text":"impl Freeze for passwd","synthetic":true,"types":[]},{"text":"impl Freeze for spwd","synthetic":true,"types":[]},{"text":"impl Freeze for dqblk","synthetic":true,"types":[]},{"text":"impl Freeze for signalfd_siginfo","synthetic":true,"types":[]},{"text":"impl Freeze for itimerspec","synthetic":true,"types":[]},{"text":"impl Freeze for fsid_t","synthetic":true,"types":[]},{"text":"impl Freeze for packet_mreq","synthetic":true,"types":[]},{"text":"impl Freeze for cpu_set_t","synthetic":true,"types":[]},{"text":"impl Freeze for if_nameindex","synthetic":true,"types":[]},{"text":"impl Freeze for msginfo","synthetic":true,"types":[]},{"text":"impl Freeze for sembuf","synthetic":true,"types":[]},{"text":"impl Freeze for input_event","synthetic":true,"types":[]},{"text":"impl Freeze for input_id","synthetic":true,"types":[]},{"text":"impl Freeze for input_absinfo","synthetic":true,"types":[]},{"text":"impl Freeze for input_keymap_entry","synthetic":true,"types":[]},{"text":"impl Freeze for input_mask","synthetic":true,"types":[]},{"text":"impl Freeze for ff_replay","synthetic":true,"types":[]},{"text":"impl Freeze for ff_trigger","synthetic":true,"types":[]},{"text":"impl Freeze for ff_envelope","synthetic":true,"types":[]},{"text":"impl Freeze for ff_constant_effect","synthetic":true,"types":[]},{"text":"impl Freeze for ff_ramp_effect","synthetic":true,"types":[]},{"text":"impl Freeze for ff_condition_effect","synthetic":true,"types":[]},{"text":"impl Freeze for ff_periodic_effect","synthetic":true,"types":[]},{"text":"impl Freeze for ff_rumble_effect","synthetic":true,"types":[]},{"text":"impl Freeze for ff_effect","synthetic":true,"types":[]},{"text":"impl Freeze for dl_phdr_info","synthetic":true,"types":[]},{"text":"impl Freeze for Elf32_Ehdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf64_Ehdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf32_Sym","synthetic":true,"types":[]},{"text":"impl Freeze for Elf64_Sym","synthetic":true,"types":[]},{"text":"impl Freeze for Elf32_Phdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf64_Phdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf32_Shdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf64_Shdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf32_Chdr","synthetic":true,"types":[]},{"text":"impl Freeze for Elf64_Chdr","synthetic":true,"types":[]},{"text":"impl Freeze for ucred","synthetic":true,"types":[]},{"text":"impl Freeze for mntent","synthetic":true,"types":[]},{"text":"impl Freeze for posix_spawn_file_actions_t","synthetic":true,"types":[]},{"text":"impl Freeze for posix_spawnattr_t","synthetic":true,"types":[]},{"text":"impl Freeze for genlmsghdr","synthetic":true,"types":[]},{"text":"impl Freeze for in6_pktinfo","synthetic":true,"types":[]},{"text":"impl Freeze for arpd_request","synthetic":true,"types":[]},{"text":"impl Freeze for inotify_event","synthetic":true,"types":[]},{"text":"impl Freeze for fanotify_response","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_vm","synthetic":true,"types":[]},{"text":"impl Freeze for regmatch_t","synthetic":true,"types":[]},{"text":"impl Freeze for sock_extended_err","synthetic":true,"types":[]},{"text":"impl Freeze for __c_anonymous_sockaddr_can_tp","synthetic":true,"types":[]},{"text":"impl Freeze for __c_anonymous_sockaddr_can_j1939","synthetic":true,"types":[]},{"text":"impl Freeze for can_filter","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_nl","synthetic":true,"types":[]},{"text":"impl Freeze for dirent","synthetic":true,"types":[]},{"text":"impl Freeze for dirent64","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_alg","synthetic":true,"types":[]},{"text":"impl Freeze for af_alg_iv","synthetic":true,"types":[]},{"text":"impl Freeze for mq_attr","synthetic":true,"types":[]},{"text":"impl Freeze for __c_anonymous_sockaddr_can_can_addr","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_can","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_mutexattr_t","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_rwlockattr_t","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_condattr_t","synthetic":true,"types":[]},{"text":"impl Freeze for fanotify_event_metadata","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_cond_t","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_mutex_t","synthetic":true,"types":[]},{"text":"impl Freeze for pthread_rwlock_t","synthetic":true,"types":[]},{"text":"impl Freeze for can_frame","synthetic":true,"types":[]},{"text":"impl Freeze for canfd_frame","synthetic":true,"types":[]},{"text":"impl Freeze for timezone","synthetic":true,"types":[]},{"text":"impl Freeze for in_addr","synthetic":true,"types":[]},{"text":"impl Freeze for ip_mreq","synthetic":true,"types":[]},{"text":"impl Freeze for ip_mreq_source","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_in","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_in6","synthetic":true,"types":[]},{"text":"impl Freeze for addrinfo","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_ll","synthetic":true,"types":[]},{"text":"impl Freeze for fd_set","synthetic":true,"types":[]},{"text":"impl Freeze for tm","synthetic":true,"types":[]},{"text":"impl Freeze for sched_param","synthetic":true,"types":[]},{"text":"impl Freeze for Dl_info","synthetic":true,"types":[]},{"text":"impl Freeze for lconv","synthetic":true,"types":[]},{"text":"impl Freeze for in_pktinfo","synthetic":true,"types":[]},{"text":"impl Freeze for ifaddrs","synthetic":true,"types":[]},{"text":"impl Freeze for in6_rtmsg","synthetic":true,"types":[]},{"text":"impl Freeze for arpreq","synthetic":true,"types":[]},{"text":"impl Freeze for arpreq_old","synthetic":true,"types":[]},{"text":"impl Freeze for arphdr","synthetic":true,"types":[]},{"text":"impl Freeze for mmsghdr","synthetic":true,"types":[]},{"text":"impl Freeze for epoll_event","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_un","synthetic":true,"types":[]},{"text":"impl Freeze for sockaddr_storage","synthetic":true,"types":[]},{"text":"impl Freeze for utsname","synthetic":true,"types":[]},{"text":"impl Freeze for sigevent","synthetic":true,"types":[]},{"text":"impl Freeze for in6_addr","synthetic":true,"types":[]},{"text":"impl Freeze for DIR","synthetic":true,"types":[]},{"text":"impl Freeze for group","synthetic":true,"types":[]},{"text":"impl Freeze for utimbuf","synthetic":true,"types":[]},{"text":"impl Freeze for timeval","synthetic":true,"types":[]},{"text":"impl Freeze for timespec","synthetic":true,"types":[]},{"text":"impl Freeze for rlimit","synthetic":true,"types":[]},{"text":"impl Freeze for rusage","synthetic":true,"types":[]},{"text":"impl Freeze for ipv6_mreq","synthetic":true,"types":[]},{"text":"impl Freeze for hostent","synthetic":true,"types":[]},{"text":"impl Freeze for iovec","synthetic":true,"types":[]},{"text":"impl Freeze for pollfd","synthetic":true,"types":[]},{"text":"impl Freeze for winsize","synthetic":true,"types":[]},{"text":"impl Freeze for linger","synthetic":true,"types":[]},{"text":"impl Freeze for sigval","synthetic":true,"types":[]},{"text":"impl Freeze for itimerval","synthetic":true,"types":[]},{"text":"impl Freeze for tms","synthetic":true,"types":[]},{"text":"impl Freeze for servent","synthetic":true,"types":[]},{"text":"impl Freeze for protoent","synthetic":true,"types":[]},{"text":"impl Freeze for FILE","synthetic":true,"types":[]},{"text":"impl Freeze for fpos_t","synthetic":true,"types":[]}];
implementors["log"] = [{"text":"impl Freeze for Level","synthetic":true,"types":[]},{"text":"impl Freeze for LevelFilter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Record&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for RecordBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Metadata&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for MetadataBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SetLoggerError","synthetic":true,"types":[]},{"text":"impl Freeze for ParseLevelError","synthetic":true,"types":[]}];
implementors["num_integer"] = [{"text":"impl&lt;A&gt; Freeze for ExtendedGcd&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for IterBinomial&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["num_traits"] = [{"text":"impl Freeze for FloatErrorKind","synthetic":true,"types":[]},{"text":"impl Freeze for ParseFloatError","synthetic":true,"types":[]}];
implementors["sandbox_first"] = [{"text":"impl Freeze for Car","synthetic":true,"types":[]}];
implementors["simple_logger"] = [{"text":"impl Freeze for SimpleLogger","synthetic":true,"types":[]}];
implementors["time"] = [{"text":"impl Freeze for Duration","synthetic":true,"types":[]},{"text":"impl Freeze for OutOfRangeError","synthetic":true,"types":[]},{"text":"impl Freeze for Timespec","synthetic":true,"types":[]},{"text":"impl Freeze for PreciseTime","synthetic":true,"types":[]},{"text":"impl Freeze for SteadyTime","synthetic":true,"types":[]},{"text":"impl Freeze for Tm","synthetic":true,"types":[]},{"text":"impl Freeze for ParseError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for TmFmt&lt;'a&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()