/** @noSelfInFile */
/** defines */
declare const defines: Defines;
/** @noSelf **/
interface Defines {
  alert_type: /** @noSelf **/
  {
    custom: any;
    entity_destroyed: any;
    entity_under_attack: any;
    no_material_for_construction: any;
    no_storage: any;
    not_enough_construction_robots: any;
    not_enough_repair_packs: any;
    train_out_of_fuel: any;
    turret_fire: any;
  };
  behavior_result: /** @noSelf **/
  { deleted: any; fail: any; in_progress: any; success: any };
  build_check_type: /** @noSelf **/
  {
    blueprint_ghost: any;
    ghost_revive: any;
    manual: any;
    manual_ghost: any;
    script: any;
    script_ghost: any;
  };
  chain_signal_state: /** @noSelf **/
  { all_open: any; none: any; none_open: any; partially_open: any };
  chunk_generated_status: /** @noSelf **/
  {
    basic_tiles: any;
    corrected_tiles: any;
    custom_tiles: any;
    entities: any;
    nothing: any;
    tiles: any;
  };
  circuit_condition_index: /** @noSelf **/
  {
    arithmetic_combinator: any;
    constant_combinator: any;
    decider_combinator: any;
    inserter_circuit: any;
    inserter_logistic: any;
    lamp: any;
    offshore_pump: any;
    pump: any;
  };
  circuit_connector_id: /** @noSelf **/
  {
    accumulator: any;
    combinator_input: any;
    combinator_output: any;
    constant_combinator: any;
    container: any;
    electric_pole: any;
    inserter: any;
    lamp: any;
    offshore_pump: any;
    programmable_speaker: any;
    pump: any;
    rail_chain_signal: any;
    rail_signal: any;
    roboport: any;
    storage_tank: any;
    wall: any;
  };
  command: /** @noSelf **/
  {
    attack: any;
    attack_area: any;
    build_base: any;
    compound: any;
    flee: any;
    go_to_location: any;
    group: any;
    stop: any;
    wander: any;
  };
  compound_command: /** @noSelf **/
  { logical_and: any; logical_or: any; return_last: any };
  control_behavior: /** @noSelf **/
  {
    inserter: /** @noSelf **/
    {
      circuit_mode_of_operation: /** @noSelf **/
      {
        enable_disable: any;
        none: any;
        read_hand_contents: any;
        set_filters: any;
        set_stack_size: any;
      };
      hand_read_mode: /** @noSelf **/ { hold: any; pulse: any };
    };
    lamp: /** @noSelf **/
    { circuit_mode_of_operation: /** @noSelf **/ { use_colors: any } };
    logistic_container: /** @noSelf **/
    {
      circuit_mode_of_operation: /** @noSelf **/
      { send_contents: any; set_requests: any };
    };
    mining_drill: /** @noSelf **/
    {
      resource_read_mode: /** @noSelf **/
      { entire_patch: any; this_miner: any };
    };
    transport_belt: /** @noSelf **/
    { content_read_mode: /** @noSelf **/ { hold: any; pulse: any } };
    type: /** @noSelf **/
    {
      accumulator: any;
      arithmetic_combinator: any;
      constant_combinator: any;
      container: any;
      decider_combinator: any;
      generic_on_off: any;
      inserter: any;
      lamp: any;
      logistic_container: any;
      mining_drill: any;
      programmable_speaker: any;
      rail_chain_signal: any;
      rail_signal: any;
      roboport: any;
      storage_tank: any;
      train_stop: any;
      transport_belt: any;
      wall: any;
    };
  };
  controllers: /** @noSelf **/
  {
    character: any;
    cutscene: any;
    editor: any;
    ghost: any;
    god: any;
    spectator: any;
  };
  deconstruction_item: /** @noSelf **/
  {
    entity_filter_mode: /** @noSelf **/ { blacklist: any; whitelist: any };
    tile_filter_mode: /** @noSelf **/ { blacklist: any; whitelist: any };
    tile_selection_mode: /** @noSelf **/
    { always: any; never: any; normal: any; only: any };
  };
  difficulty_settings: /** @noSelf **/
  {
    recipe_difficulty: /** @noSelf **/ { expensive: any; normal: any };
    technology_difficulty: /** @noSelf **/ { expensive: any; normal: any };
  };
  difficulty: /** @noSelf **/ { easy: any; hard: any; normal: any };
  direction: /** @noSelf **/
  {
    east: any;
    north: any;
    northeast: any;
    northwest: any;
    south: any;
    southeast: any;
    southwest: any;
    west: any;
  };
  disconnect_reason: /** @noSelf **/
  {
    afk: any;
    banned: any;
    cannot_keep_up: any;
    desync_limit_reached: any;
    dropped: any;
    kicked: any;
    kicked_and_deleted: any;
    quit: any;
    reconnect: any;
    switching_servers: any;
    wrong_input: any;
  };
  distraction: /** @noSelf **/
  { by_anything: any; by_damage: any; by_enemy: any; none: any };
  entity_status: /** @noSelf **/
  {
    cant_divide_segments: any;
    charging: any;
    disabled: any;
    disabled_by_control_behavior: any;
    disabled_by_script: any;
    discharging: any;
    fluid_ingredient_shortage: any;
    full_output: any;
    fully_charged: any;
    item_ingredient_shortage: any;
    launching_rocket: any;
    low_input_fluid: any;
    low_power: any;
    low_temperature: any;
    marked_for_deconstruction: any;
    missing_required_fluid: any;
    missing_science_packs: any;
    networks_connected: any;
    networks_disconnected: any;
    no_ammo: any;
    no_fuel: any;
    no_ingredients: any;
    no_input_fluid: any;
    no_minable_resources: any;
    no_modules_to_transmit: any;
    no_power: any;
    no_recipe: any;
    no_research_in_progress: any;
    normal: any;
    not_connected_to_rail: any;
    not_plugged_in_electric_network: any;
    out_of_logistic_network: any;
    preparing_rocket_for_launch: any;
    recharging_after_power_outage: any;
    turned_off_during_daytime: any;
    waiting_for_source_items: any;
    waiting_for_space_in_destination: any;
    waiting_for_target_to_be_built: any;
    waiting_for_train: any;
    waiting_to_launch_rocket: any;
    working: any;
  };
  events: /** @noSelf **/
  {
    on_ai_command_completed: any;
    on_area_cloned: any;
    on_biter_base_built: any;
    on_brush_cloned: any;
    on_build_base_arrived: any;
    on_built_entity: any;
    on_cancelled_deconstruction: any;
    on_cancelled_upgrade: any;
    on_character_corpse_expired: any;
    on_chart_tag_added: any;
    on_chart_tag_modified: any;
    on_chart_tag_removed: any;
    on_chunk_charted: any;
    on_chunk_deleted: any;
    on_chunk_generated: any;
    on_combat_robot_expired: any;
    on_console_chat: any;
    on_console_command: any;
    on_cutscene_cancelled: any;
    on_cutscene_waypoint_reached: any;
    on_difficulty_settings_changed: any;
    on_entity_cloned: any;
    on_entity_damaged: any;
    on_entity_destroyed: any;
    on_entity_died: any;
    on_entity_renamed: any;
    on_entity_settings_pasted: any;
    on_entity_spawned: any;
    on_force_cease_fire_changed: any;
    on_force_created: any;
    on_force_friends_changed: any;
    on_force_reset: any;
    on_forces_merged: any;
    on_forces_merging: any;
    on_game_created_from_scenario: any;
    on_gui_checked_state_changed: any;
    on_gui_click: any;
    on_gui_closed: any;
    on_gui_confirmed: any;
    on_gui_elem_changed: any;
    on_gui_location_changed: any;
    on_gui_opened: any;
    on_gui_selected_tab_changed: any;
    on_gui_selection_state_changed: any;
    on_gui_switch_state_changed: any;
    on_gui_text_changed: any;
    on_gui_value_changed: any;
    on_land_mine_armed: any;
    on_lua_shortcut: any;
    on_marked_for_deconstruction: any;
    on_marked_for_upgrade: any;
    on_market_item_purchased: any;
    on_mod_item_opened: any;
    on_permission_group_added: any;
    on_permission_group_deleted: any;
    on_permission_group_edited: any;
    on_permission_string_imported: any;
    on_picked_up_item: any;
    on_player_alt_selected_area: any;
    on_player_ammo_inventory_changed: any;
    on_player_armor_inventory_changed: any;
    on_player_banned: any;
    on_player_built_tile: any;
    on_player_cancelled_crafting: any;
    on_player_changed_force: any;
    on_player_changed_position: any;
    on_player_changed_surface: any;
    on_player_cheat_mode_disabled: any;
    on_player_cheat_mode_enabled: any;
    on_player_clicked_gps_tag: any;
    on_player_configured_blueprint: any;
    on_player_configured_spider_remote: any;
    on_player_crafted_item: any;
    on_player_created: any;
    on_player_cursor_stack_changed: any;
    on_player_deconstructed_area: any;
    on_player_demoted: any;
    on_player_died: any;
    on_player_display_resolution_changed: any;
    on_player_display_scale_changed: any;
    on_player_driving_changed_state: any;
    on_player_dropped_item: any;
    on_player_fast_transferred: any;
    on_player_flushed_fluid: any;
    on_player_gun_inventory_changed: any;
    on_player_joined_game: any;
    on_player_kicked: any;
    on_player_left_game: any;
    on_player_main_inventory_changed: any;
    on_player_mined_entity: any;
    on_player_mined_item: any;
    on_player_mined_tile: any;
    on_player_muted: any;
    on_player_pipette: any;
    on_player_placed_equipment: any;
    on_player_promoted: any;
    on_player_removed: any;
    on_player_removed_equipment: any;
    on_player_repaired_entity: any;
    on_player_respawned: any;
    on_player_rotated_entity: any;
    on_player_selected_area: any;
    on_player_set_quick_bar_slot: any;
    on_player_setup_blueprint: any;
    on_player_toggled_alt_mode: any;
    on_player_toggled_map_editor: any;
    on_player_trash_inventory_changed: any;
    on_player_unbanned: any;
    on_player_unmuted: any;
    on_player_used_capsule: any;
    on_player_used_spider_remote: any;
    on_post_entity_died: any;
    on_pre_build: any;
    on_pre_chunk_deleted: any;
    on_pre_entity_settings_pasted: any;
    on_pre_ghost_deconstructed: any;
    on_pre_permission_group_deleted: any;
    on_pre_permission_string_imported: any;
    on_pre_player_crafted_item: any;
    on_pre_player_died: any;
    on_pre_player_left_game: any;
    on_pre_player_mined_item: any;
    on_pre_player_removed: any;
    on_pre_player_toggled_map_editor: any;
    on_pre_robot_exploded_cliff: any;
    on_pre_script_inventory_resized: any;
    on_pre_surface_cleared: any;
    on_pre_surface_deleted: any;
    on_research_finished: any;
    on_research_started: any;
    on_resource_depleted: any;
    on_robot_built_entity: any;
    on_robot_built_tile: any;
    on_robot_exploded_cliff: any;
    on_robot_mined: any;
    on_robot_mined_entity: any;
    on_robot_mined_tile: any;
    on_robot_pre_mined: any;
    on_rocket_launch_ordered: any;
    on_rocket_launched: any;
    on_runtime_mod_setting_changed: any;
    on_script_inventory_resized: any;
    on_script_path_request_finished: any;
    on_script_trigger_effect: any;
    on_sector_scanned: any;
    on_selected_entity_changed: any;
    on_spider_command_completed: any;
    on_string_translated: any;
    on_surface_cleared: any;
    on_surface_created: any;
    on_surface_deleted: any;
    on_surface_imported: any;
    on_surface_renamed: any;
    on_technology_effects_reset: any;
    on_tick: any;
    on_train_changed_state: any;
    on_train_created: any;
    on_train_schedule_changed: any;
    on_trigger_created_entity: any;
    on_trigger_fired_artillery: any;
    on_unit_added_to_group: any;
    on_unit_group_created: any;
    on_unit_group_finished_gathering: any;
    on_unit_removed_from_group: any;
    script_raised_built: any;
    script_raised_destroy: any;
    script_raised_revive: any;
    script_raised_set_tiles: any;
  };
  flow_precision_index: /** @noSelf **/
  {
    fifty_hours: any;
    one_hour: any;
    one_minute: any;
    one_second: any;
    one_thousand_hours: any;
    ten_hours: any;
    ten_minutes: any;
    two_hundred_fifty_hours: any;
  };
  group_state: /** @noSelf **/
  {
    attacking_distraction: any;
    attacking_target: any;
    finished: any;
    gathering: any;
    moving: any;
    pathfinding: any;
    wander_in_group: any;
  };
  gui_type: /** @noSelf **/
  {
    achievement: any;
    blueprint_library: any;
    bonus: any;
    controller: any;
    custom: any;
    entity: any;
    equipment: any;
    item: any;
    logistic: any;
    none: any;
    other_player: any;
    permissions: any;
    player_management: any;
    production: any;
    research: any;
    server_management: any;
    tile: any;
    trains: any;
    tutorials: any;
  };
  input_action: /** @noSelf **/
  {
    activate_copy: any;
    activate_cut: any;
    activate_paste: any;
    add_permission_group: any;
    add_train_station: any;
    admin_action: any;
    alt_select_area: any;
    alt_select_blueprint_entities: any;
    alternative_copy: any;
    begin_mining: any;
    begin_mining_terrain: any;
    build: any;
    build_rail: any;
    build_terrain: any;
    cancel_craft: any;
    cancel_deconstruct: any;
    cancel_new_blueprint: any;
    cancel_research: any;
    cancel_upgrade: any;
    change_active_character_tab: any;
    change_active_item_group_for_crafting: any;
    change_active_item_group_for_filters: any;
    change_active_quick_bar: any;
    change_arithmetic_combinator_parameters: any;
    change_decider_combinator_parameters: any;
    change_entity_label: any;
    change_item_description: any;
    change_item_label: any;
    change_multiplayer_config: any;
    change_picking_state: any;
    change_programmable_speaker_alert_parameters: any;
    change_programmable_speaker_circuit_parameters: any;
    change_programmable_speaker_parameters: any;
    change_riding_state: any;
    change_shooting_state: any;
    change_train_stop_station: any;
    change_train_wait_condition: any;
    change_train_wait_condition_data: any;
    clear_cursor: any;
    connect_rolling_stock: any;
    copy: any;
    copy_entity_settings: any;
    copy_opened_blueprint: any;
    copy_opened_item: any;
    craft: any;
    cursor_split: any;
    cursor_transfer: any;
    custom_input: any;
    cycle_blueprint_book_backwards: any;
    cycle_blueprint_book_forwards: any;
    deconstruct: any;
    delete_blueprint_library: any;
    delete_blueprint_record: any;
    delete_custom_tag: any;
    delete_permission_group: any;
    destroy_item: any;
    destroy_opened_item: any;
    disconnect_rolling_stock: any;
    drag_train_schedule: any;
    drag_train_wait_condition: any;
    drop_blueprint_record: any;
    drop_item: any;
    edit_blueprint_tool_preview: any;
    edit_custom_tag: any;
    edit_permission_group: any;
    export_blueprint: any;
    fast_entity_split: any;
    fast_entity_transfer: any;
    flush_opened_entity_fluid: any;
    flush_opened_entity_specific_fluid: any;
    go_to_train_station: any;
    grab_blueprint_record: any;
    gui_checked_state_changed: any;
    gui_click: any;
    gui_confirmed: any;
    gui_elem_changed: any;
    gui_location_changed: any;
    gui_selected_tab_changed: any;
    gui_selection_state_changed: any;
    gui_switch_state_changed: any;
    gui_text_changed: any;
    gui_value_changed: any;
    import_blueprint: any;
    import_blueprint_string: any;
    import_blueprints_filtered: any;
    import_permissions_string: any;
    inventory_split: any;
    inventory_transfer: any;
    launch_rocket: any;
    lua_shortcut: any;
    map_editor_action: any;
    market_offer: any;
    mod_settings_changed: any;
    open_achievements_gui: any;
    open_blueprint_library_gui: any;
    open_blueprint_record: any;
    open_bonus_gui: any;
    open_character_gui: any;
    open_current_vehicle_gui: any;
    open_equipment: any;
    open_gui: any;
    open_item: any;
    open_logistic_gui: any;
    open_mod_item: any;
    open_parent_of_opened_item: any;
    open_production_gui: any;
    open_technology_gui: any;
    open_tips_and_tricks_gui: any;
    open_train_gui: any;
    open_train_station_gui: any;
    open_trains_gui: any;
    paste_entity_settings: any;
    place_equipment: any;
    quick_bar_pick_slot: any;
    quick_bar_set_selected_page: any;
    quick_bar_set_slot: any;
    reassign_blueprint: any;
    remove_cables: any;
    remove_train_station: any;
    reset_assembling_machine: any;
    reset_item: any;
    rotate_entity: any;
    select_area: any;
    select_blueprint_entities: any;
    select_entity_slot: any;
    select_item: any;
    select_mapper_slot: any;
    select_next_valid_gun: any;
    select_tile_slot: any;
    send_spidertron: any;
    set_auto_launch_rocket: any;
    set_autosort_inventory: any;
    set_behavior_mode: any;
    set_car_weapons_control: any;
    set_circuit_condition: any;
    set_circuit_mode_of_operation: any;
    set_controller_logistic_trash_filter_item: any;
    set_deconstruction_item_tile_selection_mode: any;
    set_deconstruction_item_trees_and_rocks_only: any;
    set_entity_color: any;
    set_entity_energy_property: any;
    set_entity_logistic_trash_filter_item: any;
    set_filter: any;
    set_flat_controller_gui: any;
    set_heat_interface_mode: any;
    set_heat_interface_temperature: any;
    set_infinity_container_filter_item: any;
    set_infinity_container_remove_unfiltered_items: any;
    set_infinity_pipe_filter: any;
    set_inserter_max_stack_size: any;
    set_inventory_bar: any;
    set_linked_container_link_i_d: any;
    set_logistic_filter_item: any;
    set_logistic_filter_signal: any;
    set_player_color: any;
    set_recipe_notifications: any;
    set_request_from_buffers: any;
    set_research_finished_stops_game: any;
    set_signal: any;
    set_splitter_priority: any;
    set_train_stopped: any;
    set_trains_limit: any;
    set_vehicle_automatic_targeting_parameters: any;
    setup_assembling_machine: any;
    setup_blueprint: any;
    setup_single_blueprint_record: any;
    smart_pipette: any;
    spawn_item: any;
    stack_split: any;
    stack_transfer: any;
    start_repair: any;
    start_research: any;
    start_walking: any;
    stop_building_by_moving: any;
    switch_connect_to_logistic_network: any;
    switch_constant_combinator_state: any;
    switch_inserter_filter_mode_state: any;
    switch_power_switch_state: any;
    switch_to_rename_stop_gui: any;
    take_equipment: any;
    toggle_deconstruction_item_entity_filter_mode: any;
    toggle_deconstruction_item_tile_filter_mode: any;
    toggle_driving: any;
    toggle_enable_vehicle_logistics_while_moving: any;
    toggle_entity_logistic_requests: any;
    toggle_equipment_movement_bonus: any;
    toggle_map_editor: any;
    toggle_personal_logistic_requests: any;
    toggle_personal_roboport: any;
    toggle_show_entity_info: any;
    translate_string: any;
    undo: any;
    upgrade: any;
    upgrade_opened_blueprint_by_item: any;
    upgrade_opened_blueprint_by_record: any;
    use_artillery_remote: any;
    use_item: any;
    wire_dragging: any;
    write_to_console: any;
  };
  inventory: /** @noSelf **/
  {
    artillery_turret_ammo: any;
    artillery_wagon_ammo: any;
    assembling_machine_input: any;
    assembling_machine_modules: any;
    assembling_machine_output: any;
    beacon_modules: any;
    burnt_result: any;
    car_ammo: any;
    car_trunk: any;
    cargo_wagon: any;
    character_ammo: any;
    character_armor: any;
    character_corpse: any;
    character_guns: any;
    character_main: any;
    character_trash: any;
    character_vehicle: any;
    chest: any;
    editor_ammo: any;
    editor_armor: any;
    editor_guns: any;
    editor_main: any;
    fuel: any;
    furnace_modules: any;
    furnace_result: any;
    furnace_source: any;
    god_main: any;
    item_main: any;
    lab_input: any;
    lab_modules: any;
    mining_drill_modules: any;
    roboport_material: any;
    roboport_robot: any;
    robot_cargo: any;
    robot_repair: any;
    rocket: any;
    rocket_silo_result: any;
    rocket_silo_rocket: any;
    spider_ammo: any;
    spider_trash: any;
    spider_trunk: any;
    turret_ammo: any;
  };
  logistic_member_index: /** @noSelf **/
  {
    character_provider: any;
    character_requester: any;
    character_storage: any;
    generic_on_off_behavior: any;
    logistic_container: any;
    vehicle_storage: any;
  };
  logistic_mode: /** @noSelf **/
  {
    active_provider: any;
    buffer: any;
    none: any;
    passive_provider: any;
    requester: any;
    storage: any;
  };
  mouse_button_type: /** @noSelf **/
  { left: any; middle: any; none: any; right: any };
  rail_connection_direction: /** @noSelf **/
  { left: any; none: any; right: any; straight: any };
  rail_direction: /** @noSelf **/ { back: any; front: any };
  relative_gui_position: /** @noSelf **/
  { bottom: any; left: any; right: any; top: any };
  relative_gui_type: /** @noSelf **/
  {
    accumulator_gui: any;
    achievement_gui: any;
    additional_entity_info_gui: any;
    admin_gui: any;
    arithmetic_combinator_gui: any;
    armor_gui: any;
    assembling_machine_gui: any;
    assembling_machine_select_recipe_gui: any;
    beacon_gui: any;
    blueprint_book_gui: any;
    blueprint_library_gui: any;
    blueprint_setup_gui: any;
    bonus_gui: any;
    burner_equipment_gui: any;
    car_gui: any;
    constant_combinator_gui: any;
    container_gui: any;
    controller_gui: any;
    decider_combinator_gui: any;
    deconstruction_item_gui: any;
    electric_energy_interface_gui: any;
    electric_network_gui: any;
    entity_variations_gui: any;
    entity_with_energy_source_gui: any;
    equipment_grid_gui: any;
    furnace_gui: any;
    generic_on_off_entity_gui: any;
    heat_interface_gui: any;
    infinity_pipe_gui: any;
    inserter_gui: any;
    item_with_inventory_gui: any;
    lab_gui: any;
    lamp_gui: any;
    linked_container_gui: any;
    loader_gui: any;
    logistic_gui: any;
    market_gui: any;
    mining_drill_gui: any;
    other_player_gui: any;
    permissions_gui: any;
    pipe_gui: any;
    power_switch_gui: any;
    production_gui: any;
    programmable_speaker_gui: any;
    rail_chain_signal_gui: any;
    rail_signal_gui: any;
    reactor_gui: any;
    rename_stop_gui: any;
    resource_entity_gui: any;
    roboport_gui: any;
    rocket_silo_gui: any;
    server_config_gui: any;
    spider_vehicle_gui: any;
    splitter_gui: any;
    standalone_character_gui: any;
    storage_tank_gui: any;
    tile_variations_gui: any;
    train_gui: any;
    train_stop_gui: any;
    trains_gui: any;
    transport_belt_gui: any;
    upgrade_item_gui: any;
    wall_gui: any;
  };
  render_mode: /** @noSelf **/ { chart: any; chart_zoomed_in: any; game: any };
  rich_text_setting: /** @noSelf **/
  { disabled: any; enabled: any; highlight: any };
  riding: /** @noSelf **/
  {
    acceleration: /** @noSelf **/
    { accelerating: any; braking: any; nothing: any; reversing: any };
    direction: /** @noSelf **/ { left: any; right: any; straight: any };
  };
  shooting: /** @noSelf **/
  { not_shooting: any; shooting_enemies: any; shooting_selected: any };
  signal_state: /** @noSelf **/
  { closed: any; open: any; reserved: any; reserved_by_circuit_network: any };
  train_state: /** @noSelf **/
  {
    arrive_signal: any;
    arrive_station: any;
    destination_full: any;
    manual_control: any;
    manual_control_stop: any;
    no_path: any;
    no_schedule: any;
    on_the_path: any;
    path_lost: any;
    wait_signal: any;
    wait_station: any;
  };
  transport_line: /** @noSelf **/
  {
    left_line: any;
    left_split_line: any;
    left_underground_line: any;
    right_line: any;
    right_split_line: any;
    right_underground_line: any;
    secondary_left_line: any;
    secondary_left_split_line: any;
    secondary_right_line: any;
    secondary_right_split_line: any;
  };
  wire_connection_id: /** @noSelf **/
  { electric_pole: any; power_switch_left: any; power_switch_right: any };
  wire_type: /** @noSelf **/ { copper: any; green: any; red: any };
}
/** concepts */
/** @noSelf **/
interface LocalisedString {}
/** @noSelf **/
interface DisplayResolution {
  width: number;
  height: number;
}
/** @noSelf **/
interface PersonalLogisticParameters {
  name: null | string;
  min: null | number;
  max: null | number;
}
type Position = {
  /** @noSelf **/ x: number;
  y: number;
};
/** @noSelf **/
interface ChunkPosition {}
/** @noSelf **/
interface TilePosition {}
/** @noSelf **/
interface ChunkPositionAndArea {
  x: number;
  y: number;
  area: BoundingBox;
}
/** @noSelf **/
interface GuiLocation {}
/** @noSelf **/
interface GuiAnchor {
  gui: typeof defines.relative_gui_type;
  position: typeof defines.relative_gui_position;
  type: null | string;
  name: null | string;
  names: null | string[];
}
/** @noSelf **/
interface OldTileAndPosition {
  old_tile: LuaTilePrototype;
  position: TilePosition;
}
/** @noSelf **/
interface Tags {}
/** @noSelf **/
interface SmokeSource {
  name: string;
  frequency: number;
  offset: number;
  position: null | Vector;
  north_position: null | Vector;
  east_position: null | Vector;
  south_position: null | Vector;
  west_position: null | Vector;
  deviation: null | Position;
  starting_frame_speed: number;
  starting_frame_speed_deviation: number;
  starting_frame: number;
  starting_frame_deviation: number;
  slow_down_factor: number;
  height: number;
  height_deviation: number;
  starting_vertical_speed: number;
  starting_vertical_speed_deviation: number;
  vertical_speed_slowdown: number;
}
/** @noSelf **/
interface Vector {}
/** @noSelf **/
interface BoundingBox {
  left_top: Position;
  right_bottom: Position;
  orientation: number;
}
/** @noSelf **/
interface ScriptArea {
  area: BoundingBox;
  name: string;
  color: Color;
  id: number;
}
/** @noSelf **/
interface ScriptPosition {
  position: Position;
  name: string;
  color: Color;
  id: number;
}
/** @noSelf **/
interface Color {
  r: null | number;
  g: null | number;
  b: null | number;
  a: null | number;
}
/** @noSelf **/
interface ColorModifier {}
/** @noSelf **/
interface PathFindFlags {
  allow_destroy_friendly_entities: null | boolean;
  allow_paths_through_own_entities: null | boolean;
  cache: null | boolean;
  prefer_straight_paths: null | boolean;
  low_priority: null | boolean;
  no_break: null | boolean;
}
/** @noSelf **/
interface GameViewSettings {}
/** @noSelf **/
interface TileProperties {}
/** @noSelf **/
interface MapViewSettings {
  "show-logistic-network": null | boolean;
  "show-electric-network": null | boolean;
  "show-turret-range": null | boolean;
  "show-pollution": null | boolean;
  "show-train-station-names": null | boolean;
  "show-player-names": null | boolean;
  "show-networkless-logistic-members": null | boolean;
  "show-non-standard-map-info": null | boolean;
}
/** @noSelf **/
interface MapSettings {}
/** @noSelf **/
interface DifficultySettings {
  recipe_difficulty: typeof defines.difficulty_settings.recipe_difficulty;
  technology_difficulty: typeof defines.difficulty_settings.technology_difficulty;
  technology_price_multiplier: number;
  research_queue_setting: string;
}
/** @noSelf **/
interface MapExchangeStringData {
  map_settings: any;
  map_gen_settings: MapGenSettings;
}
/** @noSelf **/
interface Fluid {
  name: string;
  amount: number;
  temperature: null | number;
}
/** @noSelf **/
interface Ingredient {
  type: string;
  name: string;
  amount: number;
  minimum_temperature: null | number;
  maximum_temperature: null | number;
  catalyst_amount: null | (number | number);
}
/** @noSelf **/
interface Product {
  type: string;
  name: string;
  amount: null | number;
  temperature: null | number;
  amount_min: null | (number | number);
  amount_max: null | (number | number);
  probability: null | number;
  catalyst_amount: null | (number | number);
}
/** @noSelf **/
interface Loot {
  item: string;
  probability: number;
  count_min: number;
  count_max: number;
}
/** @noSelf **/
interface Modifier {
  type: string;
  _: any;
}
/** @noSelf **/
interface Offer {
  price: Ingredient[];
  offer: Modifier;
}
/** @noSelf **/
interface AutoplaceSpecification {
  probability_expression: NoiseExpression;
  richness_expression: NoiseExpression;
  coverage: number;
  sharpness: number;
  max_probability: number;
  placement_density: number;
  richness_base: number;
  richness_multiplier: number;
  richness_multiplier_distance_bonus: number;
  starting_area_size: number;
  order: string;
  default_enabled: boolean;
  table_12: {
    influence: number;
    max_influence: number;
    min_influence: number;
    richness_influence: number;
    noisePersistence: number;
    noise_layer: null | string;
    noise_octaves_difference: number;
    d_optimal: number;
    d_range: number;
    d_top_property_limit: number;
    d_max_range: number;
  };
  control: null | string;
  table_14: { first: null | string; second: null | string };
  force: string;
  random_probability_penalty: number;
}
/** @noSelf **/
interface NoiseExpression {
  type: string;
}
/** @noSelf **/
interface Resistances {
  decrease: number;
  percent: number;
}
/** @noSelf **/
interface MapGenSize {}
/** @noSelf **/
interface AutoplaceSettings {
  treat_missing_as_default: boolean;
  table_1: { frequency: MapGenSize; size: MapGenSize; richness: MapGenSize };
}
/** @noSelf **/
interface CliffPlacementSettings {
  name: string;
  cliff_elevation_0: number;
  cliff_elevation_interval: number;
  richness: MapGenSize;
}
/** @noSelf **/
interface MapGenSettings {
  terrain_segmentation: MapGenSize;
  water: MapGenSize;
  table_2: { frequency: MapGenSize; size: MapGenSize; richness: MapGenSize };
  default_enable_all_autoplace_controls: boolean;
  autoplace_settings: Map<string, AutoplaceSettings>;
  cliff_settings: CliffPlacementSettings;
  seed: number;
  width: number;
  height: number;
  starting_area: MapGenSize;
  starting_points: Position[];
  peaceful_mode: boolean;
  property_expression_names: Map<string, string>;
}
/** @noSelf **/
interface SignalID {
  type: string;
  name: null | string;
}
/** @noSelf **/
interface Signal {
  signal: SignalID;
  count: number;
}
/** @noSelf **/
interface UpgradeFilter {
  type: string;
  name: null | string;
}
/** @noSelf **/
interface InfinityInventoryFilter {
  name: string;
  count: null | number;
  mode: null | string;
  index: number;
}
/** @noSelf **/
interface InfinityPipeFilter {
  name: string;
  percentage: null | number;
  temperature: null | number;
  mode: null | string;
}
/** @noSelf **/
interface HeatSetting {
  temperature: null | number;
  mode: null | string;
}
/** @noSelf **/
interface FluidBoxConnection {
  max_underground_distance: null | number;
  type: string;
  positions: Vector[];
}
/** @noSelf **/
interface ArithmeticCombinatorParameters {
  first_signal: null | SignalID;
  second_signal: null | SignalID;
  first_constant: null | number;
  second_constant: null | number;
  operation: null | string;
  output_signal: null | SignalID;
}
/** @noSelf **/
interface ConstantCombinatorParameters {
  signal: SignalID;
  count: number;
  index: number;
}
/** @noSelf **/
interface ComparatorString {}
/** @noSelf **/
interface DeciderCombinatorParameters {
  first_signal: null | SignalID;
  second_signal: null | SignalID;
  constant: null | number;
  comparator: null | ComparatorString;
  output_signal: null | SignalID;
  copy_count_from_input: null | boolean;
}
/** @noSelf **/
interface CircuitCondition {
  comparator: null | ComparatorString;
  first_signal: null | SignalID;
  second_signal: null | SignalID;
  constant: null | number;
}
/** @noSelf **/
interface CircuitConditionSpecification {
  condition: CircuitCondition;
  fulfilled: null | boolean;
}
/** @noSelf **/
interface Filter {
  index: number;
  name: string;
}
/** @noSelf **/
interface PlaceAsTileResult {
  result: LuaTilePrototype;
  condition_size: number;
  condition: any;
}
/** @noSelf **/
interface RaiseEventParameters {}
/** @noSelf **/
interface SimpleItemStack {
  name: string;
  count: null | number;
  health: null | number;
  durability: null | number;
  ammo: null | number;
  tags: null | string[];
}
/** @noSelf **/
interface Command {
  type: typeof defines.command;
  _: any;
}
/** @noSelf **/
interface PathfindFlags {
  allow_destroy_friendly_entities: null | boolean;
  allow_paths_through_own_entities: null | boolean;
  cache: null | boolean;
  prefer_straight_paths: null | boolean;
  low_priority: null | boolean;
  no_break: null | boolean;
}
type FluidSpecification = string | LuaFluidPrototype | Fluid;
type ForceSpecification = string | LuaForce;
type TechnologySpecification = string | LuaTechnology | LuaTechnologyPrototype;
type SurfaceSpecification = number | string | LuaSurface;
type PlayerSpecification = number | string | LuaPlayer;
type ItemStackSpecification = SimpleItemStack | LuaItemStack;
type EntityPrototypeSpecification = LuaEntity | LuaEntityPrototype | string;
type ItemPrototypeSpecification = LuaItemStack | LuaItemPrototype | string;
/** @noSelf **/
interface WaitCondition {
  type: string;
  compare_type: string;
  ticks: null | number;
  condition: null | CircuitCondition;
}
/** @noSelf **/
interface TrainScheduleRecord {
  station: null | string;
  rail: null | LuaEntity;
  wait_conditions: WaitCondition[];
  temporary: null | boolean;
}
/** @noSelf **/
interface TrainSchedule {
  current: number;
  records: TrainScheduleRecord[];
}
/** @noSelf **/
interface GuiArrowSpecification {
  type: string;
  _: any;
}
/** @noSelf **/
interface AmmoType {
  action: null | TriggerItem[];
  target_type: string;
  clamp_position: null | boolean;
  category: string;
  energy_consumption: null | number;
}
/** @noSelf **/
interface BeamTarget {
  entity: null | LuaEntity;
  position: null | Position;
}
/** @noSelf **/
interface RidingState {
  acceleration: typeof defines.riding.acceleration;
  direction: typeof defines.riding.direction;
}
/** @noSelf **/
interface SpritePath {}
/** @noSelf **/
interface SoundPath {}
/** @noSelf **/
interface ModConfigurationChangedData {
  old_version: string;
  new_version: string;
}
/** @noSelf **/
interface ConfigurationChangedData {
  old_version: null | string;
  new_version: null | string;
  mod_changes: Map<string, ModConfigurationChangedData>;
  mod_startup_settings_changed: boolean;
  migration_applied: boolean;
}
/** @noSelf **/
interface EffectValue {
  bonus: number;
}
/** @noSelf **/
interface Effects {}
/** @noSelf **/
interface EntityPrototypeFlags {}
/** @noSelf **/
interface ItemPrototypeFlags {}
/** @noSelf **/
interface CollisionMaskLayer {}
/** @noSelf **/
interface CollisionMask {}
/** @noSelf **/
interface CollisionMaskWithFlags {}
/** @noSelf **/
interface TriggerTargetMask {}
/** @noSelf **/
interface TriggerEffectItem {
  type: string;
  repeat_count: number;
  affects_target: boolean;
  show_in_tooltip: boolean;
}
/** @noSelf **/
interface TriggerDelivery {
  type: string;
  source_effects: TriggerEffectItem[];
  target_effects: TriggerEffectItem[];
}
/** @noSelf **/
interface TriggerItem {
  type: string;
  action_delivery: null | TriggerDelivery[];
  source_effects: TriggerEffectItem[];
  entity_flags: null | EntityPrototypeFlags;
  ignore_collision_condition: boolean;
  collision_mask: CollisionMask;
  trigger_target_mask: TriggerTargetMask;
  force: ForceCondition;
  repeat_count: number;
}
/** @noSelf **/
interface Trigger {}
/** @noSelf **/
interface AttackParameters {
  range: number;
  min_range: number;
  turn_range: number;
  fire_penalty: number;
  min_attack_distance: number;
  damage_modifier: number;
  ammo_consumption_modifier: number;
  cooldown: number;
  warmup: number;
  movement_slow_down_factor: number;
  movement_slow_down_cooldown: number;
  ammo_type: null | AmmoType;
  ammo_categories: null | string[];
}
/** @noSelf **/
interface CapsuleAction {
  type: string;
  attack_parameters: null | AttackParameters;
  equipment: null | string;
}
/** @noSelf **/
interface SelectionModeFlags {}
/** @noSelf **/
interface LogisticFilter {
  index: number;
  name: string;
  count: number;
}
/** @noSelf **/
interface ModSetting {
  value: number | number | boolean | string;
}
/** @noSelf **/
interface Any {}
/** @noSelf **/
interface ProgrammableSpeakerParameters {
  playback_volume: number;
  playback_globally: boolean;
  allow_polyphony: boolean;
}
/** @noSelf **/
interface ProgrammableSpeakerAlertParameters {
  show_alert: boolean;
  show_on_map: boolean;
  icon_signal_id: SignalID;
  alert_message: string;
}
/** @noSelf **/
interface ProgrammableSpeakerCircuitParameters {
  signal_value_is_pitch: boolean;
  instrument_id: number;
  note_id: number;
}
/** @noSelf **/
interface ProgrammableSpeakerInstrument {
  name: string;
  notes: string[];
}
/** @noSelf **/
interface Alignment {}
/** @noSelf **/
interface NthTickEvent {
  tick: number;
  nth_tick: number;
}
/** @noSelf **/
interface ScriptRenderTarget {
  entity: null | LuaEntity;
  entity_offset: null | Vector;
  position: null | Position;
}
/** @noSelf **/
interface MouseButtonFlags {}
/** @noSelf **/
interface CursorBoxRenderType {}
/** @noSelf **/
interface ForceCondition {}
/** @noSelf **/
interface RenderLayer {}
/** @noSelf **/
interface CliffOrientation {}
/** @noSelf **/
interface ItemStackLocation {
  inventory: typeof defines.inventory;
  slot: number;
}
/** @noSelf **/
interface VehicleAutomaticTargetingParameters {
  auto_target_without_gunner: boolean;
  auto_target_with_gunner: boolean;
}
/** @noSelf **/
interface SoundType {}
/** @noSelf **/
interface ItemPrototypeFilters {
  filter: string;
  mode: null | string;
  invert: null | boolean;
}
/** @noSelf **/
interface ModSettingPrototypeFilters {
  filter: string;
  mode: null | string;
  invert: null | boolean;
}
/** @noSelf **/
interface TechnologyPrototypeFilters {
  filter: string;
  mode: null | string;
  invert: null | boolean;
}
/** @noSelf **/
interface DecorativePrototypeFilters {
  filter: string;
  mode: null | string;
  invert: null | boolean;
}
/** @noSelf **/
interface AchievementPrototypeFilters {
  filter: string;
  mode: null | string;
  invert: null | boolean;
}
/** @noSelf **/
interface FluidPrototypeFilters {
  filter: string;
  mode: null | string;
  invert: null | boolean;
}
/** @noSelf **/
interface EquipmentPrototypeFilters {
  filter: string;
  mode: null | string;
  invert: null | boolean;
}
/** @noSelf **/
interface TilePrototypeFilters {
  filter: string;
  mode: null | string;
  invert: null | boolean;
}
/** @noSelf **/
interface RecipePrototypeFilters {
  filter: string;
  mode: null | string;
  invert: null | boolean;
}
/** @noSelf **/
interface EntityPrototypeFilters {
  filter: string;
  mode: null | string;
  invert: null | boolean;
}
/** classes */
/** @noSelf **/
interface LuaAISettings {
  allow_destroy_when_commands_fail: boolean;
  allow_try_return_to_spawner: boolean;
  do_separation: boolean;
  path_resolution_modifier: number;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaControlBehavior {
  get_circuit_network: (
    wire: typeof defines.wire_type,
    circuit_connector?: null | typeof defines.circuit_connector_id
  ) => LuaCircuitNetwork | null;
  readonly type: typeof defines.control_behavior.type;
  readonly entity: LuaEntity;
}
/** @noSelf **/
interface LuaAccumulatorControlBehavior extends LuaControlBehavior {
  output_signal: SignalID;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaCombinatorControlBehavior extends LuaControlBehavior {
  get_signal_last_tick: (signal: SignalID) => number | null;
  readonly signals_last_tick: Signal[];
}
/** @noSelf **/
interface LuaConstantCombinatorControlBehavior extends LuaControlBehavior {
  set_signal: (index: number, signal: Signal) => null;
  get_signal: (index: number) => Signal;
  parameters: ConstantCombinatorParameters;
  enabled: boolean;
  readonly signals_count: number;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaContainerControlBehavior extends LuaControlBehavior {
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaGenericOnOffControlBehavior extends LuaControlBehavior {
  readonly disabled: boolean;
  circuit_condition: CircuitConditionSpecification;
  logistic_condition: CircuitConditionSpecification;
  connect_to_logistic_network: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaLogisticContainerControlBehavior extends LuaControlBehavior {
  circuit_mode_of_operation: typeof defines.control_behavior.logistic_container.circuit_mode_of_operation;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaProgrammableSpeakerControlBehavior extends LuaControlBehavior {
  circuit_parameters: ProgrammableSpeakerCircuitParameters;
  circuit_condition: CircuitConditionSpecification;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaRailChainSignalControlBehavior extends LuaControlBehavior {
  red_signal: SignalID;
  orange_signal: SignalID;
  green_signal: SignalID;
  blue_signal: SignalID;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaRailSignalControlBehavior extends LuaControlBehavior {
  red_signal: SignalID;
  orange_signal: SignalID;
  green_signal: SignalID;
  close_signal: boolean;
  read_signal: boolean;
  circuit_condition: CircuitConditionSpecification;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaRoboportControlBehavior extends LuaControlBehavior {
  read_logistics: boolean;
  read_robot_stats: boolean;
  available_logistic_output_signal: SignalID;
  total_logistic_output_signal: SignalID;
  available_construction_output_signal: SignalID;
  total_construction_output_signal: SignalID;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaStorageTankControlBehavior extends LuaControlBehavior {
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaWallControlBehavior extends LuaControlBehavior {
  circuit_condition: CircuitConditionSpecification;
  open_gate: boolean;
  read_sensor: boolean;
  output_signal: SignalID;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaArithmeticCombinatorControlBehavior
  extends LuaCombinatorControlBehavior {
  parameters: ArithmeticCombinatorParameters;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaDeciderCombinatorControlBehavior
  extends LuaCombinatorControlBehavior {
  parameters: DeciderCombinatorParameters;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaInserterControlBehavior extends LuaGenericOnOffControlBehavior {
  circuit_read_hand_contents: boolean;
  circuit_mode_of_operation: typeof defines.control_behavior.inserter.circuit_mode_of_operation;
  circuit_hand_read_mode: typeof defines.control_behavior.inserter.hand_read_mode;
  circuit_set_stack_size: boolean;
  circuit_stack_control_signal: SignalID;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaLampControlBehavior extends LuaGenericOnOffControlBehavior {
  use_colors: boolean;
  readonly color: Color;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaMiningDrillControlBehavior extends LuaGenericOnOffControlBehavior {
  circuit_enable_disable: boolean;
  circuit_read_resources: boolean;
  resource_read_mode: typeof defines.control_behavior.mining_drill.resource_read_mode;
  readonly resource_read_targets: LuaEntity[];
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaTrainStopControlBehavior extends LuaGenericOnOffControlBehavior {
  send_to_train: boolean;
  read_from_train: boolean;
  read_stopped_train: boolean;
  set_trains_limit: boolean;
  read_trains_count: boolean;
  enable_disable: boolean;
  stopped_train_signal: SignalID;
  trains_count_signal: SignalID;
  trains_limit_signal: SignalID;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaTransportBeltControlBehavior
  extends LuaGenericOnOffControlBehavior {
  enable_disable: boolean;
  read_contents: boolean;
  read_contents_mode: typeof defines.control_behavior.transport_belt.content_read_mode;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaAchievementPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly allowed_without_fight: boolean;
  readonly hidden: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaAmmoCategoryPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly bonus_gui_order: string;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaAutoplaceControlPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly richness: boolean;
  readonly control_order: string;
  readonly category: string;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaBootstrap {
  on_init: (f: (...args: any[]) => any) => null;
  on_load: (f: (...args: any[]) => any) => null;
  on_configuration_changed: (f: (...args: any[]) => any) => null;
  on_event: (
    event: typeof defines.events | typeof defines.events[] | string,
    f: (...args: any[]) => any,
    filters?: null | Filters
  ) => null;
  on_nth_tick: (tick: number | number[], f: (...args: any[]) => any) => null;
  register_on_entity_destroyed: (entity: LuaEntity) => number;
  generate_event_name: () => null;
  get_event_handler: (event: number) => null;
  get_event_order: () => null;
  set_event_filter: (event: number, filters?: null | Filters) => null;
  get_event_filter: (event: number) => any | null;
  raise_event: (event: number, arg_1: any) => null;
  raise_console_chat: (table: RaiseEventParameters) => null;
  raise_player_crafted_item: (table: RaiseEventParameters) => null;
  raise_player_fast_transferred: (table: RaiseEventParameters) => null;
  raise_biter_base_built: (table: RaiseEventParameters) => null;
  raise_market_item_purchased: (table: RaiseEventParameters) => null;
  raise_script_built: (table: RaiseEventParameters) => null;
  raise_script_destroy: (table: RaiseEventParameters) => null;
  raise_script_revive: (table: RaiseEventParameters) => null;
  raise_script_set_tiles: (table: RaiseEventParameters) => null;
  readonly mod_name: string;
  readonly level: any;
  readonly active_mods: Map<string, string>;
  readonly object_name: string;
}
/** @noSelf **/
interface LuaBurner {
  readonly owner: LuaEntity | LuaEquipment;
  readonly inventory: LuaInventory;
  readonly burnt_result_inventory: LuaInventory;
  heat: number;
  readonly heat_capacity: number;
  remaining_burning_fuel: number;
  currently_burning: LuaItemPrototype;
  readonly fuel_categories: Map<string, boolean>;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaBurnerPrototype {
  readonly emissions: number;
  readonly render_no_network_icon: boolean;
  readonly render_no_power_icon: boolean;
  readonly effectivity: number;
  readonly fuel_inventory_size: number;
  readonly burnt_inventory_size: number;
  readonly smoke: SmokeSource[];
  readonly light_flicker: any;
  readonly fuel_categories: Map<string, boolean>;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaChunkIterator {
  "operator ()": () => null;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaCircuitNetwork {
  get_signal: (signal: SignalID) => number;
  readonly entity: LuaEntity;
  readonly wire_type: typeof defines.wire_type;
  readonly circuit_connector_id: typeof defines.circuit_connector_id;
  readonly signals: Signal[];
  readonly network_id: number;
  readonly connected_circuit_count: number;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaCommandProcessor {
  add_command: (
    name: string,
    help: LocalisedString,
    fn: (...args: any[]) => any
  ) => null;
  remove_command: () => boolean;
  readonly commands: Map<string, LocalisedString>;
  readonly game_commands: Map<string, LocalisedString>;
  readonly object_name: string;
}
/** @noSelf **/
interface LuaControl {
  get_inventory: (inventory: typeof defines.inventory) => LuaInventory | null;
  get_main_inventory: () => null;
  can_insert: (items: ItemStackSpecification) => boolean;
  insert: (items: ItemStackSpecification) => number;
  set_gui_arrow: (table_0: { type: string }) => null;
  clear_gui_arrow: () => null;
  get_item_count: (item?: null | string) => number;
  has_items_inside: () => null;
  can_reach_entity: (entity: LuaEntity) => boolean;
  clear_items_inside: () => null;
  remove_item: (items: ItemStackSpecification) => number;
  teleport: (
    position: Position,
    surface?: null | SurfaceSpecification
  ) => boolean;
  update_selected_entity: (position: Position) => null;
  clear_selected_entity: () => null;
  disable_flashlight: () => null;
  enable_flashlight: () => null;
  is_flashlight_enabled: () => null;
  get_craftable_count: (recipe: string | LuaRecipe) => number;
  begin_crafting: (table_0: {
    count: number;
    recipe: string | LuaRecipe;
    silent: null | boolean;
  }) => number;
  cancel_crafting: (table_0: { index: number; count: number }) => null;
  mine_entity: (entity: LuaEntity, force?: null | boolean) => boolean;
  mine_tile: (tile: LuaTile) => boolean;
  is_player: () => null;
  open_technology_gui: (technology?: null | TechnologySpecification) => null;
  set_personal_logistic_slot: (
    slot_index: number,
    value: PersonalLogisticParameters
  ) => boolean;
  set_vehicle_logistic_slot: (
    slot_index: number,
    value: PersonalLogisticParameters
  ) => boolean;
  get_personal_logistic_slot: (
    slot_index: number
  ) => PersonalLogisticParameters;
  get_vehicle_logistic_slot: (slot_index: number) => PersonalLogisticParameters;
  clear_personal_logistic_slot: (slot_index: number) => null;
  clear_vehicle_logistic_slot: (slot_index: number) => null;
  is_cursor_blueprint: () => null;
  get_blueprint_entities: () => null;
  readonly surface: LuaSurface;
  readonly position: Position;
  readonly vehicle: LuaEntity;
  force: ForceSpecification;
  selected: LuaEntity;
  opened:
    | LuaEntity
    | LuaItemStack
    | LuaEquipment
    | LuaEquipmentGrid
    | LuaPlayer
    | LuaGuiElement
    | typeof defines.gui_type;
  readonly crafting_queue_size: number;
  readonly crafting_queue_progress: number;
  walking_state: any;
  riding_state: RidingState;
  mining_state: any;
  shooting_state: any;
  picking_state: boolean;
  repair_state: any;
  readonly cursor_stack: LuaItemStack;
  cursor_ghost: ItemPrototypeSpecification;
  driving: boolean;
  readonly crafting_queue: any[];
  readonly following_robots: LuaEntity[];
  cheat_mode: boolean;
  character_crafting_speed_modifier: number;
  character_mining_speed_modifier: number;
  character_additional_mining_categories: string[];
  character_running_speed_modifier: number;
  character_build_distance_bonus: number;
  character_item_drop_distance_bonus: number;
  character_reach_distance_bonus: number;
  character_resource_reach_distance_bonus: number;
  character_item_pickup_distance_bonus: number;
  character_loot_pickup_distance_bonus: number;
  character_inventory_slots_bonus: number;
  character_trash_slot_count_bonus: number;
  character_maximum_following_robot_count_bonus: number;
  character_health_bonus: number;
  character_personal_logistic_requests_enabled: boolean;
  vehicle_logistic_requests_enabled: boolean;
  readonly opened_gui_type: typeof defines.gui_type;
  readonly build_distance: number;
  readonly drop_item_distance: number;
  readonly reach_distance: number;
  readonly item_pickup_distance: number;
  readonly loot_pickup_distance: number;
  readonly resource_reach_distance: number;
  readonly in_combat: boolean;
  readonly character_running_speed: number;
  readonly character_mining_progress: number;
}
/** @noSelf **/
interface LuaCustomChartTag {
  destroy: () => null;
  icon: SignalID;
  last_user: LuaPlayer;
  readonly position: Position;
  text: string;
  readonly tag_number: number;
  readonly force: LuaForce;
  readonly surface: LuaSurface;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaCustomInputPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly key_sequence: string;
  readonly alternative_key_sequence: string;
  readonly linked_game_control: string;
  readonly consuming: string;
  readonly enabled: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaCustomTable {
  "operator []": any;
  readonly "operator #": number;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaDamagePrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly hidden: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaDecorativePrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly collision_box: BoundingBox;
  readonly collision_mask: CollisionMask;
  readonly collision_mask_with_flags: CollisionMaskWithFlags;
  readonly autoplace_specification: AutoplaceSpecification;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaElectricEnergySourcePrototype {
  readonly buffer_capacity: number;
  readonly usage_priority: string;
  readonly input_flow_limit: number;
  readonly output_flow_limit: number;
  readonly drain: number;
  readonly emissions: number;
  readonly render_no_network_icon: boolean;
  readonly render_no_power_icon: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaEntity extends LuaControl {
  get_output_inventory: () => null;
  get_module_inventory: () => null;
  get_fuel_inventory: () => null;
  get_burnt_result_inventory: () => null;
  damage: (
    damage: number,
    force: ForceSpecification,
    type?: null | string,
    dealer?: null | LuaEntity
  ) => number;
  can_be_destroyed: () => null;
  destroy: (opts?: {
    do_cliff_correction: null | boolean;
    raise_destroy: null | boolean;
  }) => boolean;
  set_command: (command: Command) => null;
  has_command: () => null;
  die: (force: ForceSpecification, cause?: null | LuaEntity) => boolean;
  has_flag: (flag: string) => boolean;
  ghost_has_flag: (flag: string) => boolean;
  add_market_item: (offer: Offer) => null;
  remove_market_item: (offer: number) => boolean;
  get_market_items: () => null;
  clear_market_items: () => null;
  connect_neighbour: (target: LuaEntity | any) => boolean;
  disconnect_neighbour: (
    target?: null | (typeof defines.wire_type | LuaEntity | any)
  ) => null;
  order_deconstruction: (
    force: ForceSpecification,
    player?: null | PlayerSpecification
  ) => boolean;
  cancel_deconstruction: (
    force: ForceSpecification,
    player?: null | PlayerSpecification
  ) => null;
  to_be_deconstructed: () => null;
  order_upgrade: (table_0: {
    force: ForceSpecification;
    target: EntityPrototypeSpecification;
    player: null | PlayerSpecification;
    direction: null | typeof defines.direction;
  }) => boolean;
  cancel_upgrade: (
    force: ForceSpecification,
    player?: null | PlayerSpecification
  ) => boolean;
  to_be_upgraded: () => null;
  get_request_slot: (slot: number) => SimpleItemStack;
  set_request_slot: (request: ItemStackSpecification, slot: number) => boolean;
  clear_request_slot: (slot: number) => null;
  is_crafting: () => null;
  is_opened: () => null;
  is_opening: () => null;
  is_closed: () => null;
  is_closing: () => null;
  request_to_open: (
    force: ForceSpecification,
    extra_time?: null | number
  ) => null;
  request_to_close: (force: ForceSpecification) => null;
  get_transport_line: (index: number) => LuaTransportLine;
  get_max_transport_line_index: () => null;
  launch_rocket: () => null;
  revive: (opts?: {
    return_item_request_proxy: null | boolean;
    raise_revive: null | boolean;
  }) => Map<string, number> | null;
  silent_revive: (opts?: {
    return_item_request_proxy: null | boolean;
    raise_revive: null | boolean;
  }) => Map<string, number> | null;
  get_connected_rail: (table_0: {
    rail_direction: typeof defines.rail_direction;
    rail_connection_direction: typeof defines.rail_connection_direction;
  }) => LuaEntity;
  get_connected_rails: () => null;
  get_rail_segment_entity: (
    direction: typeof defines.rail_direction,
    in_else_out: boolean
  ) => LuaEntity;
  get_rail_segment_end: (direction: typeof defines.rail_direction) => LuaEntity;
  get_rail_segment_length: () => null;
  get_rail_segment_overlaps: () => null;
  get_filter: (arg_0: number) => string;
  set_filter: (arg_0: number, arg_1: string) => null;
  get_infinity_container_filter: (index: number) => InfinityInventoryFilter;
  set_infinity_container_filter: (
    index: number,
    filter: InfinityInventoryFilter
  ) => null;
  get_infinity_pipe_filter: () => null;
  set_infinity_pipe_filter: (filter: InfinityPipeFilter) => null;
  get_heat_setting: () => null;
  set_heat_setting: (filter: HeatSetting) => null;
  get_control_behavior: () => null;
  get_or_create_control_behavior: () => null;
  get_circuit_network: (
    wire: typeof defines.wire_type,
    circuit_connector?: null | typeof defines.circuit_connector_id
  ) => LuaCircuitNetwork | null;
  get_merged_signal: (
    signal: SignalID,
    circuit_connector?: null | typeof defines.circuit_connector_id
  ) => number;
  get_merged_signals: (
    circuit_connector?: null | typeof defines.circuit_connector_id
  ) => Signal[] | null;
  supports_backer_name: () => null;
  copy_settings: (
    entity: LuaEntity,
    by_player?: null | PlayerSpecification
  ) => Map<string, number>;
  get_logistic_point: (
    arg_0?: null | typeof defines.logistic_member_index
  ) => LuaLogisticPoint | LuaLogisticPoint[];
  play_note: (instrument: number, note: number) => boolean;
  connect_rolling_stock: (direction: typeof defines.rail_direction) => boolean;
  disconnect_rolling_stock: (
    direction: typeof defines.rail_direction
  ) => boolean;
  update_connections: () => null;
  get_recipe: () => null;
  set_recipe: (recipe: string | LuaRecipe) => Map<string, number>;
  rotate: (options?: {
    reverse: null | boolean;
    by_player: null | PlayerSpecification;
    spill_items: null | boolean;
    enable_looted: null | boolean;
    force: null | (LuaForce | string);
  }) => boolean;
  get_driver: () => null;
  set_driver: (driver: LuaEntity | PlayerSpecification) => null;
  get_passenger: () => null;
  set_passenger: (passenger: LuaEntity | PlayerSpecification) => null;
  is_connected_to_electric_network: () => null;
  get_train_stop_trains: () => null;
  get_stopped_train: () => null;
  clone: (table_0: {
    position: Position;
    surface: null | LuaSurface;
    force: null | ForceSpecification;
    create_build_effect_smoke: null | boolean;
  }) => LuaEntity | null;
  get_fluid_count: (fluid?: null | string) => number;
  get_fluid_contents: () => null;
  remove_fluid: (table_0: {
    name: string;
    amount: number;
    minimum_temperature: null | number;
    maximum_temperature: null | number;
    temperature: null | number;
  }) => number;
  insert_fluid: (fluid: Fluid) => number;
  clear_fluid_inside: () => null;
  get_beam_source: () => null;
  set_beam_source: (source: LuaEntity | Position) => null;
  get_beam_target: () => null;
  set_beam_target: (target: LuaEntity | Position) => null;
  get_radius: () => null;
  get_health_ratio: () => null;
  create_build_effect_smoke: () => null;
  release_from_spawner: () => null;
  toggle_equipment_movement_bonus: () => null;
  can_shoot: (target: LuaEntity, position: Position) => boolean;
  start_fading_out: () => null;
  get_upgrade_target: () => null;
  get_upgrade_direction: () => null;
  get_damage_to_be_taken: () => null;
  deplete: () => null;
  mine: (options?: {
    inventory: null | LuaInventory;
    force: null | boolean;
    raise_destroyed: null | boolean;
    ignore_minable: null | boolean;
  }) => boolean;
  spawn_decorations: () => null;
  can_wires_reach: (entity: LuaEntity) => boolean;
  get_connected_rolling_stock: (
    direction: typeof defines.rail_direction
  ) => LuaEntity;
  is_registered_for_construction: () => null;
  is_registered_for_deconstruction: (force: ForceSpecification) => boolean;
  is_registered_for_upgrade: () => null;
  is_registered_for_repair: () => null;
  add_autopilot_destination: () => null;
  connect_linked_belts: (neighbour: LuaEntity) => null;
  disconnect_linked_belts: () => null;
  readonly name: string;
  readonly ghost_name: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly ghost_localised_name: LocalisedString;
  readonly ghost_localised_description: LocalisedString;
  readonly type: string;
  readonly ghost_type: string;
  active: boolean;
  destructible: boolean;
  minable: boolean;
  rotatable: boolean;
  operable: boolean;
  health: number;
  direction: typeof defines.direction;
  readonly supports_direction: boolean;
  orientation: number;
  readonly cliff_orientation: string;
  relative_turret_orientation: number;
  torso_orientation: number;
  amount: number;
  initial_amount: number;
  effectivity_modifier: number;
  consumption_modifier: number;
  friction_modifier: number;
  driver_is_gunner: boolean;
  vehicle_automatic_targeting_parameters: VehicleAutomaticTargetingParameters;
  speed: number;
  readonly effective_speed: number;
  readonly stack: LuaItemStack;
  readonly prototype: LuaEntityPrototype;
  readonly ghost_prototype: LuaEntityPrototype | LuaTilePrototype;
  drop_position: Position;
  pickup_position: Position;
  drop_target: LuaEntity;
  pickup_target: LuaEntity;
  selected_gun_index: number;
  energy: number;
  temperature: number;
  readonly previous_recipe: LuaRecipe;
  readonly held_stack: LuaItemStack;
  readonly held_stack_position: Position;
  readonly train: LuaTrain;
  readonly neighbours: Map<string, LuaEntity[] | LuaEntity[][] | LuaEntity>;
  readonly belt_neighbours: Map<string, LuaEntity[]>;
  fluidbox: LuaFluidBox;
  backer_name: string;
  entity_label: string;
  time_to_live: number;
  color: Color;
  text: LocalisedString;
  readonly signal_state: typeof defines.signal_state;
  readonly chain_signal_state: typeof defines.chain_signal_state;
  to_be_looted: boolean;
  readonly crafting_speed: number;
  crafting_progress: number;
  bonus_progress: number;
  readonly productivity_bonus: number;
  readonly pollution_bonus: number;
  readonly speed_bonus: number;
  readonly consumption_bonus: number;
  readonly belt_to_ground_type: string;
  loader_type: string;
  rocket_parts: number;
  logistic_network: LuaLogisticNetwork;
  readonly logistic_cell: LuaLogisticCell;
  item_requests: Map<string, number>;
  readonly player: LuaPlayer;
  readonly unit_group: LuaUnitGroup;
  damage_dealt: number;
  kills: number;
  last_user: LuaPlayer;
  electric_buffer_size: number;
  readonly electric_input_flow_limit: number;
  readonly electric_output_flow_limit: number;
  readonly electric_drain: number;
  readonly electric_emissions: number;
  readonly unit_number: number;
  readonly ghost_unit_number: number;
  mining_progress: number;
  bonus_mining_progress: number;
  power_production: number;
  power_usage: number;
  readonly bounding_box: BoundingBox;
  readonly secondary_bounding_box: BoundingBox;
  readonly selection_box: BoundingBox;
  readonly secondary_selection_box: BoundingBox;
  readonly mining_target: LuaEntity;
  readonly circuit_connected_entities: any;
  readonly circuit_connection_definitions: any[];
  readonly request_slot_count: number;
  readonly filter_slot_count: number;
  readonly loader_container: LuaEntity;
  readonly grid: LuaEquipmentGrid;
  graphics_variation: number;
  tree_color_index: number;
  readonly tree_color_index_max: number;
  tree_stage_index: number;
  readonly tree_stage_index_max: number;
  tree_gray_stage_index: number;
  readonly tree_gray_stage_index_max: number;
  readonly burner: LuaBurner;
  shooting_target: LuaEntity;
  readonly proxy_target: LuaEntity;
  readonly stickers: LuaEntity[];
  readonly sticked_to: LuaEntity;
  parameters: ProgrammableSpeakerParameters;
  alert_parameters: ProgrammableSpeakerAlertParameters;
  readonly electric_network_statistics: LuaFlowStatistics;
  inserter_stack_size_override: number;
  products_finished: number;
  readonly spawner: LuaEntity;
  readonly units: LuaEntity[];
  power_switch_state: boolean;
  readonly effects: Effects;
  infinity_container_filters: InfinityInventoryFilter[];
  remove_unfiltered_items: boolean;
  character_corpse_player_index: number;
  character_corpse_tick_of_death: number;
  character_corpse_death_cause: LocalisedString;
  associated_player: LuaPlayer;
  tick_of_last_attack: number;
  tick_of_last_damage: number;
  splitter_filter: LuaItemPrototype;
  inserter_filter_mode: string;
  splitter_input_priority: string;
  splitter_output_priority: string;
  readonly armed: boolean;
  recipe_locked: boolean;
  readonly connected_rail: LuaEntity;
  readonly trains_in_block: number;
  timeout: number;
  readonly neighbour_bonus: number;
  readonly ai_settings: LuaAISettings;
  highlight_box_type: string;
  highlight_box_blink_interval: number;
  readonly status: typeof defines.entity_status;
  enable_logistics_while_moving: boolean;
  render_player: LuaPlayer;
  render_to_forces: ForceSpecification[];
  readonly pump_rail_target: LuaEntity;
  readonly moving: boolean;
  readonly electric_network_id: number;
  allow_dispatching_robots: boolean;
  auto_launch: boolean;
  readonly energy_generated_last_tick: number;
  storage_filter: LuaItemPrototype;
  request_from_buffers: boolean;
  corpse_expires: boolean;
  corpse_immune_to_entity_placement: boolean;
  tags: Tags;
  readonly command: Command;
  readonly distraction_command: Command;
  time_to_next_effect: number;
  autopilot_destination: Position;
  readonly autopilot_destinations: Position[];
  readonly trains_count: number;
  trains_limit: number;
  readonly is_entity_with_force: boolean;
  readonly is_entity_with_owner: boolean;
  readonly is_entity_with_health: boolean;
  combat_robot_owner: LuaEntity;
  link_id: number;
  follow_target: LuaEntity;
  follow_offset: Position;
  linked_belt_type: string;
  readonly linked_belt_neighbour: LuaEntity;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaEntityPrototype {
  has_flag: (flag: string) => boolean;
  get_inventory_size: (index: typeof defines.inventory) => number;
  readonly type: string;
  readonly name: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly max_health: number;
  readonly infinite_resource: boolean;
  readonly minimum_resource_amount: number;
  readonly normal_resource_amount: number;
  readonly infinite_depletion_resource_amount: number;
  readonly resource_category: string;
  readonly mineable_properties: any;
  readonly items_to_place_this: SimpleItemStack[];
  readonly collision_box: BoundingBox;
  readonly secondary_collision_box: BoundingBox;
  readonly map_generator_bounding_box: BoundingBox;
  readonly selection_box: BoundingBox;
  readonly drawing_box: BoundingBox;
  readonly sticker_box: BoundingBox;
  readonly collision_mask: CollisionMask;
  readonly collision_mask_with_flags: CollisionMaskWithFlags;
  readonly default_collision_mask_with_flags: CollisionMaskWithFlags;
  readonly order: string;
  readonly group: LuaGroup;
  readonly subgroup: LuaGroup;
  readonly healing_per_tick: number;
  readonly emissions_per_second: number;
  readonly corpses: Map<string, LuaEntityPrototype>;
  readonly selectable_in_game: boolean;
  readonly selection_priority: number;
  readonly weight: number;
  readonly resistances: Resistances;
  readonly fast_replaceable_group: string;
  readonly next_upgrade: LuaEntityPrototype;
  readonly loot: Loot;
  readonly repair_speed_modifier: number;
  readonly turret_range: number;
  readonly autoplace_specification: AutoplaceSpecification;
  readonly belt_speed: number;
  readonly result_units: any[];
  readonly attack_result: Trigger;
  readonly final_attack_result: Trigger;
  readonly attack_parameters: AttackParameters;
  readonly spawn_cooldown: any;
  readonly mining_drill_radius: number;
  readonly mining_speed: number;
  readonly logistic_mode: string;
  readonly max_underground_distance: number;
  readonly flags: EntityPrototypeFlags;
  readonly remains_when_mined: LuaEntityPrototype[];
  readonly additional_pastable_entities: LuaEntityPrototype[];
  readonly allow_copy_paste: boolean;
  readonly shooting_cursor_size: number;
  readonly created_smoke: any;
  readonly created_effect: Trigger;
  readonly map_color: Color;
  readonly friendly_map_color: Color;
  readonly enemy_map_color: Color;
  readonly build_base_evolution_requirement: number;
  readonly instruments: ProgrammableSpeakerInstrument[];
  readonly max_polyphony: number;
  readonly module_inventory_size: number;
  readonly ingredient_count: number;
  readonly crafting_speed: number;
  readonly crafting_categories: Map<string, boolean>;
  readonly resource_categories: Map<string, boolean>;
  readonly supply_area_distance: number;
  readonly max_wire_distance: number;
  readonly max_circuit_wire_distance: number;
  readonly energy_usage: number;
  readonly max_energy_usage: number;
  readonly max_energy_production: number;
  readonly effectivity: number;
  readonly consumption: number;
  readonly friction_force: number;
  readonly braking_force: number;
  readonly tank_driving: boolean;
  readonly rotation_speed: number;
  readonly turret_rotation_speed: number;
  readonly guns: Map<string, LuaItemPrototype>;
  readonly speed: number;
  readonly speed_multiplier_when_out_of_energy: number;
  readonly max_payload_size: number;
  readonly draw_cargo: boolean;
  readonly energy_per_move: number;
  readonly energy_per_tick: number;
  readonly max_energy: number;
  readonly min_to_charge: number;
  readonly max_to_charge: number;
  readonly burner_prototype: LuaBurnerPrototype;
  readonly electric_energy_source_prototype: LuaElectricEnergySourcePrototype;
  readonly heat_energy_source_prototype: LuaHeatEnergySourcePrototype;
  readonly fluid_energy_source_prototype: LuaFluidEnergySourcePrototype;
  readonly void_energy_source_prototype: LuaVoidEnergySourcePrototype;
  readonly building_grid_bit_shift: number;
  readonly fluid_usage_per_tick: number;
  readonly maximum_temperature: number;
  readonly target_temperature: number;
  readonly fluid: LuaFluidPrototype;
  readonly fluid_capacity: number;
  readonly pumping_speed: number;
  readonly stack: boolean;
  readonly allow_custom_vectors: boolean;
  readonly allow_burner_leech: boolean;
  readonly inserter_extension_speed: number;
  readonly inserter_rotation_speed: number;
  readonly inserter_pickup_position: Vector;
  readonly inserter_drop_position: Vector;
  readonly inserter_chases_belt_items: boolean;
  readonly count_as_rock_for_filtered_deconstruction: boolean;
  readonly filter_count: number;
  readonly time_to_live: number;
  readonly distribution_effectivity: number;
  readonly explosion_beam: number;
  readonly explosion_rotate: number;
  readonly tree_color_count: number;
  readonly alert_when_damaged: boolean;
  readonly alert_when_attacking: boolean;
  readonly color: Color;
  readonly collision_mask_collides_with_self: boolean;
  readonly collision_mask_collides_with_tiles_only: boolean;
  readonly collision_mask_considers_tile_transitions: boolean;
  readonly allowed_effects: Map<string, boolean>;
  readonly rocket_parts_required: number;
  readonly rocket_rising_delay: number;
  readonly launch_wait_time: number;
  readonly light_blinking_speed: number;
  readonly door_opening_speed: number;
  readonly rising_speed: number;
  readonly engine_starting_speed: number;
  readonly flying_speed: number;
  readonly flying_acceleration: number;
  readonly fixed_recipe: string;
  readonly construction_radius: number;
  readonly logistic_radius: number;
  readonly energy_per_hit_point: number;
  readonly create_ghost_on_death: boolean;
  readonly timeout: number;
  readonly fluidbox_prototypes: LuaFluidBoxPrototype[];
  readonly neighbour_bonus: number;
  readonly neighbour_collision_increase: number;
  readonly container_distance: number;
  readonly belt_distance: number;
  readonly belt_length: number;
  readonly is_building: boolean;
  readonly automated_ammo_count: number;
  readonly max_speed: number;
  readonly darkness_for_all_lamps_on: number;
  readonly darkness_for_all_lamps_off: number;
  readonly always_on: boolean;
  readonly min_darkness_to_spawn: number;
  readonly max_darkness_to_spawn: number;
  readonly call_for_help_radius: number;
  readonly max_count_of_owned_units: number;
  readonly max_friends_around_to_spawn: number;
  readonly spawning_radius: number;
  readonly spawning_spacing: number;
  readonly radius: number;
  readonly cliff_explosive_prototype: string;
  readonly rocket_entity_prototype: LuaEntityPrototype;
  readonly has_belt_immunity: boolean;
  readonly vision_distance: number;
  readonly pollution_to_join_attack: number;
  readonly min_pursue_time: number;
  readonly max_pursue_distance: number;
  readonly radar_range: number;
  readonly move_while_shooting: boolean;
  readonly can_open_gates: boolean;
  readonly affected_by_tiles: boolean;
  readonly distraction_cooldown: number;
  readonly spawning_time_modifier: number;
  readonly alert_icon_shift: Vector;
  readonly lab_inputs: string[];
  readonly researching_speed: number;
  readonly item_slot_count: number;
  readonly base_productivity: number;
  readonly allow_access_to_all_forces: boolean;
  readonly supports_direction: boolean;
  readonly terrain_friction_modifier: number;
  readonly allow_passengers: boolean;
  readonly max_distance_of_sector_revealed: number;
  readonly max_distance_of_nearby_sector_revealed: number;
  readonly adjacent_tile_collision_box: BoundingBox;
  readonly adjacent_tile_collision_mask: CollisionMask;
  readonly adjacent_tile_collision_test: CollisionMask;
  readonly center_collision_mask: CollisionMask;
  readonly grid_prototype: LuaEquipmentGridPrototype;
  readonly remove_decoratives: string;
  readonly running_speed: number;
  readonly maximum_corner_sliding_distance: number;
  readonly build_distance: number;
  readonly drop_item_distance: number;
  readonly reach_distance: number;
  readonly reach_resource_distance: number;
  readonly item_pickup_distance: number;
  readonly loot_pickup_distance: number;
  readonly enter_vehicle_distance: number;
  readonly ticks_to_keep_gun: number;
  readonly ticks_to_keep_aiming_direction: number;
  readonly ticks_to_stay_in_combat: number;
  readonly respawn_time: number;
  readonly damage_hit_tint: Color;
  readonly character_corpse: LuaEntityPrototype;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaEquipment {
  readonly name: string;
  readonly type: string;
  readonly position: Position;
  readonly shape: any;
  shield: number;
  readonly max_shield: number;
  readonly max_solar_power: number;
  readonly movement_bonus: number;
  readonly generator_power: number;
  energy: number;
  readonly max_energy: number;
  readonly prototype: LuaEquipmentPrototype;
  readonly burner: LuaBurner;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaEquipmentCategoryPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaEquipmentGrid {
  take: (tbl?: {
    position: null | Position;
    equipment: null | LuaEquipment;
    by_player: null | PlayerSpecification;
  }) => SimpleItemStack | null;
  take_all: () => null;
  clear: () => null;
  put: (table_0: {
    name: string;
    position: null | Position;
    by_player: null | PlayerSpecification;
  }) => LuaEquipment | null;
  can_move: (table_0: {
    equipment: LuaEquipment;
    position: Position;
  }) => boolean;
  move: (table_0: { equipment: LuaEquipment; position: Position }) => boolean;
  get: (position: Position) => LuaEquipment | null;
  get_contents: () => null;
  readonly prototype: LuaEquipmentGridPrototype;
  readonly width: number;
  readonly height: number;
  readonly equipment: LuaEquipment[];
  readonly generator_energy: number;
  readonly max_solar_energy: number;
  readonly available_in_batteries: number;
  readonly battery_capacity: number;
  readonly shield: number;
  readonly max_shield: number;
  inhibit_movement_bonus: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaEquipmentGridPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly equipment_categories: string[];
  readonly width: number;
  readonly height: number;
  readonly locked: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaEquipmentPrototype {
  readonly name: string;
  readonly type: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly shape: any;
  readonly take_result: LuaItemPrototype;
  readonly energy_production: number;
  readonly shield: number;
  readonly energy_per_shield: number;
  readonly logistic_parameters: any;
  readonly energy_consumption: number;
  readonly movement_bonus: number;
  readonly energy_source: LuaElectricEnergySourcePrototype;
  readonly equipment_categories: string[];
  readonly burner_prototype: LuaBurnerPrototype;
  readonly electric_energy_source_prototype: LuaElectricEnergySourcePrototype;
  readonly background_color: Color;
  readonly attack_parameters: AttackParameters;
  readonly automatic: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaFlowStatistics {
  get_input_count: (arg_0: string) => number | number;
  set_input_count: (arg_0: string, count: number | number) => null;
  get_output_count: (arg_0: string) => number | number;
  set_output_count: (arg_0: string, count: number | number) => null;
  get_flow_count: (table_0: {
    name: string;
    input: boolean;
    precision_index: typeof defines.flow_precision_index;
    count: null | boolean;
  }) => number;
  on_flow: (arg_0: string, count: number) => null;
  clear: () => null;
  readonly input_counts: Map<string, number[] | number>;
  readonly output_counts: Map<string, number[] | number>;
  readonly force: LuaForce;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaFluidBox {
  get_prototype: (index: number) => LuaFluidBoxPrototype;
  get_capacity: (index: number) => number;
  get_connections: (index: number) => LuaFluidBox[];
  get_filter: (index: number) => any;
  set_filter: (
    index: number,
    table: {
      name: string;
      minimum_temperature: null | number;
      maximum_temperature: null | number;
      force: null | boolean;
    }
  ) => boolean;
  get_flow: (index: number) => number;
  get_locked_fluid: (index: number) => string;
  flush: (
    index: number,
    fluid?: null | FluidSpecification
  ) => Map<string, number>;
  readonly "operator #": number;
  readonly owner: LuaEntity;
  readonly "operator []": Fluid | null;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaFluidBoxPrototype {
  readonly entity: LuaEntityPrototype;
  readonly index: number;
  readonly pipe_connections: FluidBoxConnection[];
  readonly production_type: string;
  readonly base_area: number;
  readonly base_level: number;
  readonly height: number;
  readonly volume: number;
  readonly filter: LuaFluidPrototype;
  readonly minimum_temperature: number;
  readonly maximum_temperature: number;
  readonly secondary_draw_orders: number[];
  readonly render_layer: string;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaFluidEnergySourcePrototype {
  readonly emissions: number;
  readonly render_no_network_icon: boolean;
  readonly render_no_power_icon: boolean;
  readonly effectivity: number;
  readonly burns_fluid: boolean;
  readonly scale_fluid_usage: boolean;
  readonly fluid_usage_per_tick: number;
  readonly smoke: SmokeSource[];
  readonly maximum_temperature: number;
  readonly fluid_box: any;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaFluidPrototype {
  readonly name: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly default_temperature: number;
  readonly max_temperature: number;
  readonly heat_capacity: number;
  readonly order: string;
  readonly group: LuaGroup;
  readonly subgroup: LuaGroup;
  readonly base_color: Color;
  readonly flow_color: Color;
  readonly gas_temperature: number;
  readonly emissions_multiplier: number;
  readonly fuel_value: number;
  readonly hidden: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaFontPrototype {
  readonly name: string;
  readonly from: string;
  readonly size: number;
  readonly spacing: number;
  readonly border: boolean;
  readonly filtered: boolean;
  readonly border_color: Color;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaForce {
  get_entity_count: (name: string) => number;
  disable_research: () => null;
  enable_research: () => null;
  disable_all_prototypes: () => null;
  enable_all_prototypes: () => null;
  reset_recipes: () => null;
  enable_all_recipes: () => null;
  enable_all_technologies: () => null;
  research_all_technologies: (arg_0?: null | any) => null;
  reset_technologies: () => null;
  reset: () => null;
  reset_technology_effects: () => null;
  chart: (surface: SurfaceSpecification, area: BoundingBox) => null;
  clear_chart: (surface?: null | SurfaceSpecification) => null;
  rechart: () => null;
  chart_all: (surface?: null | SurfaceSpecification) => null;
  is_chunk_charted: (
    surface: SurfaceSpecification,
    position: ChunkPosition
  ) => boolean;
  is_chunk_visible: (
    surface: SurfaceSpecification,
    position: ChunkPosition
  ) => boolean;
  cancel_charting: (surface?: null | SurfaceSpecification) => null;
  get_ammo_damage_modifier: (ammo: string) => number;
  set_ammo_damage_modifier: (ammo: string, modifier: number) => null;
  get_gun_speed_modifier: (ammo: string) => number;
  set_gun_speed_modifier: (ammo: string, modifier: number) => null;
  get_turret_attack_modifier: (turret: string) => number;
  set_turret_attack_modifier: (turret: string, modifier: number) => null;
  set_cease_fire: (other: ForceSpecification, cease_fire: boolean) => null;
  get_cease_fire: (other: ForceSpecification) => boolean;
  set_friend: (other: ForceSpecification, friend: boolean) => null;
  get_friend: (other: ForceSpecification) => boolean;
  is_pathfinder_busy: () => null;
  kill_all_units: () => null;
  find_logistic_network_by_position: (
    position: Position,
    surface: SurfaceSpecification
  ) => LuaLogisticNetwork | null;
  set_spawn_position: (
    position: Position,
    surface: SurfaceSpecification
  ) => null;
  get_spawn_position: (surface: SurfaceSpecification) => Position;
  unchart_chunk: (
    position: ChunkPosition,
    surface: SurfaceSpecification
  ) => null;
  get_item_launched: (item: string) => number;
  set_item_launched: (item: string, count: number) => null;
  print: (message: LocalisedString, color?: null | Color) => null;
  get_trains: (surface?: null | SurfaceSpecification) => LuaTrain[];
  add_chart_tag: (
    surface: SurfaceSpecification,
    tag: {
      icon: null | SignalID;
      position: Position;
      text: null | string;
      last_user: null | PlayerSpecification;
    }
  ) => LuaCustomChartTag;
  find_chart_tags: (
    surface: SurfaceSpecification,
    area?: null | BoundingBox
  ) => LuaCustomChartTag[];
  get_saved_technology_progress: (
    technology: TechnologySpecification
  ) => number;
  set_saved_technology_progress: (
    technology: TechnologySpecification,
    arg_1: number
  ) => null;
  reset_evolution: () => null;
  play_sound: (table_0: {
    path: SoundPath;
    position: null | Position;
    volume_modifier: null | number;
    override_sound_type: null | SoundType;
  }) => boolean;
  get_train_stops: (opts?: {
    name: null | (string | string[]);
    surface: null | SurfaceSpecification;
  }) => LuaEntity[];
  get_hand_crafting_disabled_for_recipe: (
    recipe: string | LuaRecipe
  ) => boolean;
  set_hand_crafting_disabled_for_recipe: (
    recipe: string | LuaRecipe,
    hand_crafting_disabled: boolean
  ) => null;
  add_research: (technology: TechnologySpecification) => boolean;
  cancel_current_research: () => null;
  get_linked_inventory: (
    prototype: EntityPrototypeSpecification,
    link_id: number
  ) => LuaInventory;
  readonly name: string;
  readonly technologies: Map<string, LuaTechnology>;
  readonly recipes: Map<string, LuaRecipe>;
  manual_mining_speed_modifier: number;
  manual_crafting_speed_modifier: number;
  laboratory_speed_modifier: number;
  laboratory_productivity_bonus: number;
  worker_robots_speed_modifier: number;
  worker_robots_battery_modifier: number;
  worker_robots_storage_bonus: number;
  readonly current_research: LuaTechnology;
  research_progress: number;
  previous_research: LuaTechnology;
  inserter_stack_size_bonus: number;
  stack_inserter_capacity_bonus: number;
  character_trash_slot_count: number;
  maximum_following_robot_count: number;
  following_robots_lifetime_modifier: number;
  ghost_time_to_live: number;
  readonly players: LuaPlayer[];
  ai_controllable: boolean;
  readonly logistic_networks: Map<string, LuaLogisticNetwork[]>;
  readonly item_production_statistics: LuaFlowStatistics;
  readonly fluid_production_statistics: LuaFlowStatistics;
  readonly kill_count_statistics: LuaFlowStatistics;
  readonly entity_build_count_statistics: LuaFlowStatistics;
  character_running_speed_modifier: number;
  artillery_range_modifier: number;
  character_build_distance_bonus: number;
  character_item_drop_distance_bonus: number;
  character_reach_distance_bonus: number;
  character_resource_reach_distance_bonus: number;
  character_item_pickup_distance_bonus: number;
  character_loot_pickup_distance_bonus: number;
  character_inventory_slots_bonus: number;
  deconstruction_time_to_live: number;
  character_health_bonus: number;
  max_successful_attempts_per_tick_per_construction_queue: number;
  max_failed_attempts_per_tick_per_construction_queue: number;
  zoom_to_world_enabled: boolean;
  zoom_to_world_ghost_building_enabled: boolean;
  zoom_to_world_blueprint_enabled: boolean;
  zoom_to_world_deconstruction_planner_enabled: boolean;
  zoom_to_world_selection_tool_enabled: boolean;
  character_logistic_requests: boolean;
  rockets_launched: number;
  readonly items_launched: Map<string, number>;
  readonly connected_players: LuaPlayer[];
  mining_drill_productivity_bonus: number;
  train_braking_force_bonus: number;
  evolution_factor: number;
  evolution_factor_by_pollution: number;
  evolution_factor_by_time: number;
  evolution_factor_by_killing_spawners: number;
  friendly_fire: boolean;
  share_chart: boolean;
  research_queue_enabled: boolean;
  readonly index: number;
  research_queue: TechnologySpecification[];
  readonly research_enabled: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaFuelCategoryPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaGameScript {
  set_game_state: (table_0: {
    game_finished: boolean;
    player_won: boolean;
    next_level: string;
    can_continue: boolean;
    victorious_force: ForceSpecification;
  }) => null;
  get_entity_by_tag: (tag: string) => LuaEntity;
  show_message_dialog: (table_0: {
    text: LocalisedString;
    image: null | string;
    point_to: null | GuiArrowSpecification;
    style: null | string;
    wrapper_frame_style: null | string;
  }) => null;
  is_demo: () => null;
  reload_script: () => null;
  reload_mods: () => null;
  save_atlas: () => null;
  check_consistency: () => null;
  regenerate_entity: (entities: string | string[]) => null;
  take_screenshot: (table_0: {
    player: null | PlayerSpecification;
    by_player: null | PlayerSpecification;
    surface: null | SurfaceSpecification;
    position: null | Position;
    resolution: null | Position;
    zoom: null | number;
    path: null | string;
    show_gui: null | boolean;
    show_entity_info: null | boolean;
    show_cursor_building_preview: null | boolean;
    anti_alias: null | boolean;
    quality: null | number;
    allow_in_replay: null | boolean;
    daytime: null | number;
    water_tick: null | number;
    force_render: null | boolean;
  }) => null;
  set_wait_for_screenshots_to_finish: () => null;
  take_technology_screenshot: (table_0: {
    force: null | ForceSpecification;
    path: null | string;
    by_player: null | PlayerSpecification;
    selected_technology: null | TechnologySpecification;
    skip_disabled: null | boolean;
    quality: null | number;
  }) => null;
  table_to_json: (data: any) => string;
  json_to_table: (json: string) => any | null;
  write_file: (
    filename: string,
    data: LocalisedString,
    append?: null | boolean,
    for_player?: null | number
  ) => null;
  remove_path: (path: string) => null;
  remove_offline_players: (players?: null | (LuaPlayer[] | string)) => null;
  force_crc: () => null;
  create_force: (force: string) => LuaForce;
  merge_forces: (
    source: ForceSpecification,
    destination: ForceSpecification
  ) => null;
  create_surface: (
    name: string,
    settings?: null | MapGenSettings
  ) => LuaSurface;
  server_save: (name?: null | string) => null;
  auto_save: (name?: null | string) => null;
  delete_surface: (surface: string | LuaSurface) => null;
  disable_replay: () => null;
  disable_tutorial_triggers: () => null;
  direction_to_string: (direction: typeof defines.direction) => null;
  print: (message: LocalisedString, color?: null | Color) => null;
  create_random_generator: (seed?: null | number) => LuaRandomGenerator;
  check_prototype_translations: () => null;
  play_sound: (table_0: {
    path: SoundPath;
    position: null | Position;
    volume_modifier: null | number;
    override_sound_type: null | SoundType;
  }) => boolean;
  is_valid_sound_path: () => boolean;
  is_valid_sprite_path: (sprite_path: SpritePath) => boolean;
  kick_player: (
    arg_0: PlayerSpecification,
    reason?: null | LocalisedString
  ) => null;
  ban_player: (
    arg_0: PlayerSpecification,
    reason?: null | LocalisedString
  ) => null;
  unban_player: (arg_0: PlayerSpecification) => null;
  purge_player: (arg_0: PlayerSpecification) => null;
  mute_player: (arg_0: PlayerSpecification) => null;
  unmute_player: (arg_0: PlayerSpecification) => null;
  count_pipe_groups: () => null;
  is_multiplayer: () => null;
  get_active_entities_count: (surface?: null | SurfaceSpecification) => number;
  get_map_exchange_string: () => null;
  parse_map_exchange_string: (
    map_exchange_string: string
  ) => MapExchangeStringData;
  get_train_stops: (opts?: {
    name: null | (string | string[]);
    surface: null | SurfaceSpecification;
    force: null | ForceSpecification;
  }) => LuaEntity[];
  get_player: (player: number | string) => LuaPlayer;
  get_surface: (surface: number | string) => LuaSurface;
  create_profiler: (stopped?: null | boolean) => LuaProfiler;
  evaluate_expression: (
    expression: string,
    variables?: null | Map<string, number>
  ) => number;
  get_filtered_entity_prototypes: (
    filters: EntityPrototypeFilters
  ) => Map<string, LuaEntityPrototype>;
  get_filtered_item_prototypes: (
    filters: ItemPrototypeFilters
  ) => Map<string, LuaItemPrototype>;
  get_filtered_equipment_prototypes: (
    filters: EquipmentPrototypeFilters
  ) => Map<string, LuaEquipmentPrototype>;
  get_filtered_mod_setting_prototypes: (
    filters: ModSettingPrototypeFilters
  ) => Map<string, LuaModSettingPrototype>;
  get_filtered_achievement_prototypes: (
    filters: AchievementPrototypeFilters
  ) => Map<string, LuaAchievementPrototype>;
  get_filtered_tile_prototypes: (
    filters: TilePrototypeFilters
  ) => Map<string, LuaTilePrototype>;
  get_filtered_decorative_prototypes: (
    filters: DecorativePrototypeFilters
  ) => Map<string, LuaDecorativePrototype>;
  get_filtered_fluid_prototypes: (
    filters: FluidPrototypeFilters
  ) => Map<string, LuaFluidPrototype>;
  get_filtered_recipe_prototypes: (
    filters: RecipePrototypeFilters
  ) => Map<string, LuaRecipePrototype>;
  get_filtered_technology_prototypes: (
    filters: TechnologyPrototypeFilters
  ) => Map<string, LuaTechnologyPrototype>;
  create_inventory: (size: number) => LuaInventory;
  get_script_inventories: (mod?: null | string) => Map<string, LuaInventory[]>;
  reset_time_played: () => null;
  encode_string: (string: string) => string | null;
  decode_string: (string: string) => string | null;
  readonly object_name: string;
  readonly player: LuaPlayer;
  readonly players: Map<number | string, LuaPlayer>;
  readonly map_settings: MapSettings;
  readonly difficulty_settings: DifficultySettings;
  readonly difficulty: typeof defines.difficulty;
  readonly forces: Map<number | string, LuaForce>;
  readonly entity_prototypes: Map<string, LuaEntityPrototype>;
  readonly item_prototypes: Map<string, LuaItemPrototype>;
  readonly fluid_prototypes: Map<string, LuaFluidPrototype>;
  readonly tile_prototypes: Map<string, LuaTilePrototype>;
  readonly equipment_prototypes: Map<string, LuaEquipmentPrototype>;
  readonly damage_prototypes: Map<string, LuaDamagePrototype>;
  readonly virtual_signal_prototypes: Map<string, LuaVirtualSignalPrototype>;
  readonly equipment_grid_prototypes: Map<string, LuaEquipmentGridPrototype>;
  readonly recipe_prototypes: Map<string, LuaRecipePrototype>;
  readonly technology_prototypes: Map<string, LuaTechnologyPrototype>;
  readonly decorative_prototypes: Map<string, LuaDecorativePrototype>;
  readonly particle_prototypes: Map<string, LuaParticlePrototype>;
  readonly autoplace_control_prototypes: Map<
    string,
    LuaAutoplaceControlPrototype
  >;
  readonly noise_layer_prototypes: Map<string, LuaNoiseLayerPrototype>;
  readonly mod_setting_prototypes: Map<string, LuaModSettingPrototype>;
  readonly custom_input_prototypes: Map<string, LuaCustomInputPrototype>;
  readonly ammo_category_prototypes: Map<string, LuaAmmoCategoryPrototype>;
  readonly named_noise_expressions: Map<string, LuaNamedNoiseExpression>;
  readonly item_subgroup_prototypes: Map<string, LuaGroup>;
  readonly item_group_prototypes: Map<string, LuaGroup>;
  readonly fuel_category_prototypes: Map<string, LuaFuelCategoryPrototype>;
  readonly resource_category_prototypes: Map<
    string,
    LuaResourceCategoryPrototype
  >;
  readonly achievement_prototypes: Map<string, LuaAchievementPrototype>;
  readonly module_category_prototypes: Map<string, LuaModuleCategoryPrototype>;
  readonly equipment_category_prototypes: Map<
    string,
    LuaEquipmentCategoryPrototype
  >;
  readonly trivial_smoke_prototypes: Map<string, LuaTrivialSmokePrototype>;
  readonly shortcut_prototypes: Map<string, LuaShortcutPrototype>;
  readonly recipe_category_prototypes: Map<string, LuaRecipeCategoryPrototype>;
  readonly font_prototypes: Map<string, LuaFontPrototype>;
  readonly map_gen_presets: Map<string, any>;
  readonly styles: Map<string, string>;
  readonly tick: number;
  readonly ticks_played: number;
  tick_paused: boolean;
  ticks_to_run: number;
  readonly finished: boolean;
  speed: number;
  readonly surfaces: Map<number | string, LuaSurface>;
  readonly active_mods: Map<string, string>;
  readonly connected_players: LuaPlayer[];
  readonly permissions: LuaPermissionGroups;
  readonly backer_names: Map<number, string>;
  readonly default_map_gen_settings: MapGenSettings;
  enemy_has_vision_on_land_mines: boolean;
  autosave_enabled: boolean;
  draw_resource_selection: boolean;
  readonly pollution_statistics: LuaFlowStatistics;
  readonly max_force_distraction_distance: number;
  readonly max_force_distraction_chunk_distance: number;
  readonly max_electric_pole_supply_area_distance: number;
  readonly max_electric_pole_connection_distance: number;
  readonly max_beacon_supply_area_distance: number;
  readonly max_gate_activation_distance: number;
  readonly max_inserter_reach_distance: number;
  readonly max_pipe_to_ground_distance: number;
  readonly max_underground_belt_distance: number;
}
/** @noSelf **/
interface LuaGroup {
  readonly name: string;
  readonly localised_name: LocalisedString;
  readonly type: string;
  readonly group: LuaGroup;
  readonly subgroups: LuaGroup[];
  readonly order_in_recipe: string;
  readonly order: string;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaGui {
  is_valid_sprite_path: (sprite_path: SpritePath) => boolean;
  readonly player: LuaPlayer;
  readonly children: Map<string, LuaGuiElement>;
  readonly top: LuaGuiElement;
  readonly left: LuaGuiElement;
  readonly center: LuaGuiElement;
  readonly goal: LuaGuiElement;
  readonly screen: LuaGuiElement;
  readonly relative: LuaGuiElement;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaGuiElement {
  add: (table_0: {
    type: string;
    name: null | string;
    caption: null | LocalisedString;
    tooltip: null | LocalisedString;
    enabled: null | boolean;
    ignored_by_interaction: null | boolean;
    style: null | string;
    tags: null | Tags;
    index: null | number;
    anchor: null | GuiAnchor;
    "Other attributes may have to be specified, depending on type:buttonmouse_button_filter": null | MouseButtonFlags;
  }) => LuaGuiElement;
  clear: () => null;
  destroy: () => null;
  get_mod: () => null;
  get_index_in_parent: () => null;
  clear_items: () => null;
  get_item: (index: number) => LocalisedString;
  set_item: (index: number, arg_1: LocalisedString) => null;
  add_item: (arg_0: LocalisedString, index?: null | number) => null;
  remove_item: (index: number) => null;
  get_slider_minimum: () => null;
  get_slider_maximum: () => null;
  set_slider_minimum_maximum: (minimum: number, maximum: number) => null;
  get_slider_value_step: () => null;
  get_slider_discrete_slider: () => null;
  get_slider_discrete_values: () => null;
  set_slider_value_step: (value: number) => null;
  set_slider_discrete_slider: (value: boolean) => null;
  set_slider_discrete_values: (value: boolean) => null;
  focus: () => null;
  scroll_to_top: () => null;
  scroll_to_bottom: () => null;
  scroll_to_left: () => null;
  scroll_to_right: () => null;
  scroll_to_element: (
    element: LuaGuiElement,
    scroll_mode?: null | string
  ) => null;
  select_all: () => null;
  select: (start: number, end: number) => null;
  add_tab: (tab: LuaGuiElement, content: LuaGuiElement) => null;
  remove_tab: (tab: LuaGuiElement) => null;
  force_auto_center: () => null;
  scroll_to_item: (index: number, scroll_mode?: null | string) => null;
  bring_to_front: () => null;
  readonly index: number;
  readonly gui: LuaGui;
  readonly parent: LuaGuiElement;
  name: string;
  caption: LocalisedString;
  value: number;
  readonly direction: string;
  style: LuaStyle | string;
  visible: boolean;
  text: string;
  readonly children_names: string[];
  state: boolean;
  readonly player_index: number;
  sprite: SpritePath;
  resize_to_sprite: boolean;
  hovered_sprite: SpritePath;
  clicked_sprite: SpritePath;
  tooltip: LocalisedString;
  horizontal_scroll_policy: string;
  vertical_scroll_policy: string;
  readonly type: string;
  readonly children: LuaGuiElement[];
  items: LocalisedString[];
  selected_index: number;
  number: number;
  show_percent_for_small_numbers: boolean;
  location: GuiLocation;
  auto_center: boolean;
  badge_text: LocalisedString;
  position: Position;
  surface_index: number;
  zoom: number;
  minimap_player_index: number;
  force: string;
  readonly elem_type: string;
  elem_value: string | SignalID;
  elem_filters: any;
  selectable: boolean;
  word_wrap: boolean;
  read_only: boolean;
  enabled: boolean;
  ignored_by_interaction: boolean;
  locked: boolean;
  draw_vertical_lines: boolean;
  draw_horizontal_lines: boolean;
  draw_horizontal_line_after_headers: boolean;
  readonly column_count: number;
  vertical_centering: boolean;
  slider_value: number;
  mouse_button_filter: MouseButtonFlags;
  numeric: boolean;
  allow_decimal: boolean;
  allow_negative: boolean;
  is_password: boolean;
  lose_focus_on_confirm: boolean;
  clear_and_focus_on_right_click: boolean;
  drag_target: LuaGuiElement;
  selected_tab_index: number;
  readonly tabs: any[];
  entity: LuaEntity;
  anchor: GuiAnchor;
  tags: Tags;
  switch_state: string;
  allow_none_state: boolean;
  left_label_caption: LocalisedString;
  left_label_tooltip: LocalisedString;
  right_label_caption: LocalisedString;
  right_label_tooltip: LocalisedString;
  readonly "operator []": LuaGuiElement;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaHeatEnergySourcePrototype {
  readonly emissions: number;
  readonly render_no_network_icon: boolean;
  readonly render_no_power_icon: boolean;
  readonly max_temperature: number;
  readonly default_temperature: number;
  readonly specific_heat: number;
  readonly max_transfer: number;
  readonly min_temperature_gradient: number;
  readonly min_working_temperature: number;
  readonly minimum_glow_temperature: number;
  readonly connections: any[];
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaInventory {
  clear: () => null;
  can_insert: (items: ItemStackSpecification) => boolean;
  insert: (items: ItemStackSpecification) => number;
  remove: (items: ItemStackSpecification) => number;
  get_item_count: (item?: null | string) => number;
  is_empty: () => null;
  get_contents: () => null;
  supports_bar: () => null;
  get_bar: () => null;
  set_bar: (bar?: null | number) => null;
  supports_filters: () => null;
  is_filtered: () => null;
  can_set_filter: (index: number, filter: string) => boolean;
  get_filter: (index: number) => string | null;
  set_filter: (index: number, filter: string) => boolean;
  find_item_stack: (item: string) => LuaItemStack | null;
  find_empty_stack: (item?: null | string) => LuaItemStack | null;
  count_empty_stacks: (include_filtered?: null | boolean) => number;
  get_insertable_count: (item: string) => null;
  sort_and_merge: () => null;
  resize: (size: number) => null;
  destroy: () => null;
  readonly "operator #": number;
  readonly index: typeof defines.inventory;
  readonly entity_owner: LuaEntity;
  readonly player_owner: LuaPlayer;
  readonly equipment_owner: LuaEquipment;
  readonly mod_owner: string;
  readonly "operator []": LuaItemStack;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaItemPrototype {
  has_flag: (flag: string) => boolean;
  get_ammo_type: (ammo_source_type?: null | string) => AmmoType;
  readonly type: string;
  readonly name: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly order: string;
  readonly place_result: LuaEntityPrototype;
  readonly place_as_equipment_result: LuaEquipmentPrototype;
  readonly place_as_tile_result: PlaceAsTileResult;
  readonly stackable: boolean;
  readonly default_request_amount: number;
  readonly stack_size: number;
  readonly wire_count: number;
  readonly fuel_category: string;
  readonly burnt_result: LuaItemPrototype;
  readonly fuel_value: number;
  readonly fuel_acceleration_multiplier: number;
  readonly fuel_top_speed_multiplier: number;
  readonly fuel_emissions_multiplier: number;
  readonly subgroup: LuaGroup;
  readonly group: LuaGroup;
  readonly flags: ItemPrototypeFlags;
  readonly rocket_launch_products: Product[];
  readonly can_be_mod_opened: boolean;
  readonly magazine_size: number;
  readonly reload_time: number;
  readonly equipment_grid: LuaEquipmentGridPrototype;
  readonly resistances: Resistances;
  readonly inventory_size_bonus: number;
  readonly capsule_action: CapsuleAction;
  readonly attack_parameters: AttackParameters;
  readonly inventory_size: number;
  readonly item_filters: Map<string, LuaItemPrototype>;
  readonly item_group_filters: Map<string, LuaGroup>;
  readonly item_subgroup_filters: Map<string, LuaGroup>;
  readonly filter_mode: string;
  readonly insertion_priority_mode: string;
  readonly localised_filter_message: LocalisedString;
  readonly extend_inventory_by_default: boolean;
  readonly default_label_color: Color;
  readonly draw_label_for_cursor_render: boolean;
  readonly speed: number;
  readonly module_effects: Effects;
  readonly category: string;
  readonly tier: number;
  readonly limitations: string[];
  readonly limitation_message_key: string;
  readonly straight_rail: LuaEntityPrototype;
  readonly curved_rail: LuaEntityPrototype;
  readonly repair_result: Trigger;
  readonly selection_border_color: Color;
  readonly alt_selection_border_color: Color;
  readonly selection_mode_flags: SelectionModeFlags;
  readonly alt_selection_mode_flags: SelectionModeFlags;
  readonly selection_cursor_box_type: string;
  readonly alt_selection_cursor_box_type: string;
  readonly always_include_tiles: boolean;
  readonly entity_filter_mode: string;
  readonly alt_entity_filter_mode: string;
  readonly tile_filter_mode: string;
  readonly alt_tile_filter_mode: string;
  readonly entity_filters: Map<string, LuaEntityPrototype>;
  readonly alt_entity_filters: Map<string, LuaEntityPrototype>;
  readonly entity_type_filters: Map<string, boolean>;
  readonly alt_entity_type_filters: Map<string, boolean>;
  readonly tile_filters: Map<string, LuaTilePrototype>;
  readonly alt_tile_filters: Map<string, LuaTilePrototype>;
  readonly entity_filter_slots: number;
  readonly tile_filter_slots: number;
  readonly durability_description_key: string;
  readonly durability: number;
  readonly infinite: boolean;
  readonly mapper_count: number;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaItemStack {
  is_blueprint_setup: () => null;
  get_blueprint_entities: () => null;
  set_blueprint_entities: (entities: any[]) => null;
  add_ammo: (amount: number) => null;
  drain_ammo: (amount: number) => null;
  add_durability: (amount: number) => null;
  drain_durability: (amount: number) => null;
  can_set_stack: (stack?: null | ItemStackSpecification) => boolean;
  set_stack: (stack?: null | ItemStackSpecification) => boolean;
  transfer_stack: (stack: ItemStackSpecification) => boolean;
  export_stack: () => null;
  import_stack: (data: string) => number;
  swap_stack: (stack: LuaItemStack) => boolean;
  clear: () => null;
  get_blueprint_tiles: () => null;
  set_blueprint_tiles: (tiles: any[]) => null;
  get_inventory: (inventory: typeof defines.inventory) => LuaInventory | null;
  build_blueprint: (table_0: {
    surface: SurfaceSpecification;
    force: ForceSpecification;
    position: Position;
    force_build: null | boolean;
    direction: null | typeof defines.direction;
    skip_fog_of_war: null | boolean;
    by_player: null | PlayerSpecification;
    raise_built: null | boolean;
  }) => LuaEntity[];
  deconstruct_area: (table_0: {
    surface: SurfaceSpecification;
    force: ForceSpecification;
    area: BoundingBox;
    skip_fog_of_war: null | boolean;
    by_player: null | PlayerSpecification;
  }) => null;
  cancel_deconstruct_area: (table_0: {
    surface: SurfaceSpecification;
    force: ForceSpecification;
    area: BoundingBox;
    skip_fog_of_war: null | boolean;
    by_player: null | PlayerSpecification;
  }) => null;
  create_blueprint: (table_0: {
    surface: SurfaceSpecification;
    force: ForceSpecification;
    area: BoundingBox;
    always_include_tiles: null | boolean;
    include_entities: null | boolean;
    include_modules: null | boolean;
    include_station_names: null | boolean;
    include_trains: null | boolean;
    include_fuel: null | boolean;
  }) => Map<number, LuaEntity>;
  get_tag: (tag_name: string) => any;
  set_tag: (tag_name: string, tag: any) => any;
  remove_tag: (tag: string) => boolean;
  clear_blueprint: () => null;
  get_entity_filter: (index: number) => string;
  set_entity_filter: (
    index: number,
    filter: string | LuaEntityPrototype | LuaEntity
  ) => boolean;
  get_tile_filter: (index: number) => string;
  set_tile_filter: (
    index: number,
    filter: string | LuaTilePrototype | LuaTile
  ) => boolean;
  clear_deconstruction_item: () => null;
  clear_upgrade_item: () => null;
  get_mapper: (index: number, type: string) => UpgradeFilter;
  set_mapper: (index: number, type: string, filter: UpgradeFilter) => null;
  get_blueprint_entity_count: () => null;
  get_blueprint_entity_tags: (index: number) => Tags;
  set_blueprint_entity_tags: (index: number, tags: Tags) => null;
  get_blueprint_entity_tag: (index: number, tag: string) => any;
  set_blueprint_entity_tag: (index: number, tag: string, value: any) => null;
  create_grid: () => null;
  readonly valid_for_read: boolean;
  readonly prototype: LuaItemPrototype;
  readonly name: string;
  readonly type: string;
  count: number;
  readonly grid: LuaEquipmentGrid;
  health: number;
  durability: number;
  ammo: number;
  blueprint_icons: any[];
  blueprint_snap_to_grid: Position;
  blueprint_position_relative_to_grid: Position;
  blueprint_absolute_snapping: boolean;
  label: string;
  label_color: Color;
  allow_manual_label_change: boolean;
  readonly cost_to_build: Map<string, number>;
  extends_inventory: boolean;
  prioritize_insertion_mode: string;
  readonly default_icons: any[];
  tags: Tags;
  custom_description: LocalisedString;
  entity_filters: string[];
  tile_filters: string[];
  entity_filter_mode: typeof defines.deconstruction_item.entity_filter_mode;
  tile_filter_mode: typeof defines.deconstruction_item.tile_filter_mode;
  tile_selection_mode: typeof defines.deconstruction_item.tile_selection_mode;
  trees_and_rocks_only: boolean;
  readonly entity_filter_count: number;
  readonly tile_filter_count: number;
  active_index: number;
  readonly item_number: number;
  connected_entity: any;
  readonly is_blueprint: boolean;
  readonly is_blueprint_book: boolean;
  readonly is_module: boolean;
  readonly is_tool: boolean;
  readonly is_mining_tool: boolean;
  readonly is_armor: boolean;
  readonly is_repair_tool: boolean;
  readonly is_item_with_label: boolean;
  readonly is_item_with_inventory: boolean;
  readonly is_item_with_entity_data: boolean;
  readonly is_selection_tool: boolean;
  readonly is_item_with_tags: boolean;
  readonly is_deconstruction_item: boolean;
  readonly is_upgrade_item: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaLogisticCell {
  is_in_logistic_range: (position: Position) => boolean;
  is_in_construction_range: (position: Position) => boolean;
  is_neighbour_with: (other: LuaLogisticCell) => boolean;
  readonly logistic_radius: number;
  readonly logistics_connection_distance: number;
  readonly construction_radius: number;
  readonly stationed_logistic_robot_count: number;
  readonly stationed_construction_robot_count: number;
  readonly mobile: boolean;
  readonly transmitting: boolean;
  readonly charge_approach_distance: number;
  readonly charging_robot_count: number;
  readonly to_charge_robot_count: number;
  readonly owner: LuaEntity;
  readonly logistic_network: LuaLogisticNetwork;
  readonly neighbours: LuaLogisticCell[];
  readonly charging_robots: LuaEntity[];
  readonly to_charge_robots: LuaEntity[];
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaLogisticNetwork {
  get_item_count: (item?: null | string, member?: null | string) => number;
  get_contents: () => null;
  remove_item: (
    item: ItemStackSpecification,
    members?: null | string
  ) => number;
  insert: (item: ItemStackSpecification, members?: null | string) => number;
  find_cell_closest_to: (position: Position) => LuaLogisticCell;
  select_pickup_point: (table_0: {
    name: string;
    position: null | Position;
    include_buffers: null | boolean;
    members: null | string;
  }) => LuaLogisticPoint;
  select_drop_point: (table_0: {
    stack: ItemStackSpecification;
    members: null | string;
  }) => LuaLogisticPoint;
  readonly force: LuaForce;
  readonly available_logistic_robots: number;
  readonly all_logistic_robots: number;
  readonly available_construction_robots: number;
  readonly all_construction_robots: number;
  readonly robot_limit: number;
  readonly cells: LuaLogisticCell[];
  readonly providers: LuaEntity[];
  readonly empty_providers: LuaEntity[];
  readonly requesters: LuaEntity[];
  readonly storages: LuaEntity[];
  readonly logistic_members: LuaEntity[];
  readonly provider_points: LuaLogisticPoint[];
  readonly passive_provider_points: LuaLogisticPoint[];
  readonly active_provider_points: LuaLogisticPoint[];
  readonly empty_provider_points: LuaLogisticPoint[];
  readonly requester_points: LuaLogisticPoint[];
  readonly storage_points: LuaLogisticPoint[];
  readonly robots: LuaEntity[];
  readonly construction_robots: LuaEntity[];
  readonly logistic_robots: LuaEntity[];
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaLogisticPoint {
  readonly owner: LuaEntity;
  readonly logistic_network: LuaLogisticNetwork;
  readonly logistic_member_index: number;
  readonly filters: LogisticFilter[];
  readonly mode: typeof defines.logistic_mode;
  readonly force: LuaForce;
  readonly targeted_items_pickup: Map<string, number>;
  readonly targeted_items_deliver: Map<string, number>;
  readonly exact: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaModSettingPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly mod: string;
  readonly setting_type: string;
  readonly default_value: boolean | number | number | string;
  readonly minimum_value: number | number;
  readonly maximum_value: number | number;
  readonly allowed_values: string[] | number[] | number[];
  readonly allow_blank: boolean;
  readonly auto_trim: boolean;
  readonly hidden: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaModuleCategoryPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaNamedNoiseExpression {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly intended_property: string;
  readonly expression: NoiseExpression;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaNoiseLayerPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaParticlePrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly regular_trigger_effect: TriggerEffectItem;
  readonly ended_in_water_trigger_effect: TriggerEffectItem;
  readonly render_layer: RenderLayer;
  readonly render_layer_when_on_ground: RenderLayer;
  readonly life_time: number;
  readonly regular_trigger_effect_frequency: number;
  readonly movement_modifier_when_on_ground: number;
  readonly movement_modifier: number;
  readonly mining_particle_frame_speed: number;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaPermissionGroup {
  add_player: (player: PlayerSpecification) => boolean;
  remove_player: (player: PlayerSpecification) => boolean;
  allows_action: (arg_0: any) => boolean;
  set_allows_action: (param_0: any) => boolean;
  destroy: () => null;
  name: string;
  readonly players: LuaPlayer[];
  readonly group_id: number;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaPermissionGroups {
  create_group: (name?: null | string) => LuaPermissionGroup;
  get_group: (group: string | number) => LuaPermissionGroup;
  readonly groups: LuaPermissionGroup[];
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaPlayer extends LuaControl {
  set_ending_screen_data: (
    message: LocalisedString,
    file?: null | string
  ) => null;
  print: (message: LocalisedString, color?: null | Color) => null;
  clear_console: () => null;
  get_goal_description: () => null;
  set_goal_description: (
    text?: null | LocalisedString,
    only_update?: null | boolean
  ) => null;
  set_controller: (table_0: {
    type: typeof defines.controllers;
    character: null | LuaEntity;
    waypoints: {
      position: null | Position;
      target: null | (LuaEntity | LuaUnitGroup);
      transition_time: number;
      time_to_wait: number;
      zoom: null | number;
    };
    start_position: null | Position;
    start_zoom: null | number;
    final_transition_time: null | number;
    chart_mode_cutoff: null | number;
  }) => null;
  drag_wire: (table_0: { position: Position }) => boolean;
  disable_recipe_groups: () => null;
  enable_recipe_groups: () => null;
  disable_recipe_subgroups: () => null;
  enable_recipe_subgroups: () => null;
  print_entity_statistics: (entities?: null | string[]) => null;
  print_robot_jobs: () => null;
  print_lua_object_statistics: () => null;
  log_active_entity_chunk_counts: () => null;
  log_active_entity_counts: () => null;
  unlock_achievement: (name: string) => null;
  clear_cursor: () => null;
  create_character: (character?: null | string) => boolean;
  add_alert: (entity: LuaEntity, type: typeof defines.alert_type) => null;
  add_custom_alert: (
    entity: LuaEntity,
    icon: SignalID,
    message: LocalisedString,
    show_on_map: boolean
  ) => null;
  remove_alert: (table_0: {
    entity: null | LuaEntity;
    prototype: null | LuaEntityPrototype;
    position: null | Position;
    type: null | typeof defines.alert_type;
    surface: null | SurfaceSpecification;
    icon: null | SignalID;
    message: null | LocalisedString;
  }) => null;
  get_alerts: (table_0: {
    entity: null | LuaEntity;
    prototype: null | LuaEntityPrototype;
    position: null | Position;
    type: null | typeof defines.alert_type;
    surface: null | SurfaceSpecification;
  }) => Map<number, Map<typeof defines.alert_type, any[]>>;
  mute_alert: (alert_type: typeof defines.alert_type) => boolean;
  unmute_alert: (alert_type: typeof defines.alert_type) => boolean;
  is_alert_muted: (alert_type: typeof defines.alert_type) => boolean;
  enable_alert: (alert_type: typeof defines.alert_type) => boolean;
  disable_alert: (alert_type: typeof defines.alert_type) => boolean;
  is_alert_enabled: (alert_type: typeof defines.alert_type) => boolean;
  pipette_entity: (entity: string | LuaEntity | LuaEntityPrototype) => boolean;
  can_place_entity: (table_0: {
    name: string;
    position: Position;
    direction: null | typeof defines.direction;
  }) => boolean;
  can_build_from_cursor: (table_0: {
    position: Position;
    direction: null | typeof defines.direction;
    alt: null | boolean;
    terrain_building_size: null | number;
    skip_fog_of_war: null | boolean;
  }) => boolean;
  build_from_cursor: (table_0: {
    position: Position;
    direction: null | typeof defines.direction;
    alt: null | boolean;
    terrain_building_size: null | number;
    skip_fog_of_war: null | boolean;
  }) => null;
  use_from_cursor: (position: Position) => null;
  play_sound: (table_0: {
    path: SoundPath;
    position: null | Position;
    volume_modifier: null | number;
    override_sound_type: null | SoundType;
  }) => boolean;
  get_associated_characters: () => null;
  associate_character: (character: LuaEntity) => null;
  disassociate_character: (character: LuaEntity) => null;
  create_local_flying_text: (table_0: {
    text: LocalisedString;
    position: null | Position;
    create_at_cursor: null | boolean;
    color: null | Color;
    time_to_live: null | number;
    speed: null | number;
  }) => null;
  get_quick_bar_slot: (index: number) => LuaItemPrototype;
  set_quick_bar_slot: (
    index: number,
    filter: string | LuaItemPrototype | LuaItemStack
  ) => null;
  get_active_quick_bar_page: (index: number) => number;
  set_active_quick_bar_page: (screen_index: number, page_index: number) => null;
  jump_to_cutscene_waypoint: (waypoint_index: number) => null;
  exit_cutscene: () => null;
  open_map: (position: Position, scale?: null | number) => null;
  zoom_to_world: (position: Position, scale?: null | number) => null;
  close_map: () => null;
  is_shortcut_toggled: (prototype_name: string) => boolean;
  is_shortcut_available: (prototype_name: string) => boolean;
  set_shortcut_toggled: (prototype_name: string, toggled: boolean) => null;
  set_shortcut_available: (prototype_name: string, available: boolean) => null;
  connect_to_server: (table_0: {
    address: string;
    name: null | LocalisedString;
    description: null | LocalisedString;
    password: null | string;
  }) => null;
  toggle_map_editor: () => null;
  request_translation: (localised_string: LocalisedString) => boolean;
  get_infinity_inventory_filter: (index: number) => InfinityInventoryFilter;
  set_infinity_inventory_filter: (
    index: number,
    filter: InfinityInventoryFilter
  ) => null;
  clear_recipe_notifications: () => null;
  add_recipe_notification: (arg_0: string) => null;
  add_to_clipboard: (arg_0: LuaItemStack) => null;
  activate_paste: () => null;
  character: LuaEntity;
  readonly cutscene_character: LuaEntity;
  readonly index: number;
  readonly gui: LuaGui;
  readonly opened_self: boolean;
  readonly controller_type: typeof defines.controllers;
  readonly stashed_controller_type: typeof defines.controllers;
  game_view_settings: GameViewSettings;
  minimap_enabled: boolean;
  color: Color;
  chat_color: Color;
  readonly name: string;
  tag: string;
  readonly connected: boolean;
  admin: boolean;
  readonly entity_copy_source: LuaEntity;
  readonly afk_time: number;
  readonly online_time: number;
  readonly last_online: number;
  permission_group: LuaPermissionGroup;
  readonly mod_settings: Map<string, ModSetting>;
  ticks_to_respawn: number;
  readonly display_resolution: DisplayResolution;
  readonly display_scale: number;
  readonly blueprint_to_setup: LuaItemStack;
  readonly render_mode: typeof defines.render_mode;
  spectator: boolean;
  remove_unfiltered_items: boolean;
  infinity_inventory_filters: InfinityInventoryFilter[];
  readonly auto_sort_main_inventory: boolean;
  hand_location: ItemStackLocation;
  zoom: number;
  map_view_settings: MapViewSettings;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaProfiler {
  reset: () => null;
  stop: () => null;
  restart: () => null;
  add: (other: LuaProfiler) => null;
  divide: (number: number) => null;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaRCON {
  print: (message: LocalisedString) => null;
  readonly object_name: string;
}
/** @noSelf **/
interface LuaRailPath {
  readonly size: number;
  readonly current: number;
  readonly total_distance: number;
  readonly travelled_distance: number;
  readonly rails: Map<number, LuaEntity>;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaRandomGenerator {
  "operator ()": () => null;
  re_seed: (seed: number) => null;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaRecipe {
  reload: () => null;
  readonly name: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly prototype: LuaRecipePrototype;
  enabled: boolean;
  readonly category: string;
  readonly ingredients: Ingredient[];
  readonly products: Product[];
  readonly hidden: boolean;
  hidden_from_flow_stats: boolean;
  readonly energy: number;
  readonly order: string;
  readonly group: LuaGroup;
  readonly subgroup: LuaGroup;
  readonly force: LuaForce;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaRecipeCategoryPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaRecipePrototype {
  readonly enabled: boolean;
  readonly name: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly category: string;
  readonly ingredients: Ingredient[];
  readonly products: Product[];
  readonly main_product: Product;
  readonly hidden: boolean;
  readonly hidden_from_flow_stats: boolean;
  readonly hidden_from_player_crafting: boolean;
  readonly always_show_made_in: boolean;
  readonly energy: number;
  readonly order: string;
  readonly group: LuaGroup;
  readonly subgroup: LuaGroup;
  readonly request_paste_multiplier: number;
  readonly overload_multiplier: number;
  readonly allow_inserter_overload: boolean;
  readonly allow_as_intermediate: boolean;
  readonly allow_intermediates: boolean;
  readonly show_amount_in_title: boolean;
  readonly always_show_products: boolean;
  readonly emissions_multiplier: number;
  readonly allow_decomposition: boolean;
  readonly unlock_results: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaRemote {
  add_interface: (
    name: string,
    functions: Map<string, (...args: any[]) => any>
  ) => null;
  remove_interface: (name: string) => boolean;
  call: (intfc: string, fn: string, ...args: any[]) => any;
  readonly object_name: string;
  readonly interfaces: Map<string, Map<string, boolean>>;
}
/** @noSelf **/
interface LuaRendering {
  draw_line: (table_0: {
    color: Color;
    width: number;
    gap_length: null | number;
    dash_length: null | number;
    from: Position | LuaEntity;
    from_offset: null | Vector;
    to: Position | LuaEntity;
    to_offset: null | Vector;
    surface: SurfaceSpecification;
    time_to_live: null | number;
    forces: null | ForceSpecification[];
    players: null | PlayerSpecification[];
    visible: null | boolean;
    draw_on_ground: null | boolean;
    only_in_alt_mode: null | boolean;
  }) => number;
  draw_text: (table_0: {
    text: LocalisedString;
    surface: SurfaceSpecification;
    target: Position | LuaEntity;
    target_offset: null | Vector;
    color: Color;
    scale: null | number;
    font: null | string;
    time_to_live: null | number;
    forces: null | ForceSpecification[];
    players: null | PlayerSpecification[];
    visible: null | boolean;
    draw_on_ground: null | boolean;
    orientation: null | number;
    alignment: null | string;
    scale_with_zoom: null | boolean;
    only_in_alt_mode: null | boolean;
  }) => number;
  draw_circle: (table_0: {
    color: Color;
    radius: number;
    width: null | number;
    filled: boolean;
    target: Position | LuaEntity;
    target_offset: null | Vector;
    surface: SurfaceSpecification;
    time_to_live: null | number;
    forces: null | ForceSpecification[];
    players: null | PlayerSpecification[];
    visible: null | boolean;
    draw_on_ground: null | boolean;
    only_in_alt_mode: null | boolean;
  }) => number;
  draw_rectangle: (table_0: {
    color: Color;
    width: null | number;
    filled: boolean;
    left_top: Position | LuaEntity;
    left_top_offset: null | Vector;
    right_bottom: Position | LuaEntity;
    right_bottom_offset: null | Vector;
    surface: SurfaceSpecification;
    time_to_live: null | number;
    forces: null | ForceSpecification[];
    players: null | PlayerSpecification[];
    visible: null | boolean;
    draw_on_ground: null | boolean;
    only_in_alt_mode: null | boolean;
  }) => number;
  draw_arc: (table_0: {
    color: Color;
    max_radius: number;
    min_radius: number;
    start_angle: number;
    angle: number;
    target: Position | LuaEntity;
    target_offset: null | Vector;
    surface: SurfaceSpecification;
    time_to_live: null | number;
    forces: null | ForceSpecification[];
    players: null | PlayerSpecification[];
    visible: null | boolean;
    draw_on_ground: null | boolean;
    only_in_alt_mode: null | boolean;
  }) => number;
  draw_polygon: (table_0: {
    color: Color;
    table_1: { target: Position | LuaEntity; target_offset: null | Vector };
    target: null | (Position | LuaEntity);
    target_offset: null | Vector;
    orientation: null | number;
    orientation_target: null | (Position | LuaEntity);
    orientation_target_offset: null | Vector;
    surface: SurfaceSpecification;
    time_to_live: null | number;
    forces: null | ForceSpecification[];
    players: null | PlayerSpecification[];
    visible: null | boolean;
    draw_on_ground: null | boolean;
    only_in_alt_mode: null | boolean;
  }) => number;
  draw_sprite: (table_0: {
    sprite: SpritePath;
    orientation: null | number;
    x_scale: null | number;
    y_scale: null | number;
    tint: null | Color;
    render_layer: null | RenderLayer;
    orientation_target: null | (Position | LuaEntity);
    orientation_target_offset: null | Vector;
    oriented_offset: null | Vector;
    target: Position | LuaEntity;
    target_offset: null | Vector;
    surface: SurfaceSpecification;
    time_to_live: null | number;
    forces: null | ForceSpecification[];
    players: null | PlayerSpecification[];
    visible: null | boolean;
    only_in_alt_mode: null | boolean;
  }) => number;
  draw_light: (table_0: {
    sprite: SpritePath;
    orientation: null | number;
    scale: null | number;
    intensity: null | number;
    minimum_darkness: null | number;
    oriented: null | boolean;
    color: null | Color;
    target: Position | LuaEntity;
    target_offset: null | Vector;
    surface: SurfaceSpecification;
    time_to_live: null | number;
    forces: null | ForceSpecification[];
    players: null | PlayerSpecification[];
    visible: null | boolean;
    only_in_alt_mode: null | boolean;
  }) => number;
  draw_animation: (table_0: {
    animation: string;
    orientation: null | number;
    x_scale: null | number;
    y_scale: null | number;
    tint: null | Color;
    render_layer: null | RenderLayer;
    animation_speed: null | number;
    animation_offset: null | number;
    orientation_target: null | (Position | LuaEntity);
    orientation_target_offset: null | Vector;
    oriented_offset: null | Vector;
    target: Position | LuaEntity;
    target_offset: null | Vector;
    surface: SurfaceSpecification;
    time_to_live: null | number;
    forces: null | ForceSpecification[];
    players: null | PlayerSpecification[];
    visible: null | boolean;
    only_in_alt_mode: null | boolean;
  }) => number;
  destroy: (id: number) => null;
  is_font_valid: (font_name: string) => boolean;
  is_valid: (id: number) => boolean;
  get_all_ids: (mod_name?: null | string) => number[];
  clear: (mod_name?: null | string) => null;
  get_type: (id: number) => string;
  bring_to_front: (id: number) => null;
  get_surface: (id: number) => LuaSurface;
  get_time_to_live: (id: number) => number;
  set_time_to_live: (id: number, time_to_live: number) => null;
  get_forces: (id: number) => LuaForce[];
  set_forces: (id: number, forces: ForceSpecification[]) => null;
  get_players: (id: number) => LuaPlayer[];
  set_players: (id: number, players: PlayerSpecification[]) => null;
  get_visible: (id: number) => boolean;
  set_visible: (id: number, visible: boolean) => null;
  get_draw_on_ground: (id: number) => boolean;
  set_draw_on_ground: (id: number, draw_on_ground: boolean) => null;
  get_only_in_alt_mode: (id: number) => boolean;
  set_only_in_alt_mode: (id: number, only_in_alt_mode: boolean) => null;
  get_color: (id: number) => Color | null;
  set_color: (id: number, color: Color) => null;
  get_width: (id: number) => number | null;
  set_width: (id: number, width: number) => null;
  get_from: (id: number) => ScriptRenderTarget;
  set_from: (
    id: number,
    from: Position | LuaEntity,
    from_offset?: null | Vector
  ) => null;
  get_to: (id: number) => ScriptRenderTarget;
  set_to: (
    id: number,
    to: Position | LuaEntity,
    to_offset?: null | Vector
  ) => null;
  get_dash_length: (id: number) => number;
  set_dash_length: (id: number, dash_length: number) => null;
  get_gap_length: (id: number) => number;
  set_gap_length: (id: number, gap_length: number) => null;
  set_dashes: (id: number, dash_length: number, gap_length: number) => null;
  get_target: (id: number) => ScriptRenderTarget;
  set_target: (
    id: number,
    target: Position | LuaEntity,
    target_offset?: null | Vector
  ) => null;
  get_orientation: (id: number) => number;
  set_orientation: (id: number, orientation: number) => null;
  get_scale: (id: number) => number;
  set_scale: (id: number, scale: number) => null;
  get_text: (id: number) => LocalisedString;
  set_text: (id: number, text: LocalisedString) => null;
  get_font: (id: number) => string;
  set_font: (id: number, font: string) => null;
  get_alignment: (id: number) => string;
  set_alignment: (id: number, alignment: string) => null;
  get_scale_with_zoom: (id: number) => boolean;
  set_scale_with_zoom: (id: number, scale_with_zoom: boolean) => null;
  get_filled: (id: number) => boolean;
  set_filled: (id: number, filled: boolean) => null;
  get_radius: (id: number) => number;
  set_radius: (id: number, radius: number) => null;
  get_left_top: (id: number) => ScriptRenderTarget;
  set_left_top: (
    id: number,
    left_top: Position | LuaEntity,
    left_top_offset?: null | Vector
  ) => null;
  get_right_bottom: (id: number) => ScriptRenderTarget;
  set_right_bottom: (
    id: number,
    right_bottom: Position | LuaEntity,
    right_bottom_offset?: null | Vector
  ) => null;
  set_corners: (
    id: number,
    left_top: Position | LuaEntity,
    left_top_offset: Vector,
    right_bottom: Position | LuaEntity,
    right_bottom_offset: Vector
  ) => null;
  get_max_radius: (id: number) => number;
  set_max_radius: (id: number, max_radius: number) => null;
  get_min_radius: (id: number) => number;
  set_min_radius: (id: number, min_radius: number) => null;
  get_start_angle: (id: number) => number;
  set_start_angle: (id: number, start_angle: number) => null;
  get_angle: (id: number) => number;
  set_angle: (id: number, angle: number) => null;
  get_vertices: (id: number) => ScriptRenderTarget[];
  set_vertices: (id: number, vertices: ScriptRenderTarget[]) => null;
  get_sprite: (id: number) => SpritePath;
  set_sprite: (id: number, sprite: SpritePath) => null;
  get_x_scale: (id: number) => number;
  set_x_scale: (id: number, x_scale: number) => null;
  get_y_scale: (id: number) => number;
  set_y_scale: (id: number, y_scale: number) => null;
  get_render_layer: (id: number) => RenderLayer;
  set_render_layer: (id: number, render_layer: RenderLayer) => null;
  get_orientation_target: (id: number) => ScriptRenderTarget;
  set_orientation_target: (
    id: number,
    orientation_target: Position | LuaEntity,
    orientation_target_offset?: null | Vector
  ) => null;
  get_oriented_offset: (id: number) => Vector;
  set_oriented_offset: (id: number, oriented_offset: Vector) => null;
  get_intensity: (id: number) => number;
  set_intensity: (id: number, intensity: number) => null;
  get_minimum_darkness: (id: number) => number;
  set_minimum_darkness: (id: number, minimum_darkness: number) => null;
  get_oriented: (id: number) => boolean;
  set_oriented: (id: number, oriented: boolean) => null;
  get_animation: (id: number) => string;
  set_animation: (id: number, animation: string) => null;
  get_animation_speed: (id: number) => number;
  set_animation_speed: (id: number, animation_speed: number) => null;
  get_animation_offset: (id: number) => number;
  set_animation_offset: (id: number, animation_offset: number) => null;
  readonly object_name: string;
}
/** @noSelf **/
interface LuaResourceCategoryPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaSettings {
  get_player_settings: (player: PlayerSpecification) => Map<string, ModSetting>;
  readonly object_name: string;
  readonly startup: Map<string, ModSetting>;
  readonly global: Map<string, ModSetting>;
  readonly player: Map<string, ModSetting>;
}
/** @noSelf **/
interface LuaShortcutPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly action: string;
  readonly item_to_spawn: LuaItemPrototype;
  readonly technology_to_unlock: LuaTechnologyPrototype;
  readonly toggleable: boolean;
  readonly associated_control_input: string;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaStyle {
  readonly gui: LuaGui;
  readonly name: string;
  minimal_width: number;
  maximal_width: number;
  minimal_height: number;
  maximal_height: number;
  natural_width: number;
  natural_height: number;
  top_padding: number;
  right_padding: number;
  bottom_padding: number;
  left_padding: number;
  top_margin: number;
  right_margin: number;
  bottom_margin: number;
  left_margin: number;
  horizontal_align: string;
  vertical_align: string;
  font_color: Color;
  font: string;
  top_cell_padding: number;
  right_cell_padding: number;
  bottom_cell_padding: number;
  left_cell_padding: number;
  horizontally_stretchable: boolean;
  vertically_stretchable: boolean;
  horizontally_squashable: boolean;
  vertically_squashable: boolean;
  rich_text_setting: typeof defines.rich_text_setting;
  hovered_font_color: Color;
  clicked_font_color: Color;
  disabled_font_color: Color;
  pie_progress_color: Color;
  clicked_vertical_offset: number;
  selected_font_color: Color;
  selected_hovered_font_color: Color;
  selected_clicked_font_color: Color;
  strikethrough_color: Color;
  horizontal_spacing: number;
  vertical_spacing: number;
  use_header_filler: boolean;
  color: Color;
  readonly column_alignments: any;
  single_line: boolean;
  extra_top_padding_when_activated: number;
  extra_bottom_padding_when_activated: number;
  extra_left_padding_when_activated: number;
  extra_right_padding_when_activated: number;
  extra_top_margin_when_activated: number;
  extra_bottom_margin_when_activated: number;
  extra_left_margin_when_activated: number;
  extra_right_margin_when_activated: number;
  stretch_image_to_widget_size: boolean;
  badge_font: string;
  badge_horizontal_spacing: number;
  default_badge_font_color: Color;
  selected_badge_font_color: Color;
  disabled_badge_font_color: Color;
  width: number;
  height: number;
  size: number | number[];
  padding: number | number[];
  margin: number | number[];
  cell_padding: number;
  extra_padding_when_activated: number | number[];
  extra_margin_when_activated: number | number[];
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaSurface {
  get_pollution: (position: Position) => number;
  can_place_entity: (table_0: {
    name: string;
    position: Position;
    direction: null | typeof defines.direction;
    force: null | ForceSpecification;
    build_check_type: null | typeof defines.build_check_type;
    forced: null | boolean;
  }) => boolean;
  can_fast_replace: (table_0: {
    name: string;
    position: Position;
    direction: null | typeof defines.direction;
    force: null | ForceSpecification;
  }) => boolean;
  find_entity: (entity: string, position: Position) => LuaEntity;
  find_entities: (area?: null | BoundingBox) => LuaEntity[];
  find_entities_filtered: (table_0: {
    area: null | BoundingBox;
    position: null | Position;
    radius: null | number;
    name: null | (string | string[]);
    type: null | (string | string[]);
    ghost_name: null | (string | string[]);
    ghost_type: null | (string | string[]);
    direction: null | (typeof defines.direction | typeof defines.direction[]);
    collision_mask: null | (CollisionMaskLayer | CollisionMaskLayer[]);
    force: null | (ForceSpecification | ForceSpecification[]);
    to_be_deconstructed: null | boolean;
    to_be_upgraded: null | boolean;
    limit: null | number;
    invert: null | boolean;
  }) => LuaEntity[];
  find_tiles_filtered: (table_0: {
    area: null | BoundingBox;
    position: null | Position;
    radius: null | number;
    name: null | (string | string[]);
    limit: null | number;
    has_hidden_tile: null | boolean;
    collision_mask: null | (CollisionMaskLayer | CollisionMaskLayer[]);
  }) => LuaTile[];
  count_entities_filtered: (table_0: {
    area: null | BoundingBox;
    position: null | Position;
    radius: null | number;
    name: null | (string | string[]);
    type: null | (string | string[]);
    ghost_name: null | (string | string[]);
    ghost_type: null | (string | string[]);
    direction: null | (typeof defines.direction | typeof defines.direction[]);
    collision_mask: null | (CollisionMaskLayer | CollisionMaskLayer[]);
    force: null | (ForceSpecification | ForceSpecification[]);
    to_be_deconstructed: null | boolean;
    to_be_upgraded: null | boolean;
    limit: null | number;
    invert: null | boolean;
  }) => number;
  count_tiles_filtered: (table_0: {
    area: null | BoundingBox;
    position: null | Position;
    radius: null | number;
    name: null | (string | string[]);
    limit: null | number;
    has_hidden_tile: null | boolean;
    collision_mask: null | (CollisionMaskLayer | CollisionMaskLayer[]);
  }) => number;
  find_non_colliding_position: (
    name: string,
    center: Position,
    radius: number,
    precision: number,
    force_to_tile_center?: null | boolean
  ) => Position;
  find_non_colliding_position_in_box: (
    name: string,
    search_space: BoundingBox,
    precision: number,
    force_to_tile_center?: null | boolean
  ) => Position;
  spill_item_stack: (
    position: Position,
    items: ItemStackSpecification,
    enable_looted?: null | boolean,
    force?: null | (LuaForce | string),
    allow_belts?: null | boolean
  ) => LuaEntity[];
  find_enemy_units: (
    center: Position,
    radius: number,
    force?: null | (LuaForce | string)
  ) => LuaEntity[];
  find_units: (table_0: {
    area: BoundingBox;
    force: LuaForce | string;
    condition: ForceCondition;
  }) => LuaEntity[];
  find_nearest_enemy: (table_0: {
    position: Position;
    max_distance: number;
    force: null | ForceSpecification;
  }) => LuaEntity | null;
  set_multi_command: (table_0: {
    command: Command;
    unit_count: number;
    force: null | ForceSpecification;
    unit_search_distance: null | number;
  }) => number;
  create_entity: (table_0: {
    name: string;
    position: Position;
    direction: null | typeof defines.direction;
    force: null | ForceSpecification;
    target: null | LuaEntity;
    source: null | LuaEntity;
    fast_replace: null | boolean;
    player: null | PlayerSpecification;
    spill: null | boolean;
    raise_built: null | boolean;
    create_build_effect_smoke: null | boolean;
    spawn_decorations: null | boolean;
    item: null | LuaItemStack;
  }) => LuaEntity | null;
  create_trivial_smoke: (table_0: { name: string; position: Position }) => null;
  create_particle: (table_0: {
    name: string;
    position: Position;
    movement: Vector;
    height: number;
    vertical_speed: number;
    frame_speed: number;
  }) => null;
  create_unit_group: (table_0: {
    position: Position;
    force: null | ForceSpecification;
  }) => LuaUnitGroup;
  build_enemy_base: (
    position: Position,
    unit_count: number,
    force?: null | ForceSpecification
  ) => null;
  get_tile: (x: number, y: number) => LuaTile;
  set_tiles: (
    table_0: { name: string; position: Position },
    correct_tiles?: null | boolean,
    remove_colliding_entities?: null | (boolean | string),
    remove_colliding_decoratives?: null | boolean,
    raise_event?: null | boolean
  ) => null;
  pollute: (source: Position, amount: number) => null;
  get_chunks: () => null;
  is_chunk_generated: (position: ChunkPosition) => boolean;
  request_to_generate_chunks: (position: Position, radius: number) => null;
  force_generate_chunk_requests: () => null;
  set_chunk_generated_status: (
    position: ChunkPosition,
    status: typeof defines.chunk_generated_status
  ) => null;
  find_logistic_network_by_position: (
    position: Position,
    force: ForceSpecification
  ) => LuaLogisticNetwork | null;
  find_logistic_networks_by_construction_area: (
    position: Position,
    force: ForceSpecification
  ) => LuaLogisticNetwork[];
  deconstruct_area: (table_0: {
    area: BoundingBox;
    force: ForceSpecification;
    player: null | PlayerSpecification;
    skip_fog_of_war: null | boolean;
    item: null | LuaItemStack;
  }) => null;
  cancel_deconstruct_area: (table_0: {
    area: BoundingBox;
    force: ForceSpecification;
    player: null | PlayerSpecification;
    skip_fog_of_war: null | boolean;
    item: null | LuaItemStack;
  }) => null;
  upgrade_area: (table_0: {
    area: BoundingBox;
    force: ForceSpecification;
    player: null | PlayerSpecification;
    skip_fog_of_war: null | boolean;
    item: LuaItemStack;
  }) => null;
  cancel_upgrade_area: (table_0: {
    area: BoundingBox;
    force: ForceSpecification;
    player: null | PlayerSpecification;
    skip_fog_of_war: null | boolean;
    item: null | LuaItemStack;
  }) => null;
  get_hidden_tile: (position: TilePosition) => string;
  set_hidden_tile: (
    position: TilePosition,
    tile: string | LuaTilePrototype
  ) => null;
  get_connected_tiles: (position: Position, tiles: string[]) => Position[];
  delete_chunk: (position: ChunkPosition) => null;
  regenerate_entity: (
    entities?: null | (string | string[]),
    chunks?: null | ChunkPosition[]
  ) => null;
  regenerate_decorative: (
    decoratives?: null | (string | string[]),
    chunks?: null | ChunkPosition[]
  ) => null;
  print: (message: LocalisedString, color?: null | Color) => null;
  destroy_decoratives: (table_0: {
    area: null | BoundingBox;
    position: null | TilePosition;
    name:
      | null
      | (string | string[] | LuaDecorativePrototype | LuaDecorativePrototype[]);
    limit: null | number;
    invert: null | boolean;
  }) => null;
  create_decoratives: (table_0: {
    check_collision: null | boolean;
    decoratives: any[];
  }) => null;
  find_decoratives_filtered: (table_0: {
    area: null | BoundingBox;
    position: null | TilePosition;
    name:
      | null
      | (string | string[] | LuaDecorativePrototype | LuaDecorativePrototype[]);
    limit: null | number;
    invert: null | boolean;
  }) => any[];
  get_trains: (force?: null | ForceSpecification) => LuaTrain[];
  clear_pollution: () => null;
  play_sound: (table_0: {
    path: SoundPath;
    position: null | Position;
    volume_modifier: null | number;
    override_sound_type: null | SoundType;
  }) => boolean;
  get_resource_counts: () => null;
  get_random_chunk: () => null;
  clone_area: (table_0: {
    source_area: BoundingBox;
    destination_area: BoundingBox;
    destination_surface: null | SurfaceSpecification;
    destination_force: null | (LuaForce | string);
    clone_tiles: null | boolean;
    clone_entities: null | boolean;
    clone_decoratives: null | boolean;
    clear_destination_entities: null | boolean;
    clear_destination_decoratives: null | boolean;
    expand_map: null | boolean;
    create_build_effect_smoke: null | boolean;
  }) => null;
  clone_brush: (table_0: {
    source_offset: TilePosition;
    destination_offset: TilePosition;
    source_positions: TilePosition[];
    destination_surface: null | SurfaceSpecification;
    destination_force: null | (LuaForce | string);
    clone_tiles: null | boolean;
    clone_entities: null | boolean;
    clone_decoratives: null | boolean;
    clear_destination_entities: null | boolean;
    clear_destination_decoratives: null | boolean;
    expand_map: null | boolean;
    manual_collision_mode: null | boolean;
    create_build_effect_smoke: null | boolean;
  }) => null;
  clone_entities: (table_0: {
    entities: LuaEntity[];
    destination_offset: Vector;
    destination_surface: null | SurfaceSpecification;
    destination_force: null | ForceSpecification;
    snap_to_grid: null | boolean;
    create_build_effect_smoke: null | boolean;
  }) => null;
  clear: (ignore_characters?: null | boolean) => null;
  request_path: (table_0: {
    bounding_box: BoundingBox;
    collision_mask: CollisionMask | string[];
    start: Position;
    goal: Position;
    force: LuaForce | string;
    radius: null | number;
    pathfind_flags: null | PathFindFlags;
    can_open_gates: null | boolean;
    path_resolution_modifier: null | number;
    entity_to_ignore: null | LuaEntity;
  }) => number;
  get_script_areas: (name?: null | string) => ScriptArea[];
  get_script_area: (key?: null | (string | number)) => ScriptArea;
  edit_script_area: (id: number, area: ScriptArea) => null;
  add_script_area: (area: ScriptArea) => number;
  remove_script_area: (id: number) => boolean;
  get_script_positions: (name?: null | string) => ScriptPosition[];
  get_script_position: (key?: null | (string | number)) => ScriptPosition;
  edit_script_position: (id: number, area: ScriptPosition) => null;
  add_script_position: (area: ScriptPosition) => number;
  remove_script_position: (id: number) => boolean;
  get_map_exchange_string: () => null;
  get_starting_area_radius: () => null;
  get_closest: (position: Position, entities: LuaEntity[]) => LuaEntity;
  get_train_stops: (opts?: {
    name: null | (string | string[]);
    force: null | ForceSpecification;
  }) => LuaEntity[];
  get_total_pollution: () => null;
  entity_prototype_collides: (
    prototype: EntityPrototypeSpecification,
    position: Position,
    use_map_generation_bounding_box: boolean,
    direction?: null | typeof defines.direction
  ) => null;
  decorative_prototype_collides: (
    prototype: string,
    position: Position
  ) => null;
  calculate_tile_properties: (
    property_names: string[],
    positions: Position[]
  ) => Map<string, number[]>;
  get_entities_with_force: (
    position: ChunkPosition,
    force: LuaForce | string
  ) => LuaEntity[];
  build_checkerboard: (area: BoundingBox) => null;
  name: string;
  readonly index: number;
  map_gen_settings: MapGenSettings;
  generate_with_lab_tiles: boolean;
  always_day: boolean;
  daytime: number;
  readonly darkness: number;
  wind_speed: number;
  wind_orientation: number;
  wind_orientation_change: number;
  peaceful_mode: boolean;
  freeze_daytime: boolean;
  ticks_per_day: number;
  dusk: number;
  dawn: number;
  evening: number;
  morning: number;
  solar_power_multiplier: number;
  min_brightness: number;
  brightness_visual_weights: ColorModifier;
  show_clouds: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaTechnology {
  reload: () => null;
  readonly force: LuaForce;
  readonly name: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly prototype: LuaTechnologyPrototype;
  enabled: boolean;
  visible_when_disabled: boolean;
  readonly upgrade: boolean;
  researched: boolean;
  readonly prerequisites: Map<string, LuaTechnology>;
  readonly research_unit_ingredients: Ingredient[];
  readonly effects: Modifier[];
  readonly research_unit_count: number;
  readonly research_unit_energy: number;
  readonly order: string;
  level: number;
  readonly research_unit_count_formula: string;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaTechnologyPrototype {
  readonly name: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly enabled: boolean;
  readonly hidden: boolean;
  readonly visible_when_disabled: boolean;
  readonly ignore_tech_cost_multiplier: boolean;
  readonly upgrade: boolean;
  readonly prerequisites: Map<string, LuaTechnologyPrototype>;
  readonly research_unit_ingredients: Ingredient[];
  readonly effects: Modifier[];
  readonly research_unit_count: number;
  readonly research_unit_energy: number;
  readonly order: string;
  readonly level: number;
  readonly max_level: number;
  readonly research_unit_count_formula: string;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaTile {
  collides_with: (layer: CollisionMaskLayer) => boolean;
  to_be_deconstructed: () => null;
  order_deconstruction: (
    force: ForceSpecification,
    player?: null | PlayerSpecification
  ) => LuaEntity | null;
  cancel_deconstruction: (
    force: ForceSpecification,
    player?: null | PlayerSpecification
  ) => null;
  readonly name: string;
  readonly prototype: LuaTilePrototype;
  readonly position: Position;
  readonly hidden_tile: string;
  readonly surface: LuaSurface;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaTilePrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly collision_mask: CollisionMask;
  readonly collision_mask_with_flags: CollisionMaskWithFlags;
  readonly layer: number;
  readonly autoplace_specification: AutoplaceSpecification;
  readonly walking_speed_modifier: number;
  readonly vehicle_friction_modifier: number;
  readonly map_color: Color;
  readonly decorative_removal_probability: number;
  readonly automatic_neighbors: boolean;
  readonly allowed_neighbors: Map<string, LuaTilePrototype>;
  readonly needs_correction: boolean;
  readonly mineable_properties: any;
  readonly next_direction: LuaTilePrototype;
  readonly items_to_place_this: SimpleItemStack[];
  readonly can_be_part_of_blueprint: boolean;
  readonly emissions_per_second: number;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaTrain {
  get_item_count: (item?: null | string) => number;
  get_contents: () => null;
  remove_item: (stack: ItemStackSpecification) => number;
  insert: (stack: ItemStackSpecification) => null;
  clear_items_inside: () => null;
  recalculate_path: (force?: null | boolean) => boolean;
  get_fluid_count: (fluid?: null | string) => number;
  get_fluid_contents: () => null;
  remove_fluid: (fluid: Fluid) => number;
  insert_fluid: (fluid: Fluid) => number;
  clear_fluids_inside: () => null;
  go_to_station: (index: number) => null;
  get_rails: () => null;
  manual_mode: boolean;
  speed: number;
  readonly max_forward_speed: number;
  readonly max_backward_speed: number;
  readonly weight: number;
  readonly carriages: LuaEntity[];
  readonly locomotives: Map<string, LuaEntity[]>;
  readonly cargo_wagons: LuaEntity[];
  readonly fluid_wagons: LuaEntity[];
  schedule: TrainSchedule;
  readonly state: typeof defines.train_state;
  readonly front_rail: LuaEntity;
  readonly back_rail: LuaEntity;
  readonly rail_direction_from_front_rail: typeof defines.rail_direction;
  readonly rail_direction_from_back_rail: typeof defines.rail_direction;
  readonly front_stock: LuaEntity;
  readonly back_stock: LuaEntity;
  readonly station: LuaEntity;
  readonly has_path: boolean;
  readonly path_end_rail: LuaEntity;
  readonly path_end_stop: LuaEntity;
  readonly id: number;
  readonly passengers: LuaPlayer[];
  readonly riding_state: RidingState;
  readonly killed_players: Map<number, number>;
  readonly kill_count: number;
  readonly path: LuaRailPath;
  readonly signal: LuaEntity;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaTransportLine {
  clear: () => null;
  get_item_count: (item?: null | string) => number;
  remove_item: (items: ItemStackSpecification) => number;
  can_insert_at: (position: number) => boolean;
  can_insert_at_back: () => null;
  insert_at: (position: number, items: ItemStackSpecification) => boolean;
  insert_at_back: (items: ItemStackSpecification) => boolean;
  get_contents: () => null;
  line_equals: (other: LuaTransportLine) => boolean;
  readonly "operator #": number;
  readonly owner: LuaEntity;
  readonly output_lines: LuaTransportLine[];
  readonly input_lines: LuaTransportLine[];
  readonly "operator []": LuaItemStack;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaTrivialSmokePrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly color: Color;
  readonly start_scale: number;
  readonly end_scale: number;
  readonly movement_slow_down_factor: number;
  readonly duration: number;
  readonly spread_duration: number;
  readonly fade_away_duration: number;
  readonly fade_in_duration: number;
  readonly glow_fade_away_duration: number;
  readonly cyclic: boolean;
  readonly affected_by_wind: boolean;
  readonly show_when_smoke_off: boolean;
  readonly glow_animation: boolean;
  readonly render_layer: RenderLayer;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaUnitGroup {
  add_member: (unit: LuaEntity) => null;
  set_command: (command: Command) => null;
  set_autonomous: () => null;
  start_moving: () => null;
  destroy: () => null;
  readonly members: LuaEntity[];
  readonly position: Position;
  readonly state: typeof defines.group_state;
  readonly force: LuaForce;
  readonly surface: LuaSurface;
  readonly group_number: number;
  readonly is_script_driven: boolean;
  readonly command: Command;
  readonly distraction_command: Command;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaVirtualSignalPrototype {
  readonly name: string;
  readonly order: string;
  readonly localised_name: LocalisedString;
  readonly localised_description: LocalisedString;
  readonly special: boolean;
  readonly subgroup: LuaGroup;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** @noSelf **/
interface LuaVoidEnergySourcePrototype {
  readonly emissions: number;
  readonly render_no_network_icon: boolean;
  readonly render_no_power_icon: boolean;
  readonly valid: boolean;
  readonly object_name: string;
  help: () => null;
}
/** events */

/**
 * 
 It is fired once every tick. Since this event is fired every tick, its handler shouldn&#x27;t
 include performance heavy code.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_tick on_tick}
 */
type OnTickPayload /** @noSelf **/ = {};

/**
 *  Called when a unit/group completes a command.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_ai_command_completed on_ai_command_completed}
 */
type OnAiCommandCompletedPayload /** @noSelf **/ = {
  unit_number: number;
  result: typeof defines.behavior_result;
  was_distracted: boolean;
};

/**
 *  Called when an area of the map is cloned.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_area_cloned on_area_cloned}
 */
type OnAreaClonedPayload /** @noSelf **/ = {
  source_surface: LuaSurface;
  source_area: BoundingBox;
  destination_surface: LuaSurface;
  destination_area: BoundingBox;
  destination_force: null | LuaForce;
  clone_tiles: boolean;
  clone_entities: boolean;
  clone_decoratives: boolean;
  clear_destination_entities: boolean;
  clear_destination_decoratives: boolean;
};

/**
 *  Called when a biter migration builds a base.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_biter_base_built on_biter_base_built}
 */
type OnBiterBaseBuiltPayload /** @noSelf **/ = { entity: LuaEntity };

/**
 *  Called when a set of positions on the map is cloned.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_brush_cloned on_brush_cloned}
 */
type OnBrushClonedPayload /** @noSelf **/ = {
  source_offset: TilePosition;
  destination_offset: TilePosition;
  source_surface: LuaSurface;
  source_positions: TilePosition[];
  destination_surface: LuaSurface;
  destination_force: null | LuaForce;
  clone_tiles: boolean;
  clone_entities: boolean;
  clone_decoratives: boolean;
  clear_destination_entities: boolean;
  clear_destination_decoratives: boolean;
};

/**
 *  Called when a <a href="defines.html#defines.command.build_base">defines.command.build_base</a> command reaches its destination, and before building starts.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_build_base_arrived on_build_base_arrived}
 */
type OnBuildBaseArrivedPayload /** @noSelf **/ = {
  unit: null | LuaEntity;
  group: null | LuaUnitGroup;
};

/**
 *  Called when player builds something.
 Can be filtered using <a href="Event-Filters.html#LuaPlayerBuiltEntityEventFilters">LuaPlayerBuiltEntityEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_built_entity on_built_entity}
 */
type OnBuiltEntityPayload /** @noSelf **/ = {
  created_entity: LuaEntity;
  player_index: number;
  stack: LuaItemStack;
  item: null | LuaItemPrototype;
  tags: null | Tags;
};

/**
 *  Called when the deconstruction of an entity is canceled.
 Can be filtered using <a href="Event-Filters.html#LuaEntityDeconstructionCancelledEventFilters">LuaEntityDeconstructionCancelledEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_cancelled_deconstruction on_cancelled_deconstruction}
 */
type OnCancelledDeconstructionPayload /** @noSelf **/ = {
  entity: LuaEntity;
  player_index: null | number;
};

/**
 *  Called when the upgrade of an entity is canceled.
 Can be filtered using <a href="Event-Filters.html#LuaUpgradeCancelledEventFilters">LuaUpgradeCancelledEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_cancelled_upgrade on_cancelled_upgrade}
 */
type OnCancelledUpgradePayload /** @noSelf **/ = {
  entity: LuaEntity;
  player_index: null | number;
};

/**
 *  Called when a character corpse expires due to timeout or all of the items being removed from it.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_character_corpse_expired on_character_corpse_expired}
 */
type OnCharacterCorpseExpiredPayload /** @noSelf **/ = { corpse: LuaEntity };

/**
 *  Called when a chart tag is created.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_chart_tag_added on_chart_tag_added}
 */
type OnChartTagAddedPayload /** @noSelf **/ = {
  tag: LuaCustomChartTag;
  force: LuaForce;
  player_index: null | number;
};

/**
 *  Called when a chart tag is modified by a player.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_chart_tag_modified on_chart_tag_modified}
 */
type OnChartTagModifiedPayload /** @noSelf **/ = {
  tag: LuaCustomChartTag;
  player_index: null | number;
  force: LuaForce;
  old_text: string;
  old_icon: SignalID;
  old_player_index: null | number;
};

/**
 *  Called just before a chart tag is deleted.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_chart_tag_removed on_chart_tag_removed}
 */
type OnChartTagRemovedPayload /** @noSelf **/ = {
  tag: LuaCustomChartTag;
  force: LuaForce;
  player_index: null | number;
};

/**
 *  Called when a chunk is charted or re-charted.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_chunk_charted on_chunk_charted}
 */
type OnChunkChartedPayload /** @noSelf **/ = {
  surface_index: number;
  position: ChunkPosition;
  area: BoundingBox;
  force: LuaForce;
};

/**
 *  Called when one or more chunks are deleted using <a href="LuaSurface.html#LuaSurface.delete_chunk">LuaSurface::delete_chunk</a>.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_chunk_deleted on_chunk_deleted}
 */
type OnChunkDeletedPayload /** @noSelf **/ = {
  surface_index: number;
  positions: ChunkPosition[];
};

/**
 *  Called when a chunk is generated.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_chunk_generated on_chunk_generated}
 */
type OnChunkGeneratedPayload /** @noSelf **/ = {
  area: BoundingBox;
  position: ChunkPosition;
  surface: LuaSurface;
};

/**
 *  Called when a combat robot expires through a lack of energy, or timeout.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_combat_robot_expired on_combat_robot_expired}
 */
type OnCombatRobotExpiredPayload /** @noSelf **/ = {
  robot: LuaEntity;
  owner: null | LuaEntity;
};

/**
 *  Called when someone talks in-game either a player or through the server interface.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_console_chat on_console_chat}
 */
type OnConsoleChatPayload /** @noSelf **/ = {
  player_index: null | number;
  message: string;
};

/**
 *  Called when someone enters a command-like message regardless of it being a valid command.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_console_command on_console_command}
 */
type OnConsoleCommandPayload /** @noSelf **/ = {
  player_index: null | number;
  command: string;
  parameters: string;
};

/**
 *  Called when a cutscene for a player is cancelled.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_cutscene_cancelled on_cutscene_cancelled}
 */
type OnCutsceneCancelledPayload /** @noSelf **/ = { player_index: number };

/**
 *  Called when a cutscene is playing, each time it reaches a waypoint in that cutscene.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_cutscene_waypoint_reached on_cutscene_waypoint_reached}
 */
type OnCutsceneWaypointReachedPayload /** @noSelf **/ = {
  player_index: number;
  waypoint_index: number;
};

/**
 *  Called when the map difficulty settings are changed.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_difficulty_settings_changed on_difficulty_settings_changed}
 */
type OnDifficultySettingsChangedPayload /** @noSelf **/ = {
  old_recipe_difficulty: number;
  old_technology_difficulty: number;
};

/**
 *  Called when an entity is cloned. Can be filtered for the source entity using <a href="Event-Filters.html#LuaEntityClonedEventFilters">LuaEntityClonedEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_entity_cloned on_entity_cloned}
 */
type OnEntityClonedPayload /** @noSelf **/ = {
  source: LuaEntity;
  destination: LuaEntity;
};

/**
 *  Called when an entity is damaged.
 Can be filtered using <a href="Event-Filters.html#LuaEntityDamagedEventFilters">LuaEntityDamagedEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_entity_damaged on_entity_damaged}
 */
type OnEntityDamagedPayload /** @noSelf **/ = {
  entity: LuaEntity;
  damage_type: LuaDamagePrototype;
  original_damage_amount: number;
  final_damage_amount: number;
  final_health: number;
  cause: null | LuaEntity;
  force: null | LuaForce;
};

/**
 *  Called after an entity is destroyed that has been registered with <a href="LuaBootstrap.html#LuaBootstrap.register_on_entity_destroyed">LuaBootstrap::register_on_entity_destroyed</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_entity_destroyed on_entity_destroyed}
 */
type OnEntityDestroyedPayload /** @noSelf **/ = {
  registration_number: number;
  unit_number: null | number;
};

/**
 *  Called when an entity dies.
 Can be filtered using <a href="Event-Filters.html#LuaEntityDiedEventFilters">LuaEntityDiedEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_entity_died on_entity_died}
 */
type OnEntityDiedPayload /** @noSelf **/ = {
  entity: LuaEntity;
  cause: null | LuaEntity;
  loot: LuaInventory;
  force: null | LuaForce;
  damage_type: null | LuaDamagePrototype;
};

/**
 *  Called after an entity has been renamed either by the player or through script.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_entity_renamed on_entity_renamed}
 */
type OnEntityRenamedPayload /** @noSelf **/ = {
  player_index: null | number;
  by_script: boolean;
  entity: LuaEntity;
  old_name: string;
};

/**
 *  Called after entity copy-paste is done.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_entity_settings_pasted on_entity_settings_pasted}
 */
type OnEntitySettingsPastedPayload /** @noSelf **/ = {
  player_index: number;
  source: LuaEntity;
  destination: LuaEntity;
};

/**
 *  Called when an entity is spawned by a EnemySpawner
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_entity_spawned on_entity_spawned}
 */
type OnEntitySpawnedPayload /** @noSelf **/ = {
  spawner: LuaEntity;
  entity: LuaEntity;
};

/**
 *  Called when the a forces cease fire values change.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_force_cease_fire_changed on_force_cease_fire_changed}
 */
type OnForceCeaseFireChangedPayload /** @noSelf **/ = {
  force: LuaForce;
  other_force: LuaForce;
  added: boolean;
};

/**
 *  Called when a new force is created using <code>game.create_force()</code>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_force_created on_force_created}
 */
type OnForceCreatedPayload /** @noSelf **/ = { force: LuaForce };

/**
 *  Called when the a forces friends change.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_force_friends_changed on_force_friends_changed}
 */
type OnForceFriendsChangedPayload /** @noSelf **/ = {
  force: LuaForce;
  other_force: LuaForce;
  added: boolean;
};

/**
 *  Called when <a href="LuaForce.html#LuaForce.reset">LuaForce::reset</a> is finished.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_force_reset on_force_reset}
 */
type OnForceResetPayload /** @noSelf **/ = { force: LuaForce };

/**
 *  Called after two forces have been merged using <code>game.merge_forces()</code>.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_forces_merged on_forces_merged}
 */
type OnForcesMergedPayload /** @noSelf **/ = {
  source_name: string;
  source_index: number;
  destination: LuaForce;
};

/**
 *  Called when two forces are about to be merged using <code>game.merge_forces()</code>.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_forces_merging on_forces_merging}
 */
type OnForcesMergingPayload /** @noSelf **/ = {
  source: LuaForce;
  destination: LuaForce;
};

/**
 *  Called when a game is created from a scenario.

 * {@link https://lua-api.factorio.com/latest/events.html#on_game_created_from_scenario on_game_created_from_scenario}
 */
type OnGameCreatedFromScenarioPayload /** @noSelf **/ = {};

/**
 *  Called when <a href="LuaGuiElement.html">LuaGuiElement</a> checked state is changed (related to checkboxes and radio buttons).
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_gui_checked_state_changed on_gui_checked_state_changed}
 */
type OnGuiCheckedStateChangedPayload /** @noSelf **/ = {
  element: LuaGuiElement;
  player_index: number;
};

/**
 *  Called when <a href="LuaGuiElement.html">LuaGuiElement</a> is clicked.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_gui_click on_gui_click}
 */
type OnGuiClickPayload /** @noSelf **/ = {
  element: LuaGuiElement;
  player_index: number;
  button: typeof defines.mouse_button_type;
  alt: boolean;
  control: boolean;
  shift: boolean;
};

/**
 *  Called when the player closes the GUI they have open.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_gui_closed on_gui_closed}
 */
type OnGuiClosedPayload /** @noSelf **/ = {
  player_index: number;
  gui_type: typeof defines.gui_type;
  entity: null | LuaEntity;
  item: null | LuaItemStack;
  equipment: null | LuaEquipment;
  other_player: null | LuaPlayer;
  element: null | LuaGuiElement;
  technology: null | LuaTechnology;
  tile_position: null | TilePosition;
};

/**
 *  Called when a <a href="LuaGuiElement.html">LuaGuiElement</a> is confirmed, for example by pressing Enter in a textfield.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_gui_confirmed on_gui_confirmed}
 */
type OnGuiConfirmedPayload /** @noSelf **/ = {
  element: LuaGuiElement;
  player_index: number;
  alt: boolean;
  control: boolean;
  shift: boolean;
};

/**
 *  Called when <a href="LuaGuiElement.html">LuaGuiElement</a> element value is changed (related to choose element buttons).
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_gui_elem_changed on_gui_elem_changed}
 */
type OnGuiElemChangedPayload /** @noSelf **/ = {
  element: LuaGuiElement;
  player_index: number;
};

/**
 *  Called when <a href="LuaGuiElement.html">LuaGuiElement</a> element location is changed (related to frames in <code>player.gui.screen</code>).
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_gui_location_changed on_gui_location_changed}
 */
type OnGuiLocationChangedPayload /** @noSelf **/ = {
  element: LuaGuiElement;
  player_index: number;
};

/**
 *  Called when the player opens a GUI.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_gui_opened on_gui_opened}
 */
type OnGuiOpenedPayload /** @noSelf **/ = {
  player_index: number;
  gui_type: typeof defines.gui_type;
  entity: null | LuaEntity;
  item: null | LuaItemStack;
  equipment: null | LuaEquipment;
  other_player: null | LuaPlayer;
  element: null | LuaGuiElement;
};

/**
 *  Called when <a href="LuaGuiElement.html">LuaGuiElement</a> selected tab is changed (related to tabbed-panes).
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_gui_selected_tab_changed on_gui_selected_tab_changed}
 */
type OnGuiSelectedTabChangedPayload /** @noSelf **/ = {
  element: LuaGuiElement;
  player_index: number;
};

/**
 *  Called when <a href="LuaGuiElement.html">LuaGuiElement</a> selection state is changed (related to drop-downs and listboxes).
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_gui_selection_state_changed on_gui_selection_state_changed}
 */
type OnGuiSelectionStateChangedPayload /** @noSelf **/ = {
  element: LuaGuiElement;
  player_index: number;
};

/**
 *  Called when <a href="LuaGuiElement.html">LuaGuiElement</a> switch state is changed (related to switches).
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_gui_switch_state_changed on_gui_switch_state_changed}
 */
type OnGuiSwitchStateChangedPayload /** @noSelf **/ = {
  element: LuaGuiElement;
  player_index: number;
};

/**
 *  Called when <a href="LuaGuiElement.html">LuaGuiElement</a> text is changed by the player.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_gui_text_changed on_gui_text_changed}
 */
type OnGuiTextChangedPayload /** @noSelf **/ = {
  element: LuaGuiElement;
  player_index: number;
  text: string;
};

/**
 *  Called when <a href="LuaGuiElement.html">LuaGuiElement</a> slider value is changed (related to the slider element).
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_gui_value_changed on_gui_value_changed}
 */
type OnGuiValueChangedPayload /** @noSelf **/ = {
  element: LuaGuiElement;
  player_index: number;
};

/**
 *  Called when a land mine is armed.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_land_mine_armed on_land_mine_armed}
 */
type OnLandMineArmedPayload /** @noSelf **/ = { mine: LuaEntity };

/**
 *  Called when a custom Lua shortcut is pressed.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_lua_shortcut on_lua_shortcut}
 */
type OnLuaShortcutPayload /** @noSelf **/ = {
  player_index: number;
  prototype_name: string;
};

/**
 *  Called when an entity is marked for deconstruction with the Deconstruction planner or via script.
 Can be filtered using <a href="Event-Filters.html#LuaEntityMarkedForDeconstructionEventFilters">LuaEntityMarkedForDeconstructionEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_marked_for_deconstruction on_marked_for_deconstruction}
 */
type OnMarkedForDeconstructionPayload /** @noSelf **/ = {
  entity: LuaEntity;
  player_index: null | number;
};

/**
 *  Called when an entity is marked for upgrade with the Upgrade planner or via script.
 Can be filtered using <a href="Event-Filters.html#LuaEntityMarkedForUpgradeEventFilters">LuaEntityMarkedForUpgradeEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_marked_for_upgrade on_marked_for_upgrade}
 */
type OnMarkedForUpgradePayload /** @noSelf **/ = {
  entity: LuaEntity;
  target: LuaEntityPrototype;
  player_index: null | number;
  direction: null | typeof defines.direction;
};

/**
 *  Called after a player purchases some offer from a Market entity.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_market_item_purchased on_market_item_purchased}
 */
type OnMarketItemPurchasedPayload /** @noSelf **/ = {
  player_index: number;
  market: LuaEntity;
  offer_index: number;
  count: number;
};

/**
 *  Called when the player uses the &#x27;Open item GUI&#x27; control on an item defined with the &#x27;mod-openable&#x27; flag
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_mod_item_opened on_mod_item_opened}
 */
type OnModItemOpenedPayload /** @noSelf **/ = {
  player_index: number;
  item: LuaItemPrototype;
};

/**
 *  Called directly after a permission group is added.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_permission_group_added on_permission_group_added}
 */
type OnPermissionGroupAddedPayload /** @noSelf **/ = {
  player_index: number;
  group: LuaPermissionGroup;
};

/**
 *  Called directly after a permission group is deleted.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_permission_group_deleted on_permission_group_deleted}
 */
type OnPermissionGroupDeletedPayload /** @noSelf **/ = {
  player_index: number;
  group_name: string;
  id: number;
};

/**
 *  Called directly after a permission group is edited in some way.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_permission_group_edited on_permission_group_edited}
 */
type OnPermissionGroupEditedPayload /** @noSelf **/ = {
  player_index: number;
  group: LuaPermissionGroup;
  type: string;
  arg_3: any;
  other_player_index: number;
  old_name: string;
  new_name: string;
};

/**
 *  Called directly after a permission string is imported.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_permission_string_imported on_permission_string_imported}
 */
type OnPermissionStringImportedPayload /** @noSelf **/ = {
  player_index: number;
};

/**
 *  Called when a player picks up an item.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_picked_up_item on_picked_up_item}
 */
type OnPickedUpItemPayload /** @noSelf **/ = {
  item_stack: SimpleItemStack;
  player_index: number;
};

/**
 *  Called after a player alt-selects an area with a selection-tool item.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_alt_selected_area on_player_alt_selected_area}
 */
type OnPlayerAltSelectedAreaPayload /** @noSelf **/ = {
  player_index: number;
  surface: LuaSurface;
  area: BoundingBox;
  item: string;
  entities: LuaEntity[];
  tiles: LuaTile[];
};

/**
 *  Called after a players ammo inventory changed in some way.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_ammo_inventory_changed on_player_ammo_inventory_changed}
 */
type OnPlayerAmmoInventoryChangedPayload /** @noSelf **/ = {
  player_index: number;
};

/**
 *  Called after a players armor inventory changed in some way.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_armor_inventory_changed on_player_armor_inventory_changed}
 */
type OnPlayerArmorInventoryChangedPayload /** @noSelf **/ = {
  player_index: number;
};

/**
 *  Called when a player is banned.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_banned on_player_banned}
 */
type OnPlayerBannedPayload /** @noSelf **/ = {
  player_index: null | number;
  player_name: string;
  by_player: null | number;
  reason: null | string;
};

/**
 *  Called after a player builds tiles.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_built_tile on_player_built_tile}
 */
type OnPlayerBuiltTilePayload /** @noSelf **/ = {
  player_index: number;
  surface_index: number;
  tiles: OldTileAndPosition[];
  tile: LuaTilePrototype;
  item: null | LuaItemPrototype;
  stack: null | LuaItemStack;
};

/**
 *  Called when a player cancels crafting.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_cancelled_crafting on_player_cancelled_crafting}
 */
type OnPlayerCancelledCraftingPayload /** @noSelf **/ = {
  player_index: number;
  items: LuaInventory;
  recipe: LuaRecipe;
  cancel_count: number;
};

/**
 *  Called after a player changes forces.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_changed_force on_player_changed_force}
 */
type OnPlayerChangedForcePayload /** @noSelf **/ = {
  player_index: number;
  force: LuaForce;
};

/**
 *  Called when the tile position a player is located at changes.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_changed_position on_player_changed_position}
 */
type OnPlayerChangedPositionPayload /** @noSelf **/ = { player_index: number };

/**
 *  Called after a player changes surfaces.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_changed_surface on_player_changed_surface}
 */
type OnPlayerChangedSurfacePayload /** @noSelf **/ = {
  player_index: number;
  surface_index: number;
};

/**
 *  Called when cheat mode is disabled on a player.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_cheat_mode_disabled on_player_cheat_mode_disabled}
 */
type OnPlayerCheatModeDisabledPayload /** @noSelf **/ = {
  player_index: number;
};

/**
 *  Called when cheat mode is enabled on a player.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_cheat_mode_enabled on_player_cheat_mode_enabled}
 */
type OnPlayerCheatModeEnabledPayload /** @noSelf **/ = { player_index: number };

/**
 *  Called when a player clicks a gps tag
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_clicked_gps_tag on_player_clicked_gps_tag}
 */
type OnPlayerClickedGpsTagPayload /** @noSelf **/ = {
  player_index: number;
  position: Position;
  surface: string;
};

/**
 *  Called when a player clicks the &quot;confirm&quot; button in the configure Blueprint GUI.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_configured_blueprint on_player_configured_blueprint}
 */
type OnPlayerConfiguredBlueprintPayload /** @noSelf **/ = {
  player_index: number;
};

/**
 *  Called when a player configures spidertron remote to be connected with a given spidertron
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_configured_spider_remote on_player_configured_spider_remote}
 */
type OnPlayerConfiguredSpiderRemotePayload /** @noSelf **/ = {
  player_index: number;
  vehicle: LuaEntity;
};

/**
 *  Called when the player crafts an item (just before inserting into player&#x27;s inventory, not clicking
 the button to craft). It is called for each item crafted as well as what was clicked.
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_crafted_item on_player_crafted_item}
 */
type OnPlayerCraftedItemPayload /** @noSelf **/ = {
  item_stack: LuaItemStack;
  player_index: number;
  recipe: LuaRecipe;
};

/**
 *  Called after the player was created.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_created on_player_created}
 */
type OnPlayerCreatedPayload /** @noSelf **/ = { player_index: number };

/**
 *  Called after a players cursorstack changed in some way.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_cursor_stack_changed on_player_cursor_stack_changed}
 */
type OnPlayerCursorStackChangedPayload /** @noSelf **/ = {
  player_index: number;
};

/**
 *  Called when a player selects an area with a deconstruction planner.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_deconstructed_area on_player_deconstructed_area}
 */
type OnPlayerDeconstructedAreaPayload /** @noSelf **/ = {
  player_index: number;
  surface: LuaSurface;
  area: BoundingBox;
  item: string;
  alt: boolean;
};

/**
 *  Called when a player is demoted.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_demoted on_player_demoted}
 */
type OnPlayerDemotedPayload /** @noSelf **/ = { player_index: number };

/**
 *  Called after a player dies.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_died on_player_died}
 */
type OnPlayerDiedPayload /** @noSelf **/ = {
  player_index: number;
  cause: null | LuaEntity;
};

/**
 *  Called when the display resolution changes for a given player.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_display_resolution_changed on_player_display_resolution_changed}
 */
type OnPlayerDisplayResolutionChangedPayload /** @noSelf **/ = {
  player_index: number;
  old_resolution: DisplayResolution;
};

/**
 *  Called when the display scale changes for a given player.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_display_scale_changed on_player_display_scale_changed}
 */
type OnPlayerDisplayScaleChangedPayload /** @noSelf **/ = {
  player_index: number;
  old_scale: number;
};

/**
 *  Called when the player&#x27;s driving state has changed, this means a player has either
 entered or left a vehicle.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_driving_changed_state on_player_driving_changed_state}
 */
type OnPlayerDrivingChangedStatePayload /** @noSelf **/ = {
  player_index: number;
  entity: null | LuaEntity;
};

/**
 *  Called when a player drops an item on the ground.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_dropped_item on_player_dropped_item}
 */
type OnPlayerDroppedItemPayload /** @noSelf **/ = {
  player_index: number;
  entity: LuaEntity;
};

/**
 *  Called when a player fast-transfers something to or from an entity.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_fast_transferred on_player_fast_transferred}
 */
type OnPlayerFastTransferredPayload /** @noSelf **/ = {
  player_index: number;
  entity: LuaEntity;
  from_player: boolean;
};

/**
 *  Called after player flushed fluid
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_flushed_fluid on_player_flushed_fluid}
 */
type OnPlayerFlushedFluidPayload /** @noSelf **/ = {
  player_index: number;
  fluid: string;
  amount: number;
  entity: LuaEntity;
  only_this_entity: boolean;
};

/**
 *  Called after a players gun inventory changed in some way.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_gun_inventory_changed on_player_gun_inventory_changed}
 */
type OnPlayerGunInventoryChangedPayload /** @noSelf **/ = {
  player_index: number;
};

/**
 *  Called after a player joins the game.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_joined_game on_player_joined_game}
 */
type OnPlayerJoinedGamePayload /** @noSelf **/ = { player_index: number };

/**
 *  Called when a player is kicked.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_kicked on_player_kicked}
 */
type OnPlayerKickedPayload /** @noSelf **/ = {
  player_index: number;
  by_player: null | number;
  reason: null | string;
};

/**
 *  Called after a player leaves the game.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_left_game on_player_left_game}
 */
type OnPlayerLeftGamePayload /** @noSelf **/ = {
  player_index: number;
  reason: typeof defines.disconnect_reason;
};

/**
 *  Called after a players main inventory changed in some way.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_main_inventory_changed on_player_main_inventory_changed}
 */
type OnPlayerMainInventoryChangedPayload /** @noSelf **/ = {
  player_index: number;
};

/**
 *  Called after the results of an entity being mined are collected just before the entity is destroyed.
 After this event any items in the buffer will be transferred into the player as if they came from mining the entity.
 Can be filtered using <a href="Event-Filters.html#LuaPlayerMinedEntityEventFilters">LuaPlayerMinedEntityEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_mined_entity on_player_mined_entity}
 */
type OnPlayerMinedEntityPayload /** @noSelf **/ = {
  player_index: number;
  entity: LuaEntity;
  buffer: LuaInventory;
};

/**
 *  Called when the player mines something.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_mined_item on_player_mined_item}
 */
type OnPlayerMinedItemPayload /** @noSelf **/ = {
  item_stack: SimpleItemStack;
  player_index: number;
};

/**
 *  Called after a player mines tiles.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_mined_tile on_player_mined_tile}
 */
type OnPlayerMinedTilePayload /** @noSelf **/ = {
  player_index: number;
  surface_index: number;
  tiles: OldTileAndPosition[];
};

/**
 *  Called when a player is muted.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_muted on_player_muted}
 */
type OnPlayerMutedPayload /** @noSelf **/ = { player_index: number };

/**
 *  Called when a player invokes the &quot;smart pipette&quot; over an entity.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_pipette on_player_pipette}
 */
type OnPlayerPipettePayload /** @noSelf **/ = {
  player_index: number;
  item: LuaItemPrototype;
  used_cheat_mode: boolean;
};

/**
 *  Called after the player puts equipment in an equipment grid
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_placed_equipment on_player_placed_equipment}
 */
type OnPlayerPlacedEquipmentPayload /** @noSelf **/ = {
  player_index: number;
  equipment: LuaEquipment;
  grid: LuaEquipmentGrid;
};

/**
 *  Called when a player is promoted.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_promoted on_player_promoted}
 */
type OnPlayerPromotedPayload /** @noSelf **/ = { player_index: number };

/**
 *  Called when a player is removed (deleted) from the game.
 Not to be confused with the player logging of this is different in that the player is deleted as if he never existed in the save file.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_removed on_player_removed}
 */
type OnPlayerRemovedPayload /** @noSelf **/ = { player_index: number };

/**
 *  Called after the player removes equipment from an equipment grid
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_removed_equipment on_player_removed_equipment}
 */
type OnPlayerRemovedEquipmentPayload /** @noSelf **/ = {
  player_index: number;
  grid: LuaEquipmentGrid;
  equipment: string;
  count: number;
};

/**
 *  Called when a player repairs an entity.
 Can be filtered using <a href="Event-Filters.html#LuaPlayerRepairedEntityEventFilters">LuaPlayerRepairedEntityEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_repaired_entity on_player_repaired_entity}
 */
type OnPlayerRepairedEntityPayload /** @noSelf **/ = {
  player_index: number;
  entity: LuaEntity;
};

/**
 *  Called after a player respawns.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_respawned on_player_respawned}
 */
type OnPlayerRespawnedPayload /** @noSelf **/ = {
  player_index: number;
  player_port: null | LuaEntity;
};

/**
 *  Called when the player rotates an entity. This event is only fired when the entity actually changes its
 orientation -- pressing the rotate key on an entity that can&#x27;t be rotated won&#x27;t fire this event.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_rotated_entity on_player_rotated_entity}
 */
type OnPlayerRotatedEntityPayload /** @noSelf **/ = {
  entity: LuaEntity;
  previous_direction: typeof defines.direction;
  player_index: number;
};

/**
 *  Called after a player selects an area with a selection-tool item.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_selected_area on_player_selected_area}
 */
type OnPlayerSelectedAreaPayload /** @noSelf **/ = {
  player_index: number;
  surface: LuaSurface;
  area: BoundingBox;
  item: string;
  entities: LuaEntity[];
  tiles: LuaTile[];
};

/**
 *  Called when a player sets a quickbar slot to anything (new value, or set to empty).
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_set_quick_bar_slot on_player_set_quick_bar_slot}
 */
type OnPlayerSetQuickBarSlotPayload /** @noSelf **/ = { player_index: number };

/**
 *  Called when a player selects an area with a blueprint.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_setup_blueprint on_player_setup_blueprint}
 */
type OnPlayerSetupBlueprintPayload /** @noSelf **/ = {
  player_index: number;
  surface: LuaSurface;
  area: BoundingBox;
  item: string;
  alt: boolean;
  mapping: LazyLoadedValue<Map<number, LuaEntity>>;
};

/**
 *  Called when a player toggles alt mode, also known as &quot;show entity info&quot;.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_toggled_alt_mode on_player_toggled_alt_mode}
 */
type OnPlayerToggledAltModePayload /** @noSelf **/ = {
  player_index: number;
  alt_mode: boolean;
};

/**
 *  Called when a player toggles the map editor on or off.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_toggled_map_editor on_player_toggled_map_editor}
 */
type OnPlayerToggledMapEditorPayload /** @noSelf **/ = { player_index: number };

/**
 *  Called after a players trash inventory changed in some way.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_trash_inventory_changed on_player_trash_inventory_changed}
 */
type OnPlayerTrashInventoryChangedPayload /** @noSelf **/ = {
  player_index: number;
};

/**
 *  Called when a player is un-banned.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_unbanned on_player_unbanned}
 */
type OnPlayerUnbannedPayload /** @noSelf **/ = {
  player_index: null | number;
  player_name: string;
  by_player: null | number;
  reason: null | string;
};

/**
 *  Called when a player is unmuted.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_unmuted on_player_unmuted}
 */
type OnPlayerUnmutedPayload /** @noSelf **/ = { player_index: number };

/**
 *  Called when a player uses a capsule that results in some game action.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_used_capsule on_player_used_capsule}
 */
type OnPlayerUsedCapsulePayload /** @noSelf **/ = {
  player_index: number;
  item: LuaItemPrototype;
  position: Position;
};

/**
 *  Called when a player uses spidertron remote to send a spidertron to a given position
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_player_used_spider_remote on_player_used_spider_remote}
 */
type OnPlayerUsedSpiderRemotePayload /** @noSelf **/ = {
  player_index: number;
  vehicle: LuaEntity;
  position: Position;
  success: boolean;
};

/**
 *  Called after an entity dies.
 Can be filtered using <a href="Event-Filters.html#LuaPostEntityDiedEventFilters">LuaPostEntityDiedEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_post_entity_died on_post_entity_died}
 */
type OnPostEntityDiedPayload /** @noSelf **/ = {
  ghost: null | LuaEntity;
  force: null | LuaForce;
  position: Position;
  prototype: LuaEntityPrototype;
  damage_type: null | LuaDamagePrototype;
  corpses: LuaEntity[];
  surface_index: number;
  unit_number: null | number;
};

/**
 *  Called when players uses an item to build something. Called before <a href="events.html#on_built_entity">on_built_entity</a>.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_build on_pre_build}
 */
type OnPreBuildPayload /** @noSelf **/ = {
  player_index: number;
  position: Position;
  shift_build: boolean;
  direction: typeof defines.direction;
  flip_horizontal: boolean;
  flip_vertical: boolean;
  created_by_moving: boolean;
};

/**
 *  Called before one or more chunks are deleted using <a href="LuaSurface.html#LuaSurface.delete_chunk">LuaSurface::delete_chunk</a>.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_chunk_deleted on_pre_chunk_deleted}
 */
type OnPreChunkDeletedPayload /** @noSelf **/ = {
  surface_index: number;
  positions: ChunkPosition[];
};

/**
 *  Called before entity copy-paste is done.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_entity_settings_pasted on_pre_entity_settings_pasted}
 */
type OnPreEntitySettingsPastedPayload /** @noSelf **/ = {
  player_index: number;
  source: LuaEntity;
  destination: LuaEntity;
};

/**
 *  Called before a ghost entity is destroyed as a result of being marked for deconstruction.
 Can be filtered using <a href="Event-Filters.html#LuaPreGhostDeconstructedEventFilters">LuaPreGhostDeconstructedEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_ghost_deconstructed on_pre_ghost_deconstructed}
 */
type OnPreGhostDeconstructedPayload /** @noSelf **/ = {
  player_index: null | number;
  ghost: LuaEntity;
};

/**
 *  Called directly before a permission group is deleted.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_permission_group_deleted on_pre_permission_group_deleted}
 */
type OnPrePermissionGroupDeletedPayload /** @noSelf **/ = {
  player_index: number;
  group: LuaPermissionGroup;
};

/**
 *  Called directly before a permission string is imported.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_permission_string_imported on_pre_permission_string_imported}
 */
type OnPrePermissionStringImportedPayload /** @noSelf **/ = {
  player_index: number;
};

/**
 *  Called when a player queues something to be crafted.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_player_crafted_item on_pre_player_crafted_item}
 */
type OnPrePlayerCraftedItemPayload /** @noSelf **/ = {
  player_index: number;
  recipe: LuaRecipe;
  items: LuaInventory;
  queued_count: number;
};

/**
 *  Called before a players dies.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_player_died on_pre_player_died}
 */
type OnPrePlayerDiedPayload /** @noSelf **/ = {
  player_index: number;
  cause: null | LuaEntity;
};

/**
 *  Called before a player leaves the game.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_player_left_game on_pre_player_left_game}
 */
type OnPrePlayerLeftGamePayload /** @noSelf **/ = {
  player_index: number;
  reason: typeof defines.disconnect_reason;
};

/**
 *  Called when the player finishes mining an entity, before the entity is removed from map.
 Can be filtered using <a href="Event-Filters.html#LuaPrePlayerMinedEntityEventFilters">LuaPrePlayerMinedEntityEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_player_mined_item on_pre_player_mined_item}
 */
type OnPrePlayerMinedItemPayload /** @noSelf **/ = {
  entity: LuaEntity;
  player_index: number;
};

/**
 *  Called before a player is removed (deleted) from the game.
 Not to be confused with the player logging of this is different in that the player is deleted as if he never existed in the save file.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_player_removed on_pre_player_removed}
 */
type OnPrePlayerRemovedPayload /** @noSelf **/ = { player_index: number };

/**
 *  Called before a player toggles the map editor on or off.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_player_toggled_map_editor on_pre_player_toggled_map_editor}
 */
type OnPrePlayerToggledMapEditorPayload /** @noSelf **/ = {
  player_index: number;
};

/**
 *  Called directly before a robot explodes cliffs.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_robot_exploded_cliff on_pre_robot_exploded_cliff}
 */
type OnPreRobotExplodedCliffPayload /** @noSelf **/ = {
  robot: LuaEntity;
  cliff: LuaEntity;
  item: LuaItemPrototype;
};

/**
 *  Called just before a script inventory is resized.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_script_inventory_resized on_pre_script_inventory_resized}
 */
type OnPreScriptInventoryResizedPayload /** @noSelf **/ = {
  player_index: null | number;
  mod: string;
  inventory: LuaInventory;
  old_size: number;
  new_size: number;
};

/**
 *  Called just before a surface is cleared (all entities removed and all chunks deleted).
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_surface_cleared on_pre_surface_cleared}
 */
type OnPreSurfaceClearedPayload /** @noSelf **/ = { surface_index: number };

/**
 *  Called just before a surface is deleted.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_pre_surface_deleted on_pre_surface_deleted}
 */
type OnPreSurfaceDeletedPayload /** @noSelf **/ = { surface_index: number };

/**
 *  Called when a research finishes.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_research_finished on_research_finished}
 */
type OnResearchFinishedPayload /** @noSelf **/ = {
  research: LuaTechnology;
  by_script: boolean;
};

/**
 *  Called when a technology research starts.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_research_started on_research_started}
 */
type OnResearchStartedPayload /** @noSelf **/ = {
  research: LuaTechnology;
  last_research: null | LuaTechnology;
};

/**
 *  Called when a resource entity reaches 0 or its minimum yield for infinite resources.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_resource_depleted on_resource_depleted}
 */
type OnResourceDepletedPayload /** @noSelf **/ = { entity: LuaEntity };

/**
 *  Called when a construction robot builds an entity.
 Can be filtered using <a href="Event-Filters.html#LuaRobotBuiltEntityEventFilters">LuaRobotBuiltEntityEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_robot_built_entity on_robot_built_entity}
 */
type OnRobotBuiltEntityPayload /** @noSelf **/ = {
  robot: LuaEntity;
  created_entity: LuaEntity;
  stack: LuaItemStack;
  tags: null | Tags;
};

/**
 *  Called after a robot builds tiles.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_robot_built_tile on_robot_built_tile}
 */
type OnRobotBuiltTilePayload /** @noSelf **/ = {
  robot: LuaEntity;
  tiles: OldTileAndPosition[];
  tile: LuaTilePrototype;
  item: LuaItemPrototype;
  stack: LuaItemStack;
  surface_index: number;
};

/**
 *  Called directly after a robot explodes cliffs.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_robot_exploded_cliff on_robot_exploded_cliff}
 */
type OnRobotExplodedCliffPayload /** @noSelf **/ = {
  robot: LuaEntity;
  item: LuaItemPrototype;
};

/**
 *  Called when a robot mines an entity.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_robot_mined on_robot_mined}
 */
type OnRobotMinedPayload /** @noSelf **/ = {
  robot: LuaEntity;
  item_stack: SimpleItemStack;
};

/**
 *  Called after the results of an entity being mined are collected just before the entity is destroyed.
 After this event any items in the buffer will be transferred into the robot as if they came from mining the entity.
 Can be filtered using <a href="Event-Filters.html#LuaRobotMinedEntityEventFilters">LuaRobotMinedEntityEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_robot_mined_entity on_robot_mined_entity}
 */
type OnRobotMinedEntityPayload /** @noSelf **/ = {
  robot: LuaEntity;
  entity: LuaEntity;
  buffer: LuaInventory;
};

/**
 *  Called after a robot mines tiles.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_robot_mined_tile on_robot_mined_tile}
 */
type OnRobotMinedTilePayload /** @noSelf **/ = {
  robot: LuaEntity;
  tiles: OldTileAndPosition[];
  surface_index: number;
};

/**
 *  Called before a robot mines an entity.
 Can be filtered using <a href="Event-Filters.html#LuaPreRobotMinedEntityEventFilters">LuaPreRobotMinedEntityEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_robot_pre_mined on_robot_pre_mined}
 */
type OnRobotPreMinedPayload /** @noSelf **/ = {
  robot: LuaEntity;
  entity: LuaEntity;
};

/**
 *  Called when a rocket silo is ordered to be launched.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_rocket_launch_ordered on_rocket_launch_ordered}
 */
type OnRocketLaunchOrderedPayload /** @noSelf **/ = {
  rocket: LuaEntity;
  rocket_silo: LuaEntity;
  player_index: null | number;
};

/**
 *  Called when the rocket is launched.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_rocket_launched on_rocket_launched}
 */
type OnRocketLaunchedPayload /** @noSelf **/ = {
  rocket: LuaEntity;
  rocket_silo: null | LuaEntity;
  player_index: null | number;
};

/**
 *  Called when a runtime mod setting is changed by a player.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_runtime_mod_setting_changed on_runtime_mod_setting_changed}
 */
type OnRuntimeModSettingChangedPayload /** @noSelf **/ = {
  player_index: null | number;
  setting: string;
  setting_type: string;
};

/**
 *  Called just after a script inventory is resized.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_script_inventory_resized on_script_inventory_resized}
 */
type OnScriptInventoryResizedPayload /** @noSelf **/ = {
  player_index: null | number;
  mod: string;
  inventory: LuaInventory;
  old_size: number;
  new_size: number;
  overflow_inventory: LuaInventory;
};

/**
 *  Called when a script path request completes. <a href="LuaSurface.html#LuaSurface.request_path">LuaSurface::request_path</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_script_path_request_finished on_script_path_request_finished}
 */
type OnScriptPathRequestFinishedPayload /** @noSelf **/ = {
  path: null | Waypoint[];
  id: number;
  try_again_later: boolean;
};

/**
 *  Called when a script trigger effect is triggered.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_script_trigger_effect on_script_trigger_effect}
 */
type OnScriptTriggerEffectPayload /** @noSelf **/ = {
  effect_id: string;
  surface_index: number;
  source_position: null | Position;
  source_entity: null | LuaEntity;
  target_position: null | Position;
  target_entity: null | LuaEntity;
};

/**
 *  Called when the radar finishes scanning a sector.
 Can be filtered for the radar using <a href="Event-Filters.html#LuaSectorScannedEventFilters">LuaSectorScannedEventFilters</a>
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_sector_scanned on_sector_scanned}
 */
type OnSectorScannedPayload /** @noSelf **/ = {
  radar: LuaEntity;
  chunk_position: ChunkPosition;
  area: BoundingBox;
};

/**
 *  Called after the selected entity changes for a given player.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_selected_entity_changed on_selected_entity_changed}
 */
type OnSelectedEntityChangedPayload /** @noSelf **/ = {
  player_index: number;
  last_entity: null | LuaEntity;
};

/**
 *  Called when a spider finishes moving to its autopilot position.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_spider_command_completed on_spider_command_completed}
 */
type OnSpiderCommandCompletedPayload /** @noSelf **/ = { vehicle: LuaEntity };

/**
 *  Called when a translation request generated through <a href="LuaPlayer.html#LuaPlayer.request_translation">LuaPlayer::request_translation</a> is translated.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_string_translated on_string_translated}
 */
type OnStringTranslatedPayload /** @noSelf **/ = {
  player_index: number;
  localised_string: LocalisedString;
  result: string;
  translated: boolean;
};

/**
 *  Called just after a surface is cleared (all entities removed and all chunks deleted).
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_surface_cleared on_surface_cleared}
 */
type OnSurfaceClearedPayload /** @noSelf **/ = { surface_index: number };

/**
 *  Called when a surface is created.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_surface_created on_surface_created}
 */
type OnSurfaceCreatedPayload /** @noSelf **/ = { surface_index: number };

/**
 *  Called after a surface is deleted.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_surface_deleted on_surface_deleted}
 */
type OnSurfaceDeletedPayload /** @noSelf **/ = { surface_index: number };

/**
 *  Called after a surface is imported.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_surface_imported on_surface_imported}
 */
type OnSurfaceImportedPayload /** @noSelf **/ = {
  surface_index: number;
  original_name: string;
};

/**
 *  Called when a surface is renamed.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_surface_renamed on_surface_renamed}
 */
type OnSurfaceRenamedPayload /** @noSelf **/ = {
  surface_index: number;
  old_name: string;
  new_name: string;
};

/**
 *  Called when <a href="LuaForce.html#LuaForce.reset_technology_effects">LuaForce::reset_technology_effects</a> is finished.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_technology_effects_reset on_technology_effects_reset}
 */
type OnTechnologyEffectsResetPayload /** @noSelf **/ = { force: LuaForce };

/**
 *  Called when a train changes state (started to stopped and vice versa)
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_train_changed_state on_train_changed_state}
 */
type OnTrainChangedStatePayload /** @noSelf **/ = {
  train: LuaTrain;
  old_state: typeof defines.train_state;
};

/**
 *  Called when a new train is created either through disconnecting/connecting an existing one or building a new one.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_train_created on_train_created}
 */
type OnTrainCreatedPayload /** @noSelf **/ = {
  train: LuaTrain;
  old_train_id_1: null | number;
  old_train_id_2: null | number;
};

/**
 *  Called when a trains schedule is changed either by the player or through script.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_train_schedule_changed on_train_schedule_changed}
 */
type OnTrainScheduleChangedPayload /** @noSelf **/ = {
  train: LuaTrain;
  player_index: null | number;
};

/**
 *  Called when an entity with a trigger prototype (such as capsules) create an entity AND that
 trigger prototype defined <code>trigger_created_entity="true"</code>.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_trigger_created_entity on_trigger_created_entity}
 */
type OnTriggerCreatedEntityPayload /** @noSelf **/ = {
  entity: LuaEntity;
  source: null | LuaEntity;
};

/**
 *  Called when an entity with a trigger prototype (such as capsules) fire an artillery projectile AND that
 trigger prototype defined <code>trigger_fired_artillery="true"</code>.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_trigger_fired_artillery on_trigger_fired_artillery}
 */
type OnTriggerFiredArtilleryPayload /** @noSelf **/ = {
  entity: LuaEntity;
  source: null | LuaEntity;
};

/**
 *  Called when a unit is added to a unit group.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_unit_added_to_group on_unit_added_to_group}
 */
type OnUnitAddedToGroupPayload /** @noSelf **/ = {
  unit: LuaEntity;
  group: LuaUnitGroup;
};

/**
 *  Called when a new unit group is created, before any members are added to it.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_unit_group_created on_unit_group_created}
 */
type OnUnitGroupCreatedPayload /** @noSelf **/ = { group: LuaUnitGroup };

/**
 *  Called when a unit group finishes gathering and starts executing its command.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_unit_group_finished_gathering on_unit_group_finished_gathering}
 */
type OnUnitGroupFinishedGatheringPayload /** @noSelf **/ = {
  group: LuaUnitGroup;
};

/**
 *  Called when a unit is removed from a unit group.
 
 * {@link https://lua-api.factorio.com/latest/events.html#on_unit_removed_from_group on_unit_removed_from_group}
 */
type OnUnitRemovedFromGroupPayload /** @noSelf **/ = {
  unit: LuaEntity;
  group: LuaUnitGroup;
};
/** globals */
/** This is the main object, through which most of the API is accessed. It is, however, not available inside handlers registered with LuaBootstrap::on_load. */
declare const game: LuaGameScript;
/** Provides an interface for registering event handlers. */
declare const script: LuaBootstrap;
/** Allows inter-mod communication by way of providing a repository of interfaces that is shared by all mods. */
declare const remote: LuaRemote;
/** Allows registering custom commands for the in-game console accessible via the grave key. */
declare const commands: LuaCommandProcessor;
/** Allows reading the current mod settings. */
declare const settings: LuaSettings;
/** Allows printing messages to the calling RCON instance if any. */
declare const rcon: LuaRCON;
/** Allows rendering of geometric shapes, text and sprites in the game world. */
declare const rendering: LuaRendering;
/** libs */
/** noSelfInFile **/
type SerpentOptions = {
  /** indentation; triggers long multi-line output. */
  indent: string;
  /** provide stringified value in a comment (up to maxlevel of depth). */
  comment: boolean | number;
  /** sort keys. */
  sortkeys: boolean | ((...args: unknown[]) => any);
  /** force sparse encoding (no nil filling based on #t). */
  sparse: boolean;
  /** remove spaces. */
  compact: boolean;
  /** raise fatal error on non-serilizable values. */
  fatal: boolean;
  /** disable bytecode serialization for easy comparison. */
  nocode: boolean;
  /** disable checking numbers against undefined and huge values. */
  nohuge: boolean;
  /** specify max level up to which to expand nested tables. */
  maxlevel: number;
  /** specify max number of elements in a table. */
  maxnum: number;
  /** specify max length for all table elements. */
  maxlength: number;
  /** use __tostring metamethod when serializing tables (v0.29); set to false to disable and serialize the table as is, even when __tostring is present. */
  metatostring: boolean;
  /** specify format for numeric values as shortest possible round-trippable double (v0.30). Use "%.16g" for better readability and "%.17g" (the default value) to preserve floating point precision. */
  numformat: string;
  /** allows to specify a list of values to ignore (as keys). */
  valignore: string[];
  /** allows to specify the list of keys to be serialized. Any keys not in this list are not included in final output (as keys). */
  keyallow: string[];
  /** allows to specity the list of keys to ignore in serialization. */
  keyignore: string[];
  /** allows to specify a list of value types to ignore (as keys). */
  valtypeignore: string[];
  /** provide custom output for tables. */
  custom: (opts: {
    /**  the name of the current element with '=' or an empty string in case of array index, */
    tag: any;
    /**  an opening table bracket { and associated indentation and newline (if any), */
    head: any;
    /**  table elements concatenated into a string using commas and indentation/newlines (if any), */
    body: any;
    /**  a closing table bracket } and associated indentation and newline (if any), and */
    tail: any;
    /**  the current level. */
    level: any;
  }) => any;
  /** name; triggers full serialization with self-ref section. */
  name: string;
};
declare const serpent: Serpent;

/** @noSelf **/
interface Serpent {
  /** full serialization; sets name, compact and sparse options; */
  dump(tbl: any, options?: Partial<SerpentOptions>): string;
  /** single line pretty printing, no self-ref section; sets sortkeys and comment options; */
  line(tbl: any, options?: Partial<SerpentOptions>): string;
  /** multi-line indented pretty printing, no self-ref section; sets indent, sortkeys, and comment options. */
  block(tbl: any, options?: Partial<SerpentOptions>): string;
}

/** This function allows to log LocalisedStrings to the Factorio log file. This, in combination with serpent, makes debugging in the data stage easier, because it allows to simply inspect entire prototype tables. For example, this allows to see all properties of the sulfur item prototype: log(serpent.block(data.raw["item"]["sulfur"])) */
// @ts-ignore
declare const log: (ls: LocalisedString) => void;

// @ts-ignore
declare const print: (v: any) => void;

/** This function allows printing LocalisedStrings to stdout without polluting the logfile. This is primarily useful for communicating with external tools that launch Factorio as a child process. */
declare const localised_print: typeof log;

declare const table_size: <T extends {}>(v: T) => number;

declare const pairs: <K, V, M extends Map<K, V>>(v: M) => [K, V][];

// https://lua-api.factorio.com/latest/LuaLazyLoadedValue.html
type LuaLazyLoadedValue<T> = {
  /** Is this object valid? */
  readonly valid: boolean;
  /** The class name of this object. */
  readonly object_name: string;
  /** Gets the value of this lazy loaded value. */
  get: () => T;
  /** All methods, and properties that this object supports. */
  help: () => string;
};

/**
 * Some factorio typedefs ref LLV w/out Lua prefix :|
 */
type LazyLoadedValue<T> = LuaLazyLoadedValue<T>;

/**
 * Waypoint defined ad-hoc, inline here: https://lua-api.factorio.com/latest/events.html#on_script_path_request_finished
 * Should probably be moved to a Concept on the concept page
 */
type Waypoint = {
  position: Position;
  /** if the path from the previous Waypoint to this one goes through an entity that must be destroyed. */
  needs_destroy_to_reach: boolean;
};

/** hacks */
/** unimplented!
 * @see {https://lua-api.factorio.com/latest/Event-Filters.html Filters} */
type Filters = unknown;
