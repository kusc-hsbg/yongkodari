// datadog RUM telemetry stub (external monitoring removed for platform independence)
var _noop = function () {};
var imdog = { init: _noop, addError: _noop, addAction: _noop, addTiming: _noop, setUser: _noop, startView: _noop, log: _noop };
if (typeof window !== 'undefined') window.imdog = imdog;
